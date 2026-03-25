export default function Footer() {
  return (
    <footer className="bg-lamonte-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-lamonte-green rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-sm">L</span>
              </div>
              <span className="font-black text-xl tracking-tight">
                LA<span className="text-lamonte-green">MONTE</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              PT Lamonte Mode Internasional — ekosistem bisnis fashion anak Muslim terbesar di Indonesia.
              Lengkap. Berkualitas. Terpercaya.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { label: 'Instagram', icon: '📸' },
                { label: 'TikTok', icon: '🎵' },
                { label: 'Facebook', icon: '👍' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 bg-white/5 hover:bg-lamonte-green/20 rounded-xl flex items-center justify-center transition-colors text-sm"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm text-white/80 uppercase tracking-widest mb-4">Navigasi</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Kenapa Lamonte', href: '#value' },
                { label: 'Sistem Distributor', href: '#system' },
                { label: 'Pilihan Paket', href: '#package' },
                { label: 'Testimoni', href: '#testimoni' },
                { label: 'FAQ', href: '#faq' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-white/80 uppercase tracking-widest mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">📍</span>
                <span className="text-sm text-white/40">Depok, Jawa Barat, Indonesia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">📱</span>
                <a href="https://wa.me/6281234567890" className="text-sm text-white/40 hover:text-white transition-colors">
                  WhatsApp Business
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">🌐</span>
                <a href="https://lamonte.id" className="text-sm text-white/40 hover:text-white transition-colors">
                  lamonte.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 PT Lamonte Mode Internasional. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
