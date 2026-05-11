# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

**Prerequisites:** Hugo >= 0.147.1 (no npm dependencies — scripts just wrap Hugo CLI)

```bash
npm run dev        # hugo server --disableFastRender
npm run build      # hugo (outputs to public/)
npm run check      # hugo --destination /tmp/iassets-hugo-check (validate without writing to public/)
```

To preview a production build locally, run `python3 -m http.server 8080` in `public/` and visit the language paths directly (e.g., `http://localhost:8080/en`).

## Architecture

This is a Hugo multilingual static site (landing page) for the iAssets app. It uses the **pebble** theme (git submodule at `themes/pebble/`). There is no transpiler, bundler, or build pipeline — just Hugo.

### Configuration (`config/_default/`)

- `config.toml` — Base URL, theme, default language (`en`), language-to-content-directory mounts, disabled kinds (taxonomy, RSS)
- `languages.toml` — 5 active languages (`en`, `zh`, `zh-hant`, `ja`, `ko`) with per-language pricing (`params.pricing.currency/yearly/lifetime`)
- `params.toml` — Site-wide params: assets (logo, QR, version for cache busting), contact, social links, SEO, i18n default
- `menu.toml` — `main` (header nav) and `footer` menus

### Content Model

Each language has its content in `content/{lang}/`:
- `_index.md` — Homepage, defined entirely in frontmatter under `.Params.home` (hero, features, details, download, reviews, pricing, FAQ, trust sections)
- `privacy.md` / `terms.md` — Legal pages (type: `privacy`/`terms`)

When adding or modifying homepage content, edit the frontmatter of the relevant `content/{lang}/_index.md`. Each translated file only needs to override changed fields — the theme uses a deep-merge strategy so the default language (`en`) acts as fallback.

### i18n

- `i18n/{lang}.json` — 13 UI chrome strings only (button labels, section headings). Page content comes from frontmatter, not i18n files.
- Supported: `en`, `zh`, `zh-hant`, `ja`, `ko`

### Template Overrides (`layouts/partials/`)

Project-level overrides of theme partials:
- `lang-meta.html` — Language metadata mapping (overrides theme version)
- `runtime-config.html` — Injects JS config object for client-side language routing (overrides theme version)

All other templates live in `themes/pebble/layouts/`. See `themes/pebble/CLAUDE.md` for full theme architecture details.

### Static Assets (`static/assets/`)

Hero carousel images are organized per language to show locale-appropriate screenshots:
- `hero-fan/` — Default/fallback images
- `hero-fan-en/`, `hero-fan-ja/`, `hero-fan-ko/`, `hero-fan-zh-hant/` — Language-specific hero images

### Multilingual Routing

Language detection runs client-side in `themes/pebble/static/app.js` using `navigator.language`. On first visit, users are redirected to their language's URL prefix. Language preference is stored in `localStorage`. The `runtime-config.html` partial generates the JS map used for this routing.

Hugo maps 8 URL prefixes: `en`, `zh`, `tw`, `hk`, `mo`, `sg`, `ja`, `ko` — where `tw`, `hk`, `mo`, `sg` are regional aliases for `zh-hant`.
