import AnimateIn from './AnimateIn'

export default function CTAFinal() {
  return (
    <section
      className="bg-[#FF6B20] py-24 px-6 md:px-12 relative overflow-hidden"
      aria-labelledby="cta-final-heading"
    >
      {/* decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 w-96 h-96 rounded-full"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <AnimateIn>
          <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
            Próximo passo
          </p>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2
            id="cta-final-heading"
            className="font-display text-white text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-6"
          >
            <span className="font-light">Quero meu diagnóstico</span>
            <br />
            <span className="font-extrabold">gratuito agora.</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Uma conversa de 30 minutos. Saída com plano claro de aquisição,{' '}
            <strong className="text-white">mesmo que você decida não fechar com a gente.</strong>
          </p>
        </AnimateIn>

        <AnimateIn delay={300}>
          <a
            href="#contato"
            className="inline-flex items-center gap-3 bg-midnight hover:bg-midnight/90 active:scale-95 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl shadow-midnight/30 transition-all duration-200 group"
            aria-label="Agendar diagnóstico gratuito"
          >
            Agendar diagnóstico gratuito
            <svg
              aria-hidden="true"
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </AnimateIn>

        <AnimateIn delay={400}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Sem compromisso
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/30" />
            <span className="flex items-center gap-1.5">
              <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              30 dias de garantia ou reembolso
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/30" />
            <span className="flex items-center gap-1.5">
              <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Sem contrato longo
            </span>
          </div>
        </AnimateIn>

        {/* risk reversal box */}
        <AnimateIn delay={500}>
          <div className="mt-12 bg-white/10 border border-white/20 rounded-2xl px-7 py-6 text-left">
            <p className="text-white/90 text-sm leading-relaxed">
              <strong className="text-white font-semibold">Sobre a garantia:</strong>{' '}
              Você sai do diagnóstico com um plano claro de aquisição, mesmo que decida não fechar com a gente.
              E se fechar, tem 30 dias para ver resultado ou recebe o investimento da gestão de volta,
              sem burocracia e sem questionamento.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
