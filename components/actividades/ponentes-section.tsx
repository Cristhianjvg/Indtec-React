"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ponentes = [
  {
    nombre: "Dr. Fidel Márquez Sánchez Ph.D.",
    cargo: "Consejero Académico del Consejo de Educación Superior",
    institucion: "CES Ecuador",
    imagen: "/img/ponentes/fidel.png",
    pais: "ECUADOR",
    tema: "Aporte de la formación técnica y tecnológica",
  },
  {
    nombre: "Dra. Carmita Álvarez Santana Ph.D.",
    cargo: "Consejera Académica del Consejo de Educación Superior",
    institucion: "CES Ecuador",
    imagen: "/img/ponentes/carmita.png",
    pais: "ECUADOR",
    tema: "El desarrollo de la educación técnica tecnológica en el país",
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
    cargo: "Prorrector UIDE Loja",
    institucion: "UIDE",
    imagen: "/img/ponentes/pabloruiz.png",
    pais: "ECUADOR",
    tema: "La filosofía como innovación en el siglo XXI",
  },
  {
    nombre: "Rosa Paola Flores Loaiza",
    cargo: "Docente investigadora en la Universidad Nacional de Loja",
    institucion: "Universidad Nacional de Loja",
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
    tema: "Gestión educativa sostenible: Perspectivas teórico-prácticas para contribuir con estados deseables del medio socioambiental",
  },
  {
    nombre: "Bruno Valarezo Correa",
    cargo: "CEO de Clipp Ecuador SAS",
    institucion: "Clipp Ecuador SAS",
    imagen: "/img/ponentes/bruno.png",
    pais: "ECUADOR",
    tema: "Transformación digital del transporte en taxi y buses para Loja Ecuador",
  },
  {
    nombre: "Ingrid Weingärtner Reis",
    cargo: "Profesora investigadora",
    institucion: "Universidad Técnica Particular de Loja - UTPL",
    imagen: "/img/ponentes/ingrid.png",
    pais: "ECUADOR",
    tema: "Sociedad 5.0 y el reencantamiento del ser humano: educación e investigación desde América Latina",
  },
  {
    nombre: "Marvi Alexander Viteri Ruiz",
    cargo: "Docente universitario e investigador independiente",
    institucion: "Pontificia Universidad Católica del Ecuador",
    imagen: "/img/ponentes/marvi.png",
    pais: "ECUADOR",
    tema: "Autocuidado en la vulnerabilidad: Una perspectiva innovadora desde la investigación formativa",
  },
  {
    nombre: "María José Martínez Granda",
    cargo: "Jefe de Control de Calidad",
    institucion: "Industria Lojana de Especerías ILE C.A.",
    imagen: "/img/ponentes/maria.png",
    pais: "ECUADOR",
    tema: "Certificaciones y Cultura de calidad en ILE C.A.",
  },
  {
    nombre: "Juan Carlos Acosta Quevedo",
    cargo: "Catedrático Investigador Fundación Universitaria Área Andina",
    institucion: "Fundación Universitaria Área Andina",
    imagen: "/img/ponentes/juanacosta.png",
    pais: "COLOMBIA",
    tema: "Revisión bibliográfica de tendencias tecnológicas adoptadas por empresas de transporte para reducir contaminación en Bogotá",
  },
  {
    nombre: "María del Cisne Merino Vivanco",
    cargo: "Entrenadora de CrossFit certificada",
    institucion: "CrossFit CSF",
    imagen: "/img/ponentes/cisnemerina.png",
    pais: "ECUADOR",
    tema: "Entrenar para vivir mejor, el ejercicio en la salud y la logevidad",
  },
  {
    nombre: "Roberth Olmedo Zambrano Santos",
    cargo: "Canciller del Instituto Superior Tecnológico Portoviejo",
    institucion: "Instituto Superior Tecnológico Portoviejo",
    imagen: "/img/ponentes/roberth.png",
    pais: "ECUADOR",
    tema: "Simulación Clínica como Estrategia Metodológica de aprendizajes en el Área de la Salud",
  },
  {
    nombre: "Mayra Jeaneth Jiménez Jiménez",
    cargo:
      "Docente de la carrera de Enfermería de la Universidad Técnica Particular de Loja",
    institucion: "Universidad Técnica Particular de Loja",
    imagen: "/img/ponentes/jimenez.png",
    pais: "ECUADOR",
    tema: "El Proceso enfermero como estrategia de salud integral: vinculando nutrición, prevención y cuidado",
  },
  {
    nombre: "Jorge Antonio Barba Guamán",
    cargo: "Presidente de Nodo Cía. Ltda",
    institucion: "Nodo Cía. Ltda",
    imagen: "/img/ponentes/barba.png",
    pais: "ECUADOR",
    tema: "Ciudades inteligentes",
  },
  {
    nombre: "Edgar Edurman García Silvera",
    cargo:
      "Docente investigador Instituto Superior Tecnológico Tecnoecuatoriano",
    institucion: "Instituto Superior Tecnológico Tecnoecuatoriano",
    imagen: "/img/ponentes/edgar.png",
    pais: "ECUADOR",
    tema: "Retos y perspectivas de la Innovación: Una Mirada Global",
  },
];

