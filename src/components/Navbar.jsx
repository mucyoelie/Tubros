import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-black/10'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
         <a href="#" className="flex items-center gap-3 group">
  {/* Logo container */}
  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-red shadow-lg">
    <img
      src="/images/img50.jpg" // your logo image
      alt="Tubros Logo"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Logo text */}
  <div className="flex flex-col">
    <div className="font-display font-900 text-black text-xl leading-none uppercase tracking-tight">
      Tubros
    </div>
    <div className="font-body text-[10px] text-brand-red uppercase tracking-[0.2em] leading-none">
      Hardware Co. Ltd
    </div>
  </div>
</a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link font-display font-700 text-sm uppercase tracking-widest ${
                  active === link.href ? 'text-brand-red' : 'text-black/70'
                } hover:text-brand-red transition-colors`}
                onClick={() => setActive(link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-display font-700 text-sm uppercase tracking-widest bg-brand-red text-white px-6 py-2.5 hover:bg-brand-orange transition-colors"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-black/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display font-700 text-lg uppercase tracking-widest text-black/70 hover:text-brand-red"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-display font-700 text-sm uppercase tracking-widest bg-brand-red text-white px-6 py-3 text-center hover:bg-brand-orange transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  )
}