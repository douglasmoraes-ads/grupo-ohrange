import AnimateIn from './AnimateIn'

const beneficios = [
  {
    titulo: 'Pare de pagar por leads que não compram',
    descricao: 'Segmentação precisa no Google Ads e Meta Ads para atrair quem já quer o que você vende, não curiosos.',
  },
  {
    titulo: 'Saiba exatamente o que está funcionando toda semana',
    descricao: 'Relatório semanal em português claro: custo por lead, custo por cliente, retorno sobre investimento. Sem enrolação.',
  },
  {
    titulo: 'Tenha um CRM organizado trabalhando por você',
    descricao: 'Automatize follow-up, organize leads e nunca mais deixe uma venda escapar por falta de acompanhamento.',
  },
  {
    titulo: 'Veja resultado em 30 dias ou receba de volta',
    descricao: 'Garantia real: se não entregar resultado nos primeiros 30 dias, devolvemos o valor da gestão. Sem letras miúdas.',
  },
  {
    titulo: 'Tenha uma landing page que converte de verdade',
    descricao: 'Páginas construídas para converter visitante em lead, sem template genérico, pensadas para o seu mercado.',
  },
  {
    titulo: 'Trabalhe com quem entende o seu mercado em SC',
    descricao: 'Atendemos salões, pousadas, clínicas, restaurantes e serviços locais em Santa Catarina. Entendemos o comportamento do cliente catarinense.',
  },
]

export default function Solucao() {
  return (
    <section
      className="bg-midnight py-24 px-6 md:px-12 overflow-hidden"
      aria-labelledby="solucao-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnimateIn>
            <p className="text-[#FF6B20] text-sm font-semibold uppercase tracking-widest mb-4">
              O que você ganha trabalhando com a gente
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2
              id="solucao-heading"
              className="font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
            >
              <span className="font-light">Chega de anúncios </span><span className="font-extrabold">no escuro.</span>
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {beneficios.map((b, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/[0.07] transition-colors duration-200">
                <span className="self-start inline-flex items-center gap-2 bg-[#FF6B20]/10 text-[#FF6B20] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Benefício {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display font-extrabold text-white text-xl uppercase leading-snug">
                  {b.titulo}
                </h3>
                <p className="text-white/55 text-lg leading-relaxed">
                  {b.descricao}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
