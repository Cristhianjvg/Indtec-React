import Image from "next/image"

export default function Auspiciantes() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#ff6b35] mb-6">Nuestros auspiciantes</h1>
          <p className="text-center text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Agradecemos el invaluable apoyo de empresas e instituciones que se suman a nuestro congreso como
            auspiciantes oficiales. Cada alianza estratégica es clave para hacer posible este encuentro de excelencia.
          </p>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* ORO */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22c55e]">ORO</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/visioonart.webp"
                alt="Visioonart"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/plorente.webp"
                alt="Padre Julian Lorente"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image src="img/auspiciantes/tikee.webp" alt="tikee" width={120} height={80} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image src="img/auspiciantes/ile.webp" alt="ILE" width={120} height={80} className="object-contain" />
            </div>
          </div>
        </div>

        {/* PLATA */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22c55e]">PLATA</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center col-span-2 md:col-span-1">
              <Image
                src="img/auspiciantes/cacpepastaza.webp"
                alt="CACPE PASTAZA"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image src="img/auspiciantes/quiero.webp" alt="Quiero" width={120} height={80} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image src="img/auspiciantes/roxtan.webp" alt="Roxtan" width={120} height={80} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/rosfutura.webp"
                alt="Ross Futura"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/soffiweb.webp"
                alt="Soffi Web"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* BRONCE */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22c55e]">BRONCE</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/nodo.webp"
                alt="Nodo"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/elemental.webp"
                alt="Elemental"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/producomsnet.webp"
                alt="Produconsnet"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/motorplus.webp"
                alt="Motoplus"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-37 flex items-center justify-center">
              <Image
                src="img/auspiciantes/hotelzamorano.webp"
                alt="Zamorano Real"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center col-span-2 md:col-span-1">
              <Image
                src="img/auspiciantes/pcenter.webp"
                alt="pcenter"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center col-span-2 md:col-span-1">
              <Image
                src="img/auspiciantes/oroverde.webp"
                alt="Hotel Oro Verde"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image src="img/auspiciantes/zaruz.webp" alt="Zarúz" width={120} height={80} className="object-contain" />
            </div>
          </div>
        </div>

        {/* MEDIA PARTNER */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22c55e]">MEDIA PARTNER</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/primerreporte.webp"
                alt="Primer Reporte"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/rumbastereo.webp"
                alt="Rumba Stereo"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/epc.webp"
                alt="EPC"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* PARTNER INSTITUCIONAL */}
        <div className="space-y-8 pb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22c55e]">PARTNER INSTITUCIONAL</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/ecuador.webp"
                alt="Ecuador No Se Detiene"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/prefectura.webp"
                alt="Loja Prefectura"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/municipio.webp"
                alt="Municipio de Loja"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
              <Image
                src="img/auspiciantes/eloro.webp"
                alt="El Oro Prefectura"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
