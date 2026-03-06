import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ROOT_PAGE, LOCALES, LANGUAGE_OPTIONS } from '../config/home/locales.mjs';
import { HERO_CARDS, FEATURE_ITEMS, DETAIL_ITEMS, REVIEW_TRACKS, TRUST_TRACKS, FAQ_ITEMS } from '../config/home/sections.mjs';
import { LEGAL_PAGES } from '../config/legal/pages.mjs';
import { LOCALE_META, PATH_LANG_MAP } from '../config/shared/locales.mjs';
import { PRICE_BY_LANG } from '../config/shared/pricing.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const HOME_TEMPLATE_PATH = path.join(ROOT_DIR, 'templates/home.html');
const LEGAL_TEMPLATE_PATH = path.join(ROOT_DIR, 'templates/legal.html');

const ICONS = {
  'hero-quick': '<svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14"></path><path d="M5 12h14"></path><path d="M5 16h9"></path><circle cx="17.5" cy="16" r="1.8"></circle></svg>',
  'hero-books': '<svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="7" height="12" rx="1.8"></rect><rect x="13" y="6" width="7" height="12" rx="1.8"></rect></svg>',
  'hero-search': '<svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="5.5"></circle><path d="M14.5 14.5L19 19"></path></svg>',
  'feature-overview': '<svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16"></path><path d="M12 4v16"></path><circle cx="12" cy="12" r="8"></circle></svg>',
  'feature-structure': '<svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12"></path><path d="M6 12h8"></path><path d="M6 17h5"></path><circle cx="18" cy="12" r="2"></circle></svg>',
  'feature-trend': '<svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16l5-5 3 3 8-8"></path><path d="M14 6h6v6"></path></svg>',
  'feature-books': '<svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="7" height="14" rx="1.8"></rect><rect x="13" y="5" width="7" height="14" rx="1.8"></rect></svg>',
  'feature-family': '<svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="10" r="2.6"></circle><circle cx="16" cy="10.5" r="2.2"></circle><path d="M3.8 17.2c.7-2.2 2.4-3.4 4.2-3.4s3.5 1.2 4.2 3.4"></path><path d="M13.2 16.8c.5-1.7 1.8-2.6 3.2-2.6s2.7.9 3.2 2.6"></path></svg>',
  'feature-security': '<svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5.5" y="10.2" width="13" height="9" rx="2"></rect><path d="M8.2 10.2V7.8a3.8 3.8 0 0 1 7.6 0v2.4"></path></svg>',
  'detail-account': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="6.5" width="17" height="12" rx="2.5"></rect><path d="M3.5 10.5h17"></path></svg>',
  'detail-target': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7.5"></circle><circle cx="12" cy="12" r="3.2"></circle></svg>',
  'detail-currency': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h10"></path><path d="M11 5l3 3-3 3"></path><path d="M20 16H10"></path><path d="M13 13l-3 3 3 3"></path></svg>',
  'detail-share': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="10" r="2.6"></circle><circle cx="16" cy="10.5" r="2.2"></circle><path d="M3.8 17.2c.7-2.2 2.4-3.4 4.2-3.4s3.5 1.2 4.2 3.4"></path><path d="M13.2 16.8c.5-1.7 1.8-2.6 3.2-2.6s2.7.9 3.2 2.6"></path></svg>',
  'detail-cards': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path><circle cx="8" cy="7" r="1.8"></circle><circle cx="15" cy="12" r="1.8"></circle><circle cx="11" cy="17" r="1.8"></circle></svg>',
  'detail-lock': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5.5" y="10.2" width="13" height="9" rx="2"></rect><path d="M8.2 10.2V7.8a3.8 3.8 0 0 1 7.6 0v2.4"></path></svg>',
  faq: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M9.6 9.2a2.5 2.5 0 1 1 4.2 1.8c-.65.62-1.3 1.05-1.3 2.1"></path><circle cx="12" cy="16.8" r="0.9" fill="currentColor" stroke="none"></circle></svg>'
};

function indentBlock(content, spaces) {
  const prefix = ' '.repeat(spaces);
  return content.split('\n').map((line) => (line ? `${prefix}${line}` : line)).join('\n');
}

function writeGeneratedBanner(content, source) {
  return `<!-- Generated by ${source}. Do not edit directly. -->\n${content}\n`;
}

function writeGeneratedJsBanner(content, source) {
  return `// Generated by ${source}. Do not edit directly.\n${content}\n`;
}

function renderLangOptions(attribute, spaces = 16) {
  return LANGUAGE_OPTIONS.map((option) => `<button type="button" ${attribute}="${option.appLang}">${option.label}</button>`)
    .map((entry) => indentBlock(entry, spaces))
    .join('\n');
}

