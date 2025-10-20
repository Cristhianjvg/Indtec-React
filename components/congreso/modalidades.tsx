import { Home, Monitor } from "lucide-react";

export default function Modalidades() {
  const modalidades = [
    {
      icon: Home,
      title: "Artículo Científico",
      description:
        "En la sede del Instituto Superior Tecnológico Sudamericano (ISTS), ubicada en Loja, Ecuador.",
    },
    {
      icon: Monitor,
      title: "Ponencias",
      description:
        "A través de plataformas digitales que permitirán la transmisión en tiempo real de las actividades académicas.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 md:mb-16">
          MODALIDADES
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {modalidades.map((modalidad, index) => {
            const Icon = modalidad.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 md:p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <Icon className="w-16 h-16 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  {modalidad.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {modalidad.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
