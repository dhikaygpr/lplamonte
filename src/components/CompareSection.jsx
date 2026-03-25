const compareItems = [
  {
    aspect: 'Modal Awal',
    withoutLamonte: 'Ratusan juta untuk brand sendiri',
    withLamonte: 'Mulai Rp 650.000',
    icon: '💸',
  },
  {
    aspect: 'Produksi',
    withoutLamonte: 'Harus urus sendiri, berisiko',
    withLamonte: 'Sudah tersedia, ready stock',
    icon: '📦',
  },
  {
    aspect: 'Foto Produk',
    withoutLamonte: 'Biaya foto jutaan rupiah',
    withLamonte: 'Konten profesional gratis',
    icon: '📸',
  },
  {
    aspect: 'Wilayah Jualan',
    withoutLamonte: 'Bebas — tapi bersaing ketat',
    withLamonte: 'Hak eksklusif per wilayah',
    icon: '🗺️',
  },
  {
    aspect: 'Sistem Marketing',
    withoutLamonte: 'Buat sendiri dari nol',
    withLamonte: 'Sistem otomatis tersedia',
    icon: '📣',
  },
  {
    aspect: 'Mentoring',
    withoutLamonte: 'Tidak ada support',
    withLamonte: 'Mentoring zoom rutin + WA group',
    icon: '🎓',
  },
  {
    aspect: 'Update Produk',
    withoutLamonte: 'Desain sendiri, mahal',
    withLamonte: 'Koleksi baru tiap bulan',
    icon: '✨',
  },
  {
    aspect: 'Risiko',
    withoutLamonte: 'Tinggi — produk bisa menumpuk',
    withLamonte: 'Rendah — stok terkelola',
    icon: '🛡️',
  },
]

const beforeAfterPhotos = [
  {
    before: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=500&fit=crop&q=70',
    after: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=500&fit=crop&q=70',
    name: 'Siti Rahma',
    location: 'Surabaya, Jawa Timur',
    before_label: 'Sebelum Lamonte',
    after_label: 'Bersama Lamonte',
    before_income: 'Rp 3 Jt/bln',
    after_income: 'Rp 28 Jt/bln',
  },
  {
    before: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=70',
    after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=70',
    name: 'Budi Santoso',
    location: 'Bandung, Jawa Barat',
    before_label: 'Sebelum Lamonte',
    after_label: 'Bersama Lamonte',
    before_income: 'Rp 5 Jt/bln',
    after_income: 'Rp 45 Jt/bln',
  },
  {
    before: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=70',
    after: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=500&fit=crop&q=70',
    name: 'Dewi Lestari',
    location: 'Medan, Sumatera Utara',
    before_label: 'Sebelum Lamonte',
    after_label: 'Bersama Lamonte',
    before_income: 'Rp 2 Jt/bln',
    after_income: 'Rp 35 Jt/bln',
  },
]

export default function CompareSection() {
  return (
    <section id="compare" className="py-24 bg-lamonte-gray-light">
      <div className="max-w-6xl mx-auto px-6">

        {/* COMPARE TABLE */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full mb-4">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Perbandingan</span>
          </div>
          <h2 className="reveal delay-100 font-black text-4xl lg:text-5xl text-lamonte-dark leading-tight mb-4">
            Bisnis Sendiri vs<br />
            <span className="text-gradient">Mitra Lamonte</span>
          </h2>
          <p className="reveal delay-200 text-gray-500 text-lg max-w-xl mx-auto">
            Lihat perbedaannya — dan pilih yang lebih masuk akal.
          </p>
        </div>

        {/* Table */}
        <div className="reveal overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-100 mb-24">
          {/* Header */}
          <div className="grid grid-cols-3 bg-lamonte-dark text-white">
            <div className="p-5 text-sm font-semibold text-white/60">Aspek</div>
            <div className="p-5 text-center border-l border-white/10">
              <div className="text-sm font-bold text-red-400">❌ Bisnis Sendiri</div>
            </div>
            <div className="p-5 text-center border-l border-white/10 bg-lamonte-green">
              <div className="text-sm font-bold">✅ Mitra Lamonte</div>
            </div>
          </div>

          {compareItems.map((item, i) => (
            <div
              key={item.aspect}
              className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
            >
              <div className="p-4 lg:p-5 flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-semibold text-lamonte-dark">{item.aspect}</span>
              </div>
              <div className="p-4 lg:p-5 border-l border-gray-100 flex items-center">
                <span className="text-sm text-gray-500">{item.withoutLamonte}</span>
              </div>
              <div className="p-4 lg:p-5 border-l border-lamonte-green/10 flex items-center bg-lamonte-green-pale/30">
                <span className="text-sm font-semibold text-lamonte-green">{item.withLamonte}</span>
              </div>
            </div>
          ))}
        </div>

        {/* BEFORE / AFTER SECTION */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full mb-4">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Transformasi Nyata</span>
          </div>
          <h2 className="reveal delay-100 font-black text-4xl lg:text-5xl text-lamonte-dark leading-tight mb-4">
            Lihat Perubahan<br />
            <span className="text-gradient">Mitra Kami</span>
          </h2>
          <p className="reveal delay-200 text-gray-500 text-base max-w-xl mx-auto">
            Kisah nyata mitra yang mengubah hidupnya bersama Lamonte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {beforeAfterPhotos.map((p, i) => (
            <div key={p.name} className={`reveal delay-${(i + 1) * 100} card-hover`}>
              {/* Before / After photos side by side */}
              <div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/5] mb-5 shadow-lg">
                <div className="grid grid-cols-2 h-full">
                  {/* Before */}
                  <div className="relative overflow-hidden">
                    <img
                      src={p.before}
                      alt="before"
                      className="w-full h-full object-cover grayscale"
                      onError={(e) => {
                        e.target.style.background = '#e5e7eb'
                        e.target.style.display = 'none'
                        e.target.parentNode.style.background = 'linear-gradient(135deg, #9ca3af, #d1d5db)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gray-900/20" />
                    <div className="absolute bottom-2 left-2 right-2 bg-gray-900/70 backdrop-blur rounded-xl p-2 text-center">
                      <div className="text-[10px] text-white/70 font-medium uppercase tracking-wider">Sebelum</div>
                      <div className="text-sm font-black text-white">{p.before_income}</div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative overflow-hidden">
                    <img
                      src={p.after}
                      alt="after"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentNode.style.background = 'linear-gradient(135deg, #2E7D52, #3DA06A)'
                      }}
                    />
                    <div className="absolute inset-0 bg-lamonte-green/10" />
                    <div className="absolute bottom-2 left-2 right-2 bg-lamonte-green/90 backdrop-blur rounded-xl p-2 text-center">
                      <div className="text-[10px] text-white/80 font-medium uppercase tracking-wider">Setelah</div>
                      <div className="text-sm font-black text-white">{p.after_income}</div>
                    </div>
                  </div>
                </div>

                {/* Center divider */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center z-10 shadow-lg">
                  <svg className="w-4 h-4 text-lamonte-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>

              {/* Name & location */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lamonte-green-pale rounded-full flex items-center justify-center text-lamonte-green font-black text-sm flex-shrink-0">
                  {p.name[0]}
                </div>
                <div>
                  <div className="font-bold text-lamonte-dark text-sm">{p.name}</div>
                  <div className="text-xs text-gray-400">{p.location}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-xs text-gray-400">Omzet</div>
                  <div className="font-bold text-lamonte-green text-sm">{p.after_income}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
