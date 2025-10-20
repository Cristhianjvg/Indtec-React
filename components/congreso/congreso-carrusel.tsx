export default function CongresoCarrusel() {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/carrusel_1.jpg"
          alt="Congreso"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          El congreso
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
          InDTec es un espacio académico y tecnológico que conecta la
          investigación, el desarrollo y la innovación desde Loja hacia el
          mundo.
        </p>
      </div>
    </section>
  );
}
