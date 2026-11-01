import { Link } from 'react-router-dom'
import Logo_bg from '../assets/logo_bg-remove.png'
import { navLinks } from '../data/navegacao'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-900)] text-white">
      <main className="max-w-7xl mx-auto px-6 py-8">
        <section className="flex flex-col md:flex-row justify-between gap-8">
          <article>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                
                  <img src={Logo_bg} alt="Logo Kubata Web - Hero" />
                
              </div>
              <span className="font-semibold text-lg">Kubata Web</span>
            </div>
            <p className="text-white/70 text-sm max-w-xs">
              Soluções digitais sob medida para quem está a construir o futuro.
            </p>
          </article>

          <article className="flex gap-12">
            <div>
              <h4 className="font-semibold mb-3 text-sm">Navegação</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Contacto</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>contacto@kubataweb.ao</li>
                <li>WhatsApp disponível</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="border-t border-white/10 mt-10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} Kubata Web. Todos os direitos reservados.
        </section>
      </main>
    </footer>
  )
}