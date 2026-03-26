const brands = [
  'Tokopedia', 'Shopee', 'Lazada', 'TikTok Shop', 'WhatsApp Business',
  'Instagram Shop', 'Tokopedia', 'Shopee', 'Lazada', 'TikTok Shop',
]

const stats = [
  { number: '10.000+', label: 'Mitra Aktif', icon: '👥' },
  { number: '34', label: 'Provinsi', icon: '🗺️' },
  { number: 'Rp 80 Jt', label: 'Omzet Tertinggi/Bulan', icon: '💰' },
  { number: '>15', label: 'Tahun Berdiri', icon: '🏆' },
  { number: '98%', label: 'Kepuasan Mitra', icon: '⭐' },
  { number: '200+', label: 'Model Tersedia', icon: '👗' },
]

export default function SocialProof() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      {/* Marquee brands */}
      <div className="overflow-hidden mb-12">
        <div className="marquee-track">
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="mx-8 flex items-center gap-2 text-gray-300 font-bold text-sm uppercase tracking-widest whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-lamonte-green/30 rounded-full" />
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* Stats grid */}
      <div className="max-w-6xl mx-auto px-6">
        <p className="reveal text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Dipercaya ribuan mitra di seluruh Indonesia
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal delay-${(i + 1) * 100} text-center group`}
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-black text-2xl text-lamonte-dark stat-number">{s.number}</div>
              <div className="text-xs text-gray-400 font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
