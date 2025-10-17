import { MapPin, Video } from "lucide-react"

export function Modalities() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">MODALIDADES</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-muted p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-orange-accent)]" />
              <h3 className="text-2xl font-bold text-foreground">Presencial:</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              En la sede del Instituto Superior Tecnológico Sudamericano (ISTS), ubicada en Loja, Ecuador.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-6 h-6 text-[var(--color-orange-accent)]" />
              <h3 className="text-2xl font-bold text-foreground">Virtual:</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A través de plataformas digitales que permitirán la transmisión en tiempo real de las actividades
              académicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
