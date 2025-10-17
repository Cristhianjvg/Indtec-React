import { Presentation, Diamond, Briefcase, Target } from "lucide-react"

export function Statistics() {
  const stats = [
    {
      icon: Presentation,
      number: "5",
      label: "COORGANIZADORES",
      color: "text-[var(--color-blue-icon)]",
    },
    {
      icon: Diamond,
      number: "20",
      label: "AUSPICIANTES",
      color: "text-[var(--color-green-bright)]",
    },
    {
      icon: Briefcase,
      number: "4",
      label: "ÁREAS DE ESTUDIO",
      color: "text-[var(--color-orange-accent)]",
    },
    {
      icon: Target,
      number: "2",
      label: "MODALIDADES",
      color: "text-[var(--color-blue-icon)]",
    },
  ]

  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className={`w-16 h-16 ${stat.color}`} />
                </div>
                <div className={`text-5xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-sm font-semibold text-muted-foreground tracking-wide">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
