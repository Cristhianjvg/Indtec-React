"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface Taller {
  id: string;
  title: string;
  description: string;
  image: string;
  registrationUrl: string;
  instructor?: string;
  duration?: string;
  cupo?: number;
}

const talleres: Taller[] = [
  // Agregar enlaces reales de inscripción
  {
    id: "1",
    title: "Bienestar emocional y proyección 2026",
    description:
      "Este taller práctico invita a los participantes a reflexionar sobre su bienestar emocional y a desarrollar estrategias de autocuidado que favorezcan un cierre de año consciente",
    image: "/img/talleres/bienestar.png",
    registrationUrl: "https://example.com/register/ai-workshop",
    instructor: "Mgs. Sofia Faggioni",
    duration: "50 minutos",
    cupo: 15,
  },
  {
    id: "2",
    title: "Mantenimiento de baterías HV",
    description:
      "Taller práctico especializado en diagnóstico, mantenimiento preventivo y correctivo de baterías de alto voltaje (HV) en vehículos híbridos y eléctricos",
    image: "/img/talleres/baterias.jpg",
    registrationUrl: "https://example.com/register/nextjs-workshop",
    instructor: "Mgs. Santiago Díaz Vivanco",
    duration: "50 minutos",
    cupo: 15,
  },
  {
    id: "3",
    title: "Código Vida: RCP y Respuesta Inmediata",
    description:
      "Aprende protocolos internacionales de RCP y primeros auxilios para intervenir con eficacia en situaciones críticas de paro cardíaco",
    image: "/img/talleres/rcp.png",
    registrationUrl: "https://example.com/register/ux-workshop",
    instructor: "Md. Cristian Luna y Md. Dayanna López",
    duration: "50 minutos",
    cupo: 15,
  },
  {
    id: "4",
    title: "Educación Financiera",
    description:
      "Taller para fomentar el conocimiento financiero básico para administrar ingresos",
    image: "/img/talleres/finanzas.png",
    registrationUrl: "https://example.com/register/ux-workshop",
    instructor: "Ing. María del Carmen Vásquez",
    duration: "50 minutos",
    cupo: 15,
  },
  {
    id: "5",
    title: "Sabores del Litoral: El Arte del Encebollado Maestro",
    description:
      "Descubre técnicas tradicionales y contemporáneas para preparar un encebollado auténtico, explorando sabores costeros, equilibrio sensorial y patrimonio culinario ecuatoriano",
    image: "/img/talleres/encebollado.jpg",
    registrationUrl: "https://example.com/register/python-workshop",
    instructor: "Chef Leonardo Acaro (ILE)",
    duration: "50 minutos",
    cupo: 15,
  },
  {
    id: "6",
    title: "Fuego Ancestral: Técnicas Tradicionales para una Cecina Perfecta",
    description:
      "Aprende procesos ancestrales de marinado, secado y cocción para elaborar cecina tradicional, integrando técnicas modernas y saberes patrimoniales de la cocina ecuatoriana",
    image: "/img/talleres/gastro1.png",
    registrationUrl: "https://example.com/register/marketing-workshop",
    instructor: "Chef Leonardo Acaro (ILE)",
    duration: "50 minutos",
    cupo: 15,
  },
  {
    id: "7",
    title: "Raíces Andinas: Llapingachos entre Tradición y Territorio",
    description:
      "Domina la preparación del llapingacho patrimonial, desde su base ancestral hasta técnicas actuales, explorando texturas, rellenos y acompañamientos emblemáticos del país",
    image: "/img/talleres/gastro3.png",
    registrationUrl: "https://example.com/register/security-workshop",
    instructor: "Chef Leonardo Acaro (ILE)",
    duration: "50 minutos",
    cupo: 15,
  },
];

