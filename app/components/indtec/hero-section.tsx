export function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/conference-room-with-people-attending-presentation.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-[var(--color-teal-overlay)]" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">El congreso</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-balance">
          InDTec es un espacio académico y tecnológico que convoca a la comunidad en el desarrollo y la innovación con
          base en el método.
        </p>
      </div>

      <button className="absolute bottom-8 right-8 bg-white text-[var(--color-teal-dark)] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg">
        <span className="text-xl">▶</span>
        <span>Video oficial</span>
      </button>
    </section>
  )
}
