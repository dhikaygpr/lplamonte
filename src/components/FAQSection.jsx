import { useState } from 'react'

const faqs = [
  {
    q: 'Apakah saya harus punya pengalaman bisnis dulu?',
    a: 'Tidak perlu! Sistem Lamonte dirancang untuk siapa saja, termasuk pemula. Semua materi, konten, dan mentoring sudah tersedia untuk membimbing kamu dari nol.',
  },
  {
    q: 'Apa yang dimaksud mandat wilayah eksklusif?',
    a: 'Setiap distributor mendapatkan hak eksklusif untuk berjualan di wilayah tertentu. Lamonte membatasi slot per provinsi agar tidak ada persaingan harga sesama mitra di area yang sama.',
  },
  {
    q: 'Apakah saya harus menyimpan stok fisik?',
    a: 'Ya, paket distributor Lamonte sudah termasuk stok fisik. Namun Lamonte juga mendukung sistem dropship untuk pemula. Untuk distributor, stok fisik akan mempercepat pengiriman ke pelanggan.',
  },
  {
    q: 'Bagaimana dengan update koleksi baru?',
    a: 'Lamonte merilis koleksi baru setiap bulan. Mitra mendapatkan notifikasi pre-order eksklusif dan bisa memesan dengan harga distributor sebelum koleksi tersedia untuk umum.',
  },
  {
    q: 'Berapa lama proses onboarding setelah daftar?',
    a: 'Proses onboarding berlangsung 1-3 hari kerja. Kamu akan mendapatkan akses ke semua materi, sistem, dan grup support. Stok fisik dikirim dalam 3-7 hari kerja sesuai lokasi.',
  },
  {
    q: 'Apakah ada target penjualan yang harus dipenuhi?',
    a: 'Tidak ada target penjualan wajib untuk level Reseller dan Agen. Untuk level Mini HQ, ada kesepakatan minimum order untuk mempertahankan mandat wilayah — tim kami akan diskusikan detailnya.',
  },
  {
    q: 'Bisakah saya upgrade paket di kemudian hari?',
    a: 'Tentu saja! Kamu bisa upgrade paket kapan saja. Banyak mitra kami yang mulai dari Starter lalu upgrade ke Agen Pro dan Mini HQ seiring berkembangnya bisnis.',
  },
  {
    q: 'Produk apa saja yang tersedia di Lamonte?',
    a: 'Lamonte spesialisasi di baju anak berkualitas premium dengan 200+ model yang diperbarui setiap bulan. Semua produk sudah melalui quality control ketat sebelum dikirim ke mitra.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 bg-lamonte-gray-light">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full mb-4">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="reveal delay-100 font-black text-4xl lg:text-5xl text-lamonte-dark leading-tight mb-4">
            Pertanyaan yang<br />
            <span className="text-gradient">Sering Ditanyakan</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal delay-${Math.min(i * 50, 400)} bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'border-lamonte-green/40 shadow-md' : 'border-gray-100'}`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm text-lamonte-dark pr-2">{faq.q}</span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-lamonte-green rotate-45' : 'bg-gray-100'}`}>
                  <svg className={`w-4 h-4 ${open === i ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="reveal mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Masih ada pertanyaan lain?</p>
          <a
            href="#daftar"
            className="inline-flex items-center gap-2 bg-white border-2 border-lamonte-green/30 text-lamonte-green px-6 py-3 rounded-2xl text-sm font-semibold hover:border-lamonte-green hover:bg-lamonte-green-pale transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Chat WhatsApp Langsung
          </a>
        </div>
      </div>
    </section>
  )
}
