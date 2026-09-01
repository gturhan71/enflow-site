#!/usr/bin/env node
/* Enflow tanıtım sitesi üretici — TEK doğruluk kaynağı: content.mjs.
 * Kullanım: node build.mjs   →  dist/index.html (TR) + dist/en/index.html (EN)
 * Metni değiştirmek için content.mjs'i düzenle, sonra bunu çalıştır. Bağımlılık yok.
 * Bu proje Enflow ana reposundan bağımsızdır — kendi git geçmişi, kendi deploy'u var.
 */
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { content } from './content.mjs';
import { icons } from './icons.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = join(HERE, 'dist');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const nl2br = (s) => esc(s).replace(/\n/g, '<br/>');
const icon = (name, cls = 'icon') => (icons[name] || '').replace('<svg ', `<svg class="${cls}" `);

function renderNav(c, otherHref) {
  const home = c.nav.home;
  const links = c.nav.links.map((l) => `<a href="${l.href}" class="nav-link">${esc(l.label)}</a>`).join('');
  return `
  <header class="site-header">
    <div class="wrap header-inner">
      <a href="${home}#top" class="brand">
        <span class="brand-symbol">E</span>
        <span class="brand-name">${esc(c.nav.brand)}</span>
      </a>
      <nav class="nav-links">${links}</nav>
      <div class="nav-actions">
        <a class="lang-switch" href="${otherHref}" aria-label="${esc(c.nav.langSwitch.label)}">${esc(c.nav.langSwitch.label)}</a>
        <a class="btn btn-primary btn-sm header-cta" href="${home}#cta">${esc(c.nav.cta)}</a>
        <button class="nav-toggle" id="navToggle" aria-label="Menu">${icon('menu')}</button>
      </div>
    </div>
  </header>
  <div class="mobile-nav" id="mobileNav">
    ${c.nav.links.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join('')}
    <a class="btn btn-primary" href="${home}#cta">${esc(c.nav.cta)}</a>
  </div>`;
}

function renderHero(c) {
  const chainNodes = c.hero.chain
    .map((label, i, arr) => {
      const num = String(i + 1).padStart(2, '0');
      const cls = i === 0 ? 'is-first' : i === arr.length - 1 ? 'is-last' : '';
      const node = `<div class="chain-node ${cls}"><span class="chain-idx">${num}</span><span class="chain-text">${esc(label)}</span></div>`;
      return i < arr.length - 1 ? node + `<div class="chain-divider">${icon('arrow')}</div>` : node;
    })
    .join('');
  return `
  <section class="hero" id="top">
    <div class="wrap">
      <div class="hero-header reveal">
        <div class="meta-tag"><span class="tag-bullet"></span>${esc(c.hero.badge)}</div>
        <h1 class="hero-title">${nl2br(c.hero.title)}</h1>
        <p class="hero-lead">${esc(c.hero.subtitle)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#cta">${esc(c.hero.ctaPrimary)}</a>
          <a class="btn btn-secondary" href="#akis">${esc(c.hero.ctaSecondary)}</a>
        </div>
      </div>
      <div class="hero-ledger reveal">
        <div class="ledger-label">PROCESS CONTINUUM</div>
        <div class="ledger-track">${chainNodes}</div>
      </div>
    </div>
  </section>`;
}

function renderProblem(c) {
  const items = c.problem.items
    .map(
      (it, idx) => `
      <div class="problem-row reveal">
        <div class="problem-idx">${String(idx + 1).padStart(2, '0')}</div>
        <div class="problem-icon">${icon(it.icon)}</div>
        <div class="problem-body">
          <p>${esc(it.text)}</p>
        </div>
      </div>`
    )
    .join('');
  return `
  <section class="section section-problem" id="sorun">
    <div class="wrap">
      <div class="editorial-grid">
        <div class="editorial-sidebar reveal">
          <div class="sidebar-sticky">
            <span class="section-num">01 / DIAGNOSIS</span>
            <h2 class="section-title">${esc(c.problem.title)}</h2>
            <p class="section-subtitle">${esc(c.problem.subtitle)}</p>
          </div>
        </div>
        <div class="editorial-content">
          <div class="problem-list">${items}</div>
        </div>
      </div>
    </div>
  </section>`;
}

function renderDiff(c) {
  const cards = c.diff.cards
    .map(
      (card, idx) => `
      <div class="comparison-row reveal">
        <div class="comparison-cell old-model">
          <span class="cell-label">${esc(card.oldLabel)}</span>
          <p>${esc(card.oldText)}</p>
        </div>
        <div class="comparison-cell new-model">
          <span class="cell-label">${esc(card.newLabel)}</span>
          <p>${esc(card.newText)}</p>
        </div>
      </div>`
    )
    .join('');
  return `
  <section class="section section-diff" id="fark">
    <div class="wrap">
      <div class="section-header-wide reveal">
        <span class="section-num">02 / ARCHITECTURE</span>
        <h2 class="section-title">${esc(c.diff.title)}</h2>
        <p class="section-subtitle">${esc(c.diff.subtitle)}</p>
      </div>
      <div class="comparison-table">${cards}</div>
    </div>
  </section>`;
}

function renderFlow(c) {
  const steps = c.flow.steps
    .map((step, i) => {
      return `
      <div class="flow-card reveal">
        <div class="flow-card-head">
          <span class="flow-step-num">STAGE ${String(i + 1).padStart(2, '0')}</span>
          ${step.auto ? '<span class="auto-tag">AUTO-HANDOFF</span>' : '<span class="manual-tag">STAGE</span>'}
        </div>
        <h4 class="flow-step-title">${esc(step.label)}</h4>
        <p class="flow-step-desc">${esc(step.desc)}</p>
      </div>`;
    })
    .join('');
  return `
  <section class="section section-flow" id="akis">
    <div class="wrap">
      <div class="section-header-wide reveal">
        <span class="section-num">03 / LIFECYCLE</span>
        <h2 class="section-title">${esc(c.flow.title)}</h2>
        <p class="section-subtitle">${esc(c.flow.subtitle)}</p>
      </div>
      <div class="flow-pipeline">${steps}</div>
      <div class="flow-legend reveal">
        <span class="legend-note"><span class="legend-key">AUTO-HANDOFF</span> = Otomatik tetiklenen birimler arası devir halkası</span>
      </div>
    </div>
  </section>`;
}

function renderValue(c) {
  const cards = c.value.cards
    .map(
      (v, idx) => `
      <div class="value-block reveal">
        <div class="block-idx">${String(idx + 1).padStart(2, '0')}</div>
        <div class="block-icon">${icon(v.icon)}</div>
        <h4 class="block-title">${esc(v.title)}</h4>
        <p class="block-desc">${esc(v.text)}</p>
      </div>`
    )
    .join('');
  const cta = c.value.cta
    ? `
      <div class="value-footer-banner reveal">
        <div class="banner-text">
          <span class="banner-tag">FULL SPECTRUM</span>
          <p>${esc(c.value.cta.text)}</p>
        </div>
        <a class="btn btn-secondary btn-sm" href="${esc(c.value.cta.href)}">${esc(c.value.cta.buttonLabel)}${icon('arrow')}</a>
      </div>`
    : '';
  return `
  <section class="section section-value" id="deger">
    <div class="wrap">
      <div class="section-header-wide reveal">
        <span class="section-num">04 / EXECUTIVE VISIBILITY</span>
        <h2 class="section-title">${esc(c.value.title)}</h2>
      </div>
      <div class="value-columns">${cards}</div>
      ${cta}
    </div>
  </section>`;
}

function renderTrust(c) {
  const items = c.trust.items
    .map(
      (t, idx) => `
      <div class="trust-column reveal">
        <div class="trust-head">
          <span class="trust-idx">RULE 0${idx + 1}</span>
          <div class="trust-icon">${icon(t.icon)}</div>
        </div>
        <h4 class="trust-title">${esc(t.title)}</h4>
        <p class="trust-desc">${esc(t.text)}</p>
      </div>`
    )
    .join('');
  return `
  <section class="section section-trust" id="guven">
    <div class="wrap">
      <div class="section-header-wide reveal">
        <span class="section-num">05 / INTEGRITY &amp; GOVERNANCE</span>
        <h2 class="section-title">${esc(c.trust.title)}</h2>
        <p class="section-subtitle">${esc(c.trust.subtitle)}</p>
      </div>
      <div class="trust-grid">${items}</div>
    </div>
  </section>`;
}

function renderAudience(c) {
  const cards = c.audience.cards
    .map(
      (a) => `
      <div class="role-card reveal">
        <div class="role-icon">${icon(a.icon)}</div>
        <div class="role-body">
          <h4 class="role-title">${esc(a.title)}</h4>
          <p class="role-desc">${esc(a.text)}</p>
        </div>
      </div>`
    )
    .join('');
  return `
  <section class="section section-audience" id="kitle">
    <div class="wrap">
      <div class="section-header-wide reveal">
        <span class="section-num">06 / OPERATIONAL SCOPE</span>
        <h2 class="section-title">${esc(c.audience.title)}</h2>
      </div>
      <div class="role-grid">${cards}</div>
    </div>
  </section>`;
}

function renderDocumentCard(doc, labels) {
  const isReady = doc.status === 'ready' && doc.href;
  const badge = isReady ? '<span class="status-tag status-ready">READY</span>' : `<span class="status-tag status-soon">${esc(labels.soonLabel)}</span>`;
  const action = isReady
    ? `<a class="btn btn-secondary btn-sm doc-btn" href="${esc(doc.href)}" target="_blank" rel="noopener">${icon('arrow')}${esc(labels.downloadLabel)}</a>`
    : `<span class="btn btn-secondary btn-sm doc-btn is-disabled">${icon('clock')}${esc(labels.soonLabel)}</span>`;
  return `
    <div class="document-entry reveal">
      <div class="doc-meta-row">
        <span class="doc-format-tag">${icon('filetext')}${esc(doc.format)}</span>
        ${badge}
      </div>
      <h4 class="doc-entry-title">${esc(doc.title)}</h4>
      <p class="doc-entry-desc">${esc(doc.description)}</p>
      <div class="doc-action-row">${action}</div>
    </div>`;
}

function renderDocuments(c) {
  const cards = c.documents.items.map((d) => renderDocumentCard(d, c.documents)).join('');
  return `
  <section class="section section-documents" id="dokumanlar">
    <div class="wrap">
      <div class="section-header-wide reveal">
        <span class="section-num">ARCHIVE / RESOURCES</span>
        <h2 class="section-title">${esc(c.documents.title)}</h2>
        <p class="section-subtitle">${esc(c.documents.subtitle)}</p>
      </div>
      <div class="documents-grid">${cards}</div>
      <p class="doc-empty-note reveal">${esc(c.documents.emptyNote)}</p>
    </div>
  </section>`;
}

function renderSubPageHead(c, backLabel) {
  return `
  <section class="page-head">
    <div class="wrap">
      <a class="back-link reveal" href="${c.nav.home}">${icon('arrow', 'icon icon-flip')}${esc(backLabel)}</a>
    </div>
  </section>`;
}

function renderAnalyticsCategory(cat, idx) {
  const items = cat.items
    .map(
      (it, itemIdx) => `
      <div class="kpi-item reveal">
        <div class="kpi-header">
          <span class="kpi-num">${String(itemIdx + 1).padStart(2, '0')}</span>
          <h5 class="kpi-name">${esc(it.name)}</h5>
        </div>
        <p class="kpi-desc">${esc(it.desc)}</p>
      </div>`
    )
    .join('');
  return `
    <div class="kpi-category-section">
      <div class="kpi-category-header">
        <div class="kpi-cat-info">
          <span class="cat-idx">CAT 0${idx + 1}</span>
          <h3 class="cat-title">${esc(cat.title)}</h3>
          <p class="cat-intro">${esc(cat.intro)}</p>
        </div>
        <div class="cat-count-badge">
          <span class="cat-count">${cat.items.length}</span>
          <span class="cat-count-lbl">METRICS</span>
        </div>
      </div>
      <div class="kpi-matrix">${items}</div>
    </div>`;
}

function renderAnalytics(c) {
  const total = c.analytics.categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const categories = c.analytics.categories.map((cat, idx) => renderAnalyticsCategory(cat, idx)).join('');
  return `
  <section class="section section-analytics" id="analitik-icerik">
    <div class="wrap">
      <div class="section-header-wide reveal">
        <span class="section-num">CATALOGUE / MATRIX</span>
        <h2 class="section-title">${esc(c.analytics.title)} <span class="total-metrics-badge">[ ${total} METRICS ]</span></h2>
        <p class="section-subtitle">${esc(c.analytics.subtitle)}</p>
      </div>
      <div class="kpi-categories-list">${categories}</div>
    </div>
  </section>`;
}

function renderCta(c) {
  return `
  <section class="section section-cta" id="cta">
    <div class="wrap">
      <div class="cta-editorial-box reveal">
        <div class="cta-main-content">
          <h2 class="cta-headline">${esc(c.cta.title)}</h2>
          <p class="cta-sub">${esc(c.cta.subtitle)}</p>
        </div>
        <div class="cta-buttons-block">
          <a class="btn btn-primary" href="mailto:${esc(c.cta.email)}">${icon('mail')}${esc(c.cta.buttonLabel)}</a>
          <a class="btn btn-secondary" href="mailto:${esc(c.cta.email)}">${esc(c.cta.emailLabel)}</a>
        </div>
      </div>
    </div>
  </section>`;
}

function renderFooter(c) {
  return `
  <footer class="site-footer">
    <div class="wrap footer-inner">
      <div class="footer-brand-side">
        <div class="brand brand-sm"><span class="brand-symbol">E</span>${esc(c.nav.brand)}</div>
        <p class="footer-desc">${esc(c.footer.text)}</p>
      </div>
      <div class="footer-meta-side">
        <div class="footer-links">
          <a href="${c.footer.wikiHref}" class="footer-wiki-link" target="_blank" rel="noopener">${esc(c.footer.wikiLabel)}${icon('arrow')}</a>
        </div>
        <p class="footer-copy">&copy; ${new Date().getFullYear()} Enflow Systems. All rights reserved.</p>
      </div>
    </div>
  </footer>`;
}

