import { GraduationCap, FlaskConical, Briefcase, Users } from "lucide-react";

export default function PublicoObjetivo() {
  const publicos = [
    {
      icon: GraduationCap,
      title:
        "Docentes y estudiantes de universidades, institutos tecnológicos, conservatorios.",
    },
    {
      icon: FlaskConical,
      title: "Investigadores autónomos.",
    },
    {
      icon: Briefcase,
      title: "Profesionales del sector productivo, tecnológico y social.",
    },
    {
      icon: Users,
      title: "Público en general.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#4CAF50]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-16">
          PÚBLICO OBJETIVO
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {publicos.map((publico, index) => {
            const Icon = publico.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon
                    className="w-12 h-12 md:w-16 md:h-16 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  {publico.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
