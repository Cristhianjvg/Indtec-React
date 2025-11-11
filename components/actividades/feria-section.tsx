import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";

export function FeriaSection() {
  return (
    <section className="bg-[#01385B] py-0">
      <div className="flex flex-col md:flex-row items-stretch max-w-full min-h-[450px]">
        {/* Imagen a la izquierda */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-auto flex-shrink-0">
          <Image
            src="/img/general/proyecto.jpg"
            alt="Exhibición de Proyectos de Innovación, Investigación y Emprendimiento"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Contenido a la derecha */}
        <div className="flex flex-col justify-center text-white px-8 md:px-12 lg:px-20 py-12 w-full md:w-1/2 bg-[#01385B]">
          <h2 className="text-[#FF6B35] text-2xl md:text-3xl font-semibold mb-4">
            Exhibición de Proyectos de Innovación, Investigación y Emprendimiento
          </h2>

          <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
            Un espacio para conocer las iniciativas que están marcando la diferencia
            en el ámbito académico y social. Estudiantes y docentes de Instituciones
            de Educación Superior presentan proyectos que impulsan el desarrollo
            desde la ciencia, la tecnología, la cultura y el emprendimiento.
          </p>

          <h3 className="text-[#FF6B35] font-semibold mb-2">Áreas de enfoque:</h3>

          <ul className="text-sm md:text-base font-light space-y-2 list-disc list-inside text-left mb-6">
            <li>Innovación</li>
            <li>Emprendimiento</li>
            <li>Tecnología</li>
            <li>Cultura</li>
          </ul>

          {/* Datos con íconos */}
          <div className="space-y-2 mb-6 text-gray-200 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-[#FF6B35]" />
              <p>
                <strong>Fecha:</strong> Jueves, 27 de noviembre
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#FF6B35]" />
              <p>
                <strong>Horario:</strong> 09h00 a 13h00 y 15h00 a 17h00
              </p>
            </div>
          </div>

          <p className="italic text-gray-300 text-sm md:text-base">
            Te invitamos a inspirarte con nuevas ideas, experiencias y soluciones
            para el futuro.
          </p>
        </div>
      </div>
    </section>
  );
}
