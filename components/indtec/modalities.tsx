import { Home, Monitor } from "lucide-react"

export function Modalities() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">MODALIDADES</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-muted p-10 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-10 h-10 text-[var(--color-orange-accent)]" />
              <h3 className="text-3xl font-bold text-foreground">Artículo Científico</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En la sede del Instituto Superior Tecnológico Sudamericano (ISTS), ubicada en Loja, Ecuador.
            </p>
          </div>

          <div className="bg-muted p-10 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-10 h-10 text-[var(--color-orange-accent)]" />
              <h3 className="text-3xl font-bold text-foreground">Ponencias</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A través de plataformas digitales que permitirán la transmisión en tiempo real de las actividades
              académicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
