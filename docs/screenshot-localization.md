# Localized website screenshots

The homepage uses existing App Store Connect 1.0.9 artwork in all 31 site
languages. No AI images or app screenshots are generated for this update.

The approved 1242 × 2688 Store artwork already contains a framed phone. The
importer extracts that exact phone region, removes only its connected exterior
white background, and creates 768 × 1567 transparent WebP copies. Store headlines
are excluded because the website already has its own headings. App pixels and
the existing phone shell are reused; layouts, animation and copy are unchanged.

Each language has seven files shared across the hero carousel, feature showcase
and download backdrop. Hashed filenames prevent stale caches. Explicit intrinsic
dimensions reserve image space before loading. The mainland China homepage uses
the same Simplified Chinese files; regional Chinese routes continue to use their
existing language routing.

## Source mapping and verification

`screenshot-assets.json` records source locale, original filename and MD5, output
SHA-256, dimensions, byte size and public URL for every file. Notable mappings:

- `zh` / `zh-cn` → `zh-Hans`; `zh-hant` → `zh-Hant`
- `de` → `de-DE`; `fr` → `fr-FR`; `es` → `es-ES`
- `pt-br` → `pt-BR`; `pt-pt` → `pt-PT`; `ar` → `ar-SA`
- `nb` → `no`; `en` → `en-US`

No other language falls back to English artwork. The importer checks all source
files, locale coverage and frontmatter shapes before changing the site. It keeps
older website files, which may still be referenced by other pages or old links.

## Reusing the delivery files

Use a Python installation with Pillow. Paths point to existing Store delivery
folders; the originals are not changed. Running without `--apply` validates the
inputs only.

```sh
python3 scripts/import-store-screenshots.py \
  --source-root /path/to/asc-1.0.9-multilingual/framed/APP_IPHONE_65 \
  --zh-source /path/to/aso-1.0.9-20261103/screenshots/delivered/zh-Hans \
  --apply
```

After importing, build both the global and mainland China configurations and
check that every homepage image resolves to its own language's files. Review
desktop/mobile and light/dark presentations before release.

Use the release toolchain, Hugo **0.147.1**, pinned in
`.github/workflows/build-cn.yml`. Newer Hugo versions such as 0.169 remove the
site's existing `module.mounts.lang` setting; migrating that configuration is a
separate change. Pillow is only needed for this optional import tool, not for
building or serving the website.
