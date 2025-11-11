"use client";

import { useEffect, useState, type CSSProperties } from "react";
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
  // icon: React.ReactNode;
  logos: LogoAsset[];
  itemsPerView?: number;
  gap?: number;
  autoplayInterval?: number | null;
}

const CarruselMulti = ({
  title,
  // icon,
  logos,
  itemsPerView = 3,
  gap = 32,
  autoplayInterval = 3000,
}: CarruselMultiProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = logos.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Auto-advance carousel
  useEffect(() => {
    if (!totalItems || !autoplayInterval || totalItems <= itemsPerView) return;

    const interval = setInterval(
      () =>
        setCurrentIndex((current) => (current >= maxIndex ? 0 : current + 1)),
      autoplayInterval
    );
    return () => clearInterval(interval);
  }, [autoplayInterval, maxIndex, totalItems, itemsPerView]);

  const navigatePrevious = () =>
    setCurrentIndex((current) => (current <= 0 ? maxIndex : current - 1));

  const navigateNext = () =>
    setCurrentIndex((current) => (current >= maxIndex ? 0 : current + 1));

  // Calculate responsive dimensions
  const itemBasis = `calc((100% - ${
    (itemsPerView - 1) * gap
  }px) / ${itemsPerView})`;
  const translateValue = `translateX(calc(-${currentIndex} * (${itemBasis} + ${gap}px)))`;

  const trackStyle: CSSProperties = {
    gap: `${gap}px`,
    transform: translateValue,
    transition: "transform 400ms ease-in-out",
  };

  const isNavigationDisabled = totalItems <= itemsPerView;

  return (
    <div className="relative px-4 py-8">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {/* {icon} */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0a7ea4]">
          {title}
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={navigatePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 
                     text-gray-400 hover:text-gray-700 
                     transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={isNavigationDisabled}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden px-12">
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
                <div className="grid place-items-center p-4">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width || 700}
                    height={logo.height || 200}
                    className="h-16 sm:h-20 md:h-24 object-contain"
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 400px, 700px"
                    priority={index < 3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={navigateNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 
                     text-gray-400 hover:text-gray-700 
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

export const PartnersSection = () => {
  // Logo assets configuration - Ahora con dimensiones consistentes
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
      width: 500, // Mismo ancho que el organizador
      height: 150, // Misma altura que el organizador
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
    {
      src: "/img/logos/apsybi.webp",
      alt: "apsybi",
      width: 700,
      height: 200,
    },
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
        {/* Top Row: Organizer & Sponsors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Organizer Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              {/* <Crown className="h-6 w-6 text-[#0a7ea4]" /> */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#0a7ea4]">
                ORGANIZADOR
              </h3>
              {/* <Crown className="h-6 w-6 text-[#0a7ea4]" /> */}
            </div>
            <div className="flex justify-start">
              <div className="relative h-20 sm:h-24 md:h-28 w-[320px] sm:w-[420px] md:w-[520px]">
                <Image
                  src={organizer.src}
                  alt={organizer.alt}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width:640px) 320px, (max-width:1024px) 420px, 520px"
                />
              </div>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              {/* <Award className="h-6 w-6 text-[#0a7ea4]" /> */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#0a7ea4]">
                SPONSORING
              </h3>
              {/* <Award className="h-6 w-6 text-[#0a7ea4]" /> */}
            </div>
            <div className="flex justify-start">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.alt}
                  className="relative h-20 sm:h-24 md:h-28 w-[320px] sm:w-[420px] md:w-[520px]"
                >
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width:640px) 320px, (max-width:1024px) 420px, 520px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle Divider Line */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#0a7ea4] to-transparent opacity-40"></div>
        </div>

        {/* Co-organizers Carousel */}
        <CarruselMulti
          title="COORGANIZADORES"
          // icon={<Users className="h-6 w-6 text-[#0a7ea4]" />}
          logos={coOrganizers}
          itemsPerView={3}
          gap={40}
          autoplayInterval={3500}
        />
      </div>
    </section>
  );
};
