"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Logo = {
  src: string;
  alt: string;
};

type CarouselSingleProps = {
  title: string;
  logos: Logo[];
  /** Intervalo de autoplay en ms. Si es 0 o null, no hay autoplay */
  autoplayMs?: number | null;
};

function CarouselSingle({
  title,
  logos,
  autoplayMs = 4000,
}: CarouselSingleProps) {
  const [idx, setIdx] = useState(0);
  const total = logos.length;

  // Evita errores si no hay logos
  useEffect(() => {
    if (total === 0) return;
    if (!autoplayMs) return;

    const t = setInterval(() => setIdx((i) => (i + 1) % total), autoplayMs);
    return () => clearInterval(t);
  }, [autoplayMs, total]);

  const prev = () => setIdx((i) => (total === 0 ? 0 : (i - 1 + total) % total));
  const next = () => setIdx((i) => (total === 0 ? 0 : (i + 1) % total));

  const current = logos[idx] as Logo | undefined;

  return (
    <div className="relative">
      <p className="mb-3 text-[11px] tracking-[0.2em] text-gray-600 uppercase select-none">
        {title}
      </p>

      <div className="relative flex items-center justify-center">
        <button
          onClick={prev}
          className="p-2 text-gray-500 hover:text-gray-800 absolute left-0 disabled:opacity-40"
          disabled={total <= 1}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {current ? (
          <Image
            src={current.src}
            alt={current.alt}
            width={700}
            height={200}
            className="h-24 sm:h-28 object-contain"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 480px, 700px"
            priority={false}
          />
        ) : (
          <div className="h-24 sm:h-28 grid place-items-center text-xs text-gray-500">
            Sin logos
          </div>
        )}

        <button
          onClick={next}
          className="p-2 text-gray-500 hover:text-gray-800 absolute right-0 disabled:opacity-40"
          disabled={total <= 1}
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

type CarouselMultiProps = {
  title: string;
  logos: Logo[];
  itemsPerView?: number;
  gap?: number;
  /** Intervalo de autoplay en ms. Si es 0 o null, no hay autoplay */
  autoplayMs?: number | null;
};

function CarouselMulti({
  title,
  logos,
  itemsPerView = 2,
  gap = 28,
  autoplayMs = 3000,
}: CarouselMultiProps) {
  const [idx, setIdx] = useState(0);
  const total = logos.length;
  const maxIdx = Math.max(0, total - itemsPerView);

  useEffect(() => {
    if (total === 0) return;
    if (!autoplayMs) return;

    const t = setInterval(
      () => setIdx((i) => (i >= maxIdx ? 0 : i + 1)),
      autoplayMs
    );
    return () => clearInterval(t);
  }, [autoplayMs, maxIdx, total]);

  const prev = () => setIdx((i) => (i <= 0 ? maxIdx : i - 1));
  const next = () => setIdx((i) => (i >= maxIdx ? 0 : i + 1));

  const basis = `calc((100% - ${
    (itemsPerView - 1) * gap
  }px) / ${itemsPerView})`;
  const translate = `translateX(calc(-${idx} * (${basis} + ${gap}px)))`;

  const trackStyle: CSSProperties = {
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
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-500 hover:text-gray-800 disabled:opacity-40"
          disabled={total <= itemsPerView}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="overflow-hidden">
          <div className="flex items-center" style={trackStyle}>
            {logos.map((l: Logo, i: number) => (
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
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 400px, 700px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-500 hover:text-gray-800 disabled:opacity-40"
          disabled={total <= itemsPerView}
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export function PartnersSection() {
  const organizadores: Logo[] = [
    { src: "/img/logos/Caces.png", alt: "CACES" },
    { src: "/img/logos/suda.webp", alt: "ISTS" },
  ];

  const coorganizadores: Logo[] = [
    { src: "/img/logos/itsdab.webp", alt: "ISTDAB" },
    { src: "/img/logos/itsup.png", alt: "Tecnoecuatoriano" },
    { src: "/img/logos/Caces.png", alt: "Partner 3" },
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
