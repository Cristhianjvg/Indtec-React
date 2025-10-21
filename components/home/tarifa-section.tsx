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

const COLLAPSED_PX = 56; // ancho de las pilas cerradas (ajústalo)

export function TarifaSection() {
  const [openId, setOpenId] = useState<string>("asistentes");

  return (
    <section className="bg-[#062135] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#ff6b35]">
            TARIFAS
          </h2>
          <p className="text-cyan-400 text-base md:text-lg mt-3 max-w-3xl mx-auto">
            Conecta con la innovación sin complicaciones.
          </p>
        </div>

        {/* Card contenedora */}
        <div className="rounded-3xl p-2">
          {/* Acordeón horizontal: barritas finas a la izquierda */}
          <div className="flex gap-2 h-[620px] overflow-hidden rounded-2xl">
            {tabs.map((tab) => {
              const isOpen = openId === tab.id;
              return (
                <motion.div
                  key={tab.id}
                  layout
                  initial={false}
                  onClick={() => setOpenId(tab.id)}
                  animate={{ flexGrow: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className={`relative cursor-pointer ${tab.color} rounded-2xl overflow-hidden`}
                  style={{
                    width: isOpen ? undefined : COLLAPSED_PX, // barrita fina
                    minWidth: isOpen ? 0 : COLLAPSED_PX,
                    flexBasis: isOpen ? 0 : COLLAPSED_PX,
                  }}
                >
                  {/* Etiqueta vertical visible solo cuando está cerrado */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span
                      className={`text-white font-bold tracking-widest text-[10px] md:text-xs transition-opacity
      ${
        isOpen ? "opacity-0" : "opacity-100"
      } [writing-mode:vertical-rl] rotate-180 leading-none`}
                    >
                      {tab.title}
                    </span>
                  </div>

                  {/* Contenido cuando está abierto (ocupa todo el panel) */}
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
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6  h-full">
                          {/* Imagen lateral dentro (opcional, o quítala si prefieres solo fondo) */}
                          <div className="relative col-span-2 hidden lg:block rounded-l-xl overflow-hidden">
                            <Image
                              src={tab.image}
                              alt={tab.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Texto + botón */}
                          <div className="col-span-3 flex flex-col justify-center pl-8 pr-12">
                            <h3 className="text-white text-mg md:text-lg mb-5 text-center md:text-left">
                              {tab.title}
                            </h3>

                            <div className="space-y-4 text-gray-100/90 text-sm md:text-base leading-relaxed my-10 text-justify">
                              {tab.description.map((p, i) => (
                                <p key={i}>{p}</p>
                              ))}
                            </div>

                            <div className="text-right">
                              <Button
                                asChild
                                className="rounded-xl bg-sky-800 hover:bg-white/20 text-white px-8 py-4 text-sm md:text-base"
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
