import { Calendar, FileText } from "lucide-react";

export function FechasImportantes() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0a2540]">
          FECHAS IMPORTANTES
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#ff6b35] flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              Fechas
            </h3>

            <DateItem
              date="26 de julio"
              description="Inicio de inscripciones"
            />
            <DateItem
              date="08 de agosto"
              description="Fecha límite envío de resúmenes"
            />
            <DateItem
              date="15 de octubre"
              description="Notificación de aceptación"
            />
            <DateItem
              date="16 al 26 de octubre"
              description="Inscripción de ponentes"
            />
            <DateItem
              date="27 y 28 de noviembre"
              description="Desarrollo del congreso"
            />
            <DateItem
              date="Diciembre 2025"
              description="Entrega de certificados"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#ff6b35] flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Actividades
            </h3>

            <DateItem
              date="Conferencias magistrales"
              description="Expertos internacionales compartirán sus investigaciones"
            />
            <DateItem
              date="Presentación de ponencias"
              description="Espacio para presentar trabajos de investigación"
            />
            <DateItem
              date="Talleres especializados"
              description="Actividades prácticas en áreas específicas"
            />
            <DateItem
              date="Mesas redondas"
              description="Debates sobre temas de actualidad científica"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DateItem({
  date,
  description,
}: {
  date: string;
  description: string;
}) {
  return (
    <div className="border-l-4 border-[#ff6b35] pl-4">
      <div className="font-semibold text-[#0a2540]">{date}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  );
}
