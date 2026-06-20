import AnimateIn from './AnimateIn'

const depoimentos = [
  {
    nome: 'Marina T.',
    negocio: 'Salão de Beleza · Florianópolis',
    iniciais: 'MT',
    texto:
      'Em 45 dias passamos de 4 agendamentos novos por semana para 22. O que mais me impressionou foi receber relatório toda semana sabendo exatamente onde o dinheiro estava indo.',
    estrelas: 5,
  },
  {
    nome: 'Rodrigo L.',
    negocio: 'Pousada · Bombinhas',
    iniciais: 'RL',
    texto:
      'Sempre tive medo de tráfego pago porque já tinha sido enganado antes. A garantia de 30 dias me convenceu a testar. No primeiro mês fechamos 7 reservas direto pelo anúncio, sem pagar comissão pro Booking.',
    estrelas: 5,
  },
  {
    nome: 'Dra. Camila R.',
    negocio: 'Clínica Estética · Joinville',
    iniciais: 'CR',
    texto:
      'Antes a gente perdia lead no WhatsApp porque ninguém respondia a tempo. Eles organizaram nosso CRM e o time de vendas começou a fechar o que antes esfriava.',
    estrelas: 5,
  },
]

const selos = [
  {
    titulo: 'Cases ativos em SC',
    descricao: 'Resultados reais com negócios catarinenses: salões, pousadas, clínicas e restaurantes.',
    icon: (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    titulo: 'Resultado em 30 dias ou reembolso',
    descricao: 'Garantia real: sem resultado no prazo, você recebe o valor da gestão de volta.',
    icon: (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    titulo: 'Relatórios toda semana',
    descricao: 'Transparência total. Você acompanha cada real investido e o retorno gerado.',
    icon: (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
]

function Estrelas({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrelas de 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} aria-hidden="true" className="w-4 h-4 text-[#FF6B20]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ProvasSocial() {
  return (
    <section
      className="bg-cloud py-24 px-6 md:px-12 overflow-hidden"
      aria-labelledby="provas-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnimateIn>
            <p className="text-[#FF6B20] text-sm font-semibold uppercase tracking-widest mb-4">
              Depoimentos
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2
              id="provas-heading"
              className="font-display text-midnight text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
            >
              <span className="font-light">Quem já decidiu </span><span className="font-extrabold">parar de depender da sazonalidade.</span>
            </h2>
          </AnimateIn>
        </div>

        {/* testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {depoimentos.map((d, i) => (
            <AnimateIn key={i} delay={i * 100}>
              <article className="h-full flex flex-col bg-white rounded-3xl p-8 shadow-sm border border-midnight/5">
                <Estrelas count={d.estrelas} />
                <blockquote className="flex-1 mt-5 mb-6">
                  <p className="text-midnight/70 text-sm leading-relaxed">
                    &ldquo;{d.texto}&rdquo;
                  </p>
                </blockquote>
                <footer className="flex items-center gap-3 pt-5 border-t border-midnight/5">
                  <div
                    className="w-10 h-10 rounded-full bg-[#FF6B20]/10 text-[#FF6B20] font-bold text-sm flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {d.iniciais}
                  </div>
                  <div>
                    <p className="font-semibold text-midnight text-sm">{d.nome}</p>
                    <p className="text-midnight/50 text-xs">{d.negocio}</p>
                  </div>
                </footer>
              </article>
            </AnimateIn>
          ))}
        </div>

        {/* seals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {selos.map((s, i) => (
            <AnimateIn key={i} delay={300 + i * 80}>
              <div className="flex items-start gap-4 bg-midnight rounded-2xl px-6 py-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#FF6B20]/10 text-[#FF6B20] flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm">{s.titulo}</p>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">{s.descricao}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
