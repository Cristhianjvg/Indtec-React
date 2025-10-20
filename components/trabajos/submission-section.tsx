import { FileText, Presentation } from "lucide-react"

export function SubmissionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[rgb(249,115,22)]">ENVÍO DE TRABAJOS</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Scientific Article + Presentation */}
          <div className="p-8 flex flex-col items-center text-center bg-white rounded-lg shadow-sm border border-gray-200 md:border-r-2">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-[rgb(59,130,246)]" />
            </div>

            <h3 className="text-xl font-bold mb-6 text-gray-900">Artículo Científico + Ponencia</h3>

            <div className="space-y-3 w-full">
              <button className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                Guía de Autores
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                Plantilla Article
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                Plantilla Ponencia
              </button>
            </div>
          </div>

          {/* Presentation Only */}
          <div className="p-8 flex flex-col items-center text-center bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Presentation className="w-8 h-8 text-[rgb(59,130,246)]" />
            </div>

            <h3 className="text-xl font-bold mb-6 text-gray-900">Ponencia</h3>

            <div className="space-y-3 w-full">
              <button className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                Registrate Aquí
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                Plantilla Libro de Memorias
              </button>
            </div>
          </div>
        </div>

        {/* Journal Information */}
        <div className="mt-8 max-w-3xl mx-auto text-sm text-gray-600 space-y-2">
          <p>
            <strong>Revista Latindex:</strong> los artículos deben enviarse en español
          </p>
          <p>
            <strong>Revista Scopus:</strong> los artículos deben enviarse en inglés
          </p>
        </div>
      </div>
    </section>
  )
}
