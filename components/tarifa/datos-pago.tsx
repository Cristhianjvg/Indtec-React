export default function DatosPago() {
  return (
    <section className="py-12 md:py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          DATOS DE PAGO
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Banco de Loja
            </h3>
            <div className="space-y-2 text-sm md:text-base">
              <p>
                <span className="font-semibold">Cuenta Corriente:</span>
              </p>
              <p>Instituto Superior Tecnológico Sudamericano</p>
              <p>
                <span className="font-semibold">Titular:</span> Instituto
                Superior Tecnológico Sudamericano
              </p>
              <p>
                <span className="font-semibold">RUC:</span> 1190086237001
              </p>
              <p>
                <span className="font-semibold">Número de cuenta:</span>{" "}
                1100482367
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                sudamericano.edu.ec
              </p>
            </div>
          </div>

          <div className="bg-orange-500/20 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-6">
            <p className="text-sm md:text-base leading-relaxed">
              * Luego del pago, el comprobante de depósito o transferencia,
              junto con sus datos personales (nombre completo, cédula, correo
              electrónico, teléfono) y el comprobante de inscripción, deberán
              ser enviados al correo: sudamericano.edu.ec
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
            <p className="text-sm md:text-base leading-relaxed">
              Nota: Enviar el comprobante de depósito o transferencia, junto con
              sus datos personales (nombre completo, cédula, correo electrónico,
              teléfono) y el comprobante de inscripción, deberán ser enviados al
              correo: sudamericano.edu.ec. Dirección, teléfonos y correo
              electrónico al número 099 ISTS 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
