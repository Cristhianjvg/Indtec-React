import { PenTool, Presentation, MousePointer, Users } from "lucide-react"

export default function PublicoObjetivo() {
 const audiences = [
    {
      icon: PenTool,
      title: "Docentes y estudiantes de universidades, institutos tecnológicos, conservatorios",
    },
    {
      icon: Presentation,
      title: "Investigadores autónomos",
    },
    {
      icon: MousePointer,
      title: "Profesionales del sector productivo tecnológico y social",
    },
    {
      icon: Users,
      title: "Público en general",
      description: "",
    },
  ]

  return (
    <section className="py-16 bg-[var(--color-green-bright)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">PÚBLICO OBJETIVO</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <Icon className="w-16 h-16 stroke-[1.5] text-[var(--color-blue-icon)]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{audience.title}</h3>
                {audience.description && <p className="text-base text-white/90">{audience.description}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
