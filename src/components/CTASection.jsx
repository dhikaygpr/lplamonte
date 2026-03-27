import React from 'react';

export default function CTASection() {
  const whatsappUrl = "https://wa.me/6285933219962?text=Halo+Lamonte!+Saya+tertarik+menjadi+distributor.+Bagaimana+cara+amankan+slot+wilayah+saya%3F";

  return (
    <section id="daftar" className="py-24 bg-white relative overflow-hidden">
      {/* Visual Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-lamonte-green/20 to-transparent" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-lamonte-green-pale rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Urgency Header */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['Slot Terbatas per Provinsi', 'Hak Wilayah Eksklusif', 'Koleksi 2026 Terbaru'].map((item) => (
            <div key={item} className="flex items-center gap-2 bg-red-50 border border-red-100 px-5 py-2 rounded-full shadow-sm">
              <span className="text-red-600 animate-pulse">●</span>
              <span className="text-[10px] font-black text-red-600 uppercase tracking-wider">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="font-black text-4xl lg:text-6xl text-lamonte-dark leading-tight mb-8 text-balance">
            Siap Membangun <br/>
            <span className="text-gradient">Kerajaan Bisnis</span> Anda?
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Jangan biarkan kompetitor mengambil peluang emas ini di wilayah Anda. Bergabunglah sekarang dan dapatkan bimbingan penuh hingga sukses.
          </p>
        </div>

        {/* Benefits Grid / Risk Reversal */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 flex items-start gap-4 hover:border-lamonte-green/30 transition-colors">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm">🤝</div>
            <div>
              <h4 className="font-black text-lamonte-dark mb-1">Mentorship Eksklusif</h4>
              <p className="text-sm text-gray-500">Anda tidak sendirian. Kami bimbing strategi jualan sampai pecah telor.</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 flex items-start gap-4 hover:border-lamonte-green/30 transition-colors">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm">🛡️</div>
            <div>
              <h4 className="font-black text-lamonte-dark mb-1">Garansi Produk</h4>
              <p className="text-sm text-gray-500">Jaminan kualitas produk premium. Barang cacat? Kami ganti 100%.</p>
            </div>
          </div>
        </div>

        {/* Main Action Area */}
        <div className="bg-lamonte-dark rounded-[3rem] p-10 md:p-16 text-center shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lamonte-green/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-lamonte-green/20 transition-colors duration-700" />
          
          <div className="relative z-10">
            <h3 className="text-white font-black text-3xl mb-8">Amankan Slot Distribusi Wilayah Anda Sekarang!</h3>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse inline-flex items-center gap-4 bg-lamonte-green text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-lamonte-green-light transition-all shadow-2xl shadow-lamonte-green/40 w-full sm:w-auto justify-center"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.374 0 0 5.373 0 12c0 2.107.547 4.09 1.504 5.815L0 24l6.352-1.487A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.813 9.813 0 01-5.001-1.367l-.36-.214-3.72.977.994-3.638-.235-.374A9.816 9.816 0 012.182 12c0-5.42 4.399-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
              </svg>
              Daftar Via WhatsApp
            </a>
            
            <p className="text-white/40 text-[10px] mt-8 font-medium uppercase tracking-[0.2em]">
              *Pendaftaran akan ditutup otomatis saat kuota provinsi penuh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
