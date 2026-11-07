import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/navegacao'
import Logo_bg from '../assets/Logo_Tolkyn.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Trava o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src={Logo_bg} alt="Logo Tolkyn" />
            </span>
            <span className="font-semibold text-[var(--color-primary-900)] text-lg tracking-tight">
              Tolkyn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--color-primary-500)]'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary-900)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contacto"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-sm bg-[var(--color-primary-500)] text-white text-sm font-semibold hover:bg-[var(--color-primary-700)] transition-all hover:shadow-md"
          >
            Contactar
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-[var(--color-primary-900)]"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar com animação */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
                <span className="font-semibold text-[var(--color-primary-900)] text-lg">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary-900)] transition-colors"
                  aria-label="Fechar menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col p-6 gap-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * index }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-blue-50 text-[var(--color-primary-500)]'
                            : 'text-[var(--color-primary-900)] hover:bg-gray-50'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto p-6">
                <Link
                  to="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3.5 rounded-xl bg-[var(--color-primary-500)] text-white font-semibold hover:bg-[var(--color-primary-700)] transition-colors"
                >
                  Vamos conversar
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}