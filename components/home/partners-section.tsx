"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LogoAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface CarruselMultiProps {
  title: string;
  logos: LogoAsset[];
  itemsPerView?: number; // valor por defecto si no hay window
  gap?: number;
  autoplayInterval?: number | null;
  // opcional: breakpoints responsivos
  responsive?: {
    base?: number; // <640px
    sm?: number; // ≥640px
    md?: number; // ≥768px
    lg?: number; // ≥1024px
    xl?: number; // ≥1280px
  };
}

const useResponsiveItems = (
  fallback: number,
  responsive?: CarruselMultiProps["responsive"]
) => {
  const [count, setCount] = useState(fallback); // seguro para SSR

  useEffect(() => {
    const bp = {
      base: responsive?.base ?? fallback,
      sm: responsive?.sm,
      md: responsive?.md,
      lg: responsive?.lg,
      xl: responsive?.xl,
    };
    const compute = () => {
      const w = window.innerWidth;
      let v = bp.base;
      if (bp.sm && w >= 640) v = bp.sm;
      if (bp.md && w >= 768) v = bp.md ?? v;
      if (bp.lg && w >= 1024) v = bp.lg ?? v;
      if (bp.xl && w >= 1280) v = bp.xl ?? v;
      setCount(v);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [fallback, responsive]);

  return count;
};

const CarruselMulti = ({
  title,
  logos,
  itemsPerView = 1, // mejor por defecto 1 para móviles
  gap = 24,
  autoplayInterval = 3000,
  responsive = { base: 1, sm: 2, md: 3 },
}: CarruselMultiProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  // valor responsivo real
  const responsiveItemsPerView = useResponsiveItems(itemsPerView, responsive);

  const totalItems = logos.length;
  const effectiveItemsPerView = Math.max(
    1,
    Math.min(responsiveItemsPerView, totalItems)
  );
  const maxIndex = Math.max(0, totalItems - effectiveItemsPerView);

  // Corrige índice cuando cambian items por vista o cantidad
  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex, effectiveItemsPerView, totalItems]);

  // Auto-avance (pausa en hover o cuando no aplica)
  useEffect(() => {
    if (
      !totalItems ||
      !autoplayInterval ||
      totalItems <= effectiveItemsPerView ||
      isHover
    )
      return;
    const id = setInterval(() => {
      setCurrentIndex((c) => (c >= maxIndex ? 0 : c + 1));
    }, autoplayInterval);
    return () => clearInterval(id);
  }, [autoplayInterval, totalItems, effectiveItemsPerView, isHover, maxIndex]);

  const navigatePrevious = () =>
    setCurrentIndex((c) => (c <= 0 ? maxIndex : c - 1));
  const navigateNext = () =>
    setCurrentIndex((c) => (c >= maxIndex ? 0 : c + 1));

  // Layout: ancho de cada tarjeta y translateX
  const itemBasis = `calc((100% - ${
    (effectiveItemsPerView - 1) * gap
  }px) / ${effectiveItemsPerView})`;
  // Evita anidar calc innecesariamente
  const translateValue = `translateX(calc(-1 * ${currentIndex} * (${itemBasis} + ${gap}px)))`;

  const trackStyle: CSSProperties = {
    gap: `${gap}px`,
    transform: translateValue,
    transition: "transform 400ms ease-in-out",
  };

  const isNavigationDisabled = totalItems <= effectiveItemsPerView;

  return (
    <div
      className="relative px-2 py-8"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-center text-[#0a7ea4]">
          {title}
        </h2>
      </div>

      <div className="relative" ref={containerRef}>
        <button
          onClick={navigatePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-gray-700 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={isNavigationDisabled}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* reduce padding lateral en móviles para no “comerse” el carrusel */}
        <div className="overflow-hidden px-6 sm:px-8 md:px-12">
          <div
            className="flex items-center will-change-transform"
            style={trackStyle}
            role="list"
            aria-label={`Carrusel de ${title.toLowerCase()}`}
          >
            {logos.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="shrink-0"
                style={{ flexBasis: itemBasis }}
                role="listitem"
              >
                <div className="grid place-items-center p-4">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width || 700}
                    height={logo.height || 200}
                    className="h-14 sm:h-16 md:h-24 object-contain"
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 360px, 700px"
                    priority={index < effectiveItemsPerView}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={navigateNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-gray-700 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={isNavigationDisabled}
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export const PartnersSection = () => {
  const organizer: LogoAsset = {
    src: "/img/logos/suda.webp",
    alt: "Tecnológico Sudamericano",
    width: 500,
    height: 150,
  };

  const sponsors: LogoAsset[] = [
    {
      src: "/img/logos/Caces.png",
      alt: "Consejo de Aseguramiento de la Calidad de la Educación Superior - CACES",
      width: 500,
      height: 150,
    },
  ];

  const coOrganizers: LogoAsset[] = [
    {
      src: "/img/logos/tecnoecuatoriano.webp",
      alt: "Tecnoecuatoriano",
      width: 700,
      height: 200,
    },
    {
      src: "/img/logos/unl.webp",
      alt: "Universidad Nacional de Loja",
      width: 700,
      height: 200,
    },
    {
      src: "/img/logos/istamazonico.webp",
      alt: "Instituto Amazonico",
      width: 700,
      height: 200,
    },
    { src: "/img/logos/apsybi.webp", alt: "apsybi", width: 700, height: 200 },
    {
      src: "/img/logos/REDISUR.webp",
      alt: "Reditsur",
      width: 700,
      height: 200,
    },
    {
      src: "/img/logos/conservatorio.webp",
      alt: "Conservatorio",
      width: 700,
      height: 200,
    },
    {
      src: "/img/logos/UTPL.webp",
      alt: "Universidad Tecnica Particular de Loja",
      width: 700,
      height: 200,
    },
    {
      src: "/img/logos/itsup.webp",
      alt: "Instituto Tecnológico Superior Universitario Portoviejo - ITSUP",
      width: 700,
      height: 200,
    },
    {
      src: "/img/logos/tecnopichincha.webp",
      alt: "Tecnologico Universitario Pichincha",
      width: 700,
      height: 200,
    },
    {
      src: "/img/logos/istdab.webp",
      alt: "Instituto Superior Tecnológico DAB - ISTDAB",
      width: 700,
      height: 200,
    },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Organizador */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0a7ea4]">
                ORGANIZADOR
              </h3>
            </div>
            <div className="flex justify-start">
              <div className="relative h-16 sm:h-20 md:h-28 w-[260px] sm:w-[380px] md:w-[520px]">
                <Image
                  src={organizer.src}
                  alt={organizer.alt}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width:640px) 260px, (max-width:1024px) 380px, 520px"
                />
              </div>
            </div>
          </div>

          {/* Sponsor */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0a7ea4]">
                SPONSORING
              </h3>
            </div>
            <div className="flex justify-start">
              {sponsors.map((s) => (
                <div
                  key={s.alt}
                  className="relative h-16 sm:h-20 md:h-28 w-[260px] sm:w-[380px] md:w-[520px]"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width:640px) 260px, (max-width:1024px) 380px, 520px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* divisor */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#0a7ea4] to-transparent opacity-40"></div>
        </div>

        {/* Co-organizadores responsivo */}
        <CarruselMulti
          title="COORGANIZADORES"
          logos={coOrganizers}
          gap={20}
          autoplayInterval={3500}
          responsive={{ base: 1, sm: 2, md: 3 }}
        />
      </div>
    </section>
  );
};
