export default function ObjetivosEspecificos() {
  const objetivos = [
    {
      text: "Difundir resultados de investigación en diversas áreas del conocimiento, generados en universidades, institutos superiores tecnológicos y centros de investigación.",
    },
    {
      text: "Fomentar la publicación de trabajos científicos en revistas indexadas como Latindex y Scopus.",
    },
    {
      text: "Facilitar el intercambio de conocimientos, experiencias y buenas prácticas entre investigadores, docentes y profesionales nacionales e internacionales.",
    },
    {
      text: "Establecer alianzas estratégicas y redes de colaboración académica y tecnológica.",
    },
    {
      text: "Fortalecer la capacidad de absorción y transferencia tecnológica en instituciones educativas y sectores productivos.",
    },
    {
      text: "Promover la vinculación efectiva entre la academia, el sector productivo, el sector público y la sociedad, para el desarrollo sostenible.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10 md:mb-16">
          OBJETIVOS ESPECÍFICOS
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {objetivos.map((objetivo, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base">
                {objetivo.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
