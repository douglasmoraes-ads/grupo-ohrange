import AnimateIn from './AnimateIn'

const dores = [
  'Reserva direta quase não acontece. Quase tudo vem do Booking, e a comissão come boa parte do seu lucro.',
  'Na baixa temporada o telefone para de tocar e você não sabe como preencher os quartos.',
  'Cada mês de baixa ocupação é dinheiro deixado na mesa, enquanto a pousada do lado lota o quarto com anúncio.',
]

export default function Problema() {
  return (
    <section
      className="bg-cloud py-24 px-6 md:px-12 overflow-hidden"
      aria-labelledby="problema-heading"
    >
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <p className="text-[#FF6B20] text-sm font-semibold uppercase tracking-widest mb-4">
            Reconhece essa história?
          </p>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2
            id="problema-heading"
            className="font-display text-midnight text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-10"
          >
            <span className="font-light">Você já tentou Booking, Instagram e indicação.</span><br />
            <span className="font-extrabold">O resultado foi sempre o mesmo.</span>
          </h2>
        </AnimateIn>

        <div className="grid gap-6 mb-12">
          {dores.map((dor, i) => (
            <AnimateIn key={i} delay={150 + i * 80}>
              <div className="flex gap-4 items-start bg-white rounded-2xl px-6 py-5 shadow-sm">
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[#FF6B20]/10 text-[#FF6B20] flex items-center justify-center"
                >
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <p className="text-midnight/80 text-base leading-relaxed">{dor}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={400}>
          <div className="bg-midnight rounded-3xl px-8 py-10 text-white">
            <p className="text-lg sm:text-xl leading-relaxed text-white/70 mb-6">
              Sua pousada, seu hotel, sua estalagem continua dependendo de{' '}
              <strong className="text-white">plataforma de terceiro, sazonalidade e do feed orgânico do Instagram.</strong>
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-white/70">
              Enquanto você espera a alta temporada, o concorrente está captando reserva direta com uma máquina de aquisição que funciona o ano inteiro.{' '}
              <strong className="text-[#FF6B20]">Essa máquina é o que a gente constrói pra você.</strong>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
