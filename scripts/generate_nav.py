#!/usr/bin/env python3
"""
导航首页生成器 + 每月自动归档
"""
import os
import json
import shutil
import zipfile
from pathlib import Path
from datetime import datetime, timedelta
from jinja2 import Environment, FileSystemLoader
import sys

sys.path.insert(0, str(Path(__file__).parent.parent))
from scripts.config import SITES

TEMPLATE_DIR = Path(__file__).parent.parent / 'templates'
OUTPUT_DIR = Path(__file__).parent.parent / 'www'
SITES_DIR = Path(__file__).parent.parent / 'sites'
ARCHIVE_DIR = OUTPUT_DIR / 'archives'  # 存放每月压缩包

def scan_archives():
    """扫描所有归档文件夹"""
    archives = []
    for site_config in SITES:
        domain = site_config['domain']
        site_path = SITES_DIR / domain
        if not site_path.exists():
            continue

        snapshots = []
        for timestamp_dir in sorted(site_path.iterdir(), reverse=True):
            if timestamp_dir.is_dir():
                index_path = timestamp_dir / 'index.html'
                if index_path.exists():
                    # 计算文件夹大小
                    size = sum(f.stat().st_size for f in timestamp_dir.rglob('*') if f.is_file())
                    snapshots.append({
                        'timestamp': timestamp_dir.name,
                        # 路径相对于 www/ 目录，因为最终部署时 sites/ 在 www/ 下
                        'path': f"./sites/{domain}/{timestamp_dir.name}/index.html",
                        'size': size
                    })

        if snapshots:
            archives.append({
                'name': site_config['name'],
                'domain': domain,
                'url': site_config['url'],
                'snapshots': snapshots,
                'latest': snapshots[0] if snapshots else None,
                'count': len(snapshots)
            })

    return archives

def generate_nav(archives):
    """生成导航首页"""
    env = Environment(loader=FileSystemLoader(str(TEMPLATE_DIR)))
    template = env.get_template('index.html.j2')

    html = template.render(
        archives=archives,
        total_sites=len(archives),
        total_snapshots=sum(a['count'] for a in archives),
        generated_at=datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        updated_at=datetime.now().isoformat()
    )

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    output_path = OUTPUT_DIR / 'index.html'
    output_path.write_text(html, encoding='utf-8')

    # 同时生成JSON数据供前端使用
    json_path = OUTPUT_DIR / 'data.json'
    json_data = {
        'archives': archives,
        'generated_at': datetime.now().isoformat()
    }
    json_path.write_text(json.dumps(json_data, indent=2), encoding='utf-8')

    print(f"✅ Navigation page generated: {output_path}")
    print(f"   Total sites: {len(archives)}, Total snapshots: {sum(a['count'] for a in archives)}")

def archive_old_month():
    """
    检查当前日期是否为每月5号，如果是则打包上个月的所有快照并删除原始文件
    """
    today = datetime.now()
    # 仅在每月5号执行
    if today.day != 5:
        print("⏭️  Today is not the 5th, skip archiving.")
        return

    # 计算上个月的年份和月份
    first_day_this_month = today.replace(day=1)
    last_day_last_month = first_day_this_month - timedelta(days=1)
    year = last_day_last_month.year
    month = last_day_last_month.month
    month_str = f"{year}-{month:02d}"

    ARCHIVE_DIR.mkdir(parents=True, exist_ok=True)

    # 遍历所有站点
    for site_config in SITES:
        domain = site_config['domain']
        site_path = SITES_DIR / domain
        if not site_path.exists():
            continue

        # 收集该站点上个月的所有快照目录
        to_archive = []
        for timestamp_dir in site_path.iterdir():
            if not timestamp_dir.is_dir():
                continue
            # 时间戳格式 YYYY-MM-DD_HH-MM-SS
            try:
                ts_str = timestamp_dir.name.split('_')[0]  # 取日期部分
                ts_date = datetime.strptime(ts_str, '%Y-%m-%d')
                if ts_date.year == year and ts_date.month == month:
                    to_archive.append(timestamp_dir)
            except ValueError:
                continue

        if not to_archive:
            continue

        # 创建 zip 包
        zip_name = f"{domain}_{month_str}.zip"
        zip_path = ARCHIVE_DIR / zip_name
        with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for folder in to_archive:
                for file_path in folder.rglob('*'):
                    if file_path.is_file():
                        arcname = file_path.relative_to(SITES_DIR)
                        zipf.write(file_path, arcname)

        print(f"✅ Archived {len(to_archive)} snapshots for {domain} -> {zip_path}")

        # 删除原始文件夹
        for folder in to_archive:
            shutil.rmtree(folder)
            print(f"   Deleted {folder}")

def main():
    # 1. 扫描并生成导航
    archives = scan_archives()
    generate_nav(archives)

    # 2. 将 sites/ 复制到 www/ 下，供 Pages 访问
    target_sites = OUTPUT_DIR / 'sites'
    if target_sites.exists():
        shutil.rmtree(target_sites)
    if SITES_DIR.exists():
        shutil.copytree(SITES_DIR, target_sites)
        print(f"✅ Copied sites/ to {target_sites}")

    # 3. 每月归档（仅5号执行）
    archive_old_month()

if __name__ == '__main__':
    main()
