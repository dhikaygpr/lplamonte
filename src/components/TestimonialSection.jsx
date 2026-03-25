const testimonials = [
  {
    name: 'Siti Rahma',
    role: 'Mitra Agen, Surabaya',
    avatar: 'SR',
    color: 'bg-emerald-100 text-emerald-700',
    content:
      'Awalnya ragu karena pernah rugi bisnis baju lain. Tapi Lamonte beda — kontennya sudah tersedia, mandatnya jelas, dan omzetku sekarang 28 juta sebulan. Nggak nyangka bisa secepat ini.',
    income: 'Rp 28 Jt/bln',
    duration: '8 bulan bergabung',
    stars: 5,
  },
  {
    name: 'Budi Santoso',
    role: 'Mini HQ, Bandung',
    avatar: 'BS',
    color: 'bg-blue-100 text-blue-700',
    content:
      'Dari reseller biasa sampai sekarang punya Mini HQ dengan 40+ sub-mitra di Jawa Barat. Sistemnya benar-benar solid. Tim support Lamonte selalu ada kalau ada kendala.',
    income: 'Rp 45 Jt/bln',
    duration: '1.5 tahun bergabung',
    stars: 5,
  },
  {
    name: 'Dewi Lestari',
    role: 'Mitra Agen, Medan',
    avatar: 'DL',
    color: 'bg-purple-100 text-purple-700',
    content:
      'Ibu rumah tangga bisa bisnis sendiri dari rumah. Foto sudah ada, caption sudah ada, tinggal posting. Sekarang bisa beli kebutuhan anak sendiri dari hasil jualan Lamonte.',
    income: 'Rp 35 Jt/bln',
    duration: '11 bulan bergabung',
    stars: 5,
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Mitra Agen, Makassar',
    avatar: 'AF',
    color: 'bg-orange-100 text-orange-700',
    content:
      'Mulai dari paket Starter 650 ribu. 3 bulan kemudian upgrade ke Agen Pro. Koleksinya selalu baru dan pelanggan suka. Sekarang punya pelanggan loyal 200+ orang.',
    income: 'Rp 22 Jt/bln',
    duration: '6 bulan bergabung',
    stars: 5,
  },
  {
    name: 'Nurul Hidayah',
    role: 'Mini HQ, Yogyakarta',
    avatar: 'NH',
    color: 'bg-pink-100 text-pink-700',
    content:
      'Mandat wilayah benar-benar game changer. Tidak ada saingan sesama mitra di kota saya. Fokus jualan tanpa drama. Mentoring zoomnya juga sangat membantu untuk strategi.',
    income: 'Rp 52 Jt/bln',
    duration: '2 tahun bergabung',
    stars: 5,
  },
  {
    name: 'Rina Wati',
    role: 'Mitra Agen, Semarang',
    avatar: 'RW',
    color: 'bg-teal-100 text-teal-700',
    content:
      'WhatsApp automation-nya luar biasa — broadcast ke ribuan kontak dalam sekali klik. Orderan terus masuk bahkan saat saya tidur. Ini namanya passive income yang sesungguhnya.',
    income: 'Rp 19 Jt/bln',
    duration: '5 bulan bergabung',
    stars: 5,
  },
]

export default function TestimonialSection() {
  return (
    <section id="testimoni" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-lamonte-green-pale px-4 py-1.5 rounded-full mb-4">
            <span className="text-lamonte-green text-xs font-semibold uppercase tracking-widest">Kata Mereka</span>
          </div>
          <h2 className="reveal delay-100 font-black text-4xl lg:text-5xl text-lamonte-dark leading-tight mb-4">
            Kisah Sukses<br />
            <span className="text-gradient">10.000+ Mitra</span>
          </h2>
          <p className="reveal delay-200 text-gray-500 text-lg max-w-xl mx-auto">
            Mereka sudah membuktikannya. Sekarang giliran kamu.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${Math.min((i % 3 + 1) * 100, 400)} card-hover bg-white border border-gray-100 rounded-3xl p-7 shadow-sm hover:shadow-lg hover:shadow-lamonte-green/5 transition-all`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <svg key={si} className="w-4 h-4 text-lamonte-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-600 text-sm leading-relaxed mb-6">
                "{t.content}"
              </blockquote>

              {/* Income badge */}
              <div className="flex items-center gap-2 bg-lamonte-green-pale rounded-xl px-3 py-2 mb-5">
                <svg className="w-4 h-4 text-lamonte-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-xs font-bold text-lamonte-green">Omzet: {t.income}</span>
              </div>

              {/* Person */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center font-black text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm text-lamonte-dark">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-xs text-gray-400">{t.duration}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="reveal mt-12 grid grid-cols-3 gap-4 bg-lamonte-dark rounded-3xl p-8 text-white">
          {[
            { num: '4.9/5', label: 'Rating kepuasan mitra' },
            { num: '97%', label: 'Mitra repeat order' },
            { num: 'Rp 80 Jt', label: 'Omzet tertinggi per bulan' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-black text-3xl text-lamonte-gold stat-number">{s.num}</div>
              <div className="text-xs text-white/50 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
