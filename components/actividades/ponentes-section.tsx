"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, ChevronLeft, ChevronRight, } from "lucide-react";

const ponentes = [
  {
    nombre: "Dr. Fidel Márquez Sánchez Ph.D.",
    cargo: "Consejero Académico del Consejo de Educación Superior",
    institucion: "CES Ecuador",
    imagen: "/img/ponentes/fidel.png",
    pais: "ECUADOR",
    tema: "Tema a definir",
  },
  {
    nombre: "Alexandra Monserrate Jara Minga",
    cargo: "Gobernadora de la ciudad de Loja",
    institucion: "Gobernación de Loja",
    imagen: "/img/ponentes/alexandra.png",
    pais: "ECUADOR",
    tema: "La Administración Pública con enfoque de género en la agricultura",
  },
  {
    nombre: "Pablo Jose Ruíz Aguirre",
    cargo: "Profesor de pregrado en la UIDE y de postgrado en la UNL",
    institucion: "UIDE",
    imagen: "/img/ponentes/pabloruiz.png",
    pais: "ECUADOR",
    tema: "La filosofía como innovación en el siglo XXI",
  },
  {
    nombre: "Rosa Paola Flores Loaiza",
    cargo: "Docente investigadora en la Universidad Nacional de Loja",
    institucion: " Universidad Nacional de Loja",
    imagen: "/img/ponentes/rosa.png",
    pais: "ECUADOR",
    tema: "Emprendimiento en Ingeniería: Construyendo el Futuro a Través de la Innovación Aplicada",
  },
  {
    nombre: "Daniel Fernando Bovolenta Ovigli",
    cargo: "Profesor del DECMT/ICENE de la UFTM",
    institucion: "Universidade Federal do Triângulo Mineiro",
    imagen: "/img/ponentes/bovolenta.png",
    pais: "BRASIL",
    tema: "Tratamiento de la controversia en educación patrimonial: el caso del Geoparque Uberaba, Minas Gerais, Brasil",
  },
  {
    nombre: "Ana Milena Guzmán Valeta",
    cargo: "Docente Investigadora en Universidad de la Costa",
    institucion: "Universidad de la Costa",
    imagen: "/img/ponentes/milena.png",
    pais: "COLOMBIA",
    tema: "Gestión educativa sostenible: Perspectivas teórico-prácticas para contribuir con estados deseables del medio socioambiental.",
  },
  {
    nombre: "Bruno Valarezo Correa",
    cargo: "CEO de Clipp Ecuador SAS",
    institucion: "Clipp Ecuador SAS",
    imagen: "/img/ponentes/bruno.png",
    pais: "ECUADOR",
    tema: "Tema a definir",
  },
  {
    nombre: "Ingrid Weingärtner Reis",
    cargo: "Profesora investigadora",
    institucion: "Universidad Técnica Particular de Loja - UTPL",
    imagen: "img/ponentes/ingrid.png",
    pais: "ECUADOR",
    tema: "Sociedad 5.0 y el reencantamiento del ser humano: educación e investigación desde América Latina",
  },
  {
    nombre: "Marvi Alexander Viteri Ruiz",
    cargo: "Docente universitario e investigador independiente",
    institucion: "Pontificia Universidad Católica del Ecuador",
    imagen: "/img/ponentes/marvi.png",
    pais: "ECUADOR",
    tema: "Autocuidado en la vulnerabilidad: Una perspectiva innovadora desde la investigación formativa.",
  },
  {
    nombre: "María José Martínez Granda",
    cargo: "Jefe de Control de Calidad",
    institucion: "Industria Lojana de Especerías ILE C.A.  ",
    imagen: "/img/ponentes/maria.png",
    pais: "ECUADOR",
    tema: "Certificaciones y Cultura de calidad en ILE C.A. ",
  },
   {
    nombre: "Juan Carlos Acosta Quevedo",
    cargo: "Catedrático Investigador Fundación Universitaria Área Andina",
    institucion: "Fundación Universitaria Área Andina ",
    imagen: "/img/ponentes/juanacosta.png",
    pais: "COLOMBIA",
    tema: "Revisión bibliográfica de tendencias tecnológicas adoptadas por empresas de transporte para reducir contaminación en Bogotá.",
  },
  {
    nombre: "María del Cisne Merino Vivanco",
    cargo: "Entrenadora de CrossFit certificada",
    institucion: "CrossFit SF",
    imagen: "/img/ponentes/cisnemerina.png",
    pais: "ECUADOR",
    tema: "Entrenar para vivir mejor, el ejercicio en la salud y la logevidad",
  },
  {
    nombre: "Edgar Edurman García Silvera",
    cargo: "Docente investigador Instituto Superior Tecnológico Tecnoecuatoriano",
    institucion: "Instituto Superior Tecnológico Tecnoecuatoriano",
    imagen: "/img/ponentes/edgar.png",
    pais: "ECUADOR",
    tema: "Retos y perspectivas de la Innovación: Una Mirada Global",
  },
  
];

