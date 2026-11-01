import FadeIn from '../components/FadeIn'
import LogoKubataWe from '../assets/kubataWeb-removebg.png'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

export default function Home() {
  return (
    
    <>
    <SEO 
  title="Soluções digitais sob medida"
  description="Sites, sistemas e presença digital pensados para estudantes, empreendedores, microempresas e profissionais independentes."
  url="/"
/>
      {/* HERO */}
      <main className="bg-[var(--color-primary-900)] text-white relative overflow-hidden">
        <section className="max-w-7xl mx-auto px-6 py-8 md:py-18 lg:py-24">
          <div className=" items-center">
            
            <article className="max-w-4xl">

              <FadeIn delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] mb-6 tracking-tight">
                  Soluções digitais sob medida para quem está a construir o futuro.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg text-white/75 mb-10 leading-relaxed">
                  Desenvolvemos soluções personalizadas para estudantes, empreendedores, 
                  microempresas e freelancers que querem transformar ideias em resultados reais no mundo digital.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button to="/contacto">Solicitar proposta →</Button>
                  <Button to="/solucoes" variant="outline">Ver soluções</Button>
                </div>
              </FadeIn>
            </article>
          </div>
        </section>
      </main>

      {/* O QUE NOS DIFERENCIA */}
      <section className="bg-[var(--color-surface-alt)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionTitle
              label="Diferenciais"
              title="O que nos diferencia"
              description="Unimos estratégia, design e tecnologia para transformar os teus objetivos em resultados. Veja o que torna o nosso trabalho único."
              center
            />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { num: '1', title: 'Feito sob medida', desc: 'Cada projeto é único. Criamos soluções personalizadas para o teu negócio, respeitando a tua identidade, objetivos e momento.' },
              { num: '2', title: 'Foco em resultados reais', desc: 'Mais do que entregar projetos bonitos, trabalhamos para gerar impacto. Nosso foco é aumentar a tua visibilidade, atrair clientes e impulsionar o crescimento.' },
              { num: '3', title: 'Processo claro e próximo', desc: 'Acreditamos em comunicação transparente e constante. Acompanhas cada etapa do projeto, com orientação, agilidade e um time sempre por perto.' },
              { num: '4', title: 'Tecnologia moderna e sustentável', desc: 'Utilizamos as melhores tecnologias do mercado para criar soluções rápidas, seguras e eficientes, com foco em um futuro mais sustentável.' },
            ].map((item, index) => (
              <FadeIn key={item.num} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-sm)] border border-[var(--color-border)] hover:shadow-[var(--shadow-lg)] transition-shadow h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-[var(--color-primary-500)] font-bold text-lg">
                    {item.num}
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

      {/* CRIADO PARA QUEM */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-5 left-5 w-24 h-24">
        <img src={LogoKubataWe} alt="" />
        </div>
        

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionTitle
              label="Para quem é a Kubata Web"
              title="Criado para quem está a crescer"
              description=" Na Kubata Web, acreditamos que cada fase de crescimento tem os seus desafios 
                e oportunidades. Por isso, criamos soluções digitais pensadas para o teu momento."
              center
            />
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Estudantes e jovens profissionais', desc: 'Ganha presença online, desenvolve o teu portefólio e constrói uma base sólida para o teu futuro.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop' },
              { title: 'Empreendedores e startups', desc: 'Transforma a tua ideia num negócio digital com soluções ágeis, escaláveis e focadas em resultados.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop' },
              { title: 'Microempresas', desc: 'Moderniza o teu negócio, aumenta a tua visibilidade e chega a mais clientes, sem complicações.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop' },
              { title: 'Profissionais independentes', desc: 'Conquista mais clientes, mostra o teu trabalho e gere a tua marca pessoal com um site à tua medida.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop' },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="bg-[var(--color-primary-900)] text-white py-24 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionTitle
              label="Kubata Web"
              title="Um processo simples e transparente"
              description="Do primeiro contato à entrega final, um fluxo claro e objetivo."
              center
              light
            />
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Conversamos', desc: 'Entendemos o teu negócio, objetivos e os desafios que queres superar.' },
              { num: '02', title: 'Propomos', desc: 'Apresentamos uma proposta personalizada, com escopo, prazos e plano de ação claro.' },
              { num: '03', title: 'Construímos', desc: 'Desenvolvemos com foco em qualidade e performance, com comunicação constante.' },
              { num: '04', title: 'Entregamos', desc: 'Lançamos o projeto e seguimos juntos com suporte e evolução contínua.' },
            ].map((item, index) => (
              <FadeIn key={item.num} delay={index * 0.1}>
                <div className="bg-white/5  rounded-sm p-4 h-full">
                  <span className="text-4xl font-bold text-[var(--color-primary-300)] block mb-4">{item.num}</span>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========= CTA PAGINA INICIAL ========== */}
      <section className="bg-[var(--color-surface-alt)] py-18 relative overflow-hidden">

        <article className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <div className="flex items-center justify-center">
              
              <span className="w-28 h-28 ">
                <img src={LogoKubataWe} alt="logo Kubata Web" className='w-full '/>
                </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary-900)] mb-6 leading-tight">
              Pronto para transformar a tua<br />ideia em realidade digital?
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[var(--color-text-muted)] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              A nossa equipa está pronta para responder em menos de 24 horas, com uma proposta personalizada.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Button to="/contacto">
              → Solicitar proposta agora
            </Button>
          </FadeIn>
        </article>
      </section>
    </>
  )
}