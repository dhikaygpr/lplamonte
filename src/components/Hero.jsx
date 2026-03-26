export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-lamonte-green-pale rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-lamonte-gold/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(#2E7D52 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="reveal inline-flex items-center gap-2 bg-lamonte-green-pale border border-lamonte-green/20 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-lamonte-green rounded-full animate-pulse" />
              <span className="text-lamonte-green text-xs font-semibold uppercase tracking-widest">Peluang Bisnis 2026</span>
            </div>
            <h1 className="reveal delay-100 font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-lamonte-dark mb-6">
              Jadilah Bagian dari <span className="text-gradient">Ekosistem Bisnis</span> Fashion Anak Terbesar
            </h1>
            <p className="reveal delay-200 text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
              Sistem distributor berteritori eksklusif. Produk baju anak premium.
              Modal mulai <strong className="text-lamonte-dark">Rp 650.000</strong>.
              Omzet rata-rata mitra aktif hingga <strong className="text-lamonte-green">Rp 80 Juta/bulan</strong>.
            </p>
            <div className="reveal delay-300 grid grid-cols-3 gap-4 mb-10">
              {[
                { num: '10.000+', label: 'Mitra Aktif' },
                { num: '34', label: 'Provinsi' },
                { num: '15 Tahun', label: 'Pengalaman' },
              ].map((s) => (
                <div key={s.label} className="text-center bg-gray-50 rounded-2xl py-4">
                  <div className="font-black text-2xl text-lamonte-green stat-number">{s.num}</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="reveal delay-400 flex flex-col sm:flex-row gap-4">
              <a href="#daftar" className="cta-pulse flex items-center justify-center gap-3 bg-lamonte-green text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-lamonte-green-light transition-all duration-200 shadow-xl shadow-lamonte-green/25">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 2.107.547 4.09 1.504 5.815L0 24l6.352-1.487A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.813 9.813 0 01-5.001-1.367l-.36-.214-3.72.977.994-3.638-.235-.374A9.816 9.816 0 012.182 12c0-5.42 4.399-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                </svg>
                Daftar via WhatsApp
              </a>
              <a href="#system" className="flex items-center justify-center gap-2 border-2 border-lamonte-green/30 text-lamonte-green px-8 py-4 rounded-2xl font-semibold text-base hover:border-lamonte-green hover:bg-lamonte-green-pale transition-all duration-200">
                Lihat Sistemnya
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
            <div className="reveal delay-500 flex items-center gap-3 mt-8">
                ))}
              </div>
            </div>
          </div>

          {/* Desktop image collage */}
          <div className="reveal-right relative hidden lg:block" style={{height:'580px'}}>
            {/* Main */}
            <div className="absolute right-0 top-0 w-[60%] rounded-3xl overflow-hidden shadow-2xl shadow-lamonte-green/15" style={{height:'380px'}}>
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=760&fit=crop&q=80" alt="anak baju" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-lamonte-dark/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-2xl px-4 py-3 flex items-center gap-2">
                <div className="flex gap-0.5">{[1,2,3,4,5].map(i=><svg key={i} className="w-3.5 h-3.5 text-lamonte-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                <span className="text-xs font-bold text-lamonte-dark">4.9 • Kualitas Premium</span>
              </div>
            </div>
            {/* Bottom left */}
            <div className="absolute left-0 bottom-0 w-[52%] rounded-3xl overflow-hidden shadow-xl" style={{height:'300px'}}>
              <img src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=500&h=600&fit=crop&q=80" alt="koleksi anak" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-lamonte-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-white font-black text-sm">200+ Model</div>
                <div className="text-white/70 text-xs">Update tiap bulan</div>
              </div>
            </div>
            {/* Top left small */}
            <div className="absolute left-0 top-4 w-[44%] rounded-2xl overflow-hidden shadow-lg" style={{height:'200px'}}>
              <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop&q=80" alt="fashion anak" className="w-full h-full object-cover" />
            </div>
            {/* Income badge */}
            <div className="absolute -right-2 top-[330px] bg-white border border-lamonte-gold/30 rounded-2xl px-4 py-3 shadow-xl float-anim z-10">
              <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Rata-rata omzet</div>
              <div className="font-black text-lamonte-green text-xl">Rp 80 Jt<span className="text-sm font-semibold text-gray-400">/bln</span></div>
            </div>
            {/* New collection badge */}
            <div className="absolute left-[42%] top-[210px] bg-lamonte-green text-white rounded-2xl px-3 py-2.5 shadow-xl float-anim z-10" style={{animationDelay:'1.2s'}}>
              <div className="text-[10px] font-medium opacity-80">Koleksi baru</div>
              <div className="font-black text-sm">Tiap Bulan ✨</div>
            </div>
            {/* Mitra count */}
            <div className="absolute right-4 bottom-4 bg-lamonte-dark text-white rounded-2xl px-4 py-3 shadow-xl z-10">
              <div className="text-[10px] text-white/50 uppercase tracking-wider">Mitra aktif</div>
              <div className="font-black text-lg">10.000+</div>
            </div>
          </div>

          {/* Mobile image */}
          <div className="reveal lg:hidden relative rounded-3xl overflow-hidden aspect-video shadow-xl">
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop&q=80" alt="Koleksi Lamonte" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-lamonte-dark/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-2xl p-3 flex justify-between items-center">
              <div>
                <div className="font-black text-sm text-lamonte-dark">200+ Model Tersedia</div>
                <div className="text-xs text-gray-500">Update tiap bulan</div>
              </div>
              <div className="font-black text-lamonte-green text-base">Rp 80 Jt/bln</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
