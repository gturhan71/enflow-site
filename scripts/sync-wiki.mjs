#!/usr/bin/env node
/**
 * Ürün Wiki'sini ana Enflow reposundan bu siteye kopyalar.
 *
 * Wiki'nin gerçek kaynağı ana Enflow reposundaki `walkthrough.md §27`'dir;
 * o repoda `node wiki/build.mjs` çalıştırılınca `wiki/index.html` üretilir
 * (bağımsız, tek dosya — inline CSS, harici asset yok). Bu script o üretilmiş
 * dosyayı buraya (`wiki/index.html`) kopyalar; `build.mjs` de onu
 * `dist/wiki/index.html` olarak yayınlar.
 *
 * KULLANIM (ana repoda wiki içeriği değiştiğinde):
 *   1. Ana repoda: node wiki/build.mjs   (walkthrough.md §27 → wiki/index.html)
 *   2. Burada:     node scripts/sync-wiki.mjs
 *   3.             node build.mjs && git add -A && git commit && git push
 *
 * ORTAM DEĞİŞKENİ:
 *   ENFLOW_WIKI_SRC — ana repodaki wiki/index.html'in yolu
 *                     (varsayılan: sibling 04_Web_Platforms/Enflow/wiki/index.html,
 *                     capture-screenshots.mjs'teki PW_PKG ile aynı desen)
 */
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC =
  process.env.ENFLOW_WIKI_SRC ||
  '/Users/gokhan_turhan/Projects/04_Web_Platforms/Enflow/wiki/index.html';
const DEST = join(HERE, '..', 'wiki', 'index.html');

if (!existsSync(SRC)) {
  console.error(`✗ Kaynak bulunamadı: ${SRC}\n  Farklı bir yoldaysa ENFLOW_WIKI_SRC env var ile belirt.`);
  process.exit(1);
}

mkdirSync(dirname(DEST), { recursive: true });
copyFileSync(SRC, DEST);
const { mtime, size } = statSync(DEST);
console.log(`✓ wiki/index.html güncellendi (${(size / 1024).toFixed(1)} KB, kaynak son değişim: ${mtime.toISOString()})`);
console.log(`  Şimdi: node build.mjs && git add -A && git commit -m "chore(wiki): senkronize et" && git push`);
