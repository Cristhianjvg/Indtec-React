export function AreasTematicas() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-[#0a2540]">
          EJES TEMÁTICOS
        </h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          <ThematicCard
            number="1"
            title="Ciencias de los alimentos y salud (Lácteos)"
            topics={[
              "Tecnología de alimentos",
              "Nutrición y dietética",
              "Seguridad alimentaria",
              "Innovación en productos lácteos",
              "Control de calidad",
            ]}
          />

          <ThematicCard
            number="2"
            title="Educación, ciencias empresariales, emprendimiento, turismo y ciencias (Sociales)"
            topics={[
              "Pedagogía e innovación educativa",
              "Gestión empresarial",
              "Desarrollo de emprendimientos",
              "Turismo sostenible",
              "Investigación social",
            ]}
          />

          <ThematicCard
            number="3"
            title="Ingeniería, tecnología e innovación (Lácteos, Energías)"
            topics={[
              "Ingeniería de procesos",
              "Automatización industrial",
              "Energías renovables",
              "Innovación tecnológica",
              "Desarrollo sostenible",
            ]}
          />

          <ThematicCard
            number="4"
            title="Desarrollo social y sustentabilidad ambiental (Sociales)"
            topics={[
              "Gestión ambiental",
              "Desarrollo comunitario",
              "Sostenibilidad",
              "Responsabilidad social",
              "Conservación de recursos",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ThematicCard({
  number,
  title,
  topics,
}: {
  number: string;
  title: string;
  topics: string[];
}) {
  return (
    <div className="bg-white border-2 border-[#ff6b35] rounded-lg p-4 md:p-6">
      <div className="flex items-start gap-3 md:gap-4">
        <div className="bg-[#ff6b35] text-white rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xl md:text-2xl font-bold flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-[#0a2540] mb-3 md:mb-4 text-sm md:text-base">
            {title}
          </h3>
          <ul className="space-y-1.5 md:space-y-2">
            {topics.map((topic, index) => (
              <li
                key={index}
                className="text-xs md:text-sm text-gray-600 flex items-start gap-2"
              >
                <span className="text-[#ff6b35] mt-1">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
