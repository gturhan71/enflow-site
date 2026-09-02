# Enflow — Tanıtım Sitesi

Karar vericiye (şirket sahibi/üst yönetim) yönelik, kısa-çarpıcı tek sayfalık
tanıtım (landing) sitesi. Enflow ana uygulama reposundan **bağımsız** — kendi
git geçmişi, kendi deploy'u.

**Tek doğruluk kaynağı:** `content.mjs` (TR + EN metin, tek yerde).

## Üretim
```bash
node build.mjs
# → dist/index.html    (TR, kök)
# → dist/en/index.html (EN)
```
Bağımlılık yok (`node_modules` gerekmez). Metni değiştirmek için **sadece
`content.mjs`**'i düzenle, sonra bu komutu çalıştır.

- `styles.css` — görsel tasarım (tek dosya)
- `icons.mjs` — elle yazılmış SVG ikon seti (harici kütüphane yok)
- `script.js` — scroll-reveal + mobil menü
- `assets/` — favicon + og-image dosyaları, `assets/screenshots/` (ekran turu görselleri)
- `scripts/capture-screenshots.mjs` — Enflow demo tenant'ından ekran turu için PNG yakalama aracı (bkz. altta)

## Sayfalar
- `/` (TR) / `/en/` (EN) — ana landing, tek sayfa akışı
- `/ekran-turu/` / `/en/product-tour/` — birim birim gerçek ekran görüntüleri + her birimin çalışma esası anlatımı (kaynak: `scripts/capture-screenshots.mjs` ile bir demo tenant'tan alınan görseller, `assets/screenshots/`)
- `/dokumanlar/` / `/en/documents/` — satış & pazarlama dokümanları (PPT/PDF, hazır olduklarında)
- `/analitik/` / `/en/analytics/` — Enflow'da yönetime sunulan **her** KPI/analitik/süreç-şeffaflığı özelliğinin eksiksiz kataloğu (109 madde, 10 kategori); içerik ana Enflow reposundaki gerçek kod/UI etiketlerinden derlenmiştir, uydurma madde yok

## Ekran Turu görselleri nasıl yenilenir
1. Enflow dev sunucusunu çalıştır (`localhost:3000`), bir demo tenant'a (kurgusal
   veri!) uygun rolle giriş yap.
2. Tarayıcı konsolunda `copy(JSON.stringify(Object.fromEntries(Object.entries(localStorage))))`
   çalıştır, çıktıyı `scripts/ls-seed.json`'a kaydet (gitignore'da — asla commit edilmez).
3. `node scripts/capture-screenshots.mjs` → `assets/screenshots/{slot}.jpg` (JPEG
   q82, 1x/1440×1024 — 16 slot, `content.mjs`'teki `productTour.groups[].shots[].slot`
   ile birebir eşleşir).
4. `node build.mjs` — `hasShot()` kontrolü var olan slotları otomatik görsele bağlar,
   eksik olan slotlar "hazırlanıyor" yer tutucusuyla gösterilir.
5. **Commit etmeden önce mutlaka görsel olarak gözden geçir** — gerçek müşteri/ihale
   adı sızmadığından emin ol (bkz. `scripts/capture-screenshots.mjs` başlığındaki uyarı).

## Lokal önizleme
```bash
python3 -m http.server 4300 --directory dist
```

## Yayın (Vercel)
`vercel.json` build komutunu (`node build.mjs`) ve çıktı dizinini (`dist`)
tanımlıyor. GitHub reposu Vercel'e bağlı (Import Git Repository) — `main`'e her
push otomatik yeniden deploy tetikler, ayrı bir CI adımı gerekmez.

Başka bir statik host (Netlify/Cloudflare Pages/GitHub Pages) kullanmak
istersen aynı ayar geçerli: build komutu `node build.mjs`, çıktı dizini `dist/`.

## İçerik değiştirirken dikkat
- Sahte müşteri logosu/testimonial/uydurma sayı **eklenmez** — ürünün henüz
  yayınlanabilir referansı yok; güven, mekanik kanıtla (otomatik zincir,
  denetim izi, danışman-modu güvencesi) kurulur.
- Her yeni bölüm hem `content.mjs`'teki `tr` hem `en` objesine eklenmeli (aynı
  anahtar şekli).
- Footer'daki "Ürün Wiki" linki Enflow ana reposundaki
  `https://gturhan71.github.io/Enflow/wiki/` adresine işaret eder (bu site ayrı
  deploy edildiği için göreli yol kullanılmaz).
