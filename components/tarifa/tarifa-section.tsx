// components/tarifa/tarifa-section.tsx
"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { Users, FlaskConical, Handshake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TabContent {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  description: string;
  buttonText: string;
  sectionId: string;
}

const tabs: TabContent[] = [
  {
    id: "asistentes",
    title: "ASISTENTES",
    icon: <Users className="w-5 h-5" />,
    color: "bg-[#1e5a7d]",
    image: "/img/general/asistentes.webp",
    description:
      "Los participantes, de forma presencial o virtual, acceden a ponencias, talleres interactivos, materiales exclusivos, certificación de 40 horas, actividades culturales y networking. Una experiencia integral para potenciar su formación académica y profesional.",
    buttonText: "Conocer más",
    sectionId: "participacion-pricing"
  },
  {
    id: "divulgacion",
    title: "DIVULGACIÓN CIENTÍFICA",
    icon: <FlaskConical className="w-5 h-5" />,
    color: "bg-[#ff6b35]",
    image: "/img/general/divulgacion.webp",
    description:
      "Participa como ponente en InDTec 2025. Accede a ponencias, talleres, noche cultural, certificado, difusión en libro con ISBN y opción de publicación en revistas indexadas Latindex o Scopus. Modalidad presencial o virtual. ¡Impulsa tu proyección investigativa!",
    buttonText: "Conocer más",
    sectionId: "divulgacion-cientifica"
  },
  {
    id: "coorganizadores",
    title: "COORGANIZADORES",
    icon: <Handshake className="w-5 h-5" />,
    color: "bg-[#7cb342]",
    image: "/img/general/coorganizadores.webp",
    description:
      "Tu institución puede ser coorganizadora del congreso, accediendo a visibilidad institucional, ponencias, talleres, publicaciones en Latindex o Scopus, certificación oficial y espacios de networking. Participa en el comité científico y fortalece tu posicionamiento académico con impacto nacional e internacional.",
    buttonText: "Conocer más",
    sectionId: "coorganizadores"
  },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    setMatches(mql.matches);

    mql.addEventListener("change", onChange);

    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, [query]);

  return matches;
}

const COLLAPSED_PX = 56;

// HAZ LA PROP OPCIONAL
interface TarifaSectionProps {
  onShowSection?: (sectionId: string) => void;
}

// PROPORCIONA UN VALOR POR DEFECTO
export function TarifaSection({ onShowSection }: TarifaSectionProps = {}) {
  const [openId, setOpenId] = useState<string>("asistentes");
  const [animatingId, setAnimatingId] = useState<string | null>(null);
  const isMd = useMediaQuery("(min-width: 768px)");

  // MODIFICA LA FUNCIÓN PARA VERIFICAR SI EXISTE
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onShowSection) {
      onShowSection(sectionId);
    } else {
      // Si no hay onShowSection, hacer scroll a la sección
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="bg-[#062135] py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#ff6b35]">
            TARIFAS
          </h2>
          <p className="text-cyan-400 text-sm sm:text-base md:text-lg mt-2 md:mt-3 max-w-3xl mx-auto px-4">
            Conecta con la innovación sin complicaciones.
          </p>
        </div>

        <div className="rounded-3xl p-2">
          <div className="flex flex-col md:flex-row gap-2 md:h-[520px] lg:h-[620px] overflow-hidden rounded-2xl">
            {tabs.map((tab) => {
              const isOpen = openId === tab.id;
              const collapsed = !isOpen;

              return (
                <motion.div
                  key={tab.id}
                  layout
                  initial={false}
                  onClick={() => {
                    setAnimatingId(openId);
                    setOpenId(tab.id);
                  }}
                  onAnimationComplete={() => setAnimatingId(null)}
                  animate={{ flexGrow: isOpen ? 1 : 0 }}
                  className={`relative cursor-pointer ${tab.color} rounded-2xl overflow-hidden`}
                  style={{
                    width: isMd && collapsed ? COLLAPSED_PX : undefined,
                    minWidth: isMd && collapsed ? COLLAPSED_PX : undefined,
                    flexBasis: isMd && collapsed ? COLLAPSED_PX : undefined,
                    height: !isMd && collapsed ? "60px" : undefined,
                    minHeight: !isMd && collapsed ? "60px" : undefined,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeInOut",
                  }}
                >
                  {!isOpen && animatingId !== tab.id && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-white font-bold tracking-widest text-xs sm:text-sm md:[writing-mode:vertical-rl] md:rotate-180 leading-none">
                        {tab.title}
                      </span>
                    </div>
                  )}

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="relative z-10 h-full bg-black/35 backdrop-blur-sm"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 h-full">
                          <div className="relative col-span-1 lg:col-span-2 h-48 sm:h-64 lg:h-full hidden sm:block rounded-xl lg:rounded-l-xl overflow-hidden">
                            <Image
                              src={tab.image || "/placeholder.svg"}
                              alt={tab.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="col-span-1 lg:col-span-3 flex flex-col justify-center px-6 sm:px-8 lg:pl-8 lg:pr-12 py-6 sm:py-8">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                              {tab.title}
                            </h3>
                            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8 text-justify">
                              {tab.description}
                            </p>
                            <button
                              onClick={(e) => handleButtonClick(e, tab.sectionId)}
                              className="rounded-xl bg-sky-800 hover:bg-sky-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base sm:w-auto text-center transition-colors duration-200 cursor-pointer"
                            >
                              {tab.buttonText}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}