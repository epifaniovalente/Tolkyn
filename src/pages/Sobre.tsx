import FadeIn from '../components/FadeIn'
import logoTolkyn from '../assets/tolkyn_removebg.png'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

export default function Sobre() {
  return (
    <>
    <SEO 
  title="Sobre nós"
  description="Conheça a Tolkyn Web, a nossa história, valores e localização em Luanda, Angola."
  url="/sobre"
/>
      {/* Hero Sobre */}
      <section className="bg-[var(--color-primary-900)] text-white py-24 relative overflow-hidden">
        {/* ======= IMAGEM DE FUNDO(LOGO) ========= */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full">
          <img src={logoTolkyn} alt="logo Tolkyn" className=''/>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[var(--color-primary-500)]"></div>
                <span className="text-sm font-medium tracking-widest text-[var(--color-primary-300)] uppercase">
                  Sobre nós
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Construímos soluções digitais com propósito
              </h1>
              <p className="text-lg text-white/75 leading-relaxed">
                A Tolkyn nasceu da vontade de tornar a tecnologia acessível, 
                profissional e realmente útil para quem está a crescer.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* História */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-900)] mb-6">
                  A nossa história
                </h2>
                <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                  <p>
                    Acreditamos que uma boa presença digital não deve ser um luxo. 
                    Por isso, criamos soluções sob medida para estudantes, empreendedores, 
                    microempresas e profissionais independentes.
                  </p>
                  <p>
                    Cada projeto é tratado com atenção real. Não entregamos templates genéricos. 
                    Escutamos, entendemos o momento do cliente e construímos algo que realmente serve.
                  </p>
                  <p>
                    O nosso compromisso é simples: entregar qualidade, clareza e resultados.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--color-surface-alt)] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[var(--color-primary-500)] mb-2">100%</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Projetos sob medida</div>
                </div>
                <div className="bg-[var(--color-surface-alt)] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[var(--color-primary-500)] mb-2">24h</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Tempo de resposta</div>
                </div>
                <div className="bg-[var(--color-surface-alt)] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[var(--color-primary-500)] mb-2">+4</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Áreas de atuação</div>
                </div>
                <div className="bg-[var(--color-surface-alt)] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[var(--color-primary-500)] mb-2">∞</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Vontade de evoluir</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Localização */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <FadeIn>
      <SectionTitle
              label="Localização"
              title="Onde estamos"
              description="Talatona, Luanda - Angola"
              center
            />
    </FadeIn>

    <FadeIn delay={0.1}>
      <div className="rounded-sm overflow-hidden shadow-[var(--shadow-sm)]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.6954254007424!2d13.227602338623658!3d-8.814657190204171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f300156545eb%3A0x57e6f18295a306d4!2sBairro%2015%20de%20fevereiro!5e0!3m2!1spt-PT!2sao!4v1793483040398!5m2!1spt-PT!2sao" 
        width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </FadeIn>
  </div>
</section>

      {/* Valores */}
      <section className="py-24 bg-[var(--color-surface-alt)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionTitle
              label="Princípios"
              title="O que nos guia"
              description="Princípios que orientam cada decisão e cada linha de código."
              center
            />
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Clareza',
                desc: 'Comunicação transparente em todas as etapas. Sabes sempre onde estás e para onde vamos.',
              },
              {
                title: 'Qualidade',
                desc: 'Não entregamos o mínimo. Buscamos soluções bem feitas, pensadas e duradouras.',
              },
              {
                title: 'Proximidade',
                desc: 'Trabalhamos perto do cliente. Entendemos o contexto real antes de propor qualquer solução.',
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-white rounded-sm p-4 h-full">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[var(--color-primary-500)] flex items-center justify-center mb-5 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-primary-900)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-900)] mb-6">
              Pronto para começar o teu projeto?
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg mb-8">
              Fala connosco. Vamos entender a tua necessidade e propor a melhor solução.
            </p>
            <Button to="/contacto">
              Solicitar proposta →
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}