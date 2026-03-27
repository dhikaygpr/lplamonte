const packages = [
  {
    name: 'Starter',
    subtitle: 'Untuk yang baru mulai',
    price: 'Rp 650.000',
    pieces: '25 pcs',
    target: 'Rp 2-5 Jt/bln',
    color: 'border-gray-200',
    badge: null,
    badgeBg: '',
    features: [
      '25 pcs produk pilihan',
      'Akses foto produk standar',
      'Bergabung komunitas mitra',
      'Panduan berjualan dasar',
    ],
    cta: 'Mulai dengan Starter',
    ctaStyle: 'border-2 border-lamonte-green/40 text-lamonte-green hover:bg-lamonte-green-pale',
  },
  {
    name: 'Agen Pro',
    subtitle: 'Paling diminati mitra aktif',
    price: 'Rp 3.500.000',
    pieces: '150 pcs',
    target: 'Rp 15-30 Jt/bln',
    color: 'border-lamonte-green',
    badge: 'Terpopuler',
    badgeBg: 'bg-lamonte-green',
    features: [
      '150 pcs mix koleksi terbaru',
      'Mandat wilayah eksklusif',
      'Konten premium siap posting',
      'Mentoring zoom 2x/bulan',
      'WhatsApp automation tools',
      'Kalkulator margin & harga',
    ],
    cta: 'Ambil Paket Agen Pro',
    ctaStyle: 'bg-lamonte-green text-white hover:bg-lamonte-green-light shadow-xl shadow-lamonte-green/30',
  },
  {
    name: 'Mini HQ',
    subtitle: 'Untuk skala provinsi',
    price: 'Rp 12.500.000',
    pieces: '550 pcs',
    target: 'Rp 50-80 Jt/bln',
    color: 'border-lamonte-gold',
    badge: 'Elite',
    badgeBg: 'bg-gradient-to-r from-lamonte-gold to-amber-400',
    features: [
      '550 pcs premium all-variant',
      'Eksklusif satu provinsi penuh',
      'Kelola & rekrut sub-mitra',
      'Komisi dari seluruh jaringan',
      'Priority support tim Lamonte',
      'Laporan bisnis bulanan',
      'Personal branding kit',
      'Akses semua modul bisnis',
    ],
    cta: 'Daftar Mini HQ',
    ctaStyle: 'border-2 border-lamonte-gold text-lamonte-gold hover:bg-lamonte-gold/10 font-bold',
  },
  {
    name: 'Enterprise',
    subtitle: 'Distributor skala nasional',
    price: 'Custom',
    pieces: '1000+ pcs',
    target: 'Rp 100 Jt+/bln',
    color: 'border-gray-800',
    badge: 'Khusus',
    badgeBg: 'bg-lamonte-dark',
    features: [
      'Semua fitur Mini HQ',
      'Negosiasi harga langsung',
      'Brand collaborations',
      'White-label tersedia',
      'Dedicated account manager',
      'Kontrak distribusi resmi',
    ],
    cta: 'Hubungi Tim Kami',
    ctaStyle: 'bg-lamonte-dark text-white hover:bg-gray-800',
  },
]

const modules = [
  { icon: '📱', title: 'Branding Kit', desc: 'Template IG, WA, Tiktok siap pakai' },
  { icon: '📊', title: 'Price Calculator', desc: 'Hitung margin otomatis per produk' },
  { icon: '🎥', title: 'Content Training', desc: 'Kelas konten video & foto' },
  { icon: '🛒', title: 'Marketplace Setup', desc: 'Setup Tokopedia & Shopee mudah' },
  { icon: '🤖', title: 'WA Automation', desc: 'Auto reply & broadcast sistem' },
  { icon: '📅', title: 'Content Calendar', desc: 'Jadwal konten harian sudah ada' },
  { icon: '🎓', title: 'Zoom Mentoring', desc: 'Live class bersama tim expert' },
  { icon: '📦', title: 'Stock Manager', desc: 'Monitor stok realtime' },
]

export default function PackageSection() {
  return (
    <section id="package" className="py-24 bg-lamonte-gray-light">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full mb-4">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Pilihan Paket</span>
          </div>
          <h2 className="reveal delay-100 font-black text-4xl lg:text-5xl text-lamonte-dark leading-tight mb-4">
            Investasi yang Tepat<br />
            <span className="text-gradient">untuk Bisnis Nyata</span>
          </h2>
          <p className="reveal delay-200 text-gray-500 text-lg max-w-xl mx-auto">
            Mulai dari paket kecil, upgrade kapan saja. Tidak ada kontrak jangka panjang.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`reveal delay-${(i + 1) * 100} card-hover flex flex-col border-2 ${pkg.color} bg-white rounded-3xl overflow-hidden ${pkg.name === 'Agen Pro' ? 'ring-2 ring-lamonte-green/20 shadow-2xl shadow-lamonte-green/10' : ''}`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className={`${pkg.badgeBg} text-white text-center py-2 text-xs font-bold`}>
                  {pkg.badge}
                </div>
              )}
              {!pkg.badge && <div className="h-8" />}

              <div className="p-6 flex-1 flex flex-col">
                {/* Name */}
                <div className="mb-5">
                  <h3 className="font-black text-xl text-lamonte-dark">{pkg.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{pkg.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-1">
                  <div className="font-black text-2xl text-lamonte-dark">{pkg.price}</div>
                  <div className="text-xs text-gray-400 mt-1">Stok: <span className="font-semibold text-gray-600">{pkg.pieces}</span></div>
                </div>

                {/* Target income */}
                <div className="flex items-center gap-2 bg-lamonte-green-pale rounded-xl px-3 py-2 mb-6">
                  <svg className="w-4 h-4 text-lamonte-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-xs font-semibold text-lamonte-green">Target: {pkg.target}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-lamonte-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#daftar"
                  className={`block text-center py-3 rounded-2xl text-sm font-bold transition-all duration-200 ${pkg.ctaStyle}`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modules */}
        <div className="reveal bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="font-black text-2xl text-lamonte-dark mb-2">
              7 Modul Bisnis Eksklusif
            </h3>
            <p className="text-gray-500 text-sm">Semua tools tersedia dalam satu ekosistem Lamonte.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {modules.map((m, i) => (
              <div key={m.title} className={`reveal delay-${(i % 4 + 1) * 100} text-center p-5 rounded-2xl bg-gray-50 hover:bg-lamonte-green-pale transition-colors duration-200 group`}>
                <div className="text-3xl mb-3">{m.icon}</div>
                <div className="font-bold text-sm text-lamonte-dark group-hover:text-lamonte-green transition-colors">{m.title}</div>
                <div className="text-xs text-gray-400 mt-1">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
