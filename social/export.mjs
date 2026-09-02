#!/usr/bin/env node
/**
 * Sosyal medya kartlarını PNG'ye döker.
 *
 * social/dist/cards.html'i (node social/build-cards.mjs ile üretilir) headless
 * Chromium'da açar, her [data-export-id] kartını kendi piksel boyutunda
 * (1080×1080 kare / 1200×627 LinkedIn geniş) retina-kalite PNG olarak
 * social/output/{id}-{size}.png'ye kaydeder.
 *
 * Playwright'ı enflow_site kendi node_modules'una kurmaz — ana Enflow
 * reposunun tests/rbac'inde zaten kurulu @playwright/test'i ödünç alır
 * (bkz. scripts/capture-screenshots.mjs — aynı desen).
 *
 * Kullanım:
 *   node social/build-cards.mjs && node social/export.mjs
 *
 * ORTAM DEĞİŞKENİ:
 *   PW_PKG — @playwright/test paket yolu (varsayılan: Enflow tests/rbac)
 */
import { existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const PW_PKG =
  process.env.PW_PKG ||
  '/Users/gokhan_turhan/Projects/04_Web_Platforms/Enflow/tests/rbac/node_modules/@playwright/test/index.js';
const CARDS_HTML = join(HERE, 'dist', 'cards.html');
const OUT = join(HERE, 'output');

if (!existsSync(CARDS_HTML)) {
  console.error('✗ social/dist/cards.html bulunamadı — önce `node social/build-cards.mjs` çalıştır.');
  process.exit(1);
}
if (!existsSync(PW_PKG)) {
  console.error(`✗ Playwright bulunamadı: ${PW_PKG}\n  Farklı bir yoldaysa PW_PKG env var ile belirt.`);
  process.exit(1);
}

const SIZES = { square: { width: 1080, height: 1080 }, wide: { width: 1200, height: 627 } };

async function main() {
  const { chromium } = (await import(PW_PKG)).default;
  mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  await page.goto(`file://${CARDS_HTML}`);

  const cards = await page.locator('[data-export-id]').all();
  let count = 0;
  for (const card of cards) {
    const id = await card.getAttribute('data-export-id');
    const size = await card.getAttribute('data-size');
    const dims = SIZES[size];
    if (!dims) continue;
    await page.setViewportSize(dims);
    const outPath = join(OUT, `${id}-${size}.png`);
    await card.screenshot({ path: outPath });
    count++;
    console.log(`  ${id}-${size}.png`);
  }

  await browser.close();
  console.log(`✓ ${count} PNG → social/output/`);
}

main().catch((err) => {
  console.error('✗ Export başarısız:', err.message);
  process.exit(1);
});
