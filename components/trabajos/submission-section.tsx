import { FileText, Presentation } from "lucide-react"

export function SubmissionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[rgb(249,115,22)]">ENVÍO DE TRABAJOS</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          {/* Dotted vertical divider - only visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-gray-400 -translate-x-1/2"></div>

          {/* Scientific Article + Presentation */}
          <div className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-[rgb(59,130,246)]" />
            </div>

            <h3 className="text-xl font-bold mb-6 text-[rgb(13,71,91)]">Artículo Científico + Ponencia</h3>

            <div className="space-y-3 w-full max-w-xs">
              <a
                href="https://easychair.org/cfp/INDTEC2025"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-2.5 border-2 border-[rgb(249,115,22)] rounded-md hover:bg-[rgb(249,115,22)] hover:text-white transition-colors text-[rgb(249,115,22)] font-medium"
              >
                Envío de trabajos
              </a>
              <a
                href="https://docs.google.com/document/d/14ZQk2_o4_fiYUeUzyOeBiCqK6otTn3Th/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-2.5 border-2 border-[rgb(249,115,22)] rounded-md hover:bg-[rgb(249,115,22)] hover:text-white transition-colors text-[rgb(249,115,22)] font-medium"
              >
                Plantilla Artículo
              </a>
              <a
                href="https://itsscecu-my.sharepoint.com/:p:/g/personal/jrchercuelon_ists_edu_ec/EYeV6qVpeq5GqNg9O4ISVREBxZFTCT-dMQZSXDiPDIwVHg?rtime=Z-TYpgAR3kg"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-2.5 border-2 border-[rgb(249,115,22)] rounded-md hover:bg-[rgb(249,115,22)] hover:text-white transition-colors text-[rgb(249,115,22)] font-medium"
              >
                Plantilla Ponencia
              </a>
            </div>
          </div>

          {/* Presentation Only */}
          <div className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
              <Presentation className="w-8 h-8 text-[rgb(59,130,246)]" />
            </div>

            <h3 className="text-xl font-bold mb-6 text-[rgb(13,71,91)]">Ponencia</h3>

            <div className="space-y-3 w-full max-w-xs">
              <a
                href="https://forms.office.com/pages/responsepage.aspx?id=enPN6ZI69kCOtMLXsZx8amGm0MR8FXtJlqT5_dp-TjpUNzhNUFlVT1pXNDA5MTREU0VCS1dHUk1MUi4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-2.5 border-2 border-[rgb(249,115,22)] rounded-md hover:bg-[rgb(249,115,22)] hover:text-white transition-colors text-[rgb(249,115,22)] font-medium"
              >
                Registrate Aquí
              </a>
              <a
                href="https://docs.google.com/document/d/1WODgIQq1QhT1aZCvsU2aIuI9avsmBxkL/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-2.5 border-2 border-[rgb(249,115,22)] rounded-md hover:bg-[rgb(249,115,22)] hover:text-white transition-colors text-[rgb(249,115,22)] font-medium"
              >
                Plantilla Libro de Memoria
              </a>
            </div>
          </div>
        </div>

        {/* Journal Information */}
        <div className="mt-12 max-w-3xl mx-auto text-sm text-gray-700 space-y-2 px-4">
          <p>
            <strong>Revista Latindex:</strong> los artículos deben enviarse en español.
          </p>
          <p>
            <strong>Revista Scopus:</strong> los artículos deben enviarse en inglés.
          </p>
        </div>
      </div>
    </section>
  )
}
