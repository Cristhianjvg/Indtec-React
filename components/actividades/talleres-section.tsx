import Image from "next/image";

interface Taller {
  id: string;
  title: string;
  description: string;
  image: string;
  registrationUrl: string;
  instructor?: string;
  duration?: string;
}

const talleres: Taller[] = [
  {
    id: "1",
    title: "Introducción a la Inteligencia Artificial",
    description:
      "Aprende los fundamentos de la IA y sus aplicaciones prácticas en el mundo moderno. Exploraremos machine learning, redes neuronales y casos de uso reales.",
    image: "/img/taller1.jpg",
    registrationUrl: "https://example.com/register/ai-workshop",
    instructor: "Dr. Ana García",
    duration: "4 horas",
  },
  {
    id: "2",
    title: "Desarrollo Web con Next.js",
    description:
      "Domina el framework más popular de React para crear aplicaciones web modernas, rápidas y escalables con las mejores prácticas.",
    image: "/img/taller2.png",
    registrationUrl: "https://example.com/register/nextjs-workshop",
    instructor: "Ing. Carlos Mendoza",
    duration: "6 horas",
  },
  {
    id: "3",
    title: "Diseño UX/UI Avanzado",
    description:
      "Perfecciona tus habilidades de diseño de experiencia de usuario e interfaces. Aprende metodologías, herramientas y técnicas de diseño centrado en el usuario.",
    image: "/img/taller3.jpg",
    registrationUrl: "https://example.com/register/ux-workshop",
    instructor: "Lic. María Rodríguez",
    duration: "5 horas",
  },
  // {
  //   id: "4",
  //   title: "Análisis de Datos con Python",
  //   description:
  //     "Descubre cómo analizar y visualizar datos usando Python, pandas y bibliotecas de visualización para tomar decisiones basadas en datos.",
  //   image: "/data-analysis-python-workshop.jpg",
  //   registrationUrl: "https://example.com/register/python-workshop",
  //   instructor: "Dr. Roberto Silva",
  //   duration: "8 horas",
  // },
  // {
  //   id: "5",
  //   title: "Marketing Digital y Redes Sociales",
  //   description:
  //     "Estrategias efectivas para promocionar tu marca en el mundo digital. Aprende sobre SEO, SEM, content marketing y gestión de redes sociales.",
  //   image: "/digital-marketing-social-media-workshop.jpg",
  //   registrationUrl: "https://example.com/register/marketing-workshop",
  //   instructor: "Lic. Laura Fernández",
  //   duration: "4 horas",
  // },
  // {
  //   id: "6",
  //   title: "Ciberseguridad Empresarial",
  //   description:
  //     "Protege tu organización de amenazas digitales. Conoce las mejores prácticas de seguridad, gestión de riesgos y respuesta a incidentes.",
  //   image: "/cybersecurity-workshop.png",
  //   registrationUrl: "https://example.com/register/security-workshop",
  //   instructor: "Ing. Miguel Torres",
  //   duration: "6 horas",
  // },
];

export function TalleresSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF6B00] mb-4 text-balance">
            TALLERES ESPECIALIZADOS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Desarrolla nuevas habilidades con nuestros talleres prácticos
            dirigidos por expertos
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talleres.map((taller) => (
            <div
              key={taller.id}
              className="flex flex-col h-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={taller.image || "/placeholder.svg"}
                  alt={taller.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 text-balance">
                  {taller.title}
                </h3>
                <p className="text-gray-600 mb-4 text-pretty leading-relaxed">
                  {taller.description}
                </p>

                {(taller.instructor || taller.duration) && (
                  <div className="space-y-1 text-sm text-gray-500">
                    {taller.instructor && (
                      <p className="flex items-center gap-2">
                        <span className="font-bold text-gray-600">
                          Instructor:
                        </span>
                        <span>{taller.instructor}</span>
                      </p>
                    )}
                    {taller.duration && (
                      <p className="flex items-center gap-2">
                        <span className="font-bold text-gray-600">
                          Duración:
                        </span>
                        <span>{taller.duration}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Footer with custom button */}
              <div className="p-6 pt-0">
                <a
                  href={taller.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#FF6B00] hover:bg-[#E55F00] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Inscribirse al Taller
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
