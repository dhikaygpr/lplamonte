const products = [
  {
    img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop&q=80',
    name: 'Gamis Syari Kids',
    tag: 'Best Seller',
    tagColor: 'bg-lamonte-green',
    price: 'Mulai Rp 85.000',
  },
  {
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&q=80',
    name: 'Set Anak Muslim',
    tag: 'New Arrival',
    tagColor: 'bg-lamonte-gold',
    price: 'Mulai Rp 95.000',
  },
  {
    img: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=500&fit=crop&q=80',
    name: 'Dress Anak Syari',
    tag: 'Premium',
    tagColor: 'bg-purple-500',
    price: 'Mulai Rp 110.000',
  },
  {
    img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=500&fit=crop&q=80',
    name: 'Koko Anak Eksklusif',
    tag: 'Terlaris',
    tagColor: 'bg-red-500',
    price: 'Mulai Rp 75.000',
  },
  {
    img: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&h=500&fit=crop&q=80',
    name: 'Gamis Couple Ibu & Anak',
    tag: 'Populer',
    tagColor: 'bg-blue-500',
    price: 'Mulai Rp 135.000',
  },
  {
    img: 'https://images.unsplash.com/photo-1471286174890-9c112ac6476e?w=400&h=500&fit=crop&q=80',
    name: 'Kaftan Anak Premium',
    tag: 'Eksklusif',
    tagColor: 'bg-amber-500',
    price: 'Mulai Rp 120.000',
  },
]

export default function ProductGallery() {
  return (
    <section id="produk" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 bg-lamonte-green-pale px-4 py-1.5 rounded-full mb-4">
            <span className="text-lamonte-green text-xs font-semibold uppercase tracking-widest">Koleksi Produk</span>
          </div>
          <h2 className="reveal delay-100 font-black text-4xl lg:text-5xl text-lamonte-dark leading-tight mb-4">
            Produk yang <span className="text-gradient">Laku Keras</span><br />di Seluruh Indonesia
          </h2>
          <p className="reveal delay-200 text-gray-500 text-lg max-w-xl mx-auto">
            200+ model koleksi baju anak Muslim siap jual — foto profesional sudah tersedia untuk semua mitra.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {products.map((p, i) => (
            <div key={p.name} className={`reveal delay-${Math.min((i + 1) * 100, 500)} card-hover group relative rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-50`}>
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-lamonte-dark/0 group-hover:bg-lamonte-dark/20 transition-all duration-300" />
                {/* Tag */}
                <span className={`absolute top-3 left-3 ${p.tagColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>
                  {p.tag}
                </span>
                {/* Quick CTA on hover */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3">
                  <a href="#daftar" className="block text-center bg-white text-lamonte-green font-bold text-xs py-2.5 rounded-xl hover:bg-lamonte-green hover:text-white transition-colors">
                    Dapatkan Stok Ini
                  </a>
                </div>
              </div>
              <div className="p-3 lg:p-4">
                <div className="font-bold text-xs lg:text-sm text-lamonte-dark">{p.name}</div>
                <div className="text-xs text-lamonte-green font-semibold mt-1">{p.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal text-center">
          <div className="inline-flex items-center gap-3 bg-lamonte-green-pale border border-lamonte-green/20 rounded-2xl px-6 py-4">
            <span className="text-2xl">👗</span>
            <div className="text-left">
              <div className="font-black text-lamonte-dark text-sm">200+ Model Tersedia</div>
              <div className="text-xs text-gray-500">Koleksi diperbarui setiap bulan — mitra dapat akses penuh</div>
            </div>
            <a href="#daftar" className="ml-4 bg-lamonte-green text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-lamonte-green-light transition-colors whitespace-nowrap">
              Jadi Mitra →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
