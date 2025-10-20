export function PaymentSection() {
  return (
    <section className="py-16 bg-[rgb(10,55,75)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">DATOS DE PAGO</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-[rgba(13,71,91,0.8)] backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Banco de Loja</h3>

            <div className="space-y-2 text-sm leading-relaxed">
              <p>
                <span className="font-semibold">Cuenta Corriente</span>
              </p>
              <p>
                <span className="font-semibold">Número de cuenta:</span> 2901040939
              </p>
              <p>
                <span className="font-semibold">Titular:</span> Instituto Tecnológico Superior Sudamericano
              </p>
              <p>
                <span className="font-semibold">RUC:</span> 1190082748001
              </p>
              <p>
                <span className="font-semibold">Correo electrónico:</span> cuotaisis@tecnologico
              </p>
              <p className="pl-0">sudamericano.edu.ec</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-[rgba(13,71,91,0.8)] backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
              <p className="text-sm leading-relaxed">
                *Existe método de pago con tarjeta de crédito por medio de Payphone con un recargo del 6% del valor
              </p>
            </div>

            <div className="p-6 bg-[rgba(13,71,91,0.8)] backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">Nota:</span> Enviar el comprobante de depósito o transferencia, junto
                con los datos de facturación (nombres completos, número de cédula o RUC, dirección, teléfono y correo
                electrónico) al número 096 351 5705.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
