import { useState } from 'react'
import FadeIn from '../components/FadeIn'
import SectionTitle from '../components/ui/SectionTitle'
import { projetos, projetosCategorias } from '../data/projetos'
import SEO from '../components/SEO'

export default function Portfolio() {
  const [activeCategoria, setActiveCategoria] = useState('Todos')

  const filteredProjetos =
    activeCategoria === 'Todos'
      ? projetos
      : projetos.filter((projetos) => projetos.categoria === activeCategoria)

  return (
    <section className="py-24 bg-white">
      <SEO 
  title="Portfólio"
  description="Conheça alguns dos projetos desenvolvidos pela Kubata Web."
  url="/portfolio"
/>
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionTitle
            label="Portfólio"
            title="Projetos que transformam ideias"
            description="Alguns dos trabalhos que desenvolvemos com dedicação e foco em resultados reais."
          />
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {projetosCategorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setActiveCategoria(categoria)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategoria === categoria
                    ? 'bg-[var(--color-primary-500)] text-white shadow-md'
                    : 'bg-[var(--color-surface-alt)] text-[var(--color-text-muted)] hover:bg-blue-50 hover:text-[var(--color-primary-500)]'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjetos.map((projeto, index) => (
            <FadeIn key={projeto.id} delay={index * 0.08}>
              <div className="group bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden hover:shadow-[var(--shadow-lg)] transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={projeto.image}
                    alt={projeto.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-[var(--color-primary-900)]">
                      {projeto.categoria}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-2 group-hover:text-[var(--color-primary-500)] transition-colors">
                    {projeto.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {projeto.descricao}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {filteredProjetos.length === 0 && (
          <div className="text-center py-20 text-[var(--color-text-muted)]">
            Nenhum projeto encontrado nesta categoria (Ainda sem autorização para mostrar).
          </div>
        )}
      </div>
    </section>
  )
}