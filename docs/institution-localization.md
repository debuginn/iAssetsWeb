# Institution name localization

Institution names are resolved at build time in the website, without modifying the shared theme or adding browser JavaScript.

## Data and fallback

`data/trust_institutions.json` maps each institution's existing image `src` to an English name (`en`) and optional `zh`, `zh-hant`, `ja`, and `ko` names. The image path is the identity, so each language keeps its own institution selection and order.

The resolver uses the current page language. A missing, null, empty, or whitespace-only translation falls back directly to `en`, regardless of the site's default language. The resolved name is used for both the visible label and image alternative text. Existing logos, sizing, links, section text, and actions are unchanged.

English is required for every displayed institution. Missing or blank English entries fail the Hugo build with the image path in the error. To add an institution, register its image path and English name first, then add only confirmed translations. A replacement logo path must also be updated in the catalog.

The site-level `home-data.html` override retains the theme's existing deep merge and localizes only `home.trust`. It does not create a trust section on pages that do not already have one. Known locale aliases are normalized; unknown languages fall back to English.

## Naming policy

Retain established brand names rather than inventing translations. In particular, the existing `HF Bank`, `Fuxi Securities`, and `Zhufu Securities` labels remain English because their corresponding localized identities have not been confirmed. `Starryblu` also uses its English brand name. Do not substitute a different regional legal entity just to obtain a translation.

Examples of first-party naming references used for additional translations:

- Standard Chartered Japanese: https://www.sc.com/jp/
- HSBC Korean: https://www.hsbc.co.kr/ko-kr/voc
- DBS Japanese: https://www.dbs.com/jp/default.page
- Interactive Brokers Japanese: https://www.interactivebrokers.co.jp/jp/home.php
- Interactive Brokers Chinese: https://www.interactivebrokers.com.hk/cn/general/about/info-and-history.php
- Panda Remit Japanese: https://item.pandaremit.com/ja/news/article-391-31090

## Checks

Requires Python 3.11+; rendering checks additionally require Hugo >= 0.147.1.

```sh
# Validate the catalog against every homepage, without rendering.
python3 scripts/check-trust-i18n.py --data-only

# Also exercise the actual localization partial in temporary Hugo sites.
python3 scripts/check-trust-i18n.py

# Build the website and its mainland configuration.
npm run check
hugo --environment cn --destination /tmp/iassets-hugo-cn-check
```

The regression fixtures cover all five languages, locale aliases, missing and blank translations, direct English fallback, input immutability, row order and metadata preservation, empty sections, and rejection of missing English names. Temporary fixture sites do not change the repository or published output.
