#!/usr/bin/env python3
"""
导航首页生成器 - 扫描所有已归档网站生成导航页
"""
import os
import json
from pathlib import Path
from datetime import datetime
from jinja2 import Environment, FileSystemLoader
import sys

sys.path.insert(0, str(Path(__file__).parent.parent))
from scripts.config import SITES

TEMPLATE_DIR = Path(__file__).parent.parent / 'templates'
OUTPUT_DIR = Path(__file__).parent.parent / 'www'

def scan_archives():
    """扫描所有归档文件夹"""
    sites_dir = Path(__file__).parent.parent / 'sites'
    archives = []
    
    for site_config in SITES:
        domain = site_config['domain']
        site_path = sites_dir / domain
        if not site_path.exists():
            continue
        
        # 获取所有时间戳文件夹
        snapshots = []
        for timestamp_dir in sorted(site_path.iterdir(), reverse=True):
            if timestamp_dir.is_dir():
                index_path = timestamp_dir / 'index.html'
                if index_path.exists():
                    snapshots.append({
                        'timestamp': timestamp_dir.name,
                        'path': f"sites/{domain}/{timestamp_dir.name}/index.html",
                        'size': sum(f.stat().st_size for f in timestamp_dir.rglob('*') if f.is_file())
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

def main():
    archives = scan_archives()
    generate_nav(archives)

if __name__ == '__main__':
    main()
