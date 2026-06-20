import AnimateIn from './AnimateIn'

const beneficios = [
  {
    titulo: 'Pare de pagar comissão pro Booking',
    descricao: 'Campanhas em Google e Meta para atrair reserva direta, sem repassar 15 a 20% de comissão pra plataforma.',
  },
  {
    titulo: 'Saiba exatamente quantos quartos o anúncio vendeu',
    descricao: 'Relatório semanal em português claro: custo por reserva, taxa de ocupação, retorno sobre investimento. Sem enrolação.',
  },
  {
    titulo: 'Tenha um CRM organizado trabalhando por você',
    descricao: 'Automatize follow-up de orçamento, organize hóspedes em potencial e nunca mais deixe uma reserva esfriar no WhatsApp.',
  },
  {
    titulo: 'Mais lucro mês a mês, sem depender só da alta temporada',
    descricao: 'Garantia real: se não entregar resultado nos primeiros 30 dias, devolvemos o valor da gestão.',
  },
  {
    titulo: 'Tenha uma landing page que converte hóspede de verdade',
    descricao: 'Páginas construídas pra reserva direta, sem template genérico, pensadas pro seu tipo de hospedagem.',
  },
  {
    titulo: 'Trabalhe com quem entende sazonalidade catarinense',
    descricao: 'Atendemos pousadas de praia, de serra e hotéis urbanos em SC. Entendemos como antecipar a baixa temporada.',
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
              <span className="font-light">Chega de quarto vazio </span><span className="font-extrabold">no escuro.</span>
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
