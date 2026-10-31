import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full border-b border-[var(--color-border)] bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-500)] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-base tracking-tight">KW</span>
          </div>
          <span className="font-semibold text-[var(--color-primary-900)] text-lg tracking-tight">
            Kubata Web
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink
            to="/solucoes"
            className={({ isActive }) =>
              `text-[15px] font-medium transition-colors ${
                isActive
                  ? 'text-[var(--color-primary-500)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary-900)]'
              }`
            }
          >
            Soluções
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `text-[15px] font-medium transition-colors ${
                isActive
                  ? 'text-[var(--color-primary-500)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary-900)]'
              }`
            }
          >
            Contacto
          </NavLink>
        </nav>

        {/* CTA */}
        <Link
          to="/contacto"
          className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-xl bg-[var(--color-primary-500)] text-white text-sm font-semibold hover:bg-[var(--color-primary-700)] transition-all hover:shadow-md"
        >
          Pedir proposta
        </Link>
      </div>
    </header>
  )
}