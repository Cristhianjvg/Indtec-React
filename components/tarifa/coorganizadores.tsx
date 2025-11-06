"use client";

import { useCounterAnimation } from "../../hooks/use-counter-animation";

interface CoorganizadorSectionProps {
  onClose?: () => void;
}

export default function CoorganizadorSection({ onClose }: CoorganizadorSectionProps) {
  const institucionalPrice = useCounterAnimation(10.00, 2000);
  const broncePrice = useCounterAnimation(600.00, 2000);
  const plataPrice = useCounterAnimation(1200.00, 2000);
  const oroPrice = useCounterAnimation(1600.00, 2000);

  return (
    <section id="coorganizadores" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header con botón de cerrar */}
        {onClose && (
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                PLANES PARA
              </h2>
              <p className="text-green-600 font-semibold">
                COORGANIZADORES
              </p>
            </div>
            <button 
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors text-sm md:text-base"
            >
              Cerrar
            </button>
          </div>
        )}
        
        {/* Si no hay onClose (sección siempre visible), mostrar el header normal */}
        {!onClose && (
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              PLANES PARA
            </h2>
            <p className="text-green-600 font-semibold">
              COORGANIZADORES
            </p>
          </div>
        )}

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
                  Inscripción preferencial de 30 participantes de la institución a un costo
                  de USD 10,00 cada uno.
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
                    • Espacios destinados a publicidad institucional.
                  </li>
                  <li>
                    • Participación en el comité científico de
                    selección de publicaciones científicas.
                  </li>
                  <li>
                    • Registro como coorganizador en el
                    libro de memorias con ISBN.
                  </li>
                  <li>• Certificado oficial como coorganizador.</li>
                  <li>
                    • Acceso a todas las ponencias locales,
                    nacionales e internacionales.
                  </li>
                  <li>• Acceso a la actividad cultural y de confraternidad.</li>
                  <li>• Acceso a talleres prácticos.</li>
                  <li>
                    • Almuerzo de confraternidad y
                    relaciones interinstitucionales.
                  </li>
                  <li>• Participación en una ponencia magistral (opcional).</li>
                  <li>• Una (1) publicación en revista del catálogo Latindex 2.0.</li>
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
            </p>
            <p className="text-sm md:text-base text-gray-700">
              • Tres (3) publicaciones en revistas
              del catálogo Latindex 2.0.
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
            </p>
            <p className="text-sm md:text-base text-gray-700">
              • Tres (3) publicaciones en revistas
              del catálogo Latindex 2.0.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              • Una (1) publicación en revista indexada
              en Scopus (área de tecnología).
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
            </p>
            <p className="text-sm md:text-base text-gray-700">
              • Tres (3) publicaciones en revistas
              del catálogo Latindex 2.0.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              • Tres (3) publicaciones en revistas indexadas
              en Scopus (área de tecnología).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}