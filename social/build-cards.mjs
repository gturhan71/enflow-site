#!/usr/bin/env node
/* Sosyal medya kart HTML üretici — TEK doğruluk kaynağı: ../content.mjs.
 * Kullanım: node social/build-cards.mjs   →  social/dist/cards.html
 * Yeni metin yazmaz — ../content.mjs'teki mevcut alanlardan (problem.items,
 * diff.cards, value.cta, flow.steps) doğrudan kart üretir. Bağımlılık yok.
 */
import { writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { content } from '../content.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = join(HERE, 'dist');
const c = content.tr;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function shell(id, size, eyebrow, bodyHtml) {
  return `
  <div class="card" data-export-id="${id}" data-size="${size}">
    <div class="card-eyebrow">${esc(eyebrow)}</div>
    <div class="card-body">${bodyHtml}</div>
    <div class="card-footer">
      <div class="brand-symbol">E</div>
      <div class="brand-block">
        <span class="name">Enflow</span>
        <span class="url">enflow-site.vercel.app</span>
      </div>
    </div>
  </div>`;
}

function problemCard(item, i, size) {
  return shell(`problem-${i + 1}`, size, 'Tanıdık geliyor mu?', `<p class="problem-text">${esc(item.text)}</p>`);
}

function diffCard(card, i, size) {
  const body = `
    <div class="diff-block">
      <div class="diff-row old"><span class="diff-tag">${esc(card.oldLabel)}</span><p>${esc(card.oldText)}</p></div>
      <div class="diff-row new"><span class="diff-tag">${esc(card.newLabel)}</span><p>${esc(card.newText)}</p></div>
    </div>`;
  return shell(`diff-${i + 1}`, size, 'Neden Enflow', body);
}

function statCard(size) {
  // value.cta.text: "29 kokpit paneli · 43 analitik rapor · 37 süreç şeffaflığı özelliği — hepsi tek platformda."
  const [statsPart, taglinePart] = c.value.cta.text.split('—').map((s) => s.trim());
  const stats = statsPart.split('·').map((s) => s.trim());
  const blocks = stats
    .map((s) => {
      const m = s.match(/^(\d+)\+?\s+(.*)$/);
      if (!m) return '';
      return `<div class="stat-block"><div class="stat-num">${esc(m[1])}</div><div class="stat-label">${esc(m[2])}</div></div>`;
    })
    .join('');
  const body = `<div class="stat-row">${blocks}</div><p class="stat-tagline">${esc(taglinePart || '')}</p>`;
  return shell('stat-hero', size, 'Karar Vericiye Değer', body);
}

function flowCard(size) {
  const nodes = c.flow.steps
    .map((s, i, arr) => {
      const cls = i === 0 ? 'is-first' : i === arr.length - 1 ? 'is-last' : '';
      return `<div class="chain-node ${cls}"><div class="idx">${i + 1}</div><div class="lbl">${esc(s.label)}</div></div>`;
    })
    .join('');
  const body = `<div class="chain-grid">${nodes}</div>`;
  return shell('flow-chain', size, 'Uçtan Uca Akış', body);
}

// productTour.groups[].shots[] içinden slot'a göre (unit + shot verisi) bulur.
function findShot(slot) {
  for (const group of c.productTour.groups) {
    const shot = group.shots.find((s) => s.slot === slot);
    if (shot) return { unit: group.unit, ...shot };
  }
  throw new Error(`Ekran turu slot'u bulunamadı: ${slot}`);
}

// Gerçek ürün ekranı kartı — görsel assets/screenshots/'tan, başlık/açıklama
// content.mjs → productTour.groups'tan (yeni metin yazılmaz).
function shotCard(slot, i, size) {
  const shot = findShot(slot);
  const body = `
    <div class="shot-body">
      <div class="shot-frame"><img src="../../assets/screenshots/${shot.slot}.jpg" alt="${esc(shot.title)}" /></div>
      <div class="shot-text">
        <span class="shot-unit">${esc(shot.unit)}</span>
        <h3 class="shot-title">${esc(shot.title)}</h3>
        <p class="shot-caption">${esc(shot.caption)}</p>
      </div>
    </div>`;
  return shell(`shot-${i + 1}`, size, 'Gerçek Ürün Ekranı', body);
}

// İnteraktif önizleme (mock demo) tanıtım kartı — nav.demoPreview + hero'dan
// (yeni metin yazılmaz).
function demoCard(size) {
  const demoHost = c.nav.demoPreview.href.replace(/^https?:\/\//, '');
  const body = `
    <p class="demo-tagline">${esc(c.hero.ctaSecondary)} <span class="demo-arrow">&rarr;</span></p>
    <p class="demo-sub">${esc(c.hero.subtitle)}</p>
    <div class="demo-url-chip">${esc(demoHost)}</div>`;
  return shell('demo-cta', size, c.nav.demoPreview.label, body);
}

const cards = [];
for (const size of ['square', 'wide']) {
  c.problem.items.forEach((item, i) => cards.push(problemCard(item, i, size)));
  c.diff.cards.forEach((card, i) => cards.push(diffCard(card, i, size)));
  cards.push(statCard(size));
  cards.push(flowCard(size));
  ['01-yonetim-kokpiti', '05-crm-genel-bakis', '10-sozlesme-yonetimi'].forEach((slot, i) =>
    cards.push(shotCard(slot, i, size)),
  );
  cards.push(demoCard(size));
}

const html = `<!doctype html>
<html lang="tr">
<head>
<meta charset="UTF-8" />
<title>Enflow — Sosyal Medya Kartları</title>
<link rel="stylesheet" href="./social.css" />
</head>
<body>
${cards.join('\n')}
</body>
</html>`;

mkdirSync(DIST, { recursive: true });
writeFileSync(join(DIST, 'cards.html'), html);
copyFileSync(join(HERE, 'social.css'), join(DIST, 'social.css'));

console.log(`✓ social/dist/cards.html — ${cards.length} kart (${cards.length / 2} tasarım × 2 boyut) üretildi.`);
