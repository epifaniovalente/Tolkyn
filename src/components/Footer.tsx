import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-900)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-500)] flex items-center justify-center">
                <span className="text-white font-bold text-xs">KW</span>
              </div>
              <span className="font-semibold text-lg">Kubata Web</span>
            </div>
            <p className="text-white/70 text-sm max-w-xs">
              Soluções digitais sob medida para quem está a construir o futuro.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold mb-3 text-sm">Navegação</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/solucoes" className="hover:text-white transition-colors">Soluções</Link></li>
                <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Contacto</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>contacto@kubataweb.ao</li>
                <li>WhatsApp disponível</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} Kubata Web. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}