function renderAltLinks() {
  const links = ['<link rel="alternate" hreflang="x-default" href="/" />'];
  for (const locale of LOCALES) {
    links.push(`<link rel="alternate" hreflang="${locale.hreflang}" href="${locale.route}" />`);
  }
  return links.join('\n    ');
}

function renderHeroCards() {
  return HERO_CARDS.map((card) => `\n<article class="mini-card">\n  <div class="mini-top"><span>${ICONS[card.icon]}</span><strong>${card.number}</strong></div>\n  <h3 data-i18n="${card.titleKey}"></h3>\n  <p data-i18n="${card.descKey}"></p>\n</article>`)
    .map((item) => indentBlock(item.trim(), 14))
    .join('\n');
}

function renderFeatureItems() {
  return FEATURE_ITEMS.map((item) => `\n<article class="feature-item">\n  <div class="mini-top"><span>${ICONS[item.icon]}</span><strong>${item.number}</strong></div>\n  <h3 data-i18n="${item.titleKey}"></h3>\n  <p data-i18n="${item.descKey}"></p>\n</article>`)
    .map((entry) => indentBlock(entry.trim(), 14))
    .join('\n');
}

function renderDetailItems() {
  return DETAIL_ITEMS.map((item) => `\n<article class="detail-card">\n  <div class="detail-icon" aria-hidden="true">\n    ${ICONS[item.icon]}\n  </div>\n  <h3 data-i18n="${item.titleKey}"></h3>\n  <p data-i18n="${item.descKey}"></p>\n</article>`)
    .map((entry) => indentBlock(entry.trim(), 12))
    .join('\n');
}

function renderReviewTrack(items) {
  return items.map((item) => `\n<figure class="review">\n  <div class="stars">★★★★★</div>\n  <blockquote>${item.text}</blockquote>\n  <figcaption>\n    <span class="social-link review-social-icon" data-social="${item.social}">\n      <img src="/assets/${item.icon}" alt="${item.social}" loading="lazy" />\n    </span>\n    <span>${item.name}</span>\n  </figcaption>\n</figure>`)
    .map((entry) => indentBlock(entry.trim(), 14))
    .join('\n');
}

function renderTrustTrack(items) {
  return items.map((item) => `\n<article class="trust-card">\n  <img class="trust-logo" src="${item.src}" alt="${item.alt}" loading="lazy" />\n  <span>${item.name}</span>\n</article>`)
    .map((entry) => indentBlock(entry.trim(), 14))
    .join('\n');
}

function renderFaqItems() {
  return FAQ_ITEMS.map((item) => `\n<article>\n  <h3>\n    <span class="faq-q-icon" aria-hidden="true">${ICONS.faq}</span>\n    <span data-i18n="${item.questionKey}"></span>\n  </h3>\n  <p data-i18n="${item.answerKey}"></p>\n</article>`)
    .map((entry) => indentBlock(entry.trim(), 12))
    .join('\n');
}

function fillHomeTemplate(template, page) {
  const replacements = {
    '{{HTML_LANG}}': page.htmlLang,
    '{{TITLE}}': page.title,
    '{{META_DESCRIPTION}}': page.description,
    '{{META_KEYWORDS}}': page.keywords,
    '{{OG_TITLE}}': page.socialTitle ?? page.title,
    '{{OG_DESCRIPTION}}': page.description,
    '{{OG_URL}}': page.route,
    '{{OG_LOCALE}}': page.ogLocale,
    '{{TWITTER_TITLE}}': page.socialTitle ?? page.title,
    '{{TWITTER_DESCRIPTION}}': page.description,
    '{{CANONICAL_URL}}': page.route,
    '{{ALT_LINKS}}': renderAltLinks(),
    '{{JSONLD_DESCRIPTION}}': page.description,
    '{{JSONLD_URL}}': page.route,
    '{{JSONLD_LANGUAGE}}': page.jsonLdLanguage,
    '{{HEADER_LANG_OPTIONS}}': renderLangOptions('data-lang-option'),
    '{{FOOTER_LANG_OPTIONS}}': renderLangOptions('data-footer-lang-option'),
    '{{HERO_CARDS}}': renderHeroCards(),
    '{{FEATURE_ITEMS}}': renderFeatureItems(),
    '{{DETAIL_ITEMS}}': renderDetailItems(),
    '{{REVIEW_TRACK_PRIMARY}}': renderReviewTrack(REVIEW_TRACKS.primary),
    '{{REVIEW_TRACK_SECONDARY}}': renderReviewTrack(REVIEW_TRACKS.secondary),
    '{{TRUST_TRACK_PRIMARY}}': renderTrustTrack(TRUST_TRACKS.primary),
    '{{TRUST_TRACK_SECONDARY}}': renderTrustTrack(TRUST_TRACKS.secondary),
    '{{FAQ_ITEMS}}': renderFaqItems()
  };

  let output = template;
  for (const [marker, value] of Object.entries(replacements)) output = output.replaceAll(marker, value);
  return writeGeneratedBanner(output, 'scripts/build-site.mjs');
}

