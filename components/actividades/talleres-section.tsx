import Image from "next/image";
import { Button } from "@/components/ui/button";

import { ExternalLink } from "lucide-react";

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
    image: "/artificial-intelligence-workshop.jpg",
    registrationUrl: "https://example.com/register/ai-workshop",
    instructor: "Dr. Ana García",
    duration: "4 horas",
  },
  {
    id: "2",
    title: "Desarrollo Web con Next.js",
    description:
      "Domina el framework más popular de React para crear aplicaciones web modernas, rápidas y escalables con las mejores prácticas.",
    image: "/web-development-coding-workshop.jpg",
    registrationUrl: "https://example.com/register/nextjs-workshop",
    instructor: "Ing. Carlos Mendoza",
    duration: "6 horas",
  },
  {
    id: "3",
    title: "Diseño UX/UI Avanzado",
    description:
      "Perfecciona tus habilidades de diseño de experiencia de usuario e interfaces. Aprende metodologías, herramientas y técnicas de diseño centrado en el usuario.",
    image: "/ux-ui-design-workshop.jpg",
    registrationUrl: "https://example.com/register/ux-workshop",
    instructor: "Lic. María Rodríguez",
    duration: "5 horas",
  },
  {
    id: "4",
    title: "Análisis de Datos con Python",
    description:
      "Descubre cómo analizar y visualizar datos usando Python, pandas y bibliotecas de visualización para tomar decisiones basadas en datos.",
    image: "/data-analysis-python-workshop.jpg",
    registrationUrl: "https://example.com/register/python-workshop",
    instructor: "Dr. Roberto Silva",
    duration: "8 horas",
  },
  {
    id: "5",
    title: "Marketing Digital y Redes Sociales",
    description:
      "Estrategias efectivas para promocionar tu marca en el mundo digital. Aprende sobre SEO, SEM, content marketing y gestión de redes sociales.",
    image: "/digital-marketing-social-media-workshop.jpg",
    registrationUrl: "https://example.com/register/marketing-workshop",
    instructor: "Lic. Laura Fernández",
    duration: "4 horas",
  },
  {
    id: "6",
    title: "Ciberseguridad Empresarial",
    description:
      "Protege tu organización de amenazas digitales. Conoce las mejores prácticas de seguridad, gestión de riesgos y respuesta a incidentes.",
    image: "/cybersecurity-workshop.png",
    registrationUrl: "https://example.com/register/security-workshop",
    instructor: "Ing. Miguel Torres",
    duration: "6 horas",
  },
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
            <Card
              key={taller.id}
              className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={taller.image || "/placeholder.svg"}
                    alt={taller.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <CardTitle className="text-xl mb-3 text-gray-900 text-balance">
                  {taller.title}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4 text-pretty leading-relaxed">
                  {taller.description}
                </CardDescription>
                {(taller.instructor || taller.duration) && (
                  <div className="space-y-1 text-sm text-gray-500">
                    {taller.instructor && (
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Instructor:</span>
                        <span>{taller.instructor}</span>
                      </p>
                    )}
                    {taller.duration && (
                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Duración:</span>
                        <span>{taller.duration}</span>
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  className="w-full bg-[#FF6B00] hover:bg-[#E55F00] text-white"
                >
                  <a
                    href={taller.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Inscribirse al Taller
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
