const brands = [
  'Tokopedia', 'Shopee', 'Lazada', 'TikTok Shop', 'WhatsApp Business',
  'Instagram Shop', 'Tokopedia', 'Shopee', 'Lazada', 'TikTok Shop',
]

const stats = [
  { number: '10.000+', label: 'Mitra Aktif' },
  { number: '34', label: 'Provinsi' },
  { number: 'Rp 80 Jt', label: 'Omzet Tertinggi' },
  { number: '>15', label: 'Tahun Berdiri' },
  { number: '98%', label: 'Kepuasan Mitra' },
  { number: '200+', label: 'Model Tersedia' },
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      {/* Marquee brands - Tetap dipertahankan untuk Authority */}
      <div className="overflow-hidden mb-16 opacity-60">
        <div className="marquee-track">
          {[...brands, ...brands].map((b, i) => (
            <div key={i} className="mx-8 flex items-center gap-2 text-gray-400 font-bold text-sm uppercase tracking-widest whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-lamonte-green/30 rounded-full" />
              {b}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="font-black text-2xl text-lamonte-dark mb-1">{s.number}</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* --- PART BARU: YOUTUBE PROVEMENT --- */}
        <div className="mb-20">
          <h3 className="text-2xl font-black text-lamonte-dark text-center mb-8">Lihat Langsung Kualitas & Kesuksesan Mitra</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/watch?v=Jq3KOuZBluM&themeRefresh=1" 
                title="Review Produk" 
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/watch?v=GD3KaGFN0Is" 
                title="Testimoni Mitra" 
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* --- PART BARU: PHOTO PROVEMENT GRID --- */}
        <div>
          <p className="text-center text-xs font-bold text-lamonte-green uppercase tracking-[0.2em] mb-4">Real Business, Real People</p>
          <h3 className="text-2xl font-black text-lamonte-dark text-center mb-10 text-balance">
            Ribuan Paket Terkirim & Ratusan Chat Kepuasan Setiap Hari
          </h3>
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            {/* Ganti src dengan path foto provement Anda (chat wa, tumpukan paket, dll) */}
            <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border-2 border-white">
              <img src="/assets/testi-wa-1.jpg" alt="Bukti Chat" className="w-full h-auto" />
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border-2 border-white">
              <img src="/assets/paket-kirim.jpg" alt="Pengiriman" className="w-full h-auto" />
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border-2 border-white">
              <img src="/assets/testi-wa-2.jpg" alt="Bukti Transfer" className="w-full h-auto" />
            </div>
            <div className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border-2 border-white">
              <img src="/assets/gudang-aktif.jpg" alt="Stok Gudang" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
