"use client";

import { useCounterAnimation } from "@/hooks/use-counter-animation";
import Image from "next/image";

export default function DivulgacionCientifica() {
  const price1 = useCounterAnimation(1, 2000);
  const price2 = useCounterAnimation(2, 2000);
  const price3 = useCounterAnimation(13, 2000);

  return (
    <section className="py-12 md:py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          DIVULGACIÓN CIENTÍFICA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="relative h-48 md:h-56">
              <Image
                src="/img/indtec1.webp"
                alt="Ponencia General"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-green-400 mb-2">Ponencia General</p>
              <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                USD {price1.toFixed(2)}
              </p>
              <h3 className="font-bold mb-3">Beneficios</h3>
              <ul className="space-y-1 text-sm">
                <li>• Acceso a todas las ponencias.</li>
                <li>• Acceso a talleres prácticos.</li>
                <li>• Acceso a la revista cultural y multidisciplinaria.</li>
                <li>• Certificado de ponente.</li>
                <li>
                  • Certificado de participación equivalente a 40 horas
                  académicas.
                </li>
                <li>
                  • Divulgación del trabajo completo en el libro de memorias con
                  registro ISBN.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="relative h-48 md:h-56">
              <Image
                src="/img/indtec1.webp"
                alt="Ponencia y Publicación en Revista Latindex"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-green-400 mb-2">
                Ponencia y Publicación en Revista Latindex
              </p>
              <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                USD {price2.toFixed(2)}
              </p>
              <h3 className="font-bold mb-3">Beneficios</h3>
              <ul className="space-y-1 text-sm">
                <li>• Acceso a todas las ponencias.</li>
                <li>• Acceso a talleres prácticos.</li>
                <li>• Acceso a la revista cultural y multidisciplinaria.</li>
                <li>• Certificado de ponente.</li>
                <li>
                  • Certificado de participación equivalente a 40 horas
                  académicas.
                </li>
                <li>
                  • Divulgación del artículo completo en el libro de memorias
                  con registro ISBN.
                </li>
                <li>
                  • Publicación del artículo completo en la Revista Latindex
                  2.0.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="relative h-48 md:h-56">
              <Image
                src="/img/indtec1.webp"
                alt="Ponencia y Publicación en Revista Scopus"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-green-400 mb-2">
                Ponencia y Publicación en Revista Scopus
              </p>
              <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
                USD {price3.toFixed(2)}
              </p>
              <h3 className="font-bold mb-3">Beneficios</h3>
              <ul className="space-y-1 text-sm">
                <li>• Acceso a todas las ponencias.</li>
                <li>• Acceso a talleres prácticos.</li>
                <li>• Acceso a la revista cultural y multidisciplinaria.</li>
                <li>• Certificado de ponente.</li>
                <li>
                  • Certificado de participación equivalente a 40 horas
                  académicas.
                </li>
                <li>
                  • Divulgación del artículo completo en el libro de memorias
                  con registro ISBN.
                </li>
                <li>
                  • Publicación del artículo completo en la Revista Scopus.
                </li>
                <li>• No incluye traducción de artículos científicos.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
