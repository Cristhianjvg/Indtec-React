import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
              INDTEC
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Congreso Internacional de Investigación y Desarrollo Tecnológico
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Contacto
            </h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start gap-2 md:gap-3 text-sm">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">contacto@indtec.edu</span>
              </div>
              <div className="flex items-start gap-2 md:gap-3 text-sm">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+593 123 456 789</span>
              </div>
              <div className="flex items-start gap-2 md:gap-3 text-sm">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Quito, Ecuador</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Suscríbete
            </h3>
            <p className="text-gray-300 text-sm mb-3 md:mb-4">
              Recibe actualizaciones sobre el congreso
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-3 md:px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ff6b35] text-sm"
              />
              <button className="bg-[#ff6b35] hover:bg-[#ff5722] px-4 md:px-6 py-2 rounded font-semibold transition-colors text-sm whitespace-nowrap">
                Enviar
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
          <p>&copy; 2025 INDTEC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
