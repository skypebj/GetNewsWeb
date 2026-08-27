#!/usr/bin/env python3
"""
单个网站抓取脚本 - 由 GitHub Actions Matrix 并行调用
"""
import asyncio
import os
import sys
import shutil
from pathlib import Path
from datetime import datetime
from playwright.async_api import async_playwright
import aiohttp
import aiofiles
from urllib.parse import urlparse, urljoin
import re

# 添加项目根目录到路径
sys.path.insert(0, str(Path(__file__).parent.parent))
from scripts.config import SITES

# 超时配置 - GitHub Actions 环境需要更宽松的超时[reference:4]
PAGE_LOAD_TIMEOUT = 60000  # 60秒
RESOURCE_TIMEOUT = 30000   # 30秒

async def fetch_with_playwright(url: str, domain: str, output_dir: Path):
    """使用 Playwright 抓取完整页面，绕过弹窗"""
    async with async_playwright() as p:
        # 启动浏览器，使用更稳定的参数
        browser = await p.chromium.launch(
            headless=True,
            args=[
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--disable-gpu',
                '--window-size=1920,1080'
            ]
        )
        
        context = await browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        )
        
        page = await context.new_page()
        
        # 拦截并忽略弹窗
        page.on('dialog', lambda dialog: asyncio.create_task(dialog.dismiss()))
        
        try:
            # 访问页面
            await page.goto(url, wait_until='networkidle', timeout=PAGE_LOAD_TIMEOUT)
            
            # 等待页面稳定，尝试关闭可能的弹窗
            await page.wait_for_timeout(2000)
            
            # 尝试点击常见的弹窗关闭按钮
            close_selectors = [
                'button[aria-label="Close"]',
                'button[aria-label="关闭"]',
                '.modal-close',
                '.close-button',
                '[data-dismiss="modal"]',
                '.popup-close'
            ]
            for selector in close_selectors:
                try:
                    await page.click(selector, timeout=2000)
                except:
                    pass
            
            # 获取完整HTML
            html = await page.content()
            
            # 获取页面标题
            title = await page.title()
            
            # 提取所有资源URL
            resources = await page.evaluate('''
                () => {
                    const resources = [];
                    // 图片
                    document.querySelectorAll('img').forEach(img => {
                        if (img.src) resources.push({type: 'image', url: img.src});
                    });
                    // CSS
                    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
                        if (link.href) resources.push({type: 'css', url: link.href});
                    });
                    // JS
                    document.querySelectorAll('script[src]').forEach(script => {
                        if (script.src) resources.push({type: 'js', url: script.src});
                    });
                    return resources;
                }
            ''')
            
            # 保存HTML
            html_path = output_dir / 'index.html'
            async with aiofiles.open(html_path, 'w', encoding='utf-8') as f:
                await f.write(html)
            
            # 下载资源
            await download_resources(resources, output_dir, domain)
            
            # 重写HTML中的链接为相对路径
            await rewrite_links(html_path, output_dir, domain)
            
            return {'success': True, 'title': title, 'resource_count': len(resources)}
            
        except Exception as e:
            return {'success': False, 'error': str(e)}
        finally:
            await browser.close()

async def download_resources(resources: list, output_dir: Path, domain: str):
    """异步下载所有资源"""
    async with aiohttp.ClientSession() as session:
        tasks = []
        for res in resources:
            url = res['url']
            if not url or url.startswith('data:'):
                continue
            tasks.append(download_single_resource(session, url, output_dir, domain))
        
        # 并行下载，限制并发数避免过载
        semaphore = asyncio.Semaphore(20)
        async def limited_task(task):
            async with semaphore:
                return await task
        
        results = await asyncio.gather(*[limited_task(t) for t in tasks], return_exceptions=True)
        return results

async def download_single_resource(session, url: str, output_dir: Path, domain: str):
    """下载单个资源"""
    try:
        parsed = urlparse(url)
        # 构建本地路径
        path = parsed.path
        if not path or path.endswith('/'):
            path = path + 'index.html'
        
        # 处理查询参数
        clean_path = re.sub(r'\?.*$', '', path)
        if not clean_path:
            return
        
        # 确定文件扩展名
        ext = Path(clean_path).suffix or '.html'
        
        # 构建本地文件路径
        local_path = output_dir / clean_path.lstrip('/')
        local_path.parent.mkdir(parents=True, exist_ok=True)
        
        # 下载
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Referer': f'https://{domain}/'
        }
        async with session.get(url, headers=headers, timeout=RESOURCE_TIMEOUT) as response:
            if response.status == 200:
                content = await response.read()
                async with aiofiles.open(local_path, 'wb') as f:
                    await f.write(content)
                return {'url': url, 'status': 'success', 'path': str(local_path)}
    except Exception as e:
        return {'url': url, 'status': 'failed', 'error': str(e)}

async def rewrite_links(html_path: Path, output_dir: Path, domain: str):
    """重写HTML中的链接为相对路径"""
    async with aiofiles.open(html_path, 'r', encoding='utf-8') as f:
        html = await f.read()
    
    # 重写 img src
    html = re.sub(
        r'src=["\'](https?://[^"\']+)["\']',
        lambda m: f'src="{rewrite_url(m.group(1), output_dir, domain)}"',
        html
    )
    # 重写 link href (CSS)
    html = re.sub(
        r'href=["\'](https?://[^"\']+)["\'](?=[^>]*rel=["\']stylesheet["\'])',
        lambda m: f'href="{rewrite_url(m.group(1), output_dir, domain)}"',
        html
    )
    # 重写 script src
    html = re.sub(
        r'src=["\'](https?://[^"\']+)["\'](?=[^>]*type=["\']text/javascript["\'])',
        lambda m: f'src="{rewrite_url(m.group(1), output_dir, domain)}"',
        html
    )
    
    async with aiofiles.open(html_path, 'w', encoding='utf-8') as f:
        await f.write(html)

def rewrite_url(url: str, output_dir: Path, domain: str) -> str:
    """将绝对URL转换为相对路径"""
    parsed = urlparse(url)
    path = parsed.path
    if not path or path.endswith('/'):
        path = path + 'index.html'
    clean_path = re.sub(r'\?.*$', '', path)
    if clean_path.startswith('/'):
        clean_path = clean_path[1:]
    return clean_path or url

async def main():
    """主函数 - 从环境变量获取参数"""
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
    
    # 输出结果供GitHub Actions使用
    with open(os.environ.get('GITHUB_OUTPUT', '/dev/null'), 'a') as f:
        f.write(f"site_{site_index}_status={'success' if result['success'] else 'failed'}\n")

if __name__ == '__main__':
    asyncio.run(main())
