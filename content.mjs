// Enflow tanıtım sitesi — TEK içerik kaynağı (TR + EN).
// Metni değiştirmek için SADECE bu dosyayı düzenle, sonra `node build.mjs` çalıştır.

export const content = {
  tr: {
    lang: 'tr',
    htmlLang: 'tr',
    meta: {
      title: 'Enflow — Süreçleriniz artık birbirini beklemesin',
      description:
        'Ziyaretten tahsilata kadar tüm B2B sürecinizi tek otomatik zincirde birleştiren kurumsal platform. Kopuk araçlar yok, kayıp bilgi yok.',
    },
    nav: {
      brand: 'Enflow',
      links: [
        { href: '/#sorun', label: 'Sorun' },
        { href: '/#fark', label: 'Fark' },
        { href: '/#akis', label: 'Nasıl Çalışır' },
        { href: '/#deger', label: 'Değer' },
        { href: '/#guven', label: 'Güven' },
        { href: '/ekran-turu/', label: 'Ekran Turu' },
        { href: '/analitik/', label: 'Analitik' },
        { href: '/dokumanlar/', label: 'Dökümanlar' },
      ],
      cta: 'Demo Talep Et',
      langSwitch: { href: '/en/', label: 'EN' },
      home: '/',
    },
    hero: {
      title: 'Süreçleriniz artık\nbirbirini beklemesin.',
      subtitle:
        'Ziyaretten tahsilata kadar tüm B2B sürecinizi tek zincirde otomatikleştiren platform. Bir adım biter, bir sonraki kendiliğinden açılır — hiçbir şey birimler arasında kaybolmaz.',
      ctaPrimary: 'Demo Talep Et',
      ctaSecondary: 'Nasıl çalıştığını gör',
      chain: ['Ziyaret', 'CRM', 'Presales', 'Teklif', 'Sözleşme', 'Proje', 'Satınalma', 'Finans'],
    },
    problem: {
      title: 'Büyüyen her şirket aynı noktada tıkanır.',
      subtitle:
        'Süreç sayısı arttıkça sorumluluk dağılır. Enflow olmadan çoğu şirket şunlardan en az üçünü yaşıyor:',
      items: [
        { icon: 'search', text: 'Satışın hangi aşamada olduğunu WhatsApp ve e-postadan takip ediyorsunuz.' },
        { icon: 'layers', text: 'Hangi teklif versiyonu güncel, kim onayladı — kimse emin değil.' },
        { icon: 'clock', text: 'Sözleşme imzalandı ama proje ekibi günler sonra haberdar oluyor.' },
        { icon: 'chart', text: 'Bir işin kâr mı zarar mı ettiğini ancak ay sonunda öğreniyorsunuz.' },
        { icon: 'alert', text: 'Bir onay nerede bekliyor, süreç nerede tıkandı — görünmüyor.' },
        { icon: 'chainbroken', text: 'Her birim ayrı bir araç kullanıyor; hiçbiri birbirini görmüyor.' },
      ],
    },
    diff: {
      title: 'Kopuk araçlar değil, tek bir zincir.',
      subtitle:
        'Piyasadaki çoğu çözüm satışta biter ya da genel amaçlı bir ERP\'yi size uydurmanızı bekler. Enflow, B2B\'nin gerçek yaşam döngüsü için baştan tasarlandı.',
      cards: [
        {
          oldLabel: 'Klasik yol',
          oldText: 'CRM burada, teklif Excel\'de, sözleşme e-postada, proje ayrı bir tabloda.',
          newLabel: 'Enflow',
          newText: 'Ziyaretten tahsilata tek zincir — her adım bir öncekinin verisiyle otomatik açılır.',
        },
        {
          oldLabel: 'Klasik yol',
          oldText: 'Bir aşama bitince bir sonraki kişiye hatırlatma göndermeniz, elle devretmeniz gerekir.',
          newLabel: 'Enflow',
          newText: 'Otomatik devir halkaları: ihale kazanılınca sözleşme, imza tamamlanınca proje, proje ilerleyince satınalma ve fatura kendiliğinden açılır.',
        },
        {
          oldLabel: 'Klasik yol',
          oldText: 'Genel amaçlı yazılımların onay akışı sizin organizasyon yapınıza uymaz, elle kurgulanır.',
          newLabel: 'Enflow',
          newText: 'Gerçek kurumsal onay hiyerarşisi kutudan çıkar — Finans, İGB, Genel Müdür, KSU gibi çok katmanlı onay swimlane\'leri hazır şablonla gelir.',
        },
        {
          oldLabel: 'Klasik yol',
          oldText: 'Kadro yetişmez, boş koltuklar süreci durdurur.',
          newLabel: 'Enflow',
          newText: 'Sanal agent\'lar boş koltuğu doldurur, öneri ve triyaj yapar — ama para ve hukuk kararı daima insanda kalır. Asla otonom değil.',
        },
      ],
    },
    specs: {
      title: 'Açık, Güçlü ve Çok Kiracılı Mimari.',
      subtitle: 'Enflow, kurumsal yük altında sıfır bağımlılık sürtünmesiyle çalışacak şekilde inşa edildi.',
      items: [
        { label: 'Frontend', value: 'React 19 · TypeScript 6 · Vite 8 Rolldown · Tailwind CSS v4' },
        { label: 'Backend & ORM', value: 'Express 5 · Prisma 7 · SQLite (Geliştirme) / PostgreSQL 14+ (Üretim)' },
        { label: 'Kurumsal Güvenlik', value: '486/486 RBAC Testi · Ed25519 İmzalı Lisanslama · bcryptjs & JWT' },
        { label: 'Sistem Kapsamı', value: '64 Veri Modeli · 36 API Alanı · 29 Kokpit Ekranı · 8 Sanal Agent' },
      ],
    },
    flow: {
      title: 'Bir zincir, sekiz birim, tek kayıt.',
      subtitle: 'Her halka, elle takip etmeniz gerekmeyen otomatik bir devir ve denetim izi üretir.',
      steps: [
        { label: 'Ziyaret', desc: 'Saha ziyareti planlanır, GPS ve günlük rapor kaydedilir.', input: 'Müşteri adresi & ziyaret notu', output: 'Fırsat taslağı & saha tutanağı', role: 'Saha Satış' },
        { label: 'CRM & Pipeline', desc: 'Fırsat açılır, müşteri sağlık skoru ve bütçe takip edilir.', input: 'Müşteri bütçesi & karar vericiler', output: 'Presales görev ataması & hijyen skoru', role: 'Satış / CRM Agent' },
        { label: 'Presales & BoM', desc: 'Malzeme listesi (BoM) ve maliyet modeli hazırlanır.', input: 'Şartname & ürün gereksinimleri', output: 'Maliyet analizi & dip marj sınırı', role: 'Teknik Presales' },
        { label: 'Teklif & Müzakere', desc: 'Versiyonlu teklif PDF, marj korumalı pazarlık günlüğü.', input: 'Dinamik iskonto & ödeme vadesi', output: 'İmzalı teklif & revizyon kaydı', role: 'Satış Yönetimi' },
        { label: 'İhale & Sözleşme', desc: 'Evrak checklist\'i, AI şartname analizi ve imza akışı.', input: 'KİK/şartname evrakı & teminat mektubu', output: 'Onaylı sözleşme kaydı & risk skoru', auto: true, role: 'Hukuk / Tender Agent (Danışman)' },
        { label: 'Proje Yürütme', desc: 'Milestone, WBS iş paketleri ve canlı karlılık grafiği.', input: 'Proje takvimi & teslim taşları', output: 'Canlı marj & satınalma talepleri', auto: true, role: 'Proje Ekibi / Project Agent' },
        { label: 'Satınalma & Stok', desc: 'Tedarikçi teklif kıyaslama, PO siparişi ve teslimat.', input: 'Onaylı malzeme talebi & teklifler', output: 'Satınalma siparişi (PO) & irsaliye', auto: true, role: 'Satınalma / Procurement Agent' },
        { label: 'Finans & Tahsilat', desc: 'e-Fatura, banka mutabakatı ve tahsilat kapanışı.', input: 'Tamamlanan milestone & teslim tutanağı', output: 'e-Fatura, KDV & nakit mutabakatı', auto: true, role: 'Finans / Finance Agent (Danışman)' },
      ],
      autoNote: 'auto = otomatik devir',
    },
    value: {
      title: 'Şirketinizin nabzını gerçek zamanlı tutun.',
      cards: [
        {
          icon: 'chart',
          title: 'Gerçek zamanlı karlılık',
          text: 'Planlanan, gerçekleşen ve tahmini marj her projede canlı hesaplanır — ay sonunu beklemezsiniz.',
        },
        {
          icon: 'filetext',
          title: 'Tam denetim izi',
          text: 'Kim, neyi, ne zaman değiştirdi — her mutasyon kayıt altında, sorumluluk her zaman net.',
        },
        {
          icon: 'alertcircle',
          title: 'Onay şeffaflığı',
          text: 'Bir onay nerede bekliyor, süreç nerede tıkandı — dashboard\'da anında görünür.',
        },
        {
          icon: 'bot',
          title: 'Sanal agent kapasitesi',
          text: '8 birimde boş koltuğu dolduran deterministik dijital işgücü — kapasite eksikliği artık süreci durdurmaz.',
        },
      ],
      cta: {
        text: '29 kokpit paneli · 43 analitik rapor · 37 süreç şeffaflığı özelliği — hepsi tek platformda.',
        buttonLabel: 'Tüm panoları incele',
        href: '/analitik/',
      },
    },
    trust: {
      title: 'Otomasyon, kontrolü elinizden almaz.',
      subtitle:
        'Bir platforma tüm satış ve finans verinizi emanet ederken güven şart. Enflow\'da otomasyonun sınırları nettir.',
      items: [
        {
          icon: 'lock',
          title: 'Çok kiracılı izolasyon',
          text: 'Her şirketin verisi tam izole; kritik alanlar (IBAN, vergi no, API anahtarı) şirkete özel anahtarla şifrelenir.',
        },
        {
          icon: 'scale',
          title: 'Para & hukuk daima danışman',
          text: 'Finans ve hukuk agent\'ları asla otonom eylem almaz — yalnızca önerir, karar her zaman yetkili kişide kalır.',
        },
        {
          icon: 'checkcircle',
          title: 'Her adım izlenebilir',
          text: 'Aktör kim — insan mı, agent mı — her kayıtta açıkça etiketlenir; hiçbir işlem kaynağı belirsiz kalmaz.',
        },
      ],
    },
    audience: {
      title: 'Birden fazla birimin ortak bir süreçte buluşması gereken her kurum için.',
      cards: [
        { icon: 'building', title: 'KOBİ ve kurumlar', text: 'Satış, ihale, sözleşme, proje ve finansı tek platformda; Excel + e-posta dağınıklığına son.' },
        { icon: 'briefcase', title: 'Üst yönetim', text: 'Gerçek zamanlı yönetim raporları, birim metrikleri, darboğaz analizi ve karlılık paneli.' },
        { icon: 'users', title: 'Satış ekipleri', text: 'CRM, fırsat hijyeni, teklif versiyonlama ve canlı pazarlık.' },
        { icon: 'truck', title: 'Presales & satınalma', text: 'Malzeme listesi, maliyet analizi, tedarikçi kıyaslama ve teslimat takibi.' },
        { icon: 'gavel', title: 'Sözleşme & hukuk', text: 'Evrak/imza akışı, onay zincirleri ve doküman kodlama.' },
        { icon: 'filetext', title: 'Kamu ihalesi firmaları', text: 'İhale takibi, uygunluk checklist\'i ve teminat mektubu yönetimi.' },
      ],
    },
    documents: {
      title: 'Satış & Pazarlama Dokümanları',
      subtitle: 'Enflow\'ün imkan ve kabiliyetlerini karar vericiye anlatan sunum ve referans dokümanları burada yayınlanır.',
      emptyNote: 'Dokümanlar hazırlanıyor — hazır olduklarında bu sayfadan indirilebilecek.',
      backLabel: 'Ana sayfaya dön',
      soonLabel: 'Yakında',
      downloadLabel: 'İndir',
      items: [
        {
          title: 'Ürün Tanıtım Sunumu',
          description: 'Enflow\'ün uçtan uca akışını, temel farklarını ve karar vericiye sağladığı değeri özetleyen sunum.',
          format: 'PPT',
          status: 'soon',
        },
        {
          title: 'Enflow Genel Bakış',
          description: 'Karar vericiler için tek sayfalık ürün özeti — sorun, çözüm ve fark tek bakışta.',
          format: 'PDF',
          status: 'soon',
        },
      ],
    },
    analytics: {
      title: 'KPI & Monitör Panelleri',
      subtitle:
        'Enflow\'da yönetime sunulan her kokpit kartı, analitik rapor ve süreç-şeffaflığı özelliği — tek sayfada, olduğu gibi.',
      backLabel: 'Ana sayfaya dön',
      categories: [
        {
          title: 'Yönetim Kokpiti',
          intro: 'Her rolün girişte gördüğü, role göre özelleştirilebilen ana panel — 26 KPI kartı + kritik uyarı şeridi.',
          items: [
            { name: 'Genel KPI Özeti', desc: 'Kazanım oranı, açık pipeline, kazanılan/kaybedilen fırsat sayısı tek bakışta.' },
            { name: 'Kritik Uyarılar Şeridi', desc: 'İhale, teminat, fatura, milestone, sözleşme ve hukuk vadelerini önem sırasına göre birleştirir.' },
            { name: 'Toplam Pipeline', desc: 'Aktif fırsatların toplam değeri, dışa aktarılabilir liste.' },
            { name: 'Kazanılan Değer', desc: 'Kazanılan fırsatların toplam değeri ve adedi.' },
            { name: 'Kaybedilen Değer', desc: 'Kaybedilen fırsatların toplam değeri ve adedi.' },
            { name: 'Ortalama Kazanma Olasılığı', desc: 'Aktif fırsatların ağırlıklı ortalama kapanma ihtimali.' },
            { name: 'Satış Boru Hattı Grafiği', desc: 'Fırsatların aşama bazlı dağılımı (pasta grafik).' },
            { name: 'Fırsatlarım', desc: 'Satış temsilcisinin kendi aktif fırsat listesi.' },
            { name: 'Bekleyen Maliyet Onayı', desc: 'Onay bekleyen teklif sayısı ve değeri.' },
            { name: 'Onay Zinciri Darboğazı', desc: 'Hangi rolde kaç onay bekliyor, en eski bekleyiş kaç gün.' },
            { name: 'İhale Vadeleri', desc: 'Son teslim tarihine göre sıralı aktif ihale listesi.' },
            { name: 'İhale Hattı', desc: 'Aktif / teklif verilen / kazanılan / kaybedilen ihale sayıları.' },
            { name: 'İştirak Edilmeyen İhaleler', desc: 'Yönetimin bilinçli vazgeçtiği ihalelerin kaydı — kazanım oranını bozmaz.' },
            { name: 'Süresi Yaklaşan Teminat', desc: '30 gün içinde süresi dolacak teminat mektupları.' },
            { name: 'Teminat Talepleri', desc: 'Henüz düzenlenmemiş teminat mektubu talepleri.' },
            { name: 'Finansman / Nakit Akış', desc: 'Para birimine göre toplam alacak ve gecikmiş tutar.' },
            { name: 'Fatura Vadeleri', desc: 'Vadesi gelen/geçen satış faturaları.' },
            { name: 'Devredilen BoM', desc: 'Presales\'ten satınalmaya devredilen malzeme listeleri.' },
            { name: 'Satınalma Talepleri', desc: 'Statüye göre gruplanmış satınalma talebi sayısı.' },
            { name: 'Aktif Projeler', desc: 'Aktif proje sayısı ve ortalama marj.' },
            { name: 'Yaklaşan Milestone\'lar', desc: '30 gün içinde tamamlanması gereken proje kilometre taşları.' },
            { name: 'Sözleşme Vadeleri', desc: 'Aktif sözleşme iş akışlarının son tarihleri.' },
            { name: 'Hukuk Dosyası Vadeleri', desc: 'Açık hukuk davalarının son tarihleri ve önceliği.' },
            { name: 'Öncelikli Riskler', desc: 'Olasılık × etki skoruna göre en kritik 5 kurumsal risk.' },
            { name: 'Sanal Agent Aktivitesi', desc: 'Bugünkü agent çalıştırmaları, alınan otonom eylemler, onay bekleyenler.' },
            { name: 'Ziyaret Performansı', desc: 'Planlanan/gerçekleşen ziyaret oranı, ziyaret→fırsat dönüşümü, temsilci bazlı KPI bonus puanı.' },
            { name: 'Görevlerim', desc: 'Kişisel bekleyen görev ve okunmamış bildirim sayısı.' },
            { name: 'Gelen Raporlar', desc: 'İncelemeyi bekleyen birim raporları.' },
            { name: 'Birim Rapor KPI\'ı', desc: 'Birim bazlı sunulan/onaylanan rapor sayısı grafiği.' },
          ],
        },
        {
          title: 'Büyüme Analitiği',
          intro: 'Satış, ihale, tedarik ve müşteri verisinden üretilen 17 derin analiz — pipeline sağlığından müşteri bağımlılık riskine.',
          items: [
            { name: 'Dönüşüm Hunisi (Funnel)', desc: 'Aşamadan aşamaya geçiş oranları, sızıntı noktalarını gösterir.' },
            { name: 'Kayıp Nedenleri', desc: 'Kaybedilen fırsatların sebep bazlı dağılımı.' },
            { name: 'İhale Kazanma Kırılımı', desc: 'İdareye ve yönteme göre kazanma oranı, ortalama teklif değeri.' },
            { name: 'BoM Maliyet Varyansı', desc: 'Teklif anındaki maliyet ile gerçekleşen satınalma maliyeti farkı.' },
            { name: 'Ağırlıklı Tahmin & Hedef Kapsama', desc: 'Olasılık-ağırlıklı pipeline\'ın satış hedefine oranı.' },
            { name: 'Bid/No-Bid Skorkartı', desc: 'İhale kararı öncesi 0-100 puanlı katıl/katılma önerisi.' },
            { name: 'Belge Portföyü', desc: 'Kurumsal evrak kategori dağılımı ve süresi dolan/dolacak evraklar.' },
            { name: 'Fiziksel Arşiv Analitiği', desc: 'Arşiv kutularının dağılımı, uzun süredir dışarıda olan kayıtlar.' },
            { name: 'Müşteri & Kamu Konsantrasyonu', desc: 'HHI endeksiyle ölçülen müşteri bağımlılık riski.' },
            { name: 'İş Sağlığı Skoru', desc: 'Satış, ihale, finans, müşteri ve uyum verisinden 0-100 kompozit skor.' },
            { name: 'Proje Sağlık Skoru', desc: 'Marj, takvim ve bütçe verisinden proje risk skoru.' },
            { name: 'Müşteri Sağlık Skoru', desc: 'Ödeme, kazanma oranı ve aktiviteye göre müşteri risk skoru.' },
            { name: 'DMO Analitik Özeti', desc: 'DMO kanalının ciro, net kâr, marj ve kârsız sipariş özeti.' },
            { name: 'Marka & Ürün Grubu Hacmi', desc: 'Markaya, ürün grubuna ve tedarikçiye göre iş hacmi (top 5, kırılımlı).' },
            { name: 'Birim Bütçe Absorpsiyonu', desc: 'Birim personel bütçesinin projelere dağılım oranı.' },
            { name: 'Alacak Yaşlandırma & DSO', desc: 'Vade kovalarına göre alacak dağılımı, ortalama tahsilat süresi.' },
            { name: 'İş Akışı Darboğazı', desc: 'Onay zincirinde hangi rolde ne kadar bekleme birikmiş.' },
          ],
        },
        {
          title: 'Yönetim Raporları',
          intro: '7 birimin kendi metrik panelleri, dönemsel karşılaştırma ve saha konsolidasyonu.',
          items: [
            { name: 'Genel Bakış Paneli', desc: 'Her birimin dönemsel öne çıkan 3 metriği ve grafikleri.' },
            { name: 'CRM/Satış Birim Metrikleri', desc: 'Açılan/kazanılan/kaybedilen fırsat, kazanım oranı, pipeline değeri.' },
            { name: 'Presales/Teknik Birim Metrikleri', desc: 'Teklif sayısı, durum dağılımı, devredilen BoM, ortalama marj.' },
            { name: 'Satınalma Birim Metrikleri', desc: 'Talep sayısı, PO değeri, teslimat sayısı, bekleyen onay.' },
            { name: 'Finans Birim Metrikleri', desc: 'Kesilen fatura, tahsilat, alacak, teminat durumu.' },
            { name: 'Hukuk Birim Metrikleri', desc: 'Açılan/kapanan/açık vaka, yüksek öncelik ve gecikme sayısı.' },
            { name: 'İhale/İYB Birim Metrikleri', desc: 'İhale sayısı, kazanma/kayıp, evrak tamamlanma oranı.' },
            { name: 'Proje Yönetimi Birim Metrikleri', desc: 'Aktif/tamamlanan proje, ilerleme, planlanan vs gerçekleşen marj.' },
            { name: 'Dönem Karşılaştırma (▲/▼)', desc: 'Her metrik bir önceki dönemle otomatik kıyaslanır.' },
            { name: 'Konsolidasyon Raporu', desc: 'Personel bazlı günlük rapor sayıları ve ziyaret plan-gerçekleşen mutabakatı.' },
            { name: 'Ziyaret-Fırsat KPI Skoru', desc: 'Temsilci bazlı ziyaret-eşleşme başarı puanı.' },
            { name: 'Rapor Onay Akışı', desc: 'Birim raporlarının taslak → sunuldu → incelendi takibi ve eskalasyonu.' },
          ],
        },
        {
          title: 'Karlılık ve Nakit Akışı',
          intro: 'Zamana duyarlı, tahakkuk ve nakit esaslı paralel kârlılık motoru — proje bazından yıllığa.',
          items: [
            { name: 'Zaman Dilimi Seçici', desc: 'Proje / aylık / çeyreklik / yıllık kırılımda kârlılık görünümü.' },
            { name: 'Planlanan / Gerçekleşen / EAC Marj', desc: 'Üç senaryonun yan yana karşılaştırması ve sapma yüzdesi.' },
            { name: 'Tahakkuk & Nakit Esaslı Paralel Raporlama', desc: 'Aynı veri iki farklı muhasebe mantığıyla, yan yana.' },
            { name: 'Konsolide Nakit Pozisyonu Grafiği', desc: 'Kümülatif nakit akışı; açık (deficit) dönemleri kırmızı bantla vurgular.' },
            { name: 'Hazine Katkısı Paneli', desc: 'Finansman maliyeti, fazla nakit getirisi ve net hazine katkısı.' },
            { name: 'Plan Sapması (Drift) Tablosu', desc: 'Aylık plan tahminlerinin zaman içinde nasıl kaydığı.' },
            { name: 'Finansal Enstrüman Senaryoları', desc: 'Faktoring, vadeli mevduat ve forward kur kilidi karşılaştırması.' },
            { name: 'İşletme Maliyeti Dahil/Hariç Görünüm', desc: 'Tam-yüklü marj ile katkı marjı arasında anlık geçiş.' },
          ],
        },
        {
          title: 'DMO Kanalı',
          intro: 'Devlet Malzeme Ofisi satış kanalının kendine özgü, risturn/komisyon-duyarlı kârlılık motoru.',
          items: [
            { name: 'DMO Zaman Dilimi Seçici', desc: 'Aylık / çeyreklik / yıllık / kurum bazlı kırılım.' },
            { name: 'Net Kâr', desc: 'Aktif DMO siparişlerinin risturn ve komisyon sonrası net kârı.' },
            { name: 'Net Marj %', desc: 'Dönem ve kurum bazlı net kârlılık oranı.' },
            { name: 'Kârsız Sipariş Sayısı', desc: 'Zarar eden sipariş adedi — erken uyarı sinyali.' },
            { name: 'Değerlendirmedeki Fırsatlar', desc: 'Henüz kesinleşmemiş DMO pipeline\'ının adedi ve değeri.' },
            { name: 'Dönem Tablosu & Grafiği', desc: 'Ciro, risturn, komisyon, net kâr kırılımlı yığılmalı (stacked) grafik.' },
          ],
        },
        {
          title: 'Süreç & Onay Şeffaflığı',
          intro: 'Bir onay nerede bekliyor, kim gecikmeye sebep oluyor — hepsi tek ekranda.',
          items: [
            { name: 'Bekleyen Onaylarım Paneli', desc: 'Role/birime düşen onayları fırsat/tutar bağlamıyla listeler.' },
            { name: 'Onay Zinciri Sıra Görünümü', desc: 'Finans → İGB → Üst Yönetim → KSU akışının tamamı tek bakışta.' },
            { name: 'Bekleyen İşlerim (Birleşik Kuyruk)', desc: 'Onay, teklif, teslimat ve görevleri tek deadline-sıralı listede birleştirir.' },
            { name: 'Onaylanan/Reddedilen Geçmişi', desc: 'Karara bağlanmış onayların kalıcı kaydı.' },
            { name: 'Onay Yetki Matrisi', desc: 'Rol ve tutar bazlı onay şablonu (DoA).' },
            { name: 'Boş Koltuk Otomatik Atlama', desc: 'Aktif kullanıcısı olmayan aşamaları otomatik atlar ya da sanal agent\'a devreder.' },
            { name: 'Vekalet / Delegasyon Görünürlüğü', desc: 'Onayların süreli ya da süresiz devri.' },
            { name: 'Çoklu Onaylayıcı ANY/ALL Çözümü', desc: 'Paralel aşamaların "herhangi biri" veya "hepsi" onaylamalı mantığı şeffaf.' },
            { name: 'Onay SLA & Otomatik Eskalasyon', desc: 'Süresi geçen onaylar otomatik olarak üst yönetime yükselir.' },
            { name: 'Görev SLA Eskalasyonu', desc: 'Süresi geçen görevler bir üst birim yöneticisine bildirilir.' },
          ],
        },
        {
          title: 'Denetim İzi',
          intro: 'Kim, neyi, ne zaman değiştirdi — sistemdeki her mutasyon kayıt altında.',
          items: [
            { name: 'Canlı Denetim İzi', desc: 'Her oluşturma/güncelleme/silme/onay/devir olayı zaman damgalı kayıt altında.' },
            { name: 'Varlık Tipi & Aksiyon Filtreleme', desc: '24 varlık tipine göre filtrelenebilir log akışı.' },
            { name: 'Detay Kaydı Görüntüleme', desc: 'Her log satırının ham değişiklik detayına inilebilir.' },
            { name: 'Otomatik Arşivleme', desc: '180 günden eski loglar sha256 mühürlü dosyaya arşivlenir.' },
            { name: 'İnsan/Agent Aktör Ayrımı', desc: 'Her kayıt hangi kişi ya da hangi sanal agent tarafından yapıldığını taşır.' },
            { name: 'Kalıcı Anlık Görüntü', desc: 'Kayıt silinse veya adı değişse bile denetim izi anlamını korur.' },
            { name: 'Agent Köken Rozeti', desc: '"Agent: X tarafından yapıldı" rozetine tıklanınca gerekçe ve itiraz/geri-alma kontrolü açılır.' },
          ],
        },
        {
          title: 'Kurumsal Yönetişim',
          intro: 'Ders, risk, KPI ve dış doküman kayıtları — özgün, tenant-yapılandırılabilir doküman numaralamasıyla.',
          items: [
            { name: 'Alınan Dersler Sicili', desc: 'Kategori, kök neden, aksiyon ve etki rozetiyle yapılandırılmış kayıt.' },
            { name: 'Risk & Fırsat Sicili', desc: 'Olasılık × etki skoruna göre renk kodlu 1-25 risk matrisi.' },
            { name: 'Kurumsal KPI Sicili', desc: 'Dönem hedef/gerçekleşen değer ve hedefe ulaşma göstergesi.' },
            { name: 'Dış Doküman Sicili', desc: 'Kaynak, versiyon ve durum bilgisiyle dış referans takibi.' },
            { name: 'Otomatik Doküman Numaralama', desc: 'Tenant\'a özgü, atomik sayaçlı doküman kodu her kayda otomatik iliştirilir.' },
          ],
        },
        {
          title: 'Sanal Agent İzlenebilirliği',
          intro: 'Boş koltuğu dolduran 8 sanal agent\'ın her kararı görünür, gerekçeli ve geri alınabilir.',
          items: [
            { name: 'Eklenti Kataloğu', desc: 'Her sanal agent için durum, lisans, danışman/otonom mod anahtarı.' },
            { name: 'Çalıştırma Geçmişi', desc: 'Her agent koşusunun hedefi, gerekçesi ve çıktısı kayıt altında.' },
            { name: 'Bekleyen Ratifikasyon Sayacı', desc: 'Onay bekleyen agent çıktıları tek bakışta.' },
            { name: 'Ratify / Reddet Kontrolü', desc: 'Devir alan kişi agent önerisini onaylar ya da reddeder.' },
            { name: 'Manuel Çalıştırma', desc: 'Bir agent istenildiğinde anlık tetiklenebilir.' },
            { name: 'Domain-Bazlı Gerekçe Üretimi', desc: 'Her agent önerisinin nedenini yönetime raporlar.' },
            { name: 'Otonom Eylem Güvenlik Kapısı', desc: 'Yalnızca geri-alınabilir işaretli eylemler otomatik çalışır, her biri ayrı denetim kaydı üretir.' },
          ],
        },
        {
          title: 'İş Akışı Tasarım Görünürlüğü',
          intro: 'Süreçlerin nasıl kurgulandığı ve gerçekte nasıl çalıştığı GM için tamamen şeffaf.',
          items: [
            { name: 'Süreç Tasarımcısı', desc: 'Her aşama için sorumlu birim, onay tipi ve vekil ataması görünür.' },
            { name: 'Çoklu Onaylayıcı / Paralel Aşama Görünürlüğü', desc: 'ANY/ALL modu ve onaylayıcı sayısı rozeti.' },
            { name: 'Skip-Logic Önizlemesi', desc: 'Bir aşama devre dışı bırakılırsa akışın nereye yönleneceği canlı gösterilir.' },
            { name: 'Devir Modalı', desc: 'Sonraki birime aktarımda eksik zorunluluk uyarısı.' },
            { name: 'Dijital Süreç İzleyici (Simülasyon)', desc: 'Gerçek iş akışının adım adım oynatılabilir görünümü.' },
            { name: 'Süreç Taksonomisi', desc: 'Hangi süreçlerin canlı modüllere bağlı olduğu şeffaf.' },
            { name: 'Özel Süreç Tanımlama', desc: 'Tenant kendi sürecini sıfırdan tanımlayabilir.' },
            { name: 'Varsayılan Şablon Yükleme', desc: '13 doğrulanmış süreç tek çağrıyla kurulur, sonuç raporu gösterilir.' },
          ],
        },
      ],
    },
    productTour: {
      eyebrow: 'Ürün Turu',
      title: 'Ekran Turu',
      subtitle:
        'Enflow her birimin işini nasıl gördüğünü tek zincirde birleştirir. Aşağıda birim birim çalışma esası ve o birimin gerçek ekranları.',
      backLabel: 'Ana sayfaya dön',
      pendingLabel: 'Ekran görüntüsü hazırlanıyor',
      note: 'Ekran görüntüleri Enflow demo ortamından alınır; tüm veriler temsilîdir, gerçek müşteri ya da ihale verisi içermez.',
      groups: [
        {
          unit: 'Yönetim',
          basis:
            'Genel Müdür ve üst yönetim sisteme girince role göre açılan kokpiti görür: tüm birimlerden gelen kritik vadeler önem sırasına dizili, altında role özel KPI kartları. Bir onayın zincirin neresinde beklediği tek ekranda.',
          shots: [
            { slot: '01-yonetim-kokpiti', title: 'Yönetim Kokpiti', caption: 'Kritik uyarı şeridi + kazanım oranı, açık pipeline, ihale/sözleşme/teminat vadeleri — hepsi canlı.' },
            { slot: '02-buyume-analitigi', title: 'Büyüme Analitiği', caption: 'Dönüşüm hunisi, kayıp nedenleri, iş/proje/müşteri sağlık skorları ve müşteri konsantrasyon riski.' },
            { slot: '04-karlilik', title: 'Karlılık ve Nakit Akışı', caption: 'Planlanan / gerçekleşen / EAC marj yan yana; tahakkuk ve nakit esaslı paralel raporlama, konsolide nakit pozisyonu.' },
          ],
        },
        {
          unit: 'Birim Raporları',
          basis:
            'Her birim kendi dönemsel metriklerini aynı şablonla raporlar. Sistem bir önceki dönemle otomatik kıyaslar (▲/▼) ve onay zincirinde en uzun bekleyen birimi darboğaz olarak öne çıkarır.',
          shots: [
            { slot: '03-birim-genel-bakis', title: 'Birim Genel Bakış', caption: 'CRM/Satış, Presales, Satınalma, Finans, Hukuk, İhale ve Proje birimlerinin öne çıkan metrikleri + iş akışı darboğazı.' },
          ],
        },
        {
          unit: 'CRM / Satış',
          basis:
            'Saha ziyareti bir fırsata dönüşür; fırsat aşamadan aşamaya ilerledikçe pipeline değeri, kazanma oranı ve müşteri portföyü canlı güncellenir. Teklif onay süreci buradan başlar.',
          shots: [
            { slot: '05-crm-genel-bakis', title: 'CRM Genel Bakış', caption: 'Aktif müşteri, pipeline değeri, kazanılan değer ve kazanma oranı; aşama bazlı pipeline dağılımı.' },
            { slot: '06-crm-firsatlar', title: 'Fırsatlar', caption: 'Fırsat listesi ve satış boru hattı — her fırsatın aşaması, değeri ve kazanma olasılığı.' },
          ],
        },
        {
          unit: 'Presales / Teknik',
          basis:
            'Teknik ekip fırsata bağlı malzeme listesini (BoM) ve maliyeti hazırlar; onaylandığında satınalmaya otomatik devredilir. Teklif marjı bu ekranda şekillenir.',
          shots: [
            { slot: '07-presales-bom', title: 'BoM & Tasarım', caption: 'Malzeme listesi, birim maliyetler, toplam maliyet ve teklif marjı; devir durumu.' },
          ],
        },
        {
          unit: 'Satınalma',
          basis:
            'Presales\'ten devralınan malzeme listeleri satınalma talebine, talepler siparişe (PO) dönüşür. Her adım statüsü ve bekleyen onayıyla izlenir.',
          shots: [
            { slot: '08-satinalma', title: 'Satın Alma', caption: 'Talep sayısı, PO değeri, teslimat sayısı ve bekleyen onaylar — statüye göre gruplu.' },
          ],
        },
        {
          unit: 'Finans',
          basis:
            'Sözleşme ve proje ilerledikçe fatura kalemleri oluşur. Alacak yaşlandırma, tahsilat ve teminat mektubu vadeleri para birimi bazında tek panelde toplanır.',
          shots: [
            { slot: '09-finans', title: 'Finans', caption: 'Kesilen fatura, faturalanan tutar, toplam alacak; alacak–tahsilat–vadesi geçen kırılımı.' },
          ],
        },
        {
          unit: 'Sözleşme & Hukuk',
          basis:
            'Kazanılan ihale sözleşme sürecine düşer; imza tamamlanınca proje kaydı kendiliğinden açılır. Hukuk vakaları ve dosya vadeleri aynı modülde ayrı sekmede yönetilir.',
          shots: [
            { slot: '10-sozlesme-yonetimi', title: 'Sözleşme Yönetimi', caption: 'Sözleşmeye hazır işler, evrak tamamlanma durumu, sözleşme bedeli ve son tarih uyarıları; Hukuk sekmesi.' },
          ],
        },
        {
          unit: 'Proje Yönetimi',
          basis:
            'İmzalanan her sözleşme bir projeye dönüşür. Milestone\'lar, planlanan–gerçekleşen marj ve ilerleme yüzdesi izlenir; gecikmeler otomatik olarak yönetime eskale edilir.',
          shots: [
            { slot: '11-proje-yonetimi', title: 'Proje Yönetimi', caption: 'Aktif / tamamlanan proje sayısı, ortalama ilerleme, proje durum dağılımı ve yaklaşan milestone\'lar.' },
          ],
        },
        {
          unit: 'Kurumsal Yönetişim',
          basis:
            'Alınan dersler, risk & fırsat sicili (1–25 matris), kurumsal KPI hedefleri ve dış doküman kayıtları — tenant\'a özgü, atomik sayaçlı otomatik doküman numaralandırmasıyla.',
          shots: [
            { slot: '13-genel-hususlar', title: 'Genel Hususlar', caption: 'Risk & fırsat matrisi, alınan dersler sicili, kurumsal KPI sicili ve dış doküman sicili.' },
          ],
        },
        {
          unit: 'Süreç & Denetim Şeffaflığı',
          basis:
            'Sistemdeki her oluşturma/güncelleme/onay/devir olayı zaman damgalı denetim izine yazılır. Süreçlerin nasıl kurgulandığı ve boş koltukları dolduran sanal agent\'ların her kararı görünür ve geri alınabilir.',
          shots: [
            { slot: '14-denetim-izi', title: 'Denetim İzi', caption: 'Zaman damgalı olay akışı; varlık tipi ve aksiyona göre filtre, insan/agent aktör ayrımı.' },
            { slot: '15-sanal-agentlar', title: 'Sanal Agentlar', caption: 'Eklenti kataloğu, danışman/otonom mod anahtarı, çalıştırma geçmişi ve bekleyen ratifikasyon sayacı.' },
            { slot: '16-surec-tasarimcisi', title: 'Süreç Tasarımcısı', caption: 'Her aşama için sorumlu birim, onay tipi, vekil ataması ve skip-logic önizlemesi.' },
          ],
        },
      ],
    },
    cta: {
      title: 'Süreçlerinizin nerede kopuk olduğunu birlikte görelim.',
      subtitle: 'Kısa bir demoda, kendi süreçlerinizin Enflow zincirinde nasıl aktığını gösterelim.',
      buttonLabel: 'Demo Talep Et',
      email: 'gokhanturhan71@gmail.com',
      emailLabel: 'E-posta gönder',
    },
    footer: {
      text: 'Enflow — B2B Süreç ve Operasyon Platformu',
      wikiLabel: 'Ürün Wiki',
      wikiHref: 'https://gturhan71.github.io/Enflow/wiki/',
    },
  },

  en: {
    lang: 'en',
    htmlLang: 'en',
    meta: {
      title: 'Enflow — Your processes stop waiting on each other',
      description:
        'A unified platform that chains your entire B2B process — from field visit to payment collection — into one automatic flow. No disconnected tools, no lost information.',
    },
    nav: {
      brand: 'Enflow',
      links: [
        { href: '/en/#sorun', label: 'The Problem' },
        { href: '/en/#fark', label: 'Why Different' },
        { href: '/en/#akis', label: 'How It Works' },
        { href: '/en/#deger', label: 'Value' },
        { href: '/en/#guven', label: 'Trust' },
        { href: '/en/product-tour/', label: 'Screen Tour' },
        { href: '/en/analytics/', label: 'Analytics' },
        { href: '/en/documents/', label: 'Resources' },
      ],
      cta: 'Request a Demo',
      langSwitch: { href: '/', label: 'TR' },
      home: '/en/',
    },
    hero: {
      title: 'Your processes stop\nwaiting on each other.',
      subtitle:
        'One chain that automates your entire B2B process — from the first field visit to the final payment. One step closes, the next opens itself. Nothing gets lost between departments.',
      ctaPrimary: 'Request a Demo',
      ctaSecondary: 'See how it works',
      chain: ['Visit', 'CRM', 'Presales', 'Proposal', 'Contract', 'Project', 'Procurement', 'Finance'],
    },
    specs: {
      title: 'Open, Robust & Multi-Tenant Architecture.',
      subtitle: 'Enflow is engineered for zero-friction deployment and high-throughput enterprise security.',
      items: [
        { label: 'Frontend', value: 'React 19 · TypeScript 6 · Vite 8 Rolldown · Tailwind CSS v4' },
        { label: 'Backend & ORM', value: 'Express 5 · Prisma 7 · SQLite (Development) / PostgreSQL 14+ (Production)' },
        { label: 'Enterprise Security', value: '486/486 RBAC Test Suite · Ed25519 Signed Licenses · bcryptjs & JWT' },
        { label: 'System Scope', value: '64 Data Models · 36 API Domains · 29 Cockpit Modules · 8 Virtual Agents' },
      ],
    },
    problem: {
      title: 'Every growing company hits the same wall.',
      subtitle: 'As process count grows, ownership gets diffuse. Without Enflow, most companies live at least three of these:',
      items: [
        { icon: 'search', text: 'You track where a deal stands through WhatsApp and email threads.' },
        { icon: 'layers', text: 'Nobody is sure which proposal version is current, or who approved it.' },
        { icon: 'clock', text: 'A contract gets signed, and the project team finds out days later.' },
        { icon: 'chart', text: 'You only learn whether a job made money at month-end close.' },
        { icon: 'alert', text: 'You can\'t see where an approval is stuck, or where a process bottlenecks.' },
        { icon: 'chainbroken', text: 'Every department runs its own tool, and none of them talk to each other.' },
      ],
    },
    diff: {
      title: 'Not disconnected tools — one chain.',
      subtitle:
        'Most solutions on the market stop at the sale, or expect you to bend a generic ERP into shape. Enflow was designed from the ground up for the real B2B lifecycle.',
      cards: [
        {
          oldLabel: 'The old way',
          oldText: 'CRM here, proposal in Excel, contract in email, project on a separate sheet.',
          newLabel: 'Enflow',
          newText: 'One chain from visit to collection — each step opens automatically with the previous step\'s data.',
        },
        {
          oldLabel: 'The old way',
          oldText: 'Someone has to remember to hand off and notify the next person, manually, every time.',
          newLabel: 'Enflow',
          newText: 'Automatic hand-off rings: winning a tender spawns the contract, a completed signature spawns the project, a project\'s progress spawns procurement and invoicing on its own.',
        },
        {
          oldLabel: 'The old way',
          oldText: 'Generic software\'s approval flow doesn\'t match your org chart — you configure it by hand.',
          newLabel: 'Enflow',
          newText: 'Your real corporate approval hierarchy ships out of the box — multi-layer approval swimlanes (Finance, BD, GM, Contracts) arrive as a ready template.',
        },
        {
          oldLabel: 'The old way',
          oldText: 'Headcount can\'t keep up — an empty seat stalls the whole process.',
          newLabel: 'Enflow',
          newText: 'Virtual agents fill the empty seat, recommend and triage — but money and legal decisions always stay with a human. Never autonomous.',
        },
      ],
    },
    flow: {
      title: 'One chain, eight departments, one record.',
      subtitle: 'Every arrow is an automatic hand-off you no longer have to chase.',
      steps: [
        { label: 'Visit', desc: 'Field visits get planned, GPS and daily reports logged.', input: 'Customer location & visit note', output: 'Opportunity draft & field log', role: 'Field Sales' },
        { label: 'CRM & Pipeline', desc: 'Opportunity opens, customer health score and value tracked.', input: 'Deal size & decision makers', output: 'Presales task assignment & hygiene score', role: 'Sales / CRM Agent' },
        { label: 'Presales & BoM', desc: 'Bill of materials (BoM) and cost models prepared.', input: 'Spec sheet & BoM lines', output: 'Cost analysis & margin bounds', role: 'Technical Presales' },
        { label: 'Proposal & Negotiation', desc: 'Versioned proposal PDF, floor-margin-protected bargaining.', input: 'Dynamic discounts & payment terms', output: 'Signed proposal & revision log', role: 'Sales Leadership' },
        { label: 'Contract & Tender', desc: 'Checklist, AI tender/legal analysis, and signature flow.', input: 'Tender spec doc & bid bond', output: 'Approved contract & risk report', auto: true, role: 'Legal / Tender Agent (Advisory)' },
        { label: 'Project Execution', desc: 'Milestones, WBS work packages, and live margin graph.', input: 'Project schedule & deliverables', output: 'Live cost variance & procurement triggers', auto: true, role: 'Project Team / Project Agent' },
        { label: 'Procurement & Stock', desc: 'Supplier quote comparison, PO generation, and delivery.', input: 'Approved requisition & quotes', output: 'Purchase order (PO) & waybill', auto: true, role: 'Procurement / Procurement Agent' },
        { label: 'Finance & Collection', desc: 'e-Invoicing, bank reconciliation, and revenue realization.', input: 'Milestone sign-off & acceptance form', output: 'e-Invoice, VAT & ledger entry', auto: true, role: 'Finance / Finance Agent (Advisory)' },
      ],
      autoNote: 'auto = automatic hand-off',
    },
    value: {
      title: 'Keep a live pulse on your company.',
      cards: [
        {
          icon: 'chart',
          title: 'Real-time profitability',
          text: 'Planned, actual and forecast margin recalculate live on every project — you never wait for month-end.',
        },
        {
          icon: 'filetext',
          title: 'Full audit trail',
          text: 'Who changed what, and when — every mutation is logged, ownership is always clear.',
        },
        {
          icon: 'alertcircle',
          title: 'Approval transparency',
          text: 'Where an approval is waiting, where a process is stuck — visible instantly on the dashboard.',
        },
        {
          icon: 'bot',
          title: 'Virtual agent capacity',
          text: 'Deterministic digital workforce filling empty seats across 8 departments — a capacity gap no longer stalls the process.',
        },
      ],
      cta: {
        text: '29 cockpit panels · 43 analytics reports · 37 process-transparency features — all on one platform.',
        buttonLabel: 'See every dashboard',
        href: '/en/analytics/',
      },
    },
    trust: {
      title: 'Automation never takes control away from you.',
      subtitle: 'Handing a platform your entire sales and finance data demands trust. In Enflow, automation has clear limits.',
      items: [
        {
          icon: 'lock',
          title: 'Full multi-tenant isolation',
          text: 'Every company\'s data is fully isolated; sensitive fields (IBAN, tax ID, API keys) are encrypted with a company-specific key.',
        },
        {
          icon: 'scale',
          title: 'Money & legal, always advisory',
          text: 'Finance and legal agents never take autonomous action — they only recommend. The decision always stays with an authorized person.',
        },
        {
          icon: 'checkcircle',
          title: 'Every step is traceable',
          text: 'The actor — human or agent — is explicitly tagged on every record; no action ever has an unclear origin.',
        },
      ],
    },
    audience: {
      title: 'For any organization where multiple departments must meet on one shared process.',
      cards: [
        { icon: 'building', title: 'SMEs and enterprises', text: 'Sales, tendering, contracts, projects and finance in one platform — no more Excel and email sprawl.' },
        { icon: 'briefcase', title: 'Executive leadership', text: 'Real-time management reports, unit metrics, bottleneck analysis and profitability dashboards.' },
        { icon: 'users', title: 'Sales teams', text: 'CRM, opportunity hygiene, versioned proposals and live negotiation.' },
        { icon: 'truck', title: 'Presales & procurement', text: 'Bill of materials, cost analysis, vendor comparison and delivery tracking.' },
        { icon: 'gavel', title: 'Contracts & legal', text: 'Document/signature flow, approval chains and document coding.' },
        { icon: 'filetext', title: 'Public tender bidders', text: 'Tender tracking, eligibility checklists and bid-bond management.' },
      ],
    },
    documents: {
      title: 'Sales & Marketing Documents',
      subtitle: 'Presentations and reference documents explaining Enflow\'s capabilities to decision-makers, published here.',
      emptyNote: 'Documents are in preparation — they\'ll be downloadable from this page once ready.',
      backLabel: 'Back to home',
      soonLabel: 'Soon',
      downloadLabel: 'Download',
      items: [
        {
          title: 'Product Overview Deck',
          description: 'A presentation summarizing Enflow\'s end-to-end flow, key differentiators and value for decision-makers.',
          format: 'PPT',
          status: 'soon',
        },
        {
          title: 'Enflow at a Glance',
          description: 'A one-page product summary for decision-makers — problem, solution and difference at a glance.',
          format: 'PDF',
          status: 'soon',
        },
      ],
    },
    analytics: {
      title: 'KPI & Monitoring Dashboards',
      subtitle:
        'Every cockpit card, analytics report and process-transparency feature Enflow puts in front of management — on one page, as-is.',
      backLabel: 'Back to home',
      categories: [
        {
          title: 'Executive Cockpit',
          intro: 'The role-based landing panel every user sees, fully customizable per role — 26 KPI cards plus a critical-alerts strip.',
          items: [
            { name: 'General KPI Summary', desc: 'Win rate, open pipeline, won/lost opportunity count at a glance.' },
            { name: 'Critical Alerts Strip', desc: 'Merges tender, guarantee, invoice, milestone, contract and legal deadlines by urgency.' },
            { name: 'Total Pipeline', desc: 'Total value of active opportunities, with an exportable list.' },
            { name: 'Won Value', desc: 'Total value and count of won opportunities.' },
            { name: 'Lost Value', desc: 'Total value and count of lost opportunities.' },
            { name: 'Average Win Probability', desc: 'Weighted average close probability across active opportunities.' },
            { name: 'Sales Pipeline Chart', desc: 'Opportunity distribution by stage (pie chart).' },
            { name: 'My Opportunities', desc: 'A rep\'s personal list of active opportunities.' },
            { name: 'Pending Cost Approvals', desc: 'Count and value of proposals awaiting approval.' },
            { name: 'Approval Chain Bottleneck', desc: 'How many approvals are pending per role, and the oldest wait time.' },
            { name: 'Tender Deadlines', desc: 'Active tenders sorted by submission deadline.' },
            { name: 'Tender Pipeline', desc: 'Active / submitted / won / lost tender counts.' },
            { name: 'Withdrawn Tenders', desc: 'A record of tenders management deliberately walked away from — doesn\'t skew win rate.' },
            { name: 'Guarantees Expiring Soon', desc: 'Guarantee letters expiring within 30 days.' },
            { name: 'Guarantee Requests', desc: 'Guarantee-letter requests not yet issued.' },
            { name: 'Financing / Cash Flow', desc: 'Total receivables and overdue amount by currency.' },
            { name: 'Invoices Due', desc: 'Sales invoices due or overdue.' },
            { name: 'BoM Hand-offs', desc: 'Bill-of-materials hand-offs from presales to procurement.' },
            { name: 'Purchase Requests', desc: 'Purchase request count grouped by status.' },
            { name: 'Active Projects', desc: 'Active project count and average margin.' },
            { name: 'Upcoming Milestones', desc: 'Project milestones due within 30 days.' },
            { name: 'Contract Deadlines', desc: 'Deadlines across active contract workflows.' },
            { name: 'Legal Case Deadlines', desc: 'Due dates and priority for open legal cases.' },
            { name: 'Top Risks', desc: 'The 5 most critical corporate risks by probability × impact score.' },
            { name: 'Virtual Agent Activity', desc: 'Today\'s agent runs, autonomous actions taken, pending ratifications.' },
            { name: 'Visit Performance', desc: 'Planned vs. completed visit rate, visit-to-opportunity conversion, per-rep KPI bonus points.' },
            { name: 'My Tasks', desc: 'Personal pending task and unread notification count.' },
            { name: 'Incoming Reports', desc: 'Unit reports awaiting review.' },
            { name: 'Unit Report KPI', desc: 'Chart of submitted vs. reviewed unit reports, by unit.' },
          ],
        },
        {
          title: 'Growth Analytics',
          intro: '17 deep-dive reports built from sales, tender, procurement and customer data — from pipeline health to customer concentration risk.',
          items: [
            { name: 'Conversion Funnel', desc: 'Stage-to-stage conversion rates, pinpointing where deals leak.' },
            { name: 'Loss Reasons', desc: 'Breakdown of lost opportunities by cause.' },
            { name: 'Tender Win-Rate Breakdown', desc: 'Win rate by authority and method, average bid value.' },
            { name: 'BoM Cost Variance', desc: 'Gap between quoted-time cost and actual procurement cost.' },
            { name: 'Weighted Forecast & Target Coverage', desc: 'Probability-weighted pipeline against the sales target.' },
            { name: 'Bid / No-Bid Scorecard', desc: 'A 0-100 pre-decision score recommending bid or pass.' },
            { name: 'Document Portfolio', desc: 'Corporate document category mix and documents expiring soon.' },
            { name: 'Physical Archive Analytics', desc: 'Archive box distribution and records checked out too long.' },
            { name: 'Customer & Public-Sector Concentration', desc: 'HHI-based measure of customer dependency risk.' },
            { name: 'Business Health Score', desc: 'A composite 0-100 score from sales, tender, finance, customer and compliance data.' },
            { name: 'Project Health Score', desc: 'Project risk score from margin, schedule and budget data.' },
            { name: 'Customer Health Score', desc: 'Customer risk score from payment behavior, win rate and activity.' },
            { name: 'DMO Analytics Summary', desc: 'Revenue, net profit, margin and unprofitable-order summary for the DMO channel.' },
            { name: 'Brand & Product Category Volume', desc: 'Business volume by brand, category and vendor (top 5, broken down).' },
            { name: 'Unit Budget Absorption', desc: 'Share of a unit\'s staffing budget actually allocated to projects.' },
            { name: 'Receivables Aging & DSO', desc: 'Receivables by age bucket, average days sales outstanding.' },
            { name: 'Workflow Bottleneck', desc: 'How much backlog has built up at each role in the approval chain.' },
          ],
        },
        {
          title: 'Management Reporting',
          intro: 'Per-unit metric panels for 7 departments, period-over-period comparison, and field consolidation.',
          items: [
            { name: 'Overview Panel', desc: 'Each unit\'s top 3 headline metrics and charts for the period.' },
            { name: 'CRM/Sales Unit Metrics', desc: 'Opened/won/lost opportunities, win rate, pipeline value.' },
            { name: 'Presales/Technical Unit Metrics', desc: 'Proposal count, status mix, BoM hand-offs, average margin.' },
            { name: 'Procurement Unit Metrics', desc: 'Request count, PO value, delivery count, pending approvals.' },
            { name: 'Finance Unit Metrics', desc: 'Invoices issued, collections, receivables, guarantee status.' },
            { name: 'Legal Unit Metrics', desc: 'Opened/closed/open cases, high-priority and overdue counts.' },
            { name: 'Tender Unit Metrics', desc: 'Tender count, win/loss, document-completion rate.' },
            { name: 'Project Management Unit Metrics', desc: 'Active/completed projects, progress, planned vs. actual margin.' },
            { name: 'Period Comparison (▲/▼)', desc: 'Every metric auto-compares against the prior equivalent period.' },
            { name: 'Consolidation Report', desc: 'Per-rep daily report counts and planned-vs-completed visit reconciliation.' },
            { name: 'Visit-to-Opportunity KPI Score', desc: 'Per-rep visit-match success score.' },
            { name: 'Report Approval Flow', desc: 'Unit reports tracked draft → submitted → reviewed, with escalation.' },
          ],
        },
        {
          title: 'Profitability & Treasury',
          intro: 'A time-aware, accrual-and-cash-parallel profitability engine — from single project to full year.',
          items: [
            { name: 'Grain Switcher', desc: 'Project / monthly / quarterly / yearly profitability views.' },
            { name: 'Planned / Actual / EAC Margin', desc: 'Side-by-side comparison of all three, plus variance %.' },
            { name: 'Accrual & Cash-Basis Parallel Reporting', desc: 'The same data under two accounting bases, side by side.' },
            { name: 'Consolidated Cash Position Chart', desc: 'Cumulative cash flow; deficit windows highlighted in red.' },
            { name: 'Treasury Contribution Panel', desc: 'Financing cost, surplus-cash yield, and net treasury contribution.' },
            { name: 'Plan-Drift Table', desc: 'How monthly plan forecasts have shifted over time.' },
            { name: 'Financial Instrument Scenarios', desc: 'Factoring, term deposit and forward-FX lock comparisons.' },
            { name: 'Overhead Include/Exclude View', desc: 'Toggle instantly between fully-loaded margin and contribution margin.' },
          ],
        },
        {
          title: 'DMO Channel',
          intro: 'A dedicated, rebate-and-commission-aware profitability engine for the State Supply Office (DMO) sales channel.',
          items: [
            { name: 'DMO Grain Switcher', desc: 'Monthly / quarterly / yearly / per-institution breakdown.' },
            { name: 'Net Profit', desc: 'Net profit of active DMO orders after rebate and commission.' },
            { name: 'Net Margin %', desc: 'Net profitability ratio, by period and institution.' },
            { name: 'Unprofitable Order Count', desc: 'Number of loss-making orders — an early warning signal.' },
            { name: 'Opportunities in Evaluation', desc: 'Count and value of unconfirmed DMO pipeline.' },
            { name: 'Period Table & Chart', desc: 'Revenue, rebate, commission and net profit in a stacked chart.' },
          ],
        },
        {
          title: 'Process & Approval Transparency',
          intro: 'Where an approval is waiting, and who\'s causing the delay — all on one screen.',
          items: [
            { name: 'Pending Approvals Panel', desc: 'Approvals routed to your role/unit, shown with deal context.' },
            { name: 'Approval Chain Sequence View', desc: 'The full Finance → BD → Executive → Contracts flow, at a glance.' },
            { name: 'Unified Work Queue', desc: 'Approvals, proposals, deliveries and tasks merged into one deadline-sorted list.' },
            { name: 'Approved/Rejected History', desc: 'A permanent record of resolved approval decisions.' },
            { name: 'Approval Authority Matrix', desc: 'Role- and amount-based approval template (DoA).' },
            { name: 'Empty-Seat Auto-Skip', desc: 'Stages with no active user are auto-skipped or handed to a virtual agent.' },
            { name: 'Delegation Visibility', desc: 'Time-boxed or indefinite delegation of approvals.' },
            { name: 'Multi-Approver ANY/ALL Resolution', desc: 'Transparent logic for parallel stages — any one, or everyone, must approve.' },
            { name: 'Approval SLA & Auto-Escalation', desc: 'Overdue approvals automatically escalate to executive management.' },
            { name: 'Task SLA Escalation', desc: 'Overdue tasks escalate to the direct department manager.' },
          ],
        },
        {
          title: 'Audit Trail',
          intro: 'Who changed what, and when — every mutation in the system is logged.',
          items: [
            { name: 'Live Audit Trail', desc: 'Every create/update/delete/approve/hand-off event, timestamped.' },
            { name: 'Entity Type & Action Filtering', desc: 'Filterable log stream across 24 entity types.' },
            { name: 'Detail Record View', desc: 'Drill into the raw change detail behind any log row.' },
            { name: 'Automatic Archiving', desc: 'Logs older than 180 days are archived to a sha256-sealed file.' },
            { name: 'Human/Agent Actor Tagging', desc: 'Every record carries which person — or which virtual agent — performed it.' },
            { name: 'Permanent Snapshot', desc: 'The audit trail stays meaningful even if the underlying record is deleted or renamed.' },
            { name: 'Agent Provenance Badge', desc: 'Click "Agent: Done by X" to see the rationale and a dispute/undo control.' },
          ],
        },
        {
          title: 'Corporate Governance',
          intro: 'Lessons-learned, risk, KPI and external-document registers — with tenant-configurable document numbering.',
          items: [
            { name: 'Lessons Learned Register', desc: 'Structured records with category, root cause, action and impact badge.' },
            { name: 'Risk & Opportunity Register', desc: 'A color-coded 1-25 risk matrix from probability × impact.' },
            { name: 'Corporate KPI Register', desc: 'Period target vs. actual, with a goal-attainment indicator.' },
            { name: 'External Document Register', desc: 'Source, version and status tracking for external references.' },
            { name: 'Automatic Document Numbering', desc: 'A tenant-specific, atomically-sequenced document code attached to every record.' },
          ],
        },
        {
          title: 'Virtual Agent Oversight',
          intro: 'Every decision made by the 8 virtual agents filling empty seats is visible, justified and reversible.',
          items: [
            { name: 'Plugin Catalog', desc: 'Status, license and advisory/autonomous mode toggle for every agent.' },
            { name: 'Run History', desc: 'Every agent run\'s target, rationale and output, on record.' },
            { name: 'Pending Ratification Counter', desc: 'Agent outputs awaiting approval, at a glance.' },
            { name: 'Ratify / Reject Control', desc: 'The receiving human approves or rejects the agent\'s recommendation.' },
            { name: 'Manual Trigger', desc: 'Any agent can be run on demand.' },
            { name: 'Domain-Specific Rationale Generation', desc: 'Every agent reports the reasoning behind its recommendation to management.' },
            { name: 'Autonomous-Action Safety Gate', desc: 'Only actions flagged reversible run automatically, each producing its own audit record.' },
          ],
        },
        {
          title: 'Workflow Design Visibility',
          intro: 'How processes are designed — and how they actually run — is fully transparent to the GM.',
          items: [
            { name: 'Process Designer', desc: 'Responsible unit, approval type and delegate assignment visible for every stage.' },
            { name: 'Multi-Approver / Parallel Stage Visibility', desc: 'ANY/ALL mode and approver-count badge.' },
            { name: 'Skip-Logic Preview', desc: 'Live preview of where the flow reroutes if a stage is disabled.' },
            { name: 'Hand-off Modal', desc: 'Warns of missing requirements before transferring to the next unit.' },
            { name: 'Digital Process Tracker (Simulation)', desc: 'A step-by-step, playable view of the real live workflow.' },
            { name: 'Process Taxonomy', desc: 'Transparent view of which processes are wired to live modules.' },
            { name: 'Custom Process Definition', desc: 'A tenant can define its own process from scratch.' },
            { name: 'Default Template Loading', desc: 'Installs 13 validated processes in one call, with a results report.' },
          ],
        },
      ],
    },
    productTour: {
      eyebrow: 'Product Tour',
      title: 'Screen Tour',
      subtitle:
        'Enflow chains how every unit does its job into one flow. Below, unit by unit: the operating basis and that unit\'s real screens.',
      backLabel: 'Back to home',
      pendingLabel: 'Screenshot in preparation',
      note: 'Screenshots are captured from the Enflow demo environment; all data is illustrative and contains no real customer or tender data.',
      groups: [
        {
          unit: 'Executive',
          basis:
            'When the GM and senior management sign in, they see a role-based cockpit: critical deadlines from every unit ranked by urgency, with role-specific KPI cards below. Where an approval is waiting in the chain is visible on one screen.',
          shots: [
            { slot: '01-yonetim-kokpiti', title: 'Executive Cockpit', caption: 'Critical-alerts strip plus win rate, open pipeline, tender/contract/guarantee deadlines — all live.' },
            { slot: '02-buyume-analitigi', title: 'Growth Analytics', caption: 'Conversion funnel, loss reasons, business/project/customer health scores and customer concentration risk.' },
            { slot: '04-karlilik', title: 'Profitability & Treasury', caption: 'Planned / actual / EAC margin side by side; accrual and cash-basis parallel reporting, consolidated cash position.' },
          ],
        },
        {
          unit: 'Unit Reports',
          basis:
            'Each unit reports its period metrics on the same template. The system compares against the previous period automatically (▲/▼) and surfaces the longest-waiting unit in the approval chain as the bottleneck.',
          shots: [
            { slot: '03-birim-genel-bakis', title: 'Unit Overview', caption: 'Headline metrics for CRM/Sales, Presales, Procurement, Finance, Legal, Tender and Project units, plus the workflow bottleneck.' },
          ],
        },
        {
          unit: 'CRM / Sales',
          basis:
            'A field visit becomes an opportunity; as it moves stage to stage, pipeline value, win rate and the customer portfolio update live. The proposal approval process starts here.',
          shots: [
            { slot: '05-crm-genel-bakis', title: 'CRM Overview', caption: 'Active customers, pipeline value, won value and win rate; stage-based pipeline distribution.' },
            { slot: '06-crm-firsatlar', title: 'Opportunities', caption: 'Opportunity list and sales pipeline — each opportunity\'s stage, value and win probability.' },
          ],
        },
        {
          unit: 'Presales / Technical',
          basis:
            'The technical team prepares the bill of materials (BoM) and cost tied to the opportunity; once approved it hands off to procurement automatically. Proposal margin takes shape on this screen.',
          shots: [
            { slot: '07-presales-bom', title: 'BoM & Design', caption: 'Bill of materials, unit costs, total cost and proposal margin; hand-off status.' },
          ],
        },
        {
          unit: 'Procurement',
          basis:
            'BoMs handed off from Presales become purchase requests, and requests become purchase orders (PO). Every step is tracked with its status and pending approval.',
          shots: [
            { slot: '08-satinalma', title: 'Procurement', caption: 'Request count, PO value, delivery count and pending approvals — grouped by status.' },
          ],
        },
        {
          unit: 'Finance',
          basis:
            'As contracts and projects progress, invoice lines are created. Receivables ageing, collections and letter-of-guarantee expiries are consolidated by currency on one panel.',
          shots: [
            { slot: '09-finans', title: 'Finance', caption: 'Invoices issued, invoiced amount, total receivables; receivables–collections–overdue breakdown.' },
          ],
        },
        {
          unit: 'Contracts & Legal',
          basis:
            'A won tender drops into the contract process; when signature completes, the project record opens itself. Legal cases and file deadlines live in the same module on a separate tab.',
          shots: [
            { slot: '10-sozlesme-yonetimi', title: 'Contract Management', caption: 'Contract-ready items, document completion status, contract value and deadline alerts; Legal tab.' },
          ],
        },
        {
          unit: 'Project Management',
          basis:
            'Every signed contract becomes a project. Milestones, planned vs. actual margin and progress percentage are tracked; delays are escalated to management automatically.',
          shots: [
            { slot: '11-proje-yonetimi', title: 'Project Management', caption: 'Active / completed project count, average progress, project status distribution and upcoming milestones.' },
          ],
        },
        {
          unit: 'Corporate Governance',
          basis:
            'Lessons learned, a risk & opportunity register (1–25 matrix), corporate KPI targets and external-document records — with tenant-specific, atomically-sequenced automatic document numbering.',
          shots: [
            { slot: '13-genel-hususlar', title: 'Governance Registers', caption: 'Risk & opportunity matrix, lessons-learned register, corporate KPI register and external-document register.' },
          ],
        },
        {
          unit: 'Process & Audit Transparency',
          basis:
            'Every create/update/approve/hand-off event in the system is written to a timestamped audit trail. How processes are designed — and every decision of the virtual agents that fill empty seats — is visible and reversible.',
          shots: [
            { slot: '14-denetim-izi', title: 'Audit Trail', caption: 'Timestamped event stream; filter by entity type and action, human/agent actor distinction.' },
            { slot: '15-sanal-agentlar', title: 'Virtual Agents', caption: 'Add-on catalog, advisory/autonomous mode switch, run history and pending ratification counter.' },
            { slot: '16-surec-tasarimcisi', title: 'Process Designer', caption: 'Responsible unit, approval type, delegate assignment and skip-logic preview for each stage.' },
          ],
        },
      ],
    },
    cta: {
      title: 'Let\'s find out where your process is broken.',
      subtitle: 'In a short demo, we\'ll show how your own process flows through the Enflow chain.',
      buttonLabel: 'Request a Demo',
      email: 'gokhanturhan71@gmail.com',
      emailLabel: 'Send an email',
    },
    footer: {
      text: 'Enflow — B2B Process & Operations Platform',
      wikiLabel: 'Product Wiki',
      wikiHref: 'https://gturhan71.github.io/Enflow/wiki/',
    },
  },
};
