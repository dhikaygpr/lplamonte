const steps = [
  {
    num: '01',
    title: 'Pilih Paket',
    desc: 'Pilih paket sesuai budget dan target bisnismu — mulai dari Starter hingga Mini HQ.',
    icon: '📋',
    color: 'from-green-50 to-emerald-50 border-green-100',
    numColor: 'text-lamonte-green',
  },
  {
    num: '02',
    title: 'Aktivasi & Onboarding',
    desc: 'Kami siapkan semua: akun, katalog digital, materi marketing, dan akses sistem.',
    icon: '⚡',
    color: 'from-blue-50 to-indigo-50 border-blue-100',
    numColor: 'text-blue-500',
  },
  {
    num: '03',
    title: 'Mulai Jualan',
    desc: 'Posting konten yang sudah kami siapkan, terima order, dan kami yang proses pengiriman.',
    icon: '🚀',
    color: 'from-purple-50 to-violet-50 border-purple-100',
    numColor: 'text-purple-500',
  },
  {
    num: '04',
    title: 'Kembangkan Bisnis',
    desc: 'Dengan mentoring dan sistem yang ada, scale up bisnismu hingga ratusan juta per bulan.',
    icon: '📈',
    color: 'from-amber-50 to-yellow-50 border-amber-100',
    numColor: 'text-amber-500',
  },
]

const tiers = [
  {
    name: 'Reseller',
    badge: null,
    color: 'border-gray-200',
    headerBg: 'bg-gray-50',
    features: [
      'Stok personal',
      'Harga reseller',
      'Grup support',
      'Foto produk standar',
    ],
    missing: ['Mandat wilayah', 'Konten premium', 'Mentoring intensif'],
    icon: '🛍️',
  },
  {
    name: 'Agen',
    badge: 'Populer',
    color: 'border-lamonte-green/40',
    headerBg: 'bg-lamonte-green-pale',
    features: [
      'Stok premium',
      'Harga agen',
      'Mandat wilayah',
      'Konten premium siap pakai',
      'Mentoring zoom rutin',
      'Sistem marketing otomatis',
    ],
    missing: ['Mini HQ management'],
    icon: '🏪',
  },
  {
    name: 'Distributor / Mini HQ',
    badge: 'Terbaik',
    color: 'border-lamonte-gold',
    headerBg: 'bg-gradient-to-br from-lamonte-gold/10 to-lamonte-green-pale',
    features: [
      'Semua fitur Agen',
      'Eksklusif satu provinsi',
      'Kelola sub-mitra',
      'Komisi dari jaringan',
      'Priority support',
      'Laporan bisnis bulanan',
      'Branding eksklusif',
    ],
    missing: [],
    icon: '🏆',
  },
]

export default function SystemSection() {
  return (
    <section id="system" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HOW IT WORKS */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-lamonte-green-pale px-4 py-1.5 rounded-full mb-4">
            <span className="text-lamonte-green text-xs font-semibold uppercase tracking-widest">Cara Kerja</span>
          </div>
          <h2 className="reveal delay-100 font-black text-4xl lg:text-5xl text-lamonte-dark leading-tight mb-4">
            Sistem Sederhana,<br />
            <span className="text-gradient">Hasil Nyata</span>
          </h2>
          <p className="reveal delay-200 text-gray-500 text-lg max-w-xl mx-auto">
            Hanya 4 langkah untuk memulai bisnis profesional bersama Lamonte.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {steps.map((s, i) => (
            <div key={s.num} className={`reveal delay-${(i + 1) * 100} relative`}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-lamonte-green/30 to-transparent z-0 -translate-y-1/2" style={{width: 'calc(100% - 2rem)', left: '100%'}} />
              )}
              <div className={`card-hover border ${s.color} bg-gradient-to-br rounded-3xl p-7 relative h-full`}>
                <div className={`font-black text-5xl ${s.numColor} mb-3 opacity-20`}>{s.num}</div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg text-lamonte-dark mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TIER SYSTEM */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 bg-lamonte-green-pale px-4 py-1.5 rounded-full mb-4">
            <span className="text-lamonte-green text-xs font-semibold uppercase tracking-widest">Jenjang Mitra</span>
          </div>
          <h2 className="reveal delay-100 font-black text-4xl lg:text-5xl text-lamonte-dark leading-tight mb-4">
            Mulai dari Mana Saja,<br />
            <span className="text-gradient">Bertumbuh Bersama</span>
          </h2>
          <p className="reveal delay-200 text-gray-500 text-base max-w-xl mx-auto">
            Pilih level yang sesuai, upgrade kapan saja saat bisnis berkembang.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`reveal delay-${(i + 1) * 100} card-hover border-2 ${tier.color} rounded-3xl overflow-hidden relative ${tier.name.includes('Mini') ? 'ring-2 ring-lamonte-gold/30' : ''}`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className={`absolute top-4 right-4 ${tier.badge === 'Terbaik' ? 'badge-premium' : 'bg-lamonte-green'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {tier.badge}
                </div>
              )}

              {/* Header */}
              <div className={`${tier.headerBg} p-7 pb-6`}>
                <div className="text-4xl mb-3">{tier.icon}</div>
                <h3 className="font-black text-xl text-lamonte-dark">{tier.name}</h3>
              </div>

              {/* Features */}
              <div className="p-7 pt-5">
                <div className="space-y-2.5">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-lamonte-green-pale rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-lamonte-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{f}</span>
                    </div>
                  ))}
                  {tier.missing.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 opacity-40">
                      <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-400">{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#daftar"
                  className={`mt-7 block text-center py-3 rounded-2xl text-sm font-bold transition-all duration-200 ${
                    tier.name.includes('Mini')
                      ? 'bg-lamonte-green text-white hover:bg-lamonte-green-light shadow-lg shadow-lamonte-green/25'
                      : 'border-2 border-lamonte-green/30 text-lamonte-green hover:border-lamonte-green hover:bg-lamonte-green-pale'
                  }`}
                >
                  Pilih {tier.name.split('/')[0].trim()}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
