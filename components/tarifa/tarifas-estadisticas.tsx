"use client";

import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { Users, Award, Briefcase, FileText } from "lucide-react";

export default function TarifaEstadisticas() {
  const coordinadores = useCounterAnimation(2, 2000);
  const auspiciantes = useCounterAnimation(5, 2000);
  const areas = useCounterAnimation(1, 2000);
  const modalidades = useCounterAnimation(0, 2000);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            </div>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
              {coordinadores}
            </p>
            <p className="text-sm md:text-base text-gray-700 font-semibold">
              COORDINADORES
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 md:w-16 md:h-16 text-green-600" />
            </div>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-2">
              {auspiciantes}
            </p>
            <p className="text-sm md:text-base text-gray-700 font-semibold">
              AUSPICIANTES
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Briefcase className="w-12 h-12 md:w-16 md:h-16 text-orange-500" />
            </div>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-2">
              {areas}
            </p>
            <p className="text-sm md:text-base text-gray-700 font-semibold">
              ÁREAS DE ESTUDIO
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FileText className="w-12 h-12 md:w-16 md:h-16 text-blue-600" />
            </div>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2">
              {modalidades}
            </p>
            <p className="text-sm md:text-base text-gray-700 font-semibold">
              MODALIDADES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
