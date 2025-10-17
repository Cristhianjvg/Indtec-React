export function SpecificObjectives() {
  const objectives = [
    {
      number: "01",
      text: "Difundir resultados de investigación en diversas áreas del conocimiento, generados en universidades, institutos de investigación y centros de investigación.",
    },
    {
      number: "02",
      text: "Fomentar la publicación de trabajos científicos en revistas indexadas como Latindex y Scopus.",
    },
    {
      number: "03",
      text: "Facilitar el intercambio de conocimientos, experiencias y buenas prácticas entre investigadores, docentes e instituciones internacionales.",
    },
    {
      number: "04",
      text: "Establecer alianzas estratégicas y redes de colaboración académica y tecnológica.",
    },
    {
      number: "05",
      text: "Fortalecer la capacidad de absorción y transferencia de tecnologías en instituciones educativas y sectores productivos.",
    },
    {
      number: "06",
      text: "Promover la vinculación efectiva entre instituciones académicas, productivas y sector público y la sociedad, para el desarrollo sostenible.",
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">OBJETIVOS ESPECÍFICOS</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective) => (
            <div key={objective.number} className="bg-card p-6 rounded-lg border-l-4 border-[var(--color-primary)]">
              <div className="text-5xl font-bold text-muted-foreground/30 mb-4">{objective.number}</div>
              <p className="text-card-foreground leading-relaxed">{objective.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
