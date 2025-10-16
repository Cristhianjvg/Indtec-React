export function PartnersSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <div className="grayscale hover:grayscale-0 transition-all">
            <img
              src="/img/carrusel_1.jpg"
              alt="Partner 1"
              className="h-20 object-contain"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img
              src="/img/carrusel_1.jpg"
              alt="Partner 2"
              className="h-20 object-contain"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all">
            <img
              src="/img/carrusel_1.jpg"
              alt="Partner 3"
              className="h-20 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
