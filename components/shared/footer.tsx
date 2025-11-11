import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white pt-12 pb-4 relative overflow-hidden">
      {/* marca gigante de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <span className="text-[20rem] font-bold text-[#0a3a4d] select-none">
          InDTec
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* bloque 1: contacto */}
          <div>
            <h2 className="text-2xl font-bold mb-6">InDTec</h2>
            <h3 className="text-[#ff6b35] font-semibold mb-4">Contactos:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                {/* icono teléfono */}
                <div className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a1.5 1.5 0 0 0 1.5-1.5v-2.25a1.5 1.5 0 0 0-1.267-1.482l-3.058-.436a1.5 1.5 0 0 0-1.384.53l-.97 1.164a.75.75 0 0 1-1.068.08 12 12 0 0 1-3.96-3.96.75.75 0 0 1 .08-1.068l1.164-.97a1.5 1.5 0 0 0 .53-1.384l-.436-3.058A1.5 1.5 0 0 0 8.25 4.5H6a1.5 1.5 0 0 0-1.5 1.5v.75Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm">
                    Mgs. Jackson Michael Quevedo | Coordinador General de IndTec
                  </p>
                  <p className="text-sm">
                    <a
                      href="https://wa.me/+593992335466"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ff6b35] transition-colors"
                    >
                      (+593)997235466
                    </a>
                  </p>
                  <p className="text-email">investigacion@ists.edu.ec</p>
                </div>
              </div>
            </div>
          </div>

          {/* bloque 2: mapa integrado */}
          <div>
            <h3 className="text-[#ff6b35] font-semibold mb-4">Dirección:</h3>
            <div className="relative w-full h-44 md:h-48 rounded-lg overflow-hidden bg-white/5 ring-1 ring-white/5">
              <div className="absolute inset-0 contrast-[1] ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.103564839608!2d-79.20510512549494!3d-3.9991267446082546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb37ffb67d5df1%3A0x5e500dda7a2998e1!2sInstituto%20Tecnologico%20Superior%20%22Sudamericano%22!5e0!3m2!1ses-419!2sec!4v1761094684979!5m2!1ses-419!2sec"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Instituto Tecnológico Superior Sudamericano"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#0e2f50]/80 backdrop-blur-sm p-2 text-xs text-center">
                Instituto Tecnológico Superior “Sudamericano”, Loja - Ecuador
              </div>
            </div>
          </div>

          {/* bloque 3: redes sociales con iconos */}
          <div>
            <h3 className="text-[#ff6b35] font-semibold mb-4">Síguenos en:</h3>
            <div className="space-y-3">
              {/* facebook */}
              <a
                href="https://www.facebook.com/ISTSLoja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-[#ff6b35] transition-colors"
              >
                <div className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10">
                  {/* facebook icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.5 9H15V6.5h-1.5C10.91 6.5 9.5 8.14 9.5 10.9V13H8v2.5h1.5V21h2.5v-5.5H14V13h-2v-2.1c0-.72.21-1.4 1.5-1.4Z" />
                  </svg>
                </div>
                <span>Facebook</span>
              </a>
              {/* instagram */}
              <a
                href="https://www.instagram.com/istsloja/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-[#ff6b35] transition-colors"
              >
                <div className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10">
                  {/* instagram icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 0 0 7.5 12 4.5 4.5 0 0 0 12 16.5 4.5 4.5 0 0 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 0 1 14.5 12 2.5 2.5 0 0 1 12 14.5 2.5 2.5 0 0 1 9.5 12 2.5 2.5 0 0 1 12 9.5zm4.75-3a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z" />
                  </svg>
                </div>
                <span>Instagram</span>
              </a>
              {/* tiktok en lugar de youtube */}
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-[#ff6b35] transition-colors"
              >
                <div className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10">
                  {/* TikTok logo simple */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M168 40a8 8 0 0 0-8-8h-24a8 8 0 0 0-8 8v117.27a20 20 0 1 1-16-19.6 8 8 0 0 0 8-7.84V104a8 8 0 0 0-9.14-7.92C90.35 99 72 119.54 72 143.75A48.25 48.25 0 0 0 120.27 192 48 48 0 0 0 168 144Z" />
                    <path d="M200 88a56.06 56.06 0 0 1-32-10.07V120a56 56 0 1 0 56-56Z" />
                  </svg>
                </div>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bloque del logo con fondo rojo */}
        <div className="w-full flex justify-center items-center  py-4">
          <Image
            src="/img/indtecFooter.png" // ⬅️ Ajusta la ruta si tu logo está en otra carpeta
            alt="InDTec Logo"
            className="w-[90%] object-contain"
          />
        </div>

        {/* Línea inferior con derechos */}
        <div className="text-center text-sm border-t border-white/10 pt-4">
          <p>ISTS | Derechos reservados | 2025</p>
        </div>
      </div>
    </footer>
  );
}
