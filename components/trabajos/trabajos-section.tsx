export function TrabajoSection() {
  return (
    <section className="relative min-h-[550px] flex items-center justify-center bg-gradient-to-br from-[#0a4d5c] via-[#1a5f7a] to-[#2563a8] overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('img/indtec1.png')`,
          filter: "blur(3px)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
          En este sitio puede enviar tus artículos y ponencias
        </h1>
        <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
          Define tu agenda académica y tecnológica que conecta la investigación, el desarrollo y la innovación desde
          Loja hacia el mundo.
        </p>
      </div>
    </section>
  )
}
