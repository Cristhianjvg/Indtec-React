"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CarouselSingle({ title, logos, autoplayMs = 4000 }: any) {
  const [idx, setIdx] = useState(0);
  const total = logos.length;

  useEffect(() => {
    if (!autoplayMs) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % total), autoplayMs);
    return () => clearInterval(t);
  }, [autoplayMs, total]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div className="relative">
      <p className="mb-3 text-[11px] tracking-[0.2em] text-gray-600 uppercase select-none">
        {title}
      </p>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prev}
          className="p-2 text-gray-500 hover:text-gray-800 absolute left-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <Image
          src={logos[idx].src}
          alt={logos[idx].alt}
          width={700}
          height={200}
          className="h-24 sm:h-28 object-contain"
        />
        <button
          onClick={next}
          className="p-2 text-gray-500 hover:text-gray-800 absolute right-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function CarouselMulti({
  title,
  logos,
  itemsPerView = 2,
  gap = 28,
  autoplayMs = 3000,
}: any) {
  const [idx, setIdx] = useState(0);
  const total = logos.length;
  const maxIdx = Math.max(0, total - itemsPerView);

  useEffect(() => {
    if (!autoplayMs) return;
    const t = setInterval(
      () => setIdx((i) => (i >= maxIdx ? 0 : i + 1)),
      autoplayMs
    );
    return () => clearInterval(t);
  }, [autoplayMs, maxIdx]);

  const prev = () => setIdx((i) => (i <= 0 ? maxIdx : i - 1));
  const next = () => setIdx((i) => (i >= maxIdx ? 0 : i + 1));

  const basis = `calc((100% - ${
    (itemsPerView - 1) * gap
  }px) / ${itemsPerView})`;
  const translate = `translateX(calc(-${idx} * (${basis} + ${gap}px)))`;

  const trackStyle: React.CSSProperties = {
    gap: `${gap}px`,
    transform: translate,
    transition: "transform 400ms ease",
  };

  return (
    <div className="relative">
      <p className="mb-3 text-[11px] tracking-[0.2em] text-gray-600 uppercase select-none">
        {title}
      </p>
      <div className="relative">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-500 hover:text-gray-800"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="overflow-hidden">
          <div className="flex items-center" style={trackStyle}>
            {logos.map((l: any, i: number) => (
              <div
                key={`${l.src}-${i}`}
                className="shrink-0"
                style={{ flexBasis: basis }}
              >
                <div className="grid place-items-center">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={700}
                    height={200}
                    className="h-20 sm:h-24 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-500 hover:text-gray-800"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export function PartnersSection() {
  // Ejemplos: reemplaza los src por tus logos reales
  const organizadores = [
    { src: "/img/logos/Caces.png", alt: "CACES" },
    { src: "/img/logos/suda.webp", alt: "ISTS" },
  ];

  const coorganizadores = [
    { src: "/img/logos/itsdab.webp", alt: "ISTDAB" },
    { src: "/img/logos/itsup.png", alt: "Tecnoecuatoriano" },
    { src: "/img/logos/Caces.png", alt: "Partner 3" },
    { src: "/img/logos/Caces.png", alt: "Partner 4" },
    { src: "/img/logos/Caces.png", alt: "Partner 5" },
  ];

  return (
    <section className="py-14 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-nowrap md:items-start md:gap-8">
          <div className="w-full md:w-5/12">
            <CarouselSingle
              title="Organizador & Sponsoring"
              logos={organizadores}
            />
          </div>
          <div className="hidden md:block w-px self-stretch bg-gray-300" />
          <div className="w-full md:w-7/12">
            <CarouselMulti
              title="Coorganizadores"
              logos={coorganizadores}
              itemsPerView={2}
              gap={28}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Ejemplos: reemplaza los src por tus logos reales
const organizadores = [
  { src: "/img/logos/Caces.png", alt: "CACES" },
  { src: "/img/logos/suda.webp", alt: "ISTS" },
];

const coorganizadores = [
  { src: "/img/logos/itsdab.webp", alt: "ISTDAB" },
  { src: "/img/logos/itsup.png", alt: "Tecnoecuatoriano" },
  { src: "/img/logos/Caces.png", alt: "Partner 3" },
  { src: "/img/logos/Caces.png", alt: "Partner 4" },
  { src: "/img/logos/Caces.png", alt: "Partner 5" },
];
