export default function ObjetivoGeneral() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/img/indtec2.png"
              alt="Objetivo General"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              OBJETIVO
              <br />
              GENERAL
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Impulsar la divulgación científica y tecnológica, promoviendo la
              innovación y la transferencia de conocimiento a nivel nacional e
              internacional, mediante la socialización de resultados de
              investigación y el fortalecimiento de vínculos entre la academia,
              el sector productivo y la sociedad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
