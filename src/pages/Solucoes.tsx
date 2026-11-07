import FadeIn from '../components/FadeIn'
import { PrecoSection } from '../components/PrecoSection'
import SEO from '../components/SEO'
import SectionTitle from '../components/ui/SectionTitle'
import { servicos } from '../data/servicos'

const icons = [
  // ================ Sites 
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="1">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>,
  //  ================ Landing Pages ================ 
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="2">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  // ================ Sistemas ================ 
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="3">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  //  ================ Identidade ================ 
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="4">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>,
  // ================ Manutenção ================ 
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="5">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
  // ================ Consultoria ================ 
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
]


export default function Solucoes() {
  return (
    <section className="py-24 bg-white">
      <SEO 
  title="Serviços"
  description="Sites institucionais, landing pages, sistemas web, identidade visual e consultoria digital sob medida."
  url="/solucoes"
/>
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionTitle
            label="O que fazemos"
            title="Soluções digitais sob medida"
            description="Desde a primeira ideia até à solução no ar. Criamos o que o teu projeto realmente precisa — sem pacotes engessados."
          />
        </FadeIn>

        <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <div className="group bg-[var(--color-surface-alt)] rounded-sm p-4  hover:border-blue-200 transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[var(--color-primary-500)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary-500)] group-hover:text-white transition-colors">
                  {icons[index]}
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
        </article>
      </div>

      <PrecoSection/>
    </section>
  )
}