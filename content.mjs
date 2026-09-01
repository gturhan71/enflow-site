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
        { href: '/dokumanlar/', label: 'Dökümanlar' },
      ],
      cta: 'Demo Talep Et',
      langSwitch: { href: '/en/', label: 'EN' },
      home: '/',
    },
    hero: {
      eyebrow: 'Kurumsal Süreç & Satış Yaşam Döngüsü Platformu',
      title: 'Süreçleriniz artık\nbirbirini beklemesin.',
      subtitle:
        'Ziyaretten tahsilata kadar tüm B2B sürecinizi tek zincirde otomatikleştiren platform. Bir adım biter, bir sonraki kendiliğinden açılır — hiçbir şey birimler arasında kaybolmaz.',
      ctaPrimary: 'Demo Talep Et',
      ctaSecondary: 'Nasıl çalıştığını gör',
      chain: ['Ziyaret', 'CRM', 'Teklif', 'Sözleşme', 'Proje', 'Tahsilat'],
    },
    problem: {
      eyebrow: 'Tanıdık geliyor mu?',
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
      eyebrow: 'Neden Enflow',
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
    flow: {
      eyebrow: 'Uçtan Uca Akış',
      title: 'Bir zincir, sekiz birim, tek kayıt.',
      subtitle: 'Her ok, elle takip etmeniz gerekmeyen otomatik bir devri temsil eder.',
      steps: [
        { label: 'Ziyaret', desc: 'Saha ziyareti planlanır, günlük rapor kaydedilir.' },
        { label: 'CRM', desc: 'Fırsat açılır, müşteri ve değer takip altına alınır.' },
        { label: 'Presales', desc: 'Malzeme listesi ve maliyet analizi hazırlanır.' },
        { label: 'Teklif & Müzakere', desc: 'Versiyonlu teklif, dip marj korumalı pazarlık.' },
        { label: 'Sözleşme', desc: 'Evrak, AI analiz ve imza akışı — eksiksiz olmadan ilerlemez.', auto: true },
        { label: 'Proje', desc: 'Milestone, maliyet ve karlılık gerçek zamanlı işler.', auto: true },
        { label: 'Satınalma', desc: 'Talep, teklif kıyaslama, sipariş ve teslimat.', auto: true },
        { label: 'Finans', desc: 'Fatura ve tahsilat — sürecin kapanışı.', auto: true },
      ],
      autoNote: 'auto = otomatik devir',
    },
    value: {
      eyebrow: 'Karar Vericiye Değer',
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
    },
    trust: {
      eyebrow: 'Güven & Güvenlik',
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
      eyebrow: 'Kimler İçin',
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
      eyebrow: 'Kaynaklar',
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
    cta: {
      title: 'Süreçlerinizin nerede kopuk olduğunu birlikte görelim.',
      subtitle: 'Kısa bir demoda, kendi süreçlerinizin Enflow zincirinde nasıl aktığını gösterelim.',
      buttonLabel: 'Demo Talep Et',
      email: 'gokhanturhan71@gmail.com',
      emailLabel: 'E-posta gönder',
    },
    footer: {
      text: 'Enflow — Uçtan Uca Kurumsal Süreç & Satış Yaşam Döngüsü Platformu',
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
        { href: '/en/documents/', label: 'Resources' },
      ],
      cta: 'Request a Demo',
      langSwitch: { href: '/', label: 'TR' },
      home: '/en/',
    },
    hero: {
      eyebrow: 'Enterprise Process & Sales Lifecycle Platform',
      title: 'Your processes stop\nwaiting on each other.',
      subtitle:
        'One chain that automates your entire B2B process — from the first field visit to the final payment. One step closes, the next opens itself. Nothing gets lost between departments.',
      ctaPrimary: 'Request a Demo',
      ctaSecondary: 'See how it works',
      chain: ['Visit', 'CRM', 'Proposal', 'Contract', 'Project', 'Collection'],
    },
    problem: {
      eyebrow: 'Sound familiar?',
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
      eyebrow: 'Why Enflow',
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
      eyebrow: 'End-to-End Flow',
      title: 'One chain, eight departments, one record.',
      subtitle: 'Every arrow is an automatic hand-off you no longer have to chase.',
      steps: [
        { label: 'Visit', desc: 'Field visits get planned, daily reports logged.' },
        { label: 'CRM', desc: 'Opportunity opens, customer and value tracked.' },
        { label: 'Presales', desc: 'Bill of materials and cost analysis prepared.' },
        { label: 'Proposal & Negotiation', desc: 'Versioned proposals, floor-margin-protected bargaining.' },
        { label: 'Contract', desc: 'Docs, AI analysis and signature flow — nothing advances incomplete.', auto: true },
        { label: 'Project', desc: 'Milestones, cost and profitability run live.', auto: true },
        { label: 'Procurement', desc: 'Requests, quote comparison, orders and delivery.', auto: true },
        { label: 'Finance', desc: 'Invoicing and collection — the process closes itself out.', auto: true },
      ],
      autoNote: 'auto = automatic hand-off',
    },
    value: {
      eyebrow: 'Value for Decision-Makers',
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
    },
    trust: {
      eyebrow: 'Trust & Security',
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
      eyebrow: 'Who It\'s For',
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
      eyebrow: 'Resources',
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
    cta: {
      title: 'Let\'s find out where your process is broken.',
      subtitle: 'In a short demo, we\'ll show how your own process flows through the Enflow chain.',
      buttonLabel: 'Request a Demo',
      email: 'gokhanturhan71@gmail.com',
      emailLabel: 'Send an email',
    },
    footer: {
      text: 'Enflow — End-to-End Enterprise Process & Sales Lifecycle Platform',
      wikiLabel: 'Product Wiki',
      wikiHref: 'https://gturhan71.github.io/Enflow/wiki/',
    },
  },
};
