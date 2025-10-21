import type React from "react";
import { Utensils, GraduationCap, Cpu, Leaf } from "lucide-react";

export function AreasTematicas() {
  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-[#0a5a8a]">
          EJES TEMÁTICOS
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <ThematicCard
            icon={<Utensils className="w-8 h-8" />}
            title="Ciencias de los alimentos y salud"
            subtitle="(Latindex)"
            topics={[
              "Aprovechamiento de subproductos alimentarios",
              "Avances científicos en las ciencias de los alimentos",
              "Seguridad alimentaria y nutricional",
              "Soberanía alimentaria",
              "Biodiversidad y su aprovechamiento para la alimentación",
              "Alimentación, salud y bienestar",
              "Salud preventiva",
              "Educación nutricional",
              "Salud mental",
              "Avances científicos en las ciencias de la salud",
            ]}
          />

          <ThematicCard
            icon={<GraduationCap className="w-8 h-8" />}
            title="Educación, ciencias empresariales, emprendimiento, idiomas y cultura"
            subtitle="(Latindex)"
            topics={[
              "Sostenibilidad empresarial",
              "Competitividad organizacional",
              "Gestión en las organizaciones",
              "Igualdad e inserción de la mujer en la gestión de empresas",
              "Educación superior y cultura para el emprendimiento",
              "Automatización y tecnología en emprendimiento",
              "Sistema de economía popular y solidaria",
              "Inversión pública y privada",
              "Educación y cultura financiera tributaria",
              "Gestión de la innovación educativa",
              "Tecnologías de la educación",
              "Idioma (Inglés)",
              "Artes y cultura",
              "Pedagogía",
            ]}
          />

          <ThematicCard
            icon={<Cpu className="w-8 h-8" />}
            title="Ingeniería, tecnología e innovación"
            subtitle="(Latindex, Scopus)"
            topics={[
              "IA",
              "IoT",
              "Fintech",
              "Tecnologías emergentes y su desarrollo en Ecuador",
              "Desarrollo de software",
              "Ciberseguridad",
              "Redes y telecomunicaciones",
              "Innovaciones tecnológicas en la industria automotriz",
              "Avances tecnológicos en smart cities",
              "Realidad virtual",
              "Ingeniería electrónica",
            ]}
          />

          <ThematicCard
            icon={<Leaf className="w-8 h-8" />}
            title="Desarrollo social y sostenibilidad ambiental"
            subtitle="(Latindex)"
            topics={[
              "Riesgos laborales",
              "Agronegocios",
              "Turismo sostenible",
              "Ecología, biodiversidad y conservación de los recursos naturales",
              "Gobernanza de los recursos naturales",
              "Tecnologías verdes y soluciones innovadoras",
              "Innovación social para el desarrollo comunitario",
              "Sostenibilidad urbana y planificación del territorio",
              "Energías renovables",
              "Recursos no renovables",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ThematicCard({
  icon,
  title,
  subtitle,
  topics,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  topics: string[];
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className="bg-[#ff6b35] text-white rounded-lg w-14 h-14 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 pt-1">
          <h3 className="font-bold text-[#0a2540] text-base md:text-lg leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-lg p-4 md:p-5">
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li
              key={index}
              className="text-xs md:text-sm text-gray-700 flex items-start gap-2"
            >
              <span className="text-gray-500 mt-0.5">•</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
