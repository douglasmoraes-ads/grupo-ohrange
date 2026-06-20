import AnimateIn from './AnimateIn'

const passos = [
  {
    numero: '01',
    titulo: 'Diagnóstico gratuito',
    descricao:
      'Uma conversa de 30 minutos onde mapeamos o que está funcionando, o que está errado e onde está o maior potencial de crescimento da sua pousada/hotel. Sem compromisso.',
  },
  {
    numero: '02',
    titulo: 'Plano de tráfego e CRM personalizado',
    descricao:
      'Montamos a estratégia completa: quais canais atacar, qual orçamento faz sentido, como estruturar o CRM e quais KPIs vamos monitorar toda semana.',
  },
  {
    numero: '03',
    titulo: 'Lançamento e otimização nos primeiros 30 dias',
    descricao:
      'Colocamos as campanhas no ar, acompanhamos os números diariamente e ajustamos o que for necessário para chegar ao resultado dentro do prazo.',
  },
  {
    numero: '04',
    titulo: 'Relatórios semanais e alinhamento quinzenal',
    descricao:
      'Toda semana você recebe um relatório claro. A cada 15 dias, fazemos uma reunião de alinhamento para revisar resultados e planejar os próximos passos.',
  },
]

export default function ComoFunciona() {
  return (
    <section
      className="bg-mango py-24 px-6 md:px-12 overflow-hidden"
      aria-labelledby="como-funciona-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <AnimateIn>
            <p className="text-[#FF6B20] text-sm font-semibold uppercase tracking-widest mb-4">
              Processo
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2
              id="como-funciona-heading"
              className="font-display font-extrabold text-midnight text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight"
            >
              Como funciona, do início ao resultado.
            </h2>
          </AnimateIn>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[2.75rem] top-8 bottom-8 w-px bg-midnight/10"
          />

          <div className="flex flex-col gap-10">
            {passos.map((passo, i) => (
              <AnimateIn key={i} delay={i * 100} className="relative">
                <div className="flex gap-6 items-start md:items-center">
                  {/* number circle — desktop */}
                  <div className="shrink-0 w-[5.5rem] hidden md:flex flex-col items-center gap-2 z-10">
                    <div className="w-12 h-12 rounded-full bg-midnight flex items-center justify-center">
                      <span className="font-display font-bold text-[#FF6B20] text-sm">
                        {passo.numero}
                      </span>
                    </div>
                  </div>

                  {/* number circle — mobile */}
                  <div className="md:hidden shrink-0 w-10 h-10 rounded-full bg-midnight flex items-center justify-center">
                    <span className="font-display font-bold text-[#FF6B20] text-xs">
                      {passo.numero}
                    </span>
                  </div>

                  {/* content */}
                  <div className="flex-1 bg-white rounded-2xl px-7 py-6 shadow-sm border border-midnight/5">
                    <h3 className="font-display font-bold text-midnight text-xl mb-2">
                      {passo.titulo}
                    </h3>
                    <p className="text-midnight/60 text-lg leading-relaxed">
                      {passo.descricao}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
