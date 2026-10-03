#!/usr/bin/env python3
"""
Cinder House — Automated Asset Optimization Pipeline
Author: Aryan Sharma <aaddisharmarkczw@gmail.com>
"""

import os
from PIL import Image

def optimize_raster_assets(asset_dir: str, max_width: int = 1400) -> None:
    if not os.path.exists(asset_dir):
        return
    for root, _, files in os.walk(asset_dir):
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg')):
                p = os.path.join(root, f)
                try:
                    with Image.open(p) as img:
                        if img.width > max_width:
                            ratio = max_width / float(img.width)
                            new_height = int(float(img.height) * ratio)
                            resized = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                            resized.save(p, optimize=True)
                            print(f"Optimized {f} -> {max_width}x{new_height}")
                except Exception as e:
                    print(f"Skipping {f}: {e}")

if __name__ == "__main__":
    optimize_raster_assets("./assets")
