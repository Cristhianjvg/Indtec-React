"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LogoAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface CarouselMultiProps {
  title: string;
  logos: LogoAsset[];
  itemsPerView?: number; // seguirá siendo el valor por defecto para desktop
  gap?: number;
  autoplayInterval?: number | null;
}

const useResponsivePerView = (desktopPerView: number) => {
  const [w, setW] = useState<number>(() =>
    typeof window === "undefined" ? 1280 : window.innerWidth
  );

  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // xs:1, sm/md:2, lg+:desktopPerView
  return useMemo(() => {
    if (w < 640) return 1;
    if (w < 1024) return Math.min(2, desktopPerView);
    return desktopPerView;
  }, [w, desktopPerView]);
};

const CarruselSponsor = ({
  title,
  logos,
  itemsPerView = 3,
  gap = 32,
  autoplayInterval = 3000,
}: CarouselMultiProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const perView = useResponsivePerView(itemsPerView);

  const totalItems = logos.length;
  const maxIndex = Math.max(0, totalItems - perView);

  // autoplay
  useEffect(() => {
    if (!totalItems || !autoplayInterval || totalItems <= perView) return;
    const id = setInterval(() => {
      setCurrentIndex((c) => (c >= maxIndex ? 0 : c + 1));
    }, autoplayInterval);
    return () => clearInterval(id);
  }, [autoplayInterval, maxIndex, totalItems, perView]);

  const navigatePrevious = () =>
    setCurrentIndex((c) => (c <= 0 ? maxIndex : c - 1));

  const navigateNext = () =>
    setCurrentIndex((c) => (c >= maxIndex ? 0 : c + 1));

  // gap responsivo
  const effectiveGap = useMemo(() => {
    // 16 en móvil, 24 en sm, el prop original en md+
    if (typeof window === "undefined") return gap;
    const w = window.innerWidth;
    if (w < 640) return 16;
    if (w < 768) return 24;
    return gap;
  }, [gap]);

  const itemBasis = `calc((100% - ${
    (perView - 1) * effectiveGap
  }px) / ${perView})`;
  const translateValue = `translateX(calc(-${currentIndex} * (${itemBasis} + ${effectiveGap}px)))`;

  const trackStyle: CSSProperties = {
    gap: `${effectiveGap}px`,
    transform: translateValue,
    transition: "transform 400ms ease-in-out",
  };

  const isNavigationDisabled = totalItems <= perView;

  return (
    <div className="relative px-3 sm:px-6 md:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0a7ea4]">
          {title}
        </h2>
      </div>

      {/* Contenedor */}
      <div className="relative">
        {/* Prev */}
        <button
          onClick={navigatePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2
                     text-gray-400 hover:text-gray-200 hover:bg-white/10 rounded
                     transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={isNavigationDisabled}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Track */}
        <div className="overflow-hidden px-8 sm:px-10 md:px-12">
          <div
            className="flex items-center"
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
                {/* Caja uniforme de logo */}
                <div className="relative w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-28 grid place-items-center rounded">
                  {/* Image con fill para uniformidad */}
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="
                      (max-width: 640px) 80vw,
                      (max-width: 1024px) 40vw,
                      25vw"
                    priority={index < perView}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={navigateNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2
                     text-gray-400 hover:text-gray-200 hover:bg-white/10 rounded
                     transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={isNavigationDisabled}
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CarruselSponsor;
