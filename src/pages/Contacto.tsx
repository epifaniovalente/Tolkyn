import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({
    nome: '',
    contacto: '',
    mensagem: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Pedido enviado! (Protótipo — em produção enviará para email/WhatsApp)')
    setForm({ nome: '', contacto: '', mensagem: '' })
  }

  return (
    <section className="bg-[var(--color-surface-alt)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary-900)] mb-6">
              Vamos conversar
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed">
              Conta-nos o que precisas. Respondemos em menos de 24 horas com uma proposta clara e sem compromisso.
            </p>
            <div className="space-y-3 text-[var(--color-primary-900)]">
              <p className="font-medium">Preferes falar diretamente?</p>
              <p className="text-[var(--color-text-muted)]">Email: contacto@kubataweb.ao</p>
              <p className="text-[var(--color-text-muted)]">WhatsApp disponível</p>
            </div>
          </div>

          <div className="bg-white rounded-[var(--radius-xl)] p-8 md:p-10 shadow-[var(--shadow-lg)]">
            <h2 className="text-2xl font-semibold text-[var(--color-primary-900)] mb-8">
              Pedir proposta
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Nome</label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition"
                  placeholder="O teu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Email ou Telefone</label>
                <input
                  type="text"
                  required
                  value={form.contacto}
                  onChange={(e) => setForm({ ...form, contacto: e.target.value })}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition"
                  placeholder="email@exemplo.com ou +244..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">O que precisas?</label>
                <textarea
                  required
                  rows={4}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition resize-none"
                  placeholder="Descreve o teu projeto ou necessidade..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-[var(--radius-md)] bg-[var(--color-primary-500)] text-white font-semibold hover:bg-[var(--color-primary-700)] transition-colors"
              >
                Enviar pedido
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}