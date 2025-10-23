export default function TarifasHero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/img/indtec1.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Tarifas
        </h1>
        <p className="text-base md:text-lg text-white/90 leading-relaxed">
          InDTec es un espacio académico y tecnológico que conecta la
          investigación, el desarrollo y la innovación desde Loja hacia el
          mundo.
        </p>
      </div>
    </section>
  );
}
