const urgencyItems = [
  { icon: '⏳', text: 'Slot distributor 2026 terbatas per provinsi' },
  { icon: '🗺️', text: 'Hak wilayah eksklusif — First Come First Served' },
  { icon: '🔥', text: 'Koleksi terbaru sudah siap, jangan ketinggalan' },
]

const formSteps = [
  { num: 1, text: 'Isi form pendaftaran' },
  { num: 2, text: 'Tim kami menghubungi kamu' },
  { num: 3, text: 'Onboarding & mulai jualan' },
]

export default function CTASection() {
  return (
    <section id="daftar" className="py-24 bg-white relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-lamonte-green/20 to-transparent" />
        <div className="absolute -top-40 right-0 w-96 h-96 bg-lamonte-green-pale rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-20 left-0 w-72 h-72 bg-lamonte-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">

        {/* Top urgency badges */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {urgencyItems.map((u) => (
            <div key={u.text} className="flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full">
              <span>{u.icon}</span>
              <span className="text-xs font-semibold text-red-600">{u.text}</span>
            </div>
          ))}
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="reveal font-black text-4xl lg:text-6xl text-lamonte-dark leading-tight mb-6">
            Siap Mulai Perjalanan<br />
            <span className="text-gradient">Bisnis Kamu?</span>
          </h2>
          <p className="reveal delay-100 text-gray-500 text-lg max-w-2xl mx-auto">
            Bergabunglah dengan 10.000+ mitra Lamonte yang sudah membuktikan bahwa
            bisnis fashion anak bisa menghasilkan puluhan juta per bulan.
          </p>
        </div>

        {/* How to register steps */}
        <div className="reveal delay-200 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {formSteps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-lamonte-green-pale px-4 py-2.5 rounded-full">
                <span className="w-6 h-6 bg-lamonte-green text-white rounded-full flex items-center justify-center text-xs font-black flex-shrink-0">
                  {s.num}
                </span>
                <span className="text-sm font-medium text-lamonte-dark">{s.text}</span>
              </div>
              {i < formSteps.length - 1 && (
                <svg className="hidden sm:block w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="reveal delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://wa.me/6285933219962?text=Halo+Lamonte!+Saya+tertarik+menjadi+distributor.+Bisa+jelaskan+lebih+lanjut%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse flex items-center gap-3 bg-lamonte-green text-white px-10 py-5 rounded-2xl font-black text-base hover:bg-lamonte-green-light transition-all duration-200 shadow-2xl shadow-lamonte-green/30 w-full sm:w-auto justify-center"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.374 0 0 5.373 0 12c0 2.107.547 4.09 1.504 5.815L0 24l6.352-1.487A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.813 9.813 0 01-5.001-1.367l-.36-.214-3.72.977.994-3.638-.235-.374A9.816 9.816 0 012.182 12c0-5.42 4.399-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
            </svg>
            Daftar via WhatsApp Sekarang
          </a>
          <a
            href="https://lamonte.id/distributor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-lamonte-green/30 text-lamonte-green px-8 py-5 rounded-2xl font-semibold text-base hover:border-lamonte-green hover:bg-lamonte-green-pale transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Lihat Website Resmi
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Trust signals */}
        <div className="reveal delay-400 flex flex-wrap justify-center gap-6 text-center">
          {[
            { icon: '🔒', text: 'Aman & Terpercaya' },
            { icon: '💸', text: 'Tanpa Modal Besar' },
            { icon: '📞', text: 'Support 24/7' },
            { icon: '🚚', text: 'Pengiriman Cepat' },
          ].map((t) => (
            <div key={t.text} className="flex items-center gap-2 text-sm text-gray-400">
              <span>{t.icon}</span>
              <span className="font-medium">{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
