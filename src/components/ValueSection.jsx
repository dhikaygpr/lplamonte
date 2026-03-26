const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Mandat Wilayah Eksklusif',
    desc: 'Tidak ada persaingan sesama mitra dalam satu wilayah. Kamu punya hak eksklusif di area bisnismu.',
    highlight: 'Eksklusif per wilayah',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Stok Premium Siap Kirim',
    desc: 'Produk selalu ready stock. Sistem manajemen stok otomatis. Tidak perlu repot urus produksi.',
    highlight: 'Ready stock selalu',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Konten Siap Pakai',
    desc: 'Foto produk profesional, caption, template Story & Feed. Semua sudah tersedia, tinggal posting.',
    highlight: 'Foto profesional',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Koleksi Baru Tiap Bulan',
    desc: '200+ model tersedia, diperbarui setiap bulan. Selalu ada alasan baru untuk pelanggan beli lagi.',
    highlight: '200+ model',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Mentoring & Komunitas',
    desc: 'Zoom mentoring rutin, grup WhatsApp support, dan komunitas mitra yang solid. Kamu tidak sendirian.',
    highlight: 'Support 24/7',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Sistem Marketing Otomatis',
    desc: 'WhatsApp automation, katalog digital, kalkulator harga, semua tools tersedia untuk skala bisnis.',
    highlight: 'Tools lengkap',
  },
]

export default function ValueSection() {
  return (
    <section id="value" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-lamonte-green-pale px-4 py-1.5 rounded-full mb-4">
            <span className="text-lamonte-green text-xs font-semibold uppercase tracking-widest">Kenapa Lamonte</span>
          </div>
          <h2 className="reveal delay-100 font-black text-4xl lg:text-5xl text-lamonte-dark leading-tight mb-4">
            Bukan Sekadar Jual Beli.<br />
            <span className="text-gradient">Ini Ekosistem Bisnis.</span>
          </h2>
          <p className="reveal delay-200 text-gray-500 text-lg max-w-2xl mx-auto">
            Lamonte hadir dengan sistem lengkap, bukan hanya produk, tapi seluruh mesin bisnis
            yang siap kamu jalankan dari hari pertama.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`reveal delay-${Math.min((i + 1) * 100, 500)} card-hover bg-white border border-gray-100 rounded-3xl p-7 group hover:border-lamonte-green/30 transition-all`}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-lamonte-green-pale text-lamonte-green rounded-2xl flex items-center justify-center mb-5 group-hover:bg-lamonte-green group-hover:text-white transition-all duration-300">
                {v.icon}
              </div>

              {/* Badge */}
              <span className="inline-block text-xs font-bold text-lamonte-green bg-lamonte-green-pale px-3 py-1 rounded-full mb-3">
                {v.highlight}
              </span>

              <h3 className="font-bold text-lg text-lamonte-dark mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="reveal mt-16 bg-gradient-to-r from-lamonte-green to-lamonte-green-light rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="font-black text-2xl lg:text-3xl mb-3">
            "Kamu fokus jualan, tim kami yang backup."
          </h3>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            Dari sistem stok hingga konten marketing, semua sudah disiapkan agar kamu bisa langsung
            berjualan sejak hari pertama.
          </p>
        </div>
      </div>
    </section>
  )
}
