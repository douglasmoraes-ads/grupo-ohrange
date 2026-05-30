'use client'
import { useState } from 'react'
import AnimateIn from './AnimateIn'

const perguntas = [
  {
    pergunta: 'Quanto custa o serviço?',
    resposta:
      'O valor varia conforme o escopo: canais, orçamento de mídia, necessidade de CRM e landing page. Mas você só descobre se faz sentido para o seu negócio depois do diagnóstico gratuito, onde apresentamos uma proposta personalizada. Não trabalhamos com pacotes engessados.',
  },
  {
    pergunta: 'Por que devo confiar no Grupo Ohrange?',
    resposta:
      'Porque a gente só cobra resultado. Nossa garantia de 30 dias não é marketing: se não houver resultado concreto no prazo, você recebe o valor da gestão de volta. Além disso, você acompanha tudo em tempo real, sem relatório mensal com métricas sem sentido.',
  },
  {
    pergunta: 'E se não tiver resultado nos 30 dias?',
    resposta:
      'Devolvemos o valor investido na gestão. Simples assim. A garantia existe porque temos confiança no nosso processo, e porque sabemos que ela nos força a trabalhar de verdade desde o primeiro dia.',
  },
  {
    pergunta: 'Já tentei tráfego pago antes e não funcionou.',
    resposta:
      'Esse é o cenário mais comum entre os clientes que chegam até nós. A maioria vem de experiências ruins com agências que não medem resultado ou "especialistas" que entregam apenas alcance e engajamento. Nossa abordagem é diferente: começa pelo diagnóstico, tem metas claras e você acompanha o que está acontecendo toda semana.',
  },
  {
    pergunta: 'Meu negócio é pequeno. Isso é para mim?',
    resposta:
      'Atendemos empresas que faturam a partir de R$&nbsp;30&nbsp;mil/mês, não porque negócios menores não merecem, mas porque abaixo desse faturamento o custo de gestão profissional raramente se paga com eficiência. Se você ainda não chegou lá, o diagnóstico pode apontar o que falta para chegar.',
  },
  {
    pergunta: 'Preciso assinar um contrato longo?',
    resposta:
      'Não. Trabalhamos com contratos mensais renováveis. Você pode cancelar a qualquer momento com aviso prévio de 30 dias. Acreditamos que cliente que fica, fica por resultado, não por cláusula contratual.',
  },
]

function FAQItem({ pergunta, resposta, aberto, onToggle }: {
  pergunta: string
  resposta: string
  aberto: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        onClick={onToggle}
        aria-expanded={aberto}
      >
        <h3 className="font-display font-semibold text-white text-base sm:text-lg leading-snug group-hover:text-[#FF6B20] transition-colors duration-150">
          {pergunta}
        </h3>
        <span
          aria-hidden="true"
          className={`shrink-0 mt-0.5 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-all duration-300 ${aberto ? 'rotate-180 border-[#FF6B20] text-[#FF6B20]' : ''}`}
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${aberto ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!aberto}
      >
        <p
          className="pb-6 text-white/55 text-sm sm:text-base leading-relaxed pr-10"
          dangerouslySetInnerHTML={{ __html: resposta }}
        />
      </div>
    </div>
  )
}

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null)

  return (
    <section
      className="bg-midnight py-24 px-6 md:px-12"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <AnimateIn>
            <p className="text-[#FF6B20] text-sm font-semibold uppercase tracking-widest mb-4">
              Perguntas frequentes
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2
              id="faq-heading"
              className="font-display text-white text-3xl sm:text-4xl leading-tight tracking-tight"
            >
              <span className="font-extrabold">Tira suas dúvidas </span><span className="font-light">antes de falar com a gente.</span>
            </h2>
          </AnimateIn>
        </div>

        <AnimateIn delay={200}>
          <div className="rounded-3xl border border-white/10 px-6 md:px-10 divide-y-0">
            {perguntas.map((item, i) => (
              <FAQItem
                key={i}
                pergunta={item.pergunta}
                resposta={item.resposta}
                aberto={aberto === i}
                onToggle={() => setAberto(aberto === i ? null : i)}
              />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
