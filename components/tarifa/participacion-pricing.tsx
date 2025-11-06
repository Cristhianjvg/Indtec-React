"use client";

import { useCounterAnimation } from "@/hooks/use-counter-animation";

export default function ParticipacionPricing() {
  const price1 = useCounterAnimation(10.00, 1200);
  const price2 = useCounterAnimation(20.00, 1400);
  const price3 = useCounterAnimation(40.00, 1600);

  return (
    <section id="participacion-pricing" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* HEADER NORMAL - SIN BOTÓN CERRAR */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            TARIFAS DE PARTICIPACIÓN
          </h2>
          <p className="text-green-600 font-semibold text-lg">ASISTENTES</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-700 mb-3">
              Estudiantes y docentes ISTS
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">
              USD {price1.toFixed(2)}
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base text-gray-700 mb-3">
              Estudiantes y docentes externos
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">
              USD {price2.toFixed(2)}
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm md:text-base text-gray-700 mb-3">
              Profesionales y público en general
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">
              USD {price3.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
            BENEFICIOS
          </h3>
          <ul className="space-y-2 text-sm md:text-base text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Acceso a todas las ponencias.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Acceso a talleres prácticos.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Acceso a la noche cultural y fraternidad.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Kit del congreso.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Certificado de participación equivalente a 40 horas académicas.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}