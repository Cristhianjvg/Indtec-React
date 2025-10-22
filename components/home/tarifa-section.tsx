"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, FlaskConical, Handshake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TabContent {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  description: string[];
  buttonText: string;
  buttonLink: string;
}

const tabs: TabContent[] = [
  {
    id: "asistentes",
    title: "ASISTENTES",
    icon: <Users className="w-5 h-5" />,
    color: "bg-[#1e5a7d]",
    image: "/img/indtec2.png",
    description: [
      "gravida at, viverra placerat lorem. adipiscing quis enim. nibh Cras efficitur. ullamcorper massa lacus Quisque sit adipiscing in commodo est. elementum Donec ",
      "non fringilla Nam nec elit. tempor Quisque Praesent dui nisi Nunc ipsum felis, cursus nec dui porta nec nisl. faucibus nisl. Nullam quis Sed ex ex massa urna. ",
      "facilisis non. ipsum dolor Vestibulum elementum nibh non, convallis. non. vel sapien eget eu Lorem commodo sed amet, non, luctus Nam id ex. Nunc odio felis, ",
    ],
    buttonText: "Conocer más",
    buttonLink: "/tarifas",
  },
  {
    id: "divulgacion",
    title: "DIVULGACIÓN CIENTÍFICA",
    icon: <FlaskConical className="w-5 h-5" />,
    color: "bg-[#ff6b35]",
    image: "/img/indtec2.png",
    description: [
      "Presenta tus investigaciones y comparte conocimiento...",
      "Accede a espacios de divulgación científica con evaluación...",
      "Conecta con investigadores de todo el mundo...",
    ],
    buttonText: "Conocer más",
    buttonLink: "/tarifas",
  },
  {
    id: "coorganizadores",
    title: "COORGANIZADORES",
    icon: <Handshake className="w-5 h-5" />,
    color: "bg-[#7cb342]",
    image: "/img/indtec2.png",
    description: [
      "Forma parte de la organización del congreso...",
      "Obtén visibilidad y fortalece alianzas estratégicas...",
      "Participa en la planificación y ejecución de eventos...",
    ],
    buttonText: "Conocer más",
    buttonLink: "/tarifas",
  },
];

export function TarifaSection() {
  const [openId, setOpenId] = useState<string>("asistentes");
  const [animatingId, setAnimatingId] = useState<string | null>(null);

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

        {/* Card contenedora */}
        <div className="rounded-3xl p-2">
          {/* Acordeón horizontal en desktop, vertical en móvil */}
          <div className="flex flex-col md:flex-row gap-2 md:h-[520px] lg:h-[620px] overflow-hidden rounded-2xl">
            {tabs.map((tab) => {
              const isOpen = openId === tab.id;

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
                  animate={{
                    flexGrow: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeInOut",
                  }}
                  className={`relative cursor-pointer ${
                    tab.color
                  } rounded-2xl overflow-hidden ${
                    !isOpen ? "h-[60px] md:h-auto md:w-14 md:min-w-14" : ""
                  }`}
                >
                  {/* Etiqueta visible cuando está cerrado */}
                  {!isOpen && animatingId !== tab.id && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-white font-bold tracking-widest text-xs sm:text-sm md:[writing-mode:vertical-rl] md:rotate-180 leading-none">
                        {tab.title}
                      </span>
                    </div>
                  )}

                  {/* Contenido cuando está abierto */}
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
                          {/* Imagen lateral */}
                          <div className="relative col-span-1 lg:col-span-2 h-48 sm:h-64 lg:h-full hidden sm:block rounded-xl lg:rounded-l-xl overflow-hidden">
                            <Image
                              src={tab.image}
                              alt={tab.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Texto + botón */}
                          <div className="col-span-1 lg:col-span-3 flex flex-col justify-center px-6 sm:px-8 lg:pl-8 lg:pr-12 py-6 sm:py-8">
                            <h3 className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-5 text-center md:text-left">
                              {tab.title}
                            </h3>

                            <div className="space-y-3 sm:space-y-4 text-gray-100/90 text-xs sm:text-sm md:text-base leading-relaxed my-6 sm:my-8 lg:my-10 text-justify">
                              {tab.description.map((p, i) => (
                                <p key={i}>{p}</p>
                              ))}
                            </div>

                            <div className="text-center md:text-right mt-4">
                              <Button
                                asChild
                                className="rounded-xl bg-sky-800 hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base w-full sm:w-auto"
                              >
                                <a href={tab.buttonLink}>{tab.buttonText}</a>
                              </Button>
                            </div>
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
