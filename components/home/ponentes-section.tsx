"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const ponentes = [
  {
    nombre: "María del Cisne Merino Vivanco",
    cargo: "Entrenadora de CrossFit certificada",
    institucion: "CrossFit SF",
    imagen: "/img/ponentes/cisnemerina.png",
    pais: "Ecuador",
    tema: "Entrenar para vivir mejor, el ejercicio en la salud y la logevidad",
  },
  {
    nombre: "Ingrid Weingärtner Reis",
    cargo: "Profesora investigadora",
    institucion: "Universidad Técnica Particular de Loja - UTPL",
    imagen: "img/ponentes/ingrid.png",
    pais: "Ecuador",
    tema: " Tema a definir",
  },
  {
    nombre: "Daniel Fernando Bovolenta Ovigli",
    cargo: "Profesor del DECMT/ICENE de la UFTM",
    institucion: "Universidade Federal do Triângulo Mineiro",
    imagen: "/img/ponentes/bovolenta.png",
    pais: "Brasil",
    tema: "Tratamiento de la controversia en educación patrimonial: el caso del Geoparque Uberaba, Minas Gerais, Brasil",
  },
  {
    nombre: "Juan Carlos Acosta Quevedo",
    cargo: "Catedrático Investigador Fundación Universitaria Área Andina",
    institucion: "Fundación Universitaria Área Andina ",
    imagen: "/img/ponentes/juanacosta.png",
    pais: "Colombia",
    tema: "Revisión bibliográfica de tendencias tecnológicas adoptadas por empresas de transporte para reducir contaminación en Bogotá.",
  },
    {
    nombre: "Ana Milena Guzmán Valeta",
    cargo: "Docente Investigadora en Universidad de la Costa",
    institucion: "Universidad de la Costa",
    imagen: "/img/ponentes/milena.png",
    pais: "Colombia",
    tema: "Gestión educativa sostenible: Perspectivas teórico-prácticas para contribuir con estados deseables del medio socioambiental.",
  },
];

export function PonentesSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const handleMouseLeave = (index: number) => {
    if (flippedIndex === index) {
      setFlippedIndex(null);
    }
  };

  return (
    <section className="py-24 bg-[#062135] text-white">
      <div className="mx-auto max-w-[1360px] sm:px-2 px-8 md:px-10">
        <h2 className="text-center text-3xl font-bold text-orange-500 mb-2">
          EVENTO
        </h2>
        <p className="text-center uppercase text-gray-300 mb-12 tracking-widest">
          Ponentes
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-20">
          {ponentes.map((p, i) => {
            const isFlipped = flippedIndex === i;

            return (
              <div
                key={i}
                className="relative h-[460px] perspective-[1000px]"
                onMouseLeave={() => handleMouseLeave(i)} // volver automáticamente
              >
                <motion.div
                  animate={{
                    rotateY: isFlipped ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.7, // más tiempo
                    ease: "linear", // ritmo constante (sin aceleraciones)
                  }}
                  className="relative w-full h-full transition-transform [transform-style:preserve-3d]"
                >
                  {/* ---- CARA FRONTAL ---- */}
                  <div
                    className={`absolute inset-0 [backface-visibility:hidden] ${
                      isFlipped ? "pointer-events-none" : "pointer-events-auto"
                    }`}
                  >
                    <div
                      className={`relative h-full overflow-hidden rounded-[28px] shadow-[0_14px_40px_rgba(0,0,0,.35)] ${
                        isFlipped ? "" : "group"
                      }`}
                    >
                      {/* Fondo */}
                      <Image
                        src={p.imagen}
                        alt={p.nombre}
                        fill
                        className="object-cover "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b2431]/70 via-[#0b2431]/20 to-transparent" />

                      {/* BANDA */}
                      <div
                        className={`
                          absolute bottom-0 z-20 w-full
                          bg-[#b55e2b]/35 backdrop-blur-md border-t border-[#b55e2b]/40
                          rounded-b-[28px] px-7 pt-5 pb-[90px]
                          h-[210px]
                          transition-transform duration-500 ease-out
                          ${isFlipped ? "" : "group-hover:translate-y-[50px]"}
                        `}
                      >
                        <h3 className="text-[20px] pb-2 font-semibold border-b border-[#1c1c1c] leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,.6)]">
                          {p.nombre}
                        </h3>
                        <div className="mt-2 space-y-1 text-[12px] text-[#f3efe9] drop-shadow-[0_1px_2px_rgba(0,0,0,.5)]">
                          <p className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-[#f3efe9]/90" />
                            {p.cargo}
                          </p>

                          <p className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-[#f3efe9]/90" />
                            {p.institucion}
                          </p>

                          <p className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#f3efe9]/90" />
                            {p.pais}
                          </p>
                        </div>
                      </div>

                      {/* BOTÓN */}
                      <div
                        className={`
                          absolute left-1/2 -translate-x-1/2 z-30
                          bottom-3
                          transition-all duration-1000 ease-out
                          ${
                            isFlipped
                              ? ""
                              : "group-hover:top-1/2 group-hover:bottom-auto group-hover:-translate-y-1/2"
                          }
                        `}
                      >
                        <button
                          onClick={() => handleFlip(i)}
                          className="
                            rounded-xl px-2 py-3 text-[14px]
                            bg-transparent group-hover:bg-[#15384a]
                            border border-[#15384a] backdrop-blur-sm shadow-lg cursor-pointer
                            text-[#15384a] group-hover:text-white
                            transition-colors duration-1000 ease-in-out w-full
                          "
                        >
                          Tema de Conferencia
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ---- CARA TRASERA ---- */}
                  <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#0b2431] rounded-[28px] border border-[#1f3d4b] flex flex-col justify-center items-center p-6">
                    <h3 className="text-xl font-semibold text-white-400 mb-2 text-center">
                      {p.tema}
                    </h3>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
