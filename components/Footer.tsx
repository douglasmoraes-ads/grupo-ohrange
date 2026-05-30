export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-midnight border-t border-white/5 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* brand */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <img src="/logo.png" alt="Grupo Ohrange - Especialista em Tráfego Pago" height={32} />
          <p className="text-white/40 text-sm">Especialista em Tráfego Pago · Santa Catarina</p>
        </div>

        {/* copyright */}
        <p className="text-white/25 text-xs text-center sm:text-right">
          © {ano} Grupo Oh!range. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