export function PonentesSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(ponentes.length / itemsPerSlide);

  // slide cada 5 segundos
  /*useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Puedes ajustar el tiempo (milisegundos)
    return () => clearInterval(intervalo);
  }, [totalSlides]);*/

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const handleMouseLeave = (index: number) => {
    if (flippedIndex === index) {
      setFlippedIndex(null);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visiblePonentes = ponentes.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className="py-24 bg-[#062135] text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1360px] sm:px-2 px-8 md:px-10 relative">
        <h2 className="text-center text-3xl font-bold text-orange-500 mb-2">
          CONFERENCIAS MAGISTRALES
        </h2>
        <p className="text-center uppercase text-gray-300 mb-12 tracking-widest">
          Invitados Especiales
        </p>

        {/* --- Grid de tarjetas (slide) --- */}
        <div className="flex justify-center relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-20 w-full">
            {visiblePonentes.map((p, i) => {
              const isFlipped = flippedIndex === i + currentSlide * itemsPerSlide;
              return (
                <div
                  key={i}
                  className="relative h-[460px] perspective-[1000px]"
                  onMouseLeave={() =>
                    handleMouseLeave(i + currentSlide * itemsPerSlide)
                  }
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.7, ease: "linear" }}
                    className="relative w-full h-full transition-transform [transform-style:preserve-3d]"
                  >
                    {/* --- CARA FRONTAL --- */}
                    <div
                      className={`absolute inset-0 [backface-visibility:hidden] ${isFlipped ? "pointer-events-none" : "pointer-events-auto"
                        }`}
                    >
                      <div
                        className={`relative h-full overflow-hidden rounded-[28px] shadow-[0_14px_40px_rgba(0,0,0,.35)] ${isFlipped ? "" : "group"
                          }`}
                      >
                        <Image
                          src={p.imagen}
                          alt={p.nombre}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2431]/70 via-[#0b2431]/20 to-transparent" />
                        <div
                          className={`absolute bottom-0 z-20 w-full bg-[#b55e2b]/35 backdrop-blur-md border-t border-[#b55e2b]/40 rounded-b-[28px] px-7 pt-5 pb-[90px] h-[210px] transition-transform duration-500 ease-out ${isFlipped ? "" : "group-hover:translate-y-[50px]"
                            }`}
                        >
                          <h3 className="text-[20px] pb-2 font-semibold border-b border-[#1c1c1c] leading-tight">
                            {p.nombre}
                          </h3>
                          <div className="mt-2 space-y-1 text-[12px] text-[#f3efe9]">
                            <p className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4" /> {p.cargo}
                            </p>
                            <p className="flex items-center gap-2">
                              <GraduationCap className="w-4 h-4" />{" "}
                              {p.institucion}
                            </p>

                            {/* --- País con bandera --- */}
                            <p className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <Image
                                src={`/img/banderas/${p.pais.toLowerCase()}.png`}
                                alt={`Bandera de ${p.pais}`}
                                width={20}
                                height={14}
                                className="rounded-sm shadow-sm"
                              />
                              <span className="font-semibold text-blue-400">
                                {p.pais}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 z-30 bottom-3 group-hover:top-1/2 group-hover:bottom-auto group-hover:-translate-y-1/2 transition-all duration-1000 ease-out">
                          <button
                            onClick={() =>
                              handleFlip(i + currentSlide * itemsPerSlide)
                            }
                            className="rounded-xl px-2 py-3 text-[14px] bg-transparent group-hover:bg-[#15384a] border border-[#15384a] backdrop-blur-sm shadow-lg cursor-pointer text-[#15384a] group-hover:text-white transition-colors duration-1000 ease-in-out w-full"
                          >
                            Tema de Conferencia
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* --- CARA TRASERA --- */}
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

        {/* --- Botones fuera del grid --- */}
        <button
          onClick={prevSlide}
          className="absolute left-[-40px] md:left-[-60px] top-1/2 -translate-y-1/2 
                     bg-transparent hover:bg-white/10 text-white rounded-full 
                     p-3 transition-all duration-300"
        >
          <ChevronLeft size={40} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[-40px] md:right-[-60px] top-1/2 -translate-y-1/2 
                     bg-transparent hover:bg-white/10 text-white rounded-full 
                     p-3 transition-all duration-300"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </section>
  );
}
