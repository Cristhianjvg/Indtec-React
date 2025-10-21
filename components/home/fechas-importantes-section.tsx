import { Calendar, Users } from "lucide-react";

export function FechasImportantes() {
  return (
    <section className="py-8 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-[#0a7ea4]">
          FECHAS IMPORTANTES
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#ff6b35] p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="px-4 py-2 border-2 border-gray-300 rounded-full">
                <span className="font-semibold text-[#0a2540]">Fecha</span>
              </div>
            </div>

            <div className="space-y-4">
              <DateItem text="24 de julio" />
              <DateItem text="04 de agosto" />
              <DateItem text="30 de septiembre" />
              <DateItem text="01 al 17 de octubre" />
              <DateItem text="20 de octubre al 04 de noviembre" />
              <DateItem text="27 y 28 de noviembre" />
              <DateItem text="Diciembre 2025" />
              <DateItem text="Enero - Febrero 2025" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#ff6b35] p-3 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="px-4 py-2 border-2 border-gray-300 rounded-full">
                <span className="font-semibold text-[#0a2540]">
                  Actividades
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <ActivityItem text="Lanzamiento oficial de InDTec 2025." />
              <ActivityItem text="Apertura de la plataforma EasyChair para envío de trabajos científicos." />
              <ActivityItem text="Cierre de recepción de trabajos." />
              <ActivityItem text="Evaluación de trabajos por parte del Comité Científico." />
              <ActivityItem text="Notificación de aceptación de trabajos." />
              <ActivityItem text="Desarrollo del Congreso InDTec 2025." />
              <ActivityItem text="Publicación del libro de memorias del evento." />
              <ActivityItem text="Publicación de artículos científicos en revistas indexadas, de acuerdo con el tipo de revista." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DateItem({ text }: { text: string }) {
  return (
    <div className="text-[#0a2540] font-medium text-sm md:text-base py-2 border-b border-gray-300">
      {text}
    </div>
  );
}

function ActivityItem({ text }: { text: string }) {
  return (
    <div className="text-gray-700 text-sm md:text-base py-2 border-b border-gray-300">
      {text}
    </div>
  );
}
