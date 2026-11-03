#!/usr/bin/env python3
"""Reuse approved, localized Store artwork as lightweight website screenshots.

No screenshots are captured and no artwork is generated. Only the existing
phone region is extracted, its exterior white background removed, and WebP
copies written. Original Store files and website layout remain untouched.
"""
import argparse
import hashlib
import io
import json
from pathlib import Path
import re

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
LOCALES = {
    "en": "en-US", "zh": "zh-Hans", "zh-hant": "zh-Hant",
    "ja": "ja", "ko": "ko", "th": "th", "vi": "vi", "ms": "ms",
    "de": "de-DE", "fr": "fr-FR", "it": "it", "es": "es-ES",
    "nl": "nl-NL", "pt-br": "pt-BR", "ar": "ar-SA", "id": "id",
    "hi": "hi", "tr": "tr", "pl": "pl", "sv": "sv", "da": "da",
    "nb": "no", "fi": "fi", "cs": "cs", "ro": "ro", "ru": "ru",
    "uk": "uk", "hu": "hu", "el": "el", "pt-pt": "pt-PT", "he": "he",
}
SCENES = {
    "home": "01", "family": "02", "insights": "03", "ai": "04",
    "assets": "05", "markets": "06", "history": "08",
}
SECTIONS = {
    "home.hero.fanImages": ["home", "markets", "assets", "ai", "family"],
    "home.features.showcase.images": ["insights", "history", "family"],
    "home.download.backdrop.images": ["home", "assets", "markets", "ai", "family"],
}
# Approved iphone-6.5-unified artwork: the 910 × 1857 phone below the headline.
PHONE_BOX = (166, 634, 1076, 2491)
WEB_SIZE = (768, 1567)


def source_files(source_root, zh_source):
    files = {}
    for lang, locale in LOCALES.items():
        folder = zh_source if lang == "zh" else source_root / locale
        files[lang] = {}
        for scene, prefix in SCENES.items():
            matches = sorted(folder.glob(prefix + "-*.png"))
            if len(matches) != 1:
                raise ValueError(f"Expected one {locale}/{prefix} image: {matches}")
            with Image.open(matches[0]) as image:
                if image.size != (1242, 2688) or image.mode != "RGB":
                    raise ValueError(f"Not approved unified Store artwork: {matches[0]}")
            files[lang][scene] = matches[0]
    return files


def web_copy(source):
    with Image.open(source) as artwork:
        phone = artwork.crop(PHONE_BOX).convert("RGBA")
    # Flood only the exterior connected white pixels. The closed phone shell
    # separates white app UI from the background, preserving the actual screen.
    for corner in [(0, 0), (909, 0), (0, 1856), (909, 1856)]:
        if min(phone.getpixel(corner)[:3]) > 245:
            ImageDraw.floodfill(phone, corner, (0, 0, 0, 0), thresh=10)
    phone = phone.resize(WEB_SIZE, Image.Resampling.LANCZOS)
    stream = io.BytesIO()
    phone.save(stream, format="WEBP", quality=90, method=6)
    return stream.getvalue()


def update_content(text, assets):
    for section, scenes in SECTIONS.items():
        pattern = re.compile(r"^\[\[" + re.escape(section) + r"\]\]\n.*?(?=^\[|\Z)", re.M | re.S)
        blocks = list(pattern.finditer(text))
        if len(blocks) != len(scenes):
            raise ValueError(f"Expected {len(scenes)} entries in {section}, got {len(blocks)}")
        counter = iter(scenes)

        def rewrite(match):
            asset = assets[next(counter)]
            block = match.group()
            if len(re.findall(r'^src = ".*"$', block, re.M)) != 1:
                raise ValueError(f"Expected one src in {section}")
            block = re.sub(r'^src = ".*"$', f'src = "{asset["src"]}"', block, flags=re.M)
            block = re.sub(r"^(width|height) = .*\n", "", block, flags=re.M)
            return re.sub(r'^(src = ".*")$', r'\1\nwidth = 768\nheight = 1567', block, flags=re.M)

        text = pattern.sub(rewrite, text)
    return text


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-root", type=Path, required=True,
                        help="Existing APP_IPHONE_65 locale folders from Store delivery")
    parser.add_argument("--zh-source", type=Path, required=True,
                        help="Existing, updated zh-Hans delivery folder")
    parser.add_argument("--apply", action="store_true", help="Write website copies and image references")
    args = parser.parse_args()
    configured = set(re.findall(r"^\[([a-z]+(?:-[a-z]+)?)\]$",
                                (ROOT / "config/_default/languages.toml").read_text(), re.M))
    if configured != set(LOCALES):
        raise ValueError(f"Update locale mapping first: configured={configured}, mapped={set(LOCALES)}")
    sources = source_files(args.source_root, args.zh_source)
    # Validate all frontmatter shapes before changing any files.
    for lang in [*LOCALES, "zh-cn"]:
        file = ROOT / "content" / lang / "_index.md"
        dummy = {scene: {"src": "/validation.webp"} for scene in SCENES}
        update_content(file.read_text(), dummy)
    if not args.apply:
        print(f"Ready: {len(LOCALES)} languages, {len(LOCALES) * len(SCENES)} existing images, 32 homepages")
        return

    manifest = {"version": "1.0.9", "source": "Existing App Store Connect 1.0.9 artwork",
                "phoneCrop": PHONE_BOX, "webSize": WEB_SIZE, "locales": {}}
    total = 0
    for lang, files in sources.items():
        assets = {}
        for scene, source in files.items():
            data = web_copy(source)
            digest = hashlib.sha256(data).hexdigest()
            src = f"/assets/screenshots/1.0.9/{lang}/{scene}.{digest[:12]}.webp"
            target = ROOT / "static" / src.lstrip("/")
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(data)
            assets[scene] = {
                "src": src, "width": WEB_SIZE[0], "height": WEB_SIZE[1], "bytes": len(data),
                "sha256": digest, "sourceLocale": LOCALES[lang], "sourceFile": source.name,
                "sourceMD5": hashlib.md5(source.read_bytes()).hexdigest(),
            }
            total += len(data)
        manifest["locales"][lang] = assets
        for page_lang in (["zh", "zh-cn"] if lang == "zh" else [lang]):
            page = ROOT / "content" / page_lang / "_index.md"
            page.write_text(update_content(page.read_text(), assets))
        print(f"Reused {lang}: {len(assets)} images", flush=True)
    (ROOT / "docs" / "screenshot-assets.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    print(f"Done: {len(LOCALES) * len(SCENES)} WebP copies, {total / 1024 / 1024:.2f} MiB")


if __name__ == "__main__":
    main()
