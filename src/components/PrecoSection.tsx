import { useState } from 'react';
import { categoriasPreco, precos } from '../data/precos';
import logo_tolkyn from '../assets/Logo_Tolkyn.png'
import FadeIn from './FadeIn';
import SectionTitle from './ui/SectionTitle';
import { Link } from 'react-router-dom';

// ======= FUNÇÂO DE PRECO =========
function formatarPreco(valor: number) {
  return valor.toLocaleString('pt-AO') + ' AOA';
}

// ============== SECTION DE PREÇO =================

export const PrecoSection = () => {
  const [ativarCategoria, setAtivarCategoria] = useState('Todos');

  const filtrado =
    ativarCategoria === 'Todos'
      ? precos
      : precos.filter((item) => item.categoria === ativarCategoria);
  return (
    <main className="py-24 bg-[var(--color-surface-alt)]">
      <section className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionTitle
            label="Investimento"
            title="Serviços e Preços"
            description="Valores de partida. Cada projeto é único — o orçamento final depende do escopo."
            center
          />
        </FadeIn>

        {/* =========== FILTROS POR SERVICOS ============== */}

        <FadeIn delay={0.1}>
          <section className="flex flex-wrap justify-center gap-3 mb-14">
            {categoriasPreco.map((cat) => (
              <button
                key={cat}
                onClick={() => setAtivarCategoria(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  ativarCategoria === cat
                    ? 'bg-[var(--color-primary-500)] text-white shadow-md'
                    : 'bg-white text-[var(--color-text-muted)] hover:bg-blue-50 hover:text-[var(--color-primary-500)] border border-[var(--color-border)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </section>
        </FadeIn>

        {/* ==================== CARDS =================== */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtrado.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.07}>
              <article className="bg-white rounded-sm border-2 border-[var(--color-border)] p-4 h-full flex flex-col transition-all">
                {/* Header do card */}
                <article className="mb-2.5 flex gap-2 justify-start items-start">
                  <div className="w-12 h-12 rounded-xl text-[var(--color-primary-500)] flex items-center justify-center ">
                    <img src={logo_tolkyn} alt="logo Tolkyn" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-primary-900)] mt-1 mb-2">
                      {service.titulo}
                    </h3>

                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {service.descricao}
                    </p>
                  </div>
                </article>

                {/* Preço */}
                <div className="mb-6 pb-2.5 border-b-2 border-[var(--color-border)]">
                  <p className="text-sm text-[var(--color-text-muted)] mb-1">
                    A partir de
                  </p>
                  <p className="text-2xl font-bold text-[var(--color-primary-500)]">
                    {formatarPreco(service.preco)}
                  </p>
                </div>

                {/* funcionalidade com ícone + texto lado a lado */}
                <ul className="space-y-3 mb-8 flex-1">
                  {service.funcionalidades.map((funcionalidade) => (
                    <li
                      key={funcionalidade}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-[var(--color-primary-500)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--color-text-muted)] leading-snug">
                        {funcionalidade}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center w-full py-2 rounded-sm bg-[var(--color-primary-500)] text-white text-sm font-semibold hover:bg-[var(--color-primary-700)] transition-colors"
                >
                  Pedir proposta
                </Link>
              </article>
            </FadeIn>
          ))}
        </section>
        {filtrado.length === 0 && (
          <p className="text-center text-[var(--color-text-muted)] py-12">
            Nenhum serviço encontrado nesta categoria.
          </p>
        )}
      </section>
    </main>
  );
};