export function TalleresSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const totalItems = talleres.length;

    if (direction === "right") {
      // Si estamos en el último grupo, volver al inicio
      if (currentIndex >= totalItems - visibleCount) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        setCurrentIndex(0);
      } else {
        // Avanzar al siguiente grupo
        const nextIndex = currentIndex + 1;
        const scrollAmount = slider.clientWidth;

        slider.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
        setCurrentIndex(nextIndex);
      }
    } else {
      // Si estamos en el inicio, ir al final
      if (currentIndex === 0) {
        const lastIndex = totalItems - visibleCount;
        const scrollAmount = slider.scrollWidth - slider.clientWidth;

        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
        setCurrentIndex(lastIndex);
      } else {
        // Retroceder al grupo anterior
        const prevIndex = currentIndex - 1;
        const scrollAmount = -slider.clientWidth;

        slider.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
        setCurrentIndex(prevIndex);
      }
    }
  };

  // Actualizar el índice actual cuando el usuario hace scroll manual
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const itemWidth = slider.clientWidth / getVisibleCount();
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-center text-3xl font-bold text-orange-500 mb-2">
            TALLERES ESPECIALIZADOS
          </h2>
          <p className="text-center uppercase text-gray-600 mb-12 tracking-widest">
            Desarrolla nuevas habilidades con nuestros talleres prácticos
            dirigidos por expertos
          </p>
        </div>

        {/* Botón Izquierdo */}
        <button
          onClick={() => scroll("left")}
          className="
          absolute top-1/2 -translate-y-1/2 z-10
          w-12 h-12 flex items-center justify-center
          rounded-full border-2 border-orange-500 bg-white
          text-orange-500 hover:bg-orange-500 hover:text-white
          transition-all duration-300 shadow-md
          focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50

          left-[-23px]        /* móvil: un poco hacia adentro */
          sm:left-[-20px]     /* sm: un poquito más separado del borde */
          md:left-[-25px]    /* md: más hacia adentro */
          lg:left-[-30px]   /* lg: más al centro, pero aún pegado al contenido */
        "
          aria-label="Talleres anteriores"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Botón Derecho */}
        <button
          onClick={() => scroll("right")}
          className="
            absolute top-1/2 -translate-y-1/2 z-10
            w-12 h-12 flex items-center justify-center
            rounded-full border-2 border-orange-500 bg-white
            text-orange-500 hover:bg-orange-500 hover:text-white
            transition-all duration-300 shadow-md
            focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50

            right-[-12px]       /* móvil */
            sm:right-[-20px]
            md:right-[-25px]
            lg:right-[-30px]
          "
          aria-label="Siguientes talleres"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* SLIDER - SIN MODIFICAR LAS TARJETAS */}
        <div
          ref={sliderRef}
          className="
            flex gap-6 overflow-hidden scroll-smooth pb-4
            snap-x snap-mandatory
          "
        >
          {talleres.map((taller) => (
            <div
              key={taller.id}
              className="
                snap-start
                min-w-[90%]
                md:min-w-[48%]
                lg:min-w-[31%]
              "
            >
              {/* TARJETA ORIGINAL SIN MODIFICACIONES */}
              <div className="flex flex-col h-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={taller.image}
                    alt={taller.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 text-balance">
                    {taller.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-pretty leading-relaxed">
                    {taller.description}
                  </p>

                  {(taller.instructor || taller.duration) && (
                    <div className="space-y-1 text-sm text-gray-500">
                      {taller.instructor && (
                        <p className="flex items-center gap-2">
                          <span className="font-bold text-gray-600">
                            Instructor:
                          </span>
                          <span>{taller.instructor}</span>
                        </p>
                      )}
                      {taller.duration && (
                        <p className="flex items-center gap-2">
                          <span className="font-bold text-gray-600">
                            Duración:
                          </span>
                          <span>{taller.duration}</span>
                        </p>
                      )}
                      {taller.cupo && (
                        <p className="flex items-center gap-2">
                          <span className="font-bold text-gray-600">
                            Cupo Ilimitado:
                          </span>
                          <span>{taller.cupo}</span>
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={taller.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#FF6B00] hover:bg-[#E55F00] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50"
                  >
                    Inscribirse al Taller
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}