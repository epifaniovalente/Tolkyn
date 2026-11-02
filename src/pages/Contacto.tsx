import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FadeIn from '../components/FadeIn'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import SEO from '../components/SEO'

const contactSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.email('Email inválido'),
  assunto: z.string().min(1, 'Seleciona um assunto'),
  mensagem: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(150, 'Mensagem não pode ter mais de 150 caracteres'),
})

type ContactForm = z.infer<typeof contactSchema>

const assuntos = [
  'Sites institucionais e portefólios',
  'Landing pages de alta conversão',
  'Sistemas e aplicações web',
  'Identidade visual + presença digital',
  'Manutenção e evolução contínua',
  'Consultoria e estratégia digital',
  'Outro assunto',
]

export default function Contacto() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const mensagemValue = watch('mensagem') || ''

  const onSubmit = (data: ContactForm) => {
    const phone = '244958019038'

    const text = `Olá Kubata Web! %0A%0A*Nome:* ${data.nome}%0A*Email:* ${data.email}%0A*Assunto:* ${data.assunto}%0A%0A*Mensagem:*%0A${data.mensagem}`

    const url = `https://wa.me/${phone}?text=${text}`
    window.open(url, '_blank')
  }

  return (
    <main className="bg-[var(--color-surface-alt)] py-24 relative overflow-hidden">
      <SEO 
  title="Contacto"
  description="Entre em contacto com a Kubata Web. Pedido de proposta rápido e resposta em menos de 24 horas."
  url="/contacto"
/>

      <section className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Lado esquerdo */}
          <section>
            <FadeIn>
              <SectionTitle
                label="Contacto"
                title="Vamos conversar"
                description="Conta-nos o que precisas. Respondemos em menos de 24 horas com uma proposta clara e sem compromisso."
              />
            </FadeIn>

            <article className="space-y-6">
              <FadeIn delay={0.1}>
                <a
                  href="tel:+244958019038"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary-500)] transition-colors">
                    <svg className="w-5 h-5 text-[var(--color-primary-500)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-primary-900)] mb-1">Telefone</p>
                    <p className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary-500)] transition-colors">
                      +244 958 019 038
                    </p>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.15}>
                <a
                  href="mailto:contacto.kubataweb@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary-500)] transition-colors">
                    <svg className="w-5 h-5 text-[var(--color-primary-500)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-primary-900)] mb-1">Email</p>
                    <p className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary-500)] transition-colors">
                      contacto.kubataweb@gmail.com
                    </p>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--color-primary-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--color-primary-900)] mb-1">Endereço</p>
                    <p className="text-[var(--color-text-muted)]">
                      Talatona, Luanda - Angola
                    </p>
                  </div>
                </div>
              </FadeIn>
            </article>
          </section>

          {/* ============== Formulário ============== */}
          <FadeIn delay={0.15} direction="right">
            <section className=" rounded-sm p-2 md:p-4  ">
              <h2 className="text-2xl font-semibold text-[var(--color-primary-900)] mb-8">
                Pedir proposta
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">
                    Nome completo
                  </label>
                  <input
                    {...register('nome')}
                    className="w-full px-4 py-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition"
                    placeholder="O teu nome"
                  />
                  {errors.nome && (
                    <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition"
                    placeholder="email@exemplo.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">
                    Assunto
                  </label>
                  <select
                    {...register('assunto')}
                    className="w-full px-4 py-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition"
                  >
                    <option value="" disabled selected>Seleciona um serviço</option>
                    {assuntos.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.assunto && (
                    <p className="text-red-500 text-sm mt-1">{errors.assunto.message}</p>
                  )}
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">
                    Mensagem
                  </label>
                  <textarea
                    {...register('mensagem')}
                    rows={4}
                    className="w-full px-4 py-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition resize-none"
                    placeholder="Descreve o teu projeto..."
                  />
                  <div className="flex justify-between mt-1">
                    {errors.mensagem ? (
                      <p className="text-red-500 text-sm">{errors.mensagem.message}</p>
                    ) : (
                      <span></span>
                    )}
                    <span className={`text-sm ${mensagemValue.length > 150 ? 'text-red-500' : 'text-[var(--color-text-muted)]'}`}>
                      {mensagemValue.length}/150
                    </span>
                  </div>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'A enviar...' : 'Enviar para WhatsApp'}
                </Button>
              </form>
            </section>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}