import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">INDTEC</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Congreso Internacional de Investigación y Desarrollo Tecnológico
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <Mail className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">contacto@indtec.edu</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+593 123 456 789</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Quito, Ecuador</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suscríbete</h3>
            <p className="text-gray-300 text-sm mb-4">
              Recibe actualizaciones sobre el congreso
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#ff6b35]"
              />
              <button className="bg-[#ff6b35] hover:bg-[#ff5722] px-6 py-2 rounded font-semibold transition-colors">
                Enviar
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 INDTEC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
