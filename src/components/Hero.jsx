import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Background Decoration */}
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
            <div className="inline-flex items-center gap-2 bg-lamonte-green-pale border border-lamonte-green/20 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-lamonte-green rounded-full animate-pulse" />
              <span className="text-lamonte-green text-[10px] font-bold uppercase tracking-[0.2em]">Peluang Bisnis Eksklusif 2026</span>
            </div>
            
            <h1 className="font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-lamonte-dark mb-6">
              Amankan <span className="text-gradient">Hak Wilayah</span> Bisnis Fashion Anak Anda!
            </h1>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
              Bergabunglah dalam ekosistem distributor dengan sistem berteritori eksklusif. Produk premium, modal mulai <strong className="text-lamonte-dark font-bold">Rp 650.000</strong>, dan potensi omzet hingga <strong className="text-lamonte-green font-bold">Rp 80 Juta/bulan</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#daftar" className="cta-pulse flex items-center justify-center gap-3 bg-lamonte-green text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-lamonte-green-light transition-all shadow-xl shadow-lamonte-green/25">
                Daftar & Amankan Slot
              </a>
              <div className="flex items-center gap-3 px-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Mitra" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-lamonte-dark text-white flex items-center justify-center text-[10px] font-bold">+10k</div>
                </div>
                <div className="leading-tight">
                  <div className="font-bold text-lamonte-dark text-sm tracking-tight">10.000+ Mitra Aktif</div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Telah Bergabung</div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '34', label: 'Provinsi' },
                { num: '15 Thn', label: 'Pengalaman' },
                { num: '200+', label: 'Model Baru' },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 text-center">
                  <div className="font-black text-xl text-lamonte-dark leading-none">{s.num}</div>
                  <div className="text-[9px] text-gray-400 font-bold uppercase mt-1 tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Image Collage */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Main Image */}
            <div className="absolute right-0 top-0 w-[65%] h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" alt="Koleksi Utama" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-lamonte-dark/40 to-transparent" />
            </div>
            
            {/* Supporting Image 1 */}
            <div className="absolute left-0 bottom-10 w-[55%] h-[320px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10">
              <img src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&q=80" alt="Koleksi Pilihan" className="w-full h-full object-cover" />
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute -right-4 top-[350px] bg-white rounded-3xl p-5 shadow-2xl z-20 border border-gray-50 float-anim">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Rata-rata Omzet</div>
              <div className="text-2xl font-black text-lamonte-green">Rp 80 Juta<span className="text-sm font-semibold">/bln</span></div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute left-[40%] top-[180px] bg-lamonte-dark text-white rounded-2xl px-4 py-3 shadow-2xl z-20 flex items-center gap-3">
              <div className="w-8 h-8 bg-lamonte-green rounded-full flex items-center justify-center">✨</div>
              <div>
                <div className="text-[9px] text-white/50 uppercase font-bold">Kualitas</div>
                <div className="text-xs font-black">Grade Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
