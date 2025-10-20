export function JournalsSection() {
  return (
    <section className="py-16 bg-[rgb(13,71,91)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">REVISTAS ALIADAS</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Latindex */}
          <div className="p-8 bg-white text-gray-900 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/latindex-logo.jpg" alt="Latindex" className="w-full h-full object-contain p-4" />
              </div>
            </div>

            <div className="space-y-2 text-center">
              <h3 className="font-bold text-lg">UNAMSIM - Revista Científica</h3>
              <p className="text-sm text-gray-600">UNAMSIM - Revista Salud y Sociedad</p>
              <p className="text-sm text-gray-600">Caminos de Investigación</p>
            </div>
          </div>

          {/* CIEB Workshop */}
          <div className="p-8 bg-white text-gray-900 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/cieb-workshop-logo.jpg" alt="CIEB Workshop" className="w-full h-full object-contain p-4" />
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-lg">CIEB Workshop Proceedings</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
