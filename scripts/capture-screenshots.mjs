/**
 * Ekran Turu — ekran görüntüsü yakalama (yerel, tek seferlik dev aracı).
 *
 * Enflow uygulamasını (varsayılan http://localhost:3000) tenant / rol oturumuyla
 * gezip her ekranı PNG olarak `assets/screenshots/`'a kaydeder. Uygulamada URL
 * yönlendirme yok (activeTab React state), bu yüzden sidebar/tab'lara tıklar.
 *
 * ÖN KOŞUL — demo verisi temiz olmalı:
 *   Yakalamadan önce Enflow seed'indeki kurum/müşteri/ihale adları ve İKN
 *   numaraları açıkça kurgusal değerlerle değiştirilmiş olmalı. Aksi halde
 *   gerçek kurum adları herkese açık siteye sızar.
 *
 * KURULUM:
 *   1. Enflow dev sunucusunu çalıştır (localhost:3000).
 *   2. Tarayıcıda giriş yap, DevTools console:
 *        copy(JSON.stringify(Object.fromEntries(Object.entries(localStorage))))
 *      Çıktıyı `scripts/ls-seed.json` olarak kaydet. (auth token ~12 saat geçerli)
 *   3. node scripts/capture-screenshots.mjs
 *
 * ORTAM DEĞİŞKENLERİ:
 *   ENFLOW_URL   — uygulama adresi (varsayılan http://localhost:3000)
 *   PW_PKG       — @playwright/test paket yolu (varsayılan: Enflow tests/rbac)
 */
import { readFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const BASE = process.env.ENFLOW_URL || 'http://localhost:3000';
const PW_PKG =
  process.env.PW_PKG ||
  '/Users/gokhan_turhan/Projects/04_Web_Platforms/Enflow/tests/rbac/node_modules/@playwright/test/index.js';
const OUT = join(HERE, '..', 'assets', 'screenshots');

const { chromium } = (await import(PW_PKG)).default;
mkdirSync(OUT, { recursive: true });
const lsSeed = JSON.parse(readFileSync(join(HERE, 'ls-seed.json')));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function settle(page, ms = 1800) {
  try { await page.waitForLoadState('networkidle', { timeout: 8000 }); } catch {}
  await sleep(ms);
}

async function clickNav(page, label, { expandFirst } = {}) {
  const btn = page.locator('nav button', { hasText: label }).first();
  if (expandFirst) {
    const parent = page.locator('nav button', { hasText: expandFirst }).first();
    if (!(await btn.isVisible().catch(() => false))) { await parent.click(); await sleep(500); }
    if (!(await btn.isVisible().catch(() => false))) { await parent.click(); await sleep(500); }
  }
  await btn.scrollIntoViewIfNeeded();
  await btn.click();
}

async function clickTab(page, name) {
  const btn = page.getByRole('button', { name, exact: false }).first();
  await btn.scrollIntoViewIfNeeded();
  await btn.click();
}

// slot adı  →  content.mjs productTour.groups[].shots[].slot ile birebir
const STEPS = [
  ['01-yonetim-kokpiti',  async (p) => { await clickNav(p, 'Dashboard'); }],
  ['02-buyume-analitigi', async (p) => { await clickNav(p, 'Dashboard'); await settle(p, 1200); await clickTab(p, 'Büyüme Analitiği'); }],
  ['03-birim-genel-bakis', async (p) => { await clickNav(p, 'Dashboard'); await settle(p, 1200); await clickTab(p, 'Genel Bakış'); await p.evaluate(() => window.scrollBy(0, 1400)); }],
  ['04-karlilik',         async (p) => { await clickNav(p, 'Kârlılık'); }],
  ['05-crm-genel-bakis',  async (p) => { await clickNav(p, 'Genel Bakış', { expandFirst: 'CRM & Müşteri' }); }],
  ['06-crm-firsatlar',    async (p) => { await clickNav(p, 'Fırsatlar', { expandFirst: 'CRM & Müşteri' }); }],
  ['07-presales-bom',     async (p) => { await clickNav(p, 'BoM & Tasarım', { expandFirst: 'Presales & Dizayn' }); }],
  ['08-satinalma',        async (p) => { await clickNav(p, 'Satın Alma'); }],
  ['09-finans',           async (p) => { await clickNav(p, 'Finans'); }],
  ['10-sozlesme-yonetimi', async (p) => { await clickNav(p, 'Sözleşme Yönetimi'); }],
  ['11-proje-yonetimi',   async (p) => { await clickNav(p, 'Proje Yönetimi'); }],
  ['13-genel-hususlar',   async (p) => { await clickNav(p, 'Genel Hususlar'); }],
  ['14-denetim-izi',      async (p) => { await clickNav(p, 'Denetim İzi', { expandFirst: 'Şirket Ayarları' }); }],
  ['15-sanal-agentlar',   async (p) => { await clickNav(p, 'Sanal Agentlar', { expandFirst: 'Şirket Ayarları' }); }],
  ['16-surec-tasarimcisi', async (p) => { await clickNav(p, 'İş Akışı', { expandFirst: 'Şirket Ayarları' }); }],
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1024 }, deviceScaleFactor: 2, locale: 'tr-TR' });
const page = await ctx.newPage();
await page.addInitScript((seed) => {
  for (const [k, v] of Object.entries(seed)) localStorage.setItem(k, v);
}, lsSeed);
await page.goto(BASE, { waitUntil: 'domcontentloaded' });
await settle(page, 3000);

const results = [];
for (const [name, fn] of STEPS) {
  try {
    await fn(page);
    await settle(page);
    await page.evaluate(() => window.scrollTo(0, 0)).catch(() => {});
    await sleep(300);
    await page.screenshot({ path: join(OUT, `${name}.png`) });
    results.push(`  OK   ${name}`);
  } catch (e) {
    results.push(`  FAIL ${name}  — ${e.message.split('\n')[0]}`);
  }
}
await browser.close();
console.log(`\nÇıktı: ${OUT}\n` + results.join('\n'));
