import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* HERO */}

      <section className="bg-[var(--color-primary-900)] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] mb-8 tracking-tight">
              Soluções digitais sob medida para quem está a construir o futuro.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl">
              Sites, sistemas e presença digital pensados para estudantes,
              empreendedores, microempresas e profissionais independentes.
              Simples, profissional e feito à tua medida.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center px-6 py-2 rounded-xl bg-[var(--color-primary-500)] text-white font-semibold text-base hover:bg-[var(--color-primary-700)] transition-all hover:shadow-lg"
              >
                Pedir proposta
              </Link>
              <Link
                to="/solucoes"
                className="inline-flex items-center px-6 py-2 rounded-xl border border-white/25 text-white font-semibold text-base hover:bg-white/10 transition-all"
              >
                Ver soluções
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE NOS DIFERENCIA */}
      {/* O QUE NOS DIFERENCIA */}
      <section className="bg-[var(--color-surface-alt)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header da secção */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary-900)] mb-5">
              O que nos{' '}
              <span className="text-[var(--color-primary-500)]">
                diferencia
              </span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
              Na Kubata Web, unimos estratégia, design e tecnologia para
              transformar os teus objetivos em resultados. Veja o que torna o
              nosso trabalho único.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-sm)] border border-[var(--color-border)] hover:shadow-[var(--shadow-lg)] transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[var(--color-primary-500)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary-900)] mb-3">
                1. Feito sob medida
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Cada projeto é único. Criamos soluções personalizadas para o teu
                negócio, respeitando a tua identidade, objetivos e momento.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-sm)] border border-[var(--color-border)] hover:shadow-[var(--shadow-lg)] transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[var(--color-primary-500)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary-900)] mb-3">
                2. Foco em resultados reais
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Mais do que entregar projetos bonitos, trabalhamos para gerar
                impacto. Nosso foco é aumentar a tua visibilidade, atrair
                clientes e impulsionar o crescimento.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-sm)] border border-[var(--color-border)] hover:shadow-[var(--shadow-lg)] transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[var(--color-primary-500)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary-900)] mb-3">
                3. Processo claro e próximo
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Acreditamos em comunicação transparente e constante. Acompanhas
                cada etapa do projeto, com orientação, agilidade e um time
                sempre por perto.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-sm)] border border-[var(--color-border)] hover:shadow-[var(--shadow-lg)] transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[var(--color-primary-500)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary-900)] mb-3">
                4. Tecnologia moderna e sustentável
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Utilizamos as melhores tecnologias do mercado para criar
                soluções rápidas, seguras e eficientes, com foco em um futuro
                mais sustentável.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-900)] mb-4">
            Criado para quem está a crescer
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg mb-12">
            Soluções pensadas especificamente para o momento em que te
            encontras.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Estudantes e jovens profissionais',
                desc: 'Precisas de um portefólio ou presença digital que te diferencie? Nós construímos.',
              },
              {
                title: 'Empreendedores e startups',
                desc: 'Do zero à primeira versão profissional do teu produto digital.',
              },
              {
                title: 'Microempresas',
                desc: 'Sites e sistemas que reforçam a tua marca e facilitam o dia a dia.',
              },
              {
                title: 'Profissionais independentes',
                desc: 'Presença digital clara, confiável e que gera oportunidades.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6"
              >
                <div className="w-10 h-1 rounded-full bg-[var(--color-primary-500)] mb-5" />
                <h3 className="font-semibold text-[var(--color-primary-900)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO TRABALHAMOS */}
      <section className="bg-[var(--color-primary-900)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Um processo simples e transparente
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Conversamos',
                desc: 'Entendemos a tua necessidade e objetivos reais.',
              },
              {
                num: '02',
                title: 'Propomos',
                desc: 'Apresentamos a melhor solução e orçamento claro.',
              },
              {
                num: '03',
                title: 'Construímos',
                desc: 'Desenvolvemos com acompanhamento regular.',
              },
              {
                num: '04',
                title: 'Entregamos',
                desc: 'Lançamos e ficamos disponíveis para o que precisares.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white/5 border border-white/10 rounded-[var(--radius-lg)] p-6"
              >
                <div className="text-2xl font-bold text-[var(--color-primary-300)] mb-3">
                  {item.num}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[var(--color-surface-alt)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-900)] mb-4">
            Pronto para transformar a tua ideia em realidade digital?
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg mb-8">
            Conta-nos o que precisas. Respondemos em menos de 24 horas com uma
            proposta clara e sem compromisso.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center px-8 py-4 rounded-[var(--radius-md)] bg-[var(--color-primary-500)] text-white font-semibold text-lg hover:bg-[var(--color-primary-700)] transition-colors"
          >
            Pedir proposta agora
          </Link>
        </div>
      </section>
      
    </>
  );
}