function renderLegalContent(page) {
  const blocks = [];
  for (const section of page.sections) {
    blocks.push(`<h2 data-i18n="${section.titleKey}"></h2>`);
    if (section.bodyKey) blocks.push(`<p data-i18n="${section.bodyKey}"></p>`);
    if (section.listKeys?.length) {
      const items = section.listKeys.map((key) => `  <li data-i18n="${key}"></li>`).join('\n');
      blocks.push(`<ul>\n${items}\n</ul>`);
    }
  }
  return indentBlock(blocks.join('\n\n'), 12);
}

function fillLegalTemplate(template, page) {
  const replacements = {
    '{{HTML_LANG}}': ROOT_PAGE.htmlLang,
    '{{TITLE}}': page.title,
    '{{META_DESCRIPTION}}': page.description,
    '{{CANONICAL_URL}}': `/${page.key}/`,
    '{{OG_LOCALE}}': ROOT_PAGE.ogLocale,
    '{{PAGE_TITLE_KEY}}': page.pageTitleKey,
    '{{EYE_BROW_KEY}}': page.eyebrowKey,
    '{{TITLE_KEY}}': page.titleKey,
    '{{INTRO_KEY}}': page.introKey,
    '{{HEADER_LANG_OPTIONS}}': renderLangOptions('data-lang-option'),
    '{{FOOTER_LANG_OPTIONS}}': renderLangOptions('data-footer-lang-option'),
    '{{LEGAL_CONTENT}}': renderLegalContent(page)
  };

  let output = template;
  for (const [marker, value] of Object.entries(replacements)) output = output.replaceAll(marker, value);
  return writeGeneratedBanner(output, 'scripts/build-site.mjs');
}

function renderRuntimeLocales() {
  const routeEntries = LOCALE_META.map((locale) => `  '${locale.appLang}': '${locale.route}'`).join(',\n');
  const localeEntries = LOCALE_META.map((locale) => `  '${locale.appLang}': '${locale.ogLocale}'`).join(',\n');
  const keywordEntries = LOCALE_META.map((locale) => `  '${locale.appLang}': '${locale.keywords}'`).join(',\n');
  const pricingEntries = Object.entries(PRICE_BY_LANG)
    .map(([lang, pricing]) => `  '${lang}': { currency: '${pricing.currency}', yearly: '${pricing.yearly}', lifetime: '${pricing.lifetime}' }`)
    .join(',\n');
  const pathEntries = Object.entries(PATH_LANG_MAP).map(([key, value]) => `  '${key}': '${value}'`).join(',\n');
  const supported = LOCALE_META.map((locale) => `'${locale.appLang}'`).join(', ');

  return writeGeneratedJsBanner(`export const SUPPORTED_LANGS = [${supported}];\n\nexport const PATH_LANG_MAP = {\n${pathEntries}\n};\n\nexport const LANG_ROUTE_MAP = {\n${routeEntries}\n};\n\nexport const LANG_LOCALE_MAP = {\n${localeEntries}\n};\n\nexport const LANG_META_KEYWORDS = {\n${keywordEntries}\n};\n\nexport const PRICE_BY_LANG = {\n${pricingEntries}\n};`, 'scripts/build-site.mjs');
}

async function writePage(relativePath, content) {
  const targetPath = path.join(ROOT_DIR, relativePath);
  await mkdir(path.dirname(targetPath), { recursive: true });
  await writeFile(targetPath, content, 'utf8');
}

export async function buildSite() {
  const [homeTemplate, legalTemplate] = await Promise.all([
    readFile(HOME_TEMPLATE_PATH, 'utf8'),
    readFile(LEGAL_TEMPLATE_PATH, 'utf8')
  ]);

  await writePage('config/runtime/locales.js', renderRuntimeLocales());
  await writePage('index.html', fillHomeTemplate(homeTemplate, ROOT_PAGE));
  for (const locale of LOCALES) {
    await writePage(locale.output, fillHomeTemplate(homeTemplate, locale));
  }
  for (const legalPage of LEGAL_PAGES) {
    await writePage(legalPage.output, fillLegalTemplate(legalTemplate, legalPage));
  }
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === __filename;
if (isDirectRun) {
  buildSite().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
