# Sosyal Medya Kart Üretici

`content.mjs`'teki gerçek site metninden (yeni metin yazılmaz) LinkedIn/Instagram
için hazır PNG kartlar üretir. 1080×1080 (kare, Instagram feed + LinkedIn tekli
gönderi) ve 1200×627 (LinkedIn geniş/link-önizleme) — retina (2×) kalitede.

## Üretim

```bash
node social/build-cards.mjs   # → social/dist/cards.html (24 kart, 12 tasarım × 2 boyut)
node social/export.mjs        # → social/output/*.png
```

`social/dist/` ve `social/output/` gitignore'da — `dist/` gibi üretilen çıktı,
commit edilmez. Yalnız `assets/og-image.png` (istatistik kartının geniş varyantı,
sitenin kendi link-önizleme görseli olarak) repoya dahildir.

## Mevcut kartlar (12 tasarım)
- **problem-1..6** — "Tanıdık geliyor mu?" 6 acı noktası (`content.mjs` → `problem.items`)
- **diff-1..4** — "Klasik yol vs Enflow" karşılaştırma (`content.mjs` → `diff.cards`)
- **stat-hero** — 29/43/37 istatistik + kapanış cümlesi (`content.mjs` → `value.cta`)
- **flow-chain** — 8 adımlık uçtan uca akış (`content.mjs` → `flow.steps`)

## Yeni kart eklemek
1. Metni **sadece** `../content.mjs`'e ekle (yeni bir `problem.items` maddesi,
   `diff.cards` kartı vb.) — burada elle metin yazılmaz.
2. `build-cards.mjs`'teki ilgili `.forEach(...)` zaten yeni maddeyi otomatik
   alır (problem/diff için). Yeni bir kart **türü** (örn. audience kartları)
   eklemek istersen `build-cards.mjs`'e yeni bir `xCard()` fonksiyonu + `social.css`'e
   karşılık gelen sınıflar eklenir (mevcut `.diff-block`/`.problem-text` desenine bak).
3. `node social/build-cards.mjs && node social/export.mjs`.

## Bağımlılık
Playwright kurulu değil — `scripts/capture-screenshots.mjs` ile aynı desen:
ana Enflow reposunun `tests/rbac/node_modules/@playwright/test`'ini `PW_PKG`
env var ile ödünç alır. Farklı bir makinede/yol varsa:

```bash
PW_PKG=/path/to/@playwright/test/index.js node social/export.mjs
```
