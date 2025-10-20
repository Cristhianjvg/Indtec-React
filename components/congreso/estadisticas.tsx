import { Users, Award, BookOpen, FileText } from "lucide-react";

export default function Estadisticas() {
  const stats = [
    {
      icon: Users,
      number: "5",
      label: "COORDINADORES",
      color: "text-blue-600",
    },
    {
      icon: Award,
      number: "20",
      label: "AUSPICIANTES",
      color: "text-green-600",
    },
    {
      icon: BookOpen,
      number: "4",
      label: "ÁREAS DE ESTUDIO",
      color: "text-orange-600",
    },
    {
      icon: FileText,
      number: "2",
      label: "MODALIDADES",
      color: "text-cyan-600",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon
                    className={`w-12 h-12 md:w-16 md:h-16 ${stat.color}`}
                    strokeWidth={1.5}
                  />
                </div>
                <div
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold ${stat.color} mb-2`}
                >
                  {stat.number}
                </div>
                <p className="text-gray-600 text-sm md:text-base font-medium uppercase">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
