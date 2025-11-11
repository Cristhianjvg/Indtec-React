"use client";
import Image from "next/image";

type LogoProps = { src: string; alt: string };

function LogoCard({ src, alt }: LogoProps) {
  const normalized = src.startsWith("/") ? src : `/${src}`;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src={normalized}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
          loading="lazy"
          priority={false}
        />
      </div>
    </div>
  );
}

export default function Auspiciantes() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl font-bold text-orange-500 mb-2">
            NUESTROS AUSPICIANTES
          </h1>
          <p className="text-center text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Agradecemos el invaluable apoyo de empresas e instituciones que se
            suman a nuestro congreso como auspiciantes oficiales. Cada alianza
            estratégica es clave para hacer posible este encuentro de
            excelencia.
          </p>
        </div>
      </div>

      {/* Sponsors */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* ORO */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22c55e]">
            ORO
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <LogoCard
              src="/img/auspiciantes/visioonart.webp"
              alt="Visioonart"
            />
            <LogoCard
              src="/img/auspiciantes/plorente.webp"
              alt="Padre Julian Lorente"
            />
            <LogoCard src="/img/auspiciantes/tikee.webp" alt="tikee" />
            <LogoCard src="/img/auspiciantes/ile.webp" alt="ILE" />
          </div>
        </div>

        {/* PLATA */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22c55e]">
            PLATA
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="col-span-2 md:col-span-1 w-full">
              <LogoCard
                src="/img/auspiciantes/cacpepastaza.webp"
                alt="CACPE PASTAZA"
              />
            </div>
            <LogoCard src="/img/auspiciantes/quiero.webp" alt="Quiero" />
            <LogoCard src="/img/auspiciantes/roxtan.webp" alt="Roxtan" />
            <LogoCard
              src="/img/auspiciantes/rosfutura.webp"
              alt="Ross Futura"
            />
            <LogoCard src="/img/auspiciantes/soffiweb.webp" alt="Soffi Web" />
          </div>
        </div>

        {/* BRONCE */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22c55e]">
            BRONCE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            <LogoCard src="/img/auspiciantes/nodo.webp" alt="Nodo" />
            <LogoCard src="/img/auspiciantes/elemental.webp" alt="Elemental" />
            <LogoCard
              src="/img/auspiciantes/producomsnet.webp"
              alt="Produconsnet"
            />
            <LogoCard src="/img/auspiciantes/motorplus.webp" alt="Motoplus" />
            {/* h-37 era inválido → usa h-32 por consistencia dentro de LogoCard */}
            <LogoCard
              src="/img/auspiciantes/hotelzamorano.webp"
              alt="Zamorano Real"
            />
            <div className="col-span-2 md:col-span-1 w-full">
              <LogoCard src="/img/auspiciantes/pcenter.webp" alt="pcenter" />
            </div>
            <div className="col-span-2 md:col-span-1 w-full">
              <LogoCard
                src="/img/auspiciantes/oroverde.webp"
                alt="Hotel Oro Verde"
              />
            </div>
            <LogoCard src="/img/auspiciantes/zaruz.webp" alt="Zarúz" />
          </div>
        </div>

        {/* MEDIA PARTNER */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22c55e]">
            MEDIA PARTNER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            <LogoCard
              src="/img/auspiciantes/primerreporte.webp"
              alt="Primer Reporte"
            />
            <LogoCard
              src="/img/auspiciantes/rumbastereo.webp"
              alt="Rumba Stereo"
            />
            <LogoCard src="/img/auspiciantes/epc.webp" alt="EPC" />
          </div>
        </div>

        {/* PARTNER INSTITUCIONAL */}
        <div className="space-y-8 pb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22c55e]">
            PARTNER INSTITUCIONAL
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <LogoCard
              src="/img/auspiciantes/ecuador.webp"
              alt="Ecuador No Se Detiene"
            />
            <LogoCard
              src="/img/auspiciantes/prefectura.webp"
              alt="Loja Prefectura"
            />
            <LogoCard
              src="/img/auspiciantes/municipio.webp"
              alt="Municipio de Loja"
            />
            <LogoCard
              src="/img/auspiciantes/eloro.webp"
              alt="El Oro Prefectura"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
