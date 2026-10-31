export default function Solucoes() {
  
  const services = [
    { title: 'Sites institucionais e portefólios', desc: 'Presença digital profissional, clara e pensada para converter visitantes em oportunidades.' },
    { title: 'Landing pages de alta conversão', desc: 'Páginas focadas em um objetivo específico, otimizadas para resultados rápidos.' },
    { title: 'Sistemas e aplicações web', desc: 'Ferramentas sob medida que automatizam processos e facilitam o crescimento do teu negócio.' },
    { title: 'Identidade visual + presença digital', desc: 'Do logo à experiência completa. Marca coerente e profissional em todos os pontos de contacto.' },
    { title: 'Manutenção e evolução contínua', desc: 'Não desaparecemos depois da entrega. Acompanhamos e melhoramos a tua solução ao longo do tempo.' },
    { title: 'Consultoria e estratégia digital', desc: 'Ajudamos a definir o melhor caminho digital para o teu momento e objetivos.' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary-900)] mb-4">
          Soluções digitais sob medida
        </h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-14 max-w-2xl">
          Desde a primeira ideia até à solução no ar. Criamos o que o teu projeto realmente precisa — sem pacotes engessados.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div key={item.title} className="bg-[var(--color-surface-alt)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-7">
              <div className="w-8 h-1 rounded-full bg-[var(--color-primary-500)] mb-5" />
              <h3 className="text-lg font-semibold text-[var(--color-primary-900)] mb-3">{item.title}</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}