function renderPage(c, otherHref, scriptSrc, styleSrc) {
  return `<!doctype html>
<html lang="${c.htmlLang}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<title>${esc(c.meta.title)}</title>
<meta name="description" content="${esc(c.meta.description)}" />
<meta property="og:title" content="${esc(c.meta.title)}" />
<meta property="og:description" content="${esc(c.meta.description)}" />
<meta property="og:type" content="website" />
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${styleSrc}" />
</head>
<body>
<div class="bg-base"></div>
${renderNav(c, otherHref)}
${renderHero(c)}
${renderProblem(c)}
${renderDiff(c)}
${renderFlow(c)}
${renderValue(c)}
${renderTrust(c)}
${renderAudience(c)}
${renderCta(c)}
${renderFooter(c)}
<script src="${scriptSrc}"></script>
</body>
</html>`;
}

function renderDocumentsPage(c, otherHref, scriptSrc, styleSrc) {
  return `<!doctype html>
<html lang="${c.htmlLang}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<title>${esc(c.documents.title)} — Enflow</title>
<meta name="description" content="${esc(c.documents.subtitle)}" />
<meta property="og:title" content="${esc(c.documents.title)} — Enflow" />
<meta property="og:description" content="${esc(c.documents.subtitle)}" />
<meta property="og:type" content="website" />
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${styleSrc}" />
</head>
<body>
<div class="bg-base"></div>
${renderNav(c, otherHref)}
${renderSubPageHead(c, c.documents.backLabel)}
${renderDocuments(c)}
${renderFooter(c)}
<script src="${scriptSrc}"></script>
</body>
</html>`;
}

function renderAnalyticsPage(c, otherHref, scriptSrc, styleSrc) {
  return `<!doctype html>
<html lang="${c.htmlLang}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<title>${esc(c.analytics.title)} — Enflow</title>
<meta name="description" content="${esc(c.analytics.subtitle)}" />
<meta property="og:title" content="${esc(c.analytics.title)} — Enflow" />
<meta property="og:description" content="${esc(c.analytics.subtitle)}" />
<meta property="og:type" content="website" />
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${styleSrc}" />
</head>
<body>
<div class="bg-base"></div>
${renderNav(c, otherHref)}
${renderSubPageHead(c, c.analytics.backLabel)}
${renderAnalytics(c)}
${renderCta(c)}
${renderFooter(c)}
<script src="${scriptSrc}"></script>
</body>
</html>`;
}

// ── Build ────────────────────────────────────────────────────────────────
mkdirSync(DIST, { recursive: true });
mkdirSync(join(DIST, 'en'), { recursive: true });
mkdirSync(join(DIST, 'dokumanlar'), { recursive: true });
mkdirSync(join(DIST, 'en', 'documents'), { recursive: true });
mkdirSync(join(DIST, 'analitik'), { recursive: true });
mkdirSync(join(DIST, 'en', 'analytics'), { recursive: true });

writeFileSync(join(DIST, 'index.html'), renderPage(content.tr, '/en/', '/script.js', '/styles.css'));
writeFileSync(join(DIST, 'en', 'index.html'), renderPage(content.en, '/', '../script.js', '../styles.css'));

writeFileSync(
  join(DIST, 'dokumanlar', 'index.html'),
  renderDocumentsPage(content.tr, '/en/documents/', '../script.js', '../styles.css')
);
writeFileSync(
  join(DIST, 'en', 'documents', 'index.html'),
  renderDocumentsPage(content.en, '/dokumanlar/', '../../script.js', '../../styles.css')
);

writeFileSync(
  join(DIST, 'analitik', 'index.html'),
  renderAnalyticsPage(content.tr, '/en/analytics/', '../script.js', '../styles.css')
);
writeFileSync(
  join(DIST, 'en', 'analytics', 'index.html'),
  renderAnalyticsPage(content.en, '/analitik/', '../../script.js', '../../styles.css')
);

copyFileSync(join(HERE, 'styles.css'), join(DIST, 'styles.css'));
copyFileSync(join(HERE, 'script.js'), join(DIST, 'script.js'));
if (existsSync(join(HERE, 'robots.txt'))) copyFileSync(join(HERE, 'robots.txt'), join(DIST, 'robots.txt'));

const ASSETS = join(HERE, 'assets');
for (const f of ['favicon.ico', 'favicon-96x96.png', 'apple-touch-icon.png']) {
  const src = join(ASSETS, f);
  if (existsSync(src)) copyFileSync(src, join(DIST, f));
}

console.log('✓ dist/index.html (TR) + dist/en/index.html (EN) + dokumanlar/documents + analitik/analytics sayfaları üretildi.');
