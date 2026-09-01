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
  const links = c.nav.links.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join('');
  return `
  <header class="site-header">
    <div class="wrap">
      <a href="${home}#top" class="brand"><span class="brand-mark">E</span>${esc(c.nav.brand)}</a>
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
      const cls = i === 0 ? 'is-first' : i === arr.length - 1 ? 'is-last' : '';
      const node = `<span class="chain-node ${cls}">${esc(label)}</span>`;
      return i < arr.length - 1 ? node + `<span class="chain-arrow">${icon('arrow')}</span>` : node;
    })
    .join('');
  return `
  <section class="hero" id="top">
    <div class="hero-mesh"></div>
    <div class="wrap hero-inner">
      <div class="hero-badge reveal"><span class="dot"></span>${esc(c.hero.eyebrow)}</div>
      <h1 class="reveal">${nl2br(c.hero.title)}</h1>
      <p class="hero-subtitle reveal">${esc(c.hero.subtitle)}</p>
      <div class="hero-actions reveal">
        <a class="btn btn-primary" href="#cta">${esc(c.hero.ctaPrimary)}</a>
        <a class="btn btn-ghost" href="#akis">${esc(c.hero.ctaSecondary)}</a>
      </div>
      <div class="hero-chain reveal">
        <div class="chain-track">${chainNodes}</div>
      </div>
    </div>
  </section>`;
}

function renderProblem(c) {
  const items = c.problem.items
    .map(
      (it) => `
      <div class="card problem-card reveal">
        <div class="card-icon">${icon(it.icon)}</div>
        <p>${esc(it.text)}</p>
      </div>`
    )
    .join('');
  return `
  <section class="section" id="sorun">
    <div class="wrap">
      <div class="section-head reveal">
        <div class="eyebrow">${esc(c.problem.eyebrow)}</div>
        <h2 class="section-title">${esc(c.problem.title)}</h2>
        <p class="section-subtitle">${esc(c.problem.subtitle)}</p>
      </div>
      <div class="problem-grid">${items}</div>
    </div>
  </section>`;
}

function renderDiff(c) {
  const cards = c.diff.cards
    .map(
      (card) => `
      <div class="card diff-card reveal">
        <div class="diff-row old">
          <span class="diff-tag">${esc(card.oldLabel)}</span>
          <p>${esc(card.oldText)}</p>
        </div>
        <div class="diff-row new">
          <span class="diff-tag">${esc(card.newLabel)}</span>
          <p>${esc(card.newText)}</p>
        </div>
      </div>`
    )
    .join('');
  return `
  <section class="section" id="fark">
    <div class="wrap">
      <div class="section-head reveal">
        <div class="eyebrow">${esc(c.diff.eyebrow)}</div>
        <h2 class="section-title">${esc(c.diff.title)}</h2>
        <p class="section-subtitle">${esc(c.diff.subtitle)}</p>
      </div>
      <div class="diff-grid">${cards}</div>
    </div>
  </section>`;
}

function renderFlow(c) {
  const steps = c.flow.steps
    .map((step, i, arr) => {
      const isLast = i === arr.length - 1;
      return `
      <div class="flow-step">
        <div class="flow-step-inner">
          ${step.auto ? '<span class="auto-badge">Auto</span>' : ''}
          <div class="flow-num">${String(i + 1).padStart(2, '0')}</div>
          <h4>${esc(step.label)}</h4>
          <p>${esc(step.desc)}</p>
        </div>
        ${!isLast ? `<span class="flow-connector">${icon('arrow')}</span>` : ''}
      </div>`;
    })
    .join('');
  return `
  <section class="section" id="akis">
    <div class="wrap">
      <div class="section-head reveal">
        <div class="eyebrow">${esc(c.flow.eyebrow)}</div>
        <h2 class="section-title">${esc(c.flow.title)}</h2>
        <p class="section-subtitle">${esc(c.flow.subtitle)}</p>
      </div>
      <div class="flow-stepper reveal">${steps}</div>
      <div class="flow-note"><span class="dot"></span>${esc(c.flow.autoNote)}</div>
    </div>
  </section>`;
}

function renderValue(c) {
  const cards = c.value.cards
    .map(
      (v) => `
      <div class="card reveal">
        <div class="card-icon">${icon(v.icon)}</div>
        <h4>${esc(v.title)}</h4>
        <p>${esc(v.text)}</p>
      </div>`
    )
    .join('');
  return `
  <section class="section" id="deger">
    <div class="wrap">
      <div class="section-head reveal">
        <div class="eyebrow">${esc(c.value.eyebrow)}</div>
        <h2 class="section-title">${esc(c.value.title)}</h2>
      </div>
      <div class="value-grid">${cards}</div>
    </div>
  </section>`;
}

function renderTrust(c) {
  const items = c.trust.items
    .map(
      (t) => `
      <div class="card reveal">
        <div class="card-icon">${icon(t.icon)}</div>
        <h4>${esc(t.title)}</h4>
        <p>${esc(t.text)}</p>
      </div>`
    )
    .join('');
  return `
  <section class="section" id="guven">
    <div class="wrap">
      <div class="section-head reveal">
        <div class="eyebrow">${esc(c.trust.eyebrow)}</div>
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
      <div class="card reveal">
        <div class="card-icon">${icon(a.icon)}</div>
        <h4>${esc(a.title)}</h4>
        <p>${esc(a.text)}</p>
      </div>`
    )
    .join('');
  return `
  <section class="section" id="kitle">
    <div class="wrap">
      <div class="section-head reveal">
        <div class="eyebrow">${esc(c.audience.eyebrow)}</div>
        <h2 class="section-title">${esc(c.audience.title)}</h2>
      </div>
      <div class="audience-grid">${cards}</div>
    </div>
  </section>`;
}

function renderDocumentCard(doc, labels) {
  const isReady = doc.status === 'ready' && doc.href;
  const badge = isReady ? '' : `<span class="doc-soon-badge">${esc(labels.soonLabel)}</span>`;
  const action = isReady
    ? `<a class="btn btn-ghost btn-sm" href="${esc(doc.href)}" target="_blank" rel="noopener">${icon('arrow')}${esc(labels.downloadLabel)}</a>`
    : `<span class="btn btn-ghost btn-sm is-disabled">${icon('clock')}${esc(labels.soonLabel)}</span>`;
  return `
    <div class="card doc-card reveal">
      ${badge}
      <span class="doc-format">${icon('filetext')}${esc(doc.format)}</span>
      <h4>${esc(doc.title)}</h4>
      <p>${esc(doc.description)}</p>
      ${action}
    </div>`;
}

function renderDocuments(c) {
  const cards = c.documents.items.map((d) => renderDocumentCard(d, c.documents)).join('');
  return `
  <section class="section" id="dokumanlar">
    <div class="wrap">
      <div class="section-head reveal">
        <div class="eyebrow">${esc(c.documents.eyebrow)}</div>
        <h2 class="section-title">${esc(c.documents.title)}</h2>
        <p class="section-subtitle">${esc(c.documents.subtitle)}</p>
      </div>
      <div class="doc-grid">${cards}</div>
      <p class="doc-empty-note reveal">${esc(c.documents.emptyNote)}</p>
    </div>
  </section>`;
}

function renderDocumentsPageHead(c) {
  return `
  <section class="page-head">
    <div class="wrap">
      <a class="back-link reveal" href="${c.nav.home}">${icon('arrow', 'icon icon-flip')}${esc(c.documents.backLabel)}</a>
    </div>
  </section>`;
}

function renderCta(c) {
  return `
  <section class="section cta-section" id="cta">
    <div class="wrap">
      <div class="cta-card reveal">
        <h2>${esc(c.cta.title)}</h2>
        <p class="section-subtitle">${esc(c.cta.subtitle)}</p>
        <div class="cta-actions">
          <a class="btn btn-primary" href="mailto:${esc(c.cta.email)}">${icon('mail')}${esc(c.cta.buttonLabel)}</a>
          <a class="btn btn-ghost" href="mailto:${esc(c.cta.email)}">${esc(c.cta.emailLabel)}</a>
        </div>
      </div>
    </div>
  </section>`;
}

function renderFooter(c) {
  return `
  <footer class="site-footer">
    <div class="wrap">
      <p>&copy; ${new Date().getFullYear()} ${esc(c.footer.text)}</p>
      <div class="footer-links">
        <a href="${c.footer.wikiHref}">${esc(c.footer.wikiLabel)}</a>
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
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${styleSrc}" />
</head>
<body>
<div class="bg-glow"></div>
<div class="bg-grid"></div>
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
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${styleSrc}" />
</head>
<body>
<div class="bg-glow"></div>
<div class="bg-grid"></div>
${renderNav(c, otherHref)}
${renderDocumentsPageHead(c)}
${renderDocuments(c)}
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

copyFileSync(join(HERE, 'styles.css'), join(DIST, 'styles.css'));
copyFileSync(join(HERE, 'script.js'), join(DIST, 'script.js'));
if (existsSync(join(HERE, 'robots.txt'))) copyFileSync(join(HERE, 'robots.txt'), join(DIST, 'robots.txt'));

const ASSETS = join(HERE, 'assets');
for (const f of ['favicon.ico', 'favicon-96x96.png', 'apple-touch-icon.png']) {
  const src = join(ASSETS, f);
  if (existsSync(src)) copyFileSync(src, join(DIST, f));
}

console.log('✓ dist/index.html (TR) + dist/en/index.html (EN) + dokumanlar/documents sayfaları üretildi.');
