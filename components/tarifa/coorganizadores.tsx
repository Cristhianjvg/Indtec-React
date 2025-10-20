"use client";

import { useCounterAnimation } from "../../hooks/use-counter-animation";

export default function CoorganizadorSection() {
  const institucionalPrice = useCounterAnimation(0, 2000);
  const broncePrice = useCounterAnimation(103, 2000);
  const plataPrice = useCounterAnimation(206, 2000);
  const oroPrice = useCounterAnimation(275, 2000);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          CO-ORGANIZADOR
        </h2>
        <p className="text-center text-green-600 font-semibold mb-8 md:mb-12">
          CO-ORGANIZADOR
        </p>

        {/* Institucional */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Institucional
                </h3>
                <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                  USD {institucionalPrice.toFixed(2)}
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  Inscripción preferencial de 10 participantes de la institución
                  en cada una de las modalidades (sin incluir costo).
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Beneficios
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li>
                    • Divulgación y promoción de la institución en cada día de
                    material visual y audiovisual del evento.
                  </li>
                  <li>
                    • Logotipo distribuido a partir del material institucional.
                  </li>
                  <li>
                    • Participación en el evento a través de un stand de
                    publicaciones científicas.
                  </li>
                  <li>
                    • Participación en el evento a través de un stand de
                    publicaciones científicas.
                  </li>
                  <li>• Certificado del evento como organizador.</li>
                  <li>
                    • Acceso a todas las ponencias, talleres y actividades.
                  </li>
                  <li>• Acceso a la revista cultural y humanidad.</li>
                  <li>• Acceso a la revista cultural y humanidad.</li>
                  <li>
                    • Soporte de confirmación y relaciones internacionales.
                  </li>
                  <li>• Participación en el comité científico requerido.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Bronce */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Bronce</h3>
            <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
              USD {broncePrice.toFixed(2)}
            </p>
            <h4 className="font-bold mb-3">Beneficios</h4>
            <p className="text-sm md:text-base text-gray-700">
              Incluye todos los beneficios del Plan Institucional, más:
              Inscripción preferencial de 10 participantes en el catálogo del
              evento. Una (1) publicación gratis en revista indexada en Latindex
              2.0.
            </p>
          </div>

          {/* Plata */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Plata</h3>
            <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
              USD {plataPrice.toFixed(2)}
            </p>
            <h4 className="font-bold mb-3">Beneficios</h4>
            <p className="text-sm md:text-base text-gray-700">
              Incluye todos los beneficios del Plan Institucional, más:
              Inscripción preferencial de 20 participantes en el catálogo del
              evento. Dos (2) publicaciones gratis en revista indexada en
              Latindex 2.0.
            </p>
          </div>

          {/* Oro */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Oro</h3>
            <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
              USD {oroPrice.toFixed(2)}
            </p>
            <h4 className="font-bold mb-3">Beneficios</h4>
            <p className="text-sm md:text-base text-gray-700">
              Incluye todos los beneficios del Plan Institucional, más:
              Inscripción preferencial de 30 participantes en el catálogo del
              evento. Tres (3) publicaciones gratis en revista indexada en
              Latindex 2.0.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
