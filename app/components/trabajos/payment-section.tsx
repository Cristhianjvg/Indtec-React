export function PaymentSection() {
  return (
    <section className="py-16 bg-[rgb(13,71,91)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">DATOS DE PAGO</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bank Information */}
          <div className="p-8 bg-white text-gray-900 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">Banco de Loja</h3>

            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">Cuenta Corriente:</p>
                <p className="text-gray-600">1234567890</p>
              </div>

              <div>
                <p className="font-semibold">Número de cuenta:</p>
                <p className="text-gray-600">5001040939</p>
              </div>

              <div>
                <p className="font-semibold">Titular:</p>
                <p className="text-gray-600">Fundación Tecnológica Seguridad Sudamericana</p>
              </div>

              <div>
                <p className="font-semibold">RUC:</p>
                <p className="text-gray-600">1191768493001</p>
              </div>

              <div>
                <p className="font-semibold">Correo electrónico:</p>
                <p className="text-gray-600">cuentas@tecnologica.edu.ec</p>
              </div>

              <div className="pt-4">
                <p className="text-gray-600">
                  <strong>Nota:</strong> Enviar el comprobante de depósito o transferencia, junto con todos los datos
                  del Resumen (nombre completo, número de cédula o pasaporte, correo electrónico y número de teléfono)
                  al número 099 123 4567.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="p-8 bg-white text-gray-900 rounded-lg shadow-lg">
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <strong className="text-[rgb(249,115,22)]">
                  *Costo unitario de pago con tarjeta de crédito por medio de PayPhone:
                </strong>
              </p>

              <p className="text-gray-600">
                con un recargo del 5% sobre el valor del Resumen (nombre completo, número de cédula o pasaporte, correo
                electrónico y número de teléfono) al número 099 123 4567.
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold mb-2">Importante:</p>
                <p className="text-gray-600">
                  Todos los datos del Resumen (nombre completo, número de cédula o pasaporte, correo electrónico y
                  número de teléfono) al número 099 123 4567.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