export function PonentesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [hasHover, setHasHover] = useState(true);

  const isTouchCapable = () => {
    if (typeof window === "undefined") return false;

    const nav = typeof navigator !== "undefined" ? navigator : undefined;
    const hasMax =
      !!nav && "maxTouchPoints" in nav && (nav.maxTouchPoints ?? 0) > 0;
    const hasMs =
      !!nav &&
      "msMaxTouchPoints" in nav &&
      (nav as Navigator & { msMaxTouchPoints?: number }).msMaxTouchPoints! > 0;
    const hasOntouch = "ontouchstart" in window;

    return hasMax || hasMs || hasOntouch;
  };

  // Hover vs táctil (igual que antes)
  useEffect(() => {
    const touchCapable = isTouchCapable();

    const hoverMQ = window.matchMedia("(any-hover: hover)");
    const fineMQ = window.matchMedia("(any-pointer: fine)");

    const compute = () => {
      const supportsHover = hoverMQ.matches && fineMQ.matches;
      setHasHover(supportsHover && !touchCapable);
    };
    compute();

    const onChange = () => compute();
    hoverMQ.addEventListener?.("change", onChange);
    fineMQ.addEventListener?.("change", onChange);
    return () => {
      hoverMQ.removeEventListener?.("change", onChange);
      fineMQ.removeEventListener?.("change", onChange);
    };
  }, []);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    if (width >= 1024) return 3; // lg
    if (width >= 768) return 2; // md
    return 1; // mobile
  };

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const visibleCount = getVisibleCount();
    const totalItems = ponentes.length;

    if (direction === "right") {
      if (currentIndex >= totalItems - visibleCount) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
        setCurrentIndex(0);
      } else {
        const nextIndex = currentIndex + 1;
        const scrollAmount = slider.clientWidth;
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setCurrentIndex(nextIndex);
      }
    } else {
      if (currentIndex === 0) {
        const lastIndex = totalItems - visibleCount;
        const scrollAmount = slider.scrollWidth - slider.clientWidth;
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
        setCurrentIndex(lastIndex);
      } else {
        const prevIndex = currentIndex - 1;
        const scrollAmount = -slider.clientWidth;
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setCurrentIndex(prevIndex);
      }
    }
  };

  // Actualizar índice cuando hay scroll manual
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const itemWidth = slider.clientWidth / getVisibleCount();
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
      setFlippedIndex(null); // opcional: cerrar tarjetas al deslizar
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const flipAt = (absIndex: number) =>
    setFlippedIndex((prev) => (prev === absIndex ? null : absIndex));

  return (
    <section className="w-full bg-[#062135] text-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Header similar a talleres */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500 mb-2">
            CONFERENCIAS MAGISTRALES
          </h2>
          <p className="uppercase text-gray-300 mb-12 tracking-widest">
            Invitados Especiales
          </p>
        </div>
        {/* Botón izquierdo cristal */}
        <button
          onClick={() => scroll("left")}
          className="
    absolute top-1/2 -translate-y-1/2 z-10
    w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
    rounded-full
    bg-white/10 hover:bg-white/20
    border border-white/30 hover:border-white/60
    text-white
    backdrop-blur-md
    shadow-[0_8px_32px_rgba(0,0,0,0.5)]
    transition-all duration-300
    hover:scale-105
    focus:outline-none focus:ring-4 focus:ring-white/30

    left-[-23px]        /* móvil: un poco hacia afuera */
    sm:left-[-20px]     /* sm */
    md:left-[-25px]     /* md */
    lg:left-[-30px]     /* lg */
  "
          aria-label="Ponentes anteriores"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
        </button>

        {/* Botón derecho cristal */}
        <button
          onClick={() => scroll("right")}
          className="
    absolute top-1/2 -translate-y-1/2 z-10
    w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
    rounded-full
    bg-white/10 hover:bg-white/20
    border border-white/30 hover:border-white/60
    text-white
    backdrop-blur-md
    shadow-[0_8px_32px_rgba(0,0,0,0.5)]
    transition-all duration-300
    hover:scale-105
    focus:outline-none focus:ring-4 focus:ring-white/30

    right-[-12px]       /* móvil */
    sm:right-[-20px]
    md:right-[-25px]
    lg:right-[-30px]
  "
          aria-label="Siguientes ponentes"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
        </button>
        {/* SLIDER con estructura de talleres */}
        <div
          ref={sliderRef}
          className="
            flex gap-6 overflow-hidden scroll-smooth pb-4
            snap-x snap-mandatory
          "
        >
          {ponentes.map((p, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <div
                key={p.nombre}
                className="
                  snap-start
                  min-w-[90%]
                  md:min-w-[48%]
                  lg:min-w-[31%]
                "
              >
                <div
                  className="
                    relative h-[460px] max-w-[360px] mx-auto
                    perspective-[1000px]
                  "
                  onMouseEnter={() => hasHover && setFlippedIndex(null)}
                  onMouseLeave={() => hasHover && setFlippedIndex(null)}
                  onClick={() => !hasHover && flipAt(index)}
                  role={!hasHover ? "button" : undefined}
                  tabIndex={!hasHover ? 0 : -1}
                  aria-pressed={!hasHover ? isFlipped : undefined}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.7, ease: "linear" }}
                    className="relative w-full h-full transition-transform [transform-style:preserve-3d]"
                  >
                    {/* FRONT */}
                    <div
                      className={`absolute inset-0 [backface-visibility:hidden] ${
                        isFlipped
                          ? "pointer-events-none"
                          : "pointer-events-auto"
                      }`}
                    >
                      <div
                        className={`relative h-full overflow-hidden rounded-[28px] shadow-[0_14px_40px_rgba(0,0,0,.35)] ${
                          isFlipped ? "" : "group"
                        }`}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={p.imagen}
                            alt={p.nombre}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 320px"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2431]/70 via-[#0b2431]/20 to-transparent" />

                        {/* Panel inferior */}
                        <div
                          className={[
                            "absolute bottom-0 z-20 w-full bg-[#b55e2b]/35 backdrop-blur-md border-t border-[#b55e2b]/40 rounded-b-[28px] px-7 pt-5 pb-[90px] h-[210px] transition-transform duration-500 ease-out",
                            hasHover ? "group-hover:translate-y-[50px]" : "",
                          ].join(" ")}
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

                        {/* BOTÓN Tema de conferencia */}
                        <div
                          className={[
                            "absolute z-30 transition-all duration-300 ease-out",
                            hasHover
                              ? [
                                  "left-1/2 -translate-x-1/2 bottom-3",
                                  "opacity-0 pointer-events-none",
                                  "group-hover:opacity-100 group-hover:pointer-events-auto",
                                  "group-hover:top-1/2 group-hover:bottom-auto group-hover:-translate-y-1/2",
                                ].join(" ")
                              : "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-100",
                          ].join(" ")}
                          onClick={(e) => {
                            e.stopPropagation();
                            flipAt(index);
                          }}
                          aria-hidden={hasHover ? undefined : false}
                        >
                          <button
                            className={[
                              "rounded-xl px-3 py-3 text-[14px] border border-[#15384a] backdrop-blur-sm shadow-lg cursor-pointer transition-colors duration-300 w-full",
                              hasHover
                                ? "bg-transparent text-[#15384a] group-hover:bg-[#15384a] group-hover:text-white"
                                : "bg-[#15384a] text-white",
                            ].join(" ")}
                          >
                            Tema de Conferencia
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#0b2431] rounded-[28px] border border-[#1f3d4b] flex flex-col justify-center items-center p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 text-center">
                        {p.tema}
                      </h3>
                      {!hasHover && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            flipAt(index);
                          }}
                          className="mt-4 rounded-lg px-4 py-2 bg-white/10 hover:bg:white/20 transition"
                        >
                          Volver
                        </button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
