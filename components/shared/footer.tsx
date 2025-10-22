export function Footer() {
  return (
    <footer className="bg-[#0d475b] text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <span className="text-[20rem] font-bold text-[#0a3a4d] select-none">InDTec</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">InDTec</h2>
            <h3 className="text-[#ff6b35] font-semibold mb-4">Contactos:</h3>
            <div className="space-y-2">
              <p className="text-sm">Mgs. Jackson Michael Quevedo Organizador</p>
              <p className="text-sm">(+593)997235466</p>
            </div>
          </div>

          <div>
            <h3 className="text-[#ff6b35] font-semibold mb-4">Dirección:</h3>
            <div className="w-full h-40 bg-gray-200 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.103564839608!2d-79.20510512549494!3d-3.9991267446082546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb37ffb67d5df1%3A0x5e500dda7a2998e1!2sInstituto%20Tecnologico%20Superior%20%22Sudamericano%22!5e0!3m2!1ses-419!2sec!4v1761094684979!5m2!1ses-419!2sec"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Instituto Tecnológico Superior Sudamericano"
              />
            </div>
          </div>

          <div>
            <h3 className="text-[#ff6b35] font-semibold mb-4">Síguenos en:</h3>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/ISTSLoja"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-[#ff6b35] transition-colors"
              >
                Facebok
              </a>
              <a
                href="https://www.instagram.com/istsloja/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-[#ff6b35] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/watch?v=FtZbqJN6V9A"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-[#ff6b35] transition-colors"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm border-t border-white/10 pt-6">
          <p>ISTS | Derechos reservados | 2025</p>
        </div>
      </div>
    </footer>
  )
}
