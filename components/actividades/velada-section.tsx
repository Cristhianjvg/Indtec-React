import Image from "next/image";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export function VeladaSection() {
  return (
    <section className="bg-white py-0">
      <div className="flex flex-col md:flex-row items-stretch max-w-full min-h-[450px]">
        {/* Contenido a la izquierda */}
        <div className="flex flex-col justify-center text-black px-8 md:px-12 lg:px-20 py-12 w-full md:w-1/2 bg-white">
          <h2 className="text-[#11527C] text-2xl md:text-3xl font-semibold mb-4">
            Velada Cultural y de Confraternidad
          </h2>

          <p className="text-gray-800 text-sm md:text-base mb-6 leading-relaxed">
            Invitamos a la comunidad a participar en una noche dedicada a la cultura
            y al encuentro entre estudiantes, docentes e invitados. Un espacio para
            compartir, convivir y apreciar las expresiones artísticas de nuestra
            comunidad académica.
          </p>

          <h3 className="text-[#11527C] font-semibold mb-2">
            Actividades destacadas:
          </h3>

          <ul className="text-sm md:text-base font-light space-y-2 list-disc list-inside text-left mb-6 text-gray-800">
            <li>Presentaciones de danza y baile</li>
            <li>Música en vivo</li>
            <li>Festival de cócteles “Hot Drinks”</li>
          </ul>

          {/* Datos con íconos */}
          <div className="space-y-2 mb-6 text-gray-800 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-[#11527C]" />
              <p>
                <strong>Fecha:</strong> Jueves, 27 de noviembre
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#11527C]" />
              <p>
                <strong>Hora:</strong> Desde las 19h00
              </p>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#11527C]" />
              <p>
                <strong>Lugar:</strong> Loja
              </p>
            </div>
          </div>

          <p className="italic text-gray-600 text-sm md:text-base">
            Una noche para disfrutar y fortalecer los lazos que nos unen.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-auto flex-shrink-0">
          <Image
            src="/img/general/velada.webp"
            alt="Velada Cultural y de Confraternidad"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
