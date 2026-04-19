import { useState, useEffect } from 'react'

const links = ['Home', 'Skills', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display text-2xl text-white tracking-widest hover:text-accent transition-colors">
          IS<span className="text-accent"></span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm text-white/50 tracking-widest uppercase hover:text-accent transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=singhishant683@gmail.com"
target="_blank"
rel="noreferrer"
          className="hidden md:block font-body text-sm text-black bg-accent px-5 py-2 tracking-widest uppercase font-semibold hover:bg-accent/80 transition-colors"
        >
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm text-white/60 tracking-widest uppercase hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="https://mail.google.com/mail/?view=cm&to=singhishant683@gmail.com"
target="_blank"
rel="noreferrer"
            className="font-body text-sm text-black bg-accent px-5 py-2 tracking-widest uppercase font-semibold text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
