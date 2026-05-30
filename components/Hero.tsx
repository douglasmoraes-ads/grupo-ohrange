import Image from 'next/image'

const CTA_LINK = '#diagnostico'

export default function Hero() {
  return (
    <section
      className="relative bg-midnight flex flex-col overflow-hidden pb-16"
      aria-label="Hero"
    >
      {/* hero background image */}
      <Image
        src="/hero-office.png"
        alt="Equipe Grupo Ohrange trabalhando em estratégias de tráfego pago"
        fill
        className="object-cover opacity-10 pointer-events-none"
        priority
        quality={75}
      />

      {/* grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,107,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,32,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* orange glow top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,32,0.18) 0%, transparent 70%)',
        }}
      />

      {/* NAV */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto w-full">
        <img src="/logo.png" alt="Grupo Ohrange - Especialista em Tráfego Pago" height={40} />
        <a
          href={CTA_LINK}
          className="hidden sm:inline-flex items-center gap-2 bg-[#FF6B20] hover:bg-[#e55e18] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
        >
          Diagnóstico gratuito
        </a>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 py-12 max-w-5xl mx-auto w-full">
        {/* pill badge */}
        <div className="animate-fade-in mb-8 inline-flex items-center gap-2 border border-[#FF6B20]/40 text-[#FF6B20] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
          <span
            aria-hidden="true"
            className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF6B20] animate-pulse"
          />
          Especialistas em Tráfego Pago · Santa Catarina
        </div>

        {/* H1 */}
        <h1 className="animate-fade-in-up stagger-1 font-display font-extrabold text-white leading-[1.1] tracking-tight mb-6 text-4xl sm:text-5xl lg:text-6xl">
          Mais clientes em{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#FF6B20]">30 dias</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-1 h-1.5 bg-[#FF6B20]/20 rounded-sm"
            />
          </span>
          <br />
          ou seu dinheiro de volta.
        </h1>

        {/* subheadline */}
        <p className="animate-fade-in-up stagger-2 text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
          Somos o Grupo Ohrange, agência de tráfego pago e gestão de CRM para
          empresas em Santa Catarina que faturam acima de{' '}
          <strong className="text-white/80 font-semibold">R$&nbsp;30&nbsp;mil/mês</strong>{' '}
          e querem escalar vendas com previsibilidade, não com sorte.
        </p>

        {/* CTA */}
        <a
          id="diagnostico"
          href="#contato"
          className="animate-fade-in-up stagger-3 inline-flex items-center gap-3 bg-[#FF6B20] hover:bg-[#e55e18] active:scale-95 text-white font-bold text-lg px-9 py-5 rounded-full shadow-lg shadow-[#FF6B20]/30 transition-all duration-200 group"
          aria-label="Quero meu diagnóstico gratuito"
        >
          Quero meu diagnóstico gratuito
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

        {/* trust signals */}
        <div className="animate-fade-in stagger-4 mt-12 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm">
          <span className="flex items-center gap-1.5">
            <svg aria-hidden="true" className="w-4 h-4 text-[#FF6B20]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Resultado em 30 dias
          </span>
          <span className="flex items-center gap-1.5">
            <svg aria-hidden="true" className="w-4 h-4 text-[#FF6B20]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Relatórios toda semana
          </span>
          <span className="flex items-center gap-1.5">
            <svg aria-hidden="true" className="w-4 h-4 text-[#FF6B20]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Cases ativos em SC
          </span>
        </div>
      </div>

      {/* bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, #1A1A2E)' }}
      />
    </section>
  )
}
