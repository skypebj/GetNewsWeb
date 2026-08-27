#!/usr/bin/env python3
"""
单个网站抓取脚本 - 优化版，减少等待和资源消耗
"""
import asyncio
import os
import sys
from pathlib import Path
from datetime import datetime
from playwright.async_api import async_playwright
import aiohttp
import aiofiles
from urllib.parse import urlparse

# 添加项目根目录到路径
sys.path.insert(0, str(Path(__file__).parent.parent))
from scripts.config import SITES

# 缩短超时
PAGE_LOAD_TIMEOUT = 30000   # 30秒
RESOURCE_TIMEOUT = 15000    # 15秒

async def fetch_with_playwright(url: str, domain: str, output_dir: Path):
    """使用 Playwright 抓取完整页面，优化等待策略"""
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=[
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--disable-gpu',
                '--window-size=1920,1080',
                '--disable-blink-features=AutomationControlled',
                '--disable-features=IsolateOrigins,site-per-process',
            ]
        )
        
        context = await browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            java_script_enabled=True,
            bypass_csp=True,
            extra_http_headers={
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
            }
        )
        
        page = await context.new_page()
        
        # 拦截不必要的资源以加速加载（可选）
        await page.route("**/*", lambda route: route.continue_())
        # 可取消注释以下代码以拦截图片/字体（但会影响离线完整性）
        # await page.route("**/*.{png,jpg,jpeg,gif,webp,svg,ttf,woff,woff2}", lambda route: route.abort())
        
        # 自动关闭弹窗
        page.on('dialog', lambda dialog: asyncio.create_task(dialog.dismiss()))
        
        try:
            # 使用 'load' 而非 'networkidle'
            response = await page.goto(url, wait_until='load', timeout=PAGE_LOAD_TIMEOUT)
            
            if not response or response.status >= 400:
                return {'success': False, 'error': f'HTTP {response.status if response else "No response"}'}
            
            # 等待关键元素出现（可选），如 body 存在即认为成功
            await page.wait_for_selector('body', timeout=5000)
            
            # 获取完整 HTML
            html = await page.content()
            title = await page.title()
            
            # 保存 HTML
            html_path = output_dir / 'index.html'
            async with aiofiles.open(html_path, 'w', encoding='utf-8') as f:
                await f.write(html)
            
            # 简单下载少量资源（仅 CSS 和 JS），避免下载大量图片
            # 这里为了简化，只提取 link[rel="stylesheet"] 和 script[src]
            resources = await page.evaluate('''
                () => {
                    const resources = [];
                    document.querySelectorAll('link[rel="stylesheet"]').forEach(el => {
                        if (el.href) resources.push({type: 'css', url: el.href});
                    });
                    document.querySelectorAll('script[src]').forEach(el => {
                        if (el.src) resources.push({type: 'js', url: el.src});
                    });
                    return resources;
                }
            ''')
            
            # 下载资源（并发限制）
            await download_resources(resources, output_dir, domain)
            
            # 重写链接（简单替换）
            await rewrite_links(html_path, output_dir)
            
            return {'success': True, 'title': title, 'resource_count': len(resources)}
            
        except Exception as e:
            return {'success': False, 'error': str(e)}
        finally:
            await browser.close()

async def download_resources(resources: list, output_dir: Path, domain: str):
    """异步下载 CSS/JS 资源"""
    async with aiohttp.ClientSession() as session:
        semaphore = asyncio.Semaphore(10)  # 限制并发
        tasks = []
        for res in resources:
            url = res['url']
            if not url or url.startswith('data:'):
                continue
            tasks.append(download_single_resource(session, url, output_dir, domain, semaphore))
        await asyncio.gather(*tasks, return_exceptions=True)

async def download_single_resource(session, url: str, output_dir: Path, domain: str, semaphore):
    """下载单个资源"""
    async with semaphore:
        try:
            parsed = urlparse(url)
            path = parsed.path
            if not path or path.endswith('/'):
                path = path + 'index.html'
            # 去除查询参数
            clean_path = path.split('?')[0]
            if not clean_path:
                return
            local_path = output_dir / clean_path.lstrip('/')
            local_path.parent.mkdir(parents=True, exist_ok=True)
            
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': f'https://{domain}/'
            }
            async with session.get(url, headers=headers, timeout=RESOURCE_TIMEOUT) as response:
                if response.status == 200:
                    content = await response.read()
                    async with aiofiles.open(local_path, 'wb') as f:
                        await f.write(content)
        except:
            pass  # 忽略下载失败，不影响主流程

async def rewrite_links(html_path: Path, output_dir: Path):
    """重写资源链接为相对路径（简化版）"""
    async with aiofiles.open(html_path, 'r', encoding='utf-8') as f:
        html = await f.read()
    # 简单替换绝对 URL 为相对路径（仅处理常见情况）
    import re
    # 将 src="https://domain/..." 替换为 src="./..."
    def replacer(match):
        full_url = match.group(1)
        parsed = urlparse(full_url)
        path = parsed.path
        if not path or path.endswith('/'):
            path = path + 'index.html'
        clean = path.split('?')[0]
        if clean.startswith('/'):
            clean = clean[1:]
        return f'src="./{clean}"' if clean else match.group(0)
    
    html = re.sub(r'src=["\'](https?://[^"\']+)["\']', replacer, html)
    # 同样处理 href
    def replacer_href(match):
        full_url = match.group(1)
        parsed = urlparse(full_url)
        path = parsed.path
        if not path or path.endswith('/'):
            path = path + 'index.html'
        clean = path.split('?')[0]
        if clean.startswith('/'):
            clean = clean[1:]
        return f'href="./{clean}"' if clean else match.group(0)
    html = re.sub(r'href=["\'](https?://[^"\']+)["\'](?=[^>]*rel=["\']stylesheet["\'])', replacer_href, html)
    # 对 script src 也做类似处理（简化）
    html = re.sub(r'src=["\'](https?://[^"\']+)["\'](?=[^>]*type=["\']text/javascript["\'])', replacer, html)
    
    async with aiofiles.open(html_path, 'w', encoding='utf-8') as f:
        await f.write(html)

async def main():
    site_index = int(os.environ.get('SITE_INDEX', 0))
    site = SITES[site_index]
    
    timestamp = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
    output_dir = Path('sites') / site['domain'] / timestamp
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"Fetching: {site['name']} ({site['url']})")
    result = await fetch_with_playwright(site['url'], site['domain'], output_dir)
    
    if result['success']:
        print(f"✅ {site['name']}: Success - {result.get('title', 'No title')}")
    else:
        print(f"❌ {site['name']}: Failed - {result.get('error', 'Unknown error')}")

if __name__ == '__main__':
    asyncio.run(main())
