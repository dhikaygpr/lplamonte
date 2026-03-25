import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Kenapa Lamonte', href: '#value' },
    { label: 'Sistem', href: '#system' },
    { label: 'Paket', href: '#package' },
    { label: 'Testimoni', href: '#testimoni' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'header-blur shadow-sm py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-lamonte-green rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-black text-sm tracking-tight">L</span>
          </div>
          <span className="font-black text-xl text-lamonte-dark tracking-tight">
            LA<span className="text-lamonte-green">MONTE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-lamonte-green transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#daftar"
          className="hidden md:flex items-center gap-2 bg-lamonte-green text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-lamonte-green-light transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Daftar Distributor
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-lamonte-dark p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#daftar"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 bg-lamonte-green text-white py-3 rounded-full text-sm font-semibold"
          >
            Daftar Distributor
          </a>
        </div>
      )}
    </header>
  )
}
