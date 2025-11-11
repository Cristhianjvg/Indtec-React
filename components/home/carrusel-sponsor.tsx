"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type LogoAsset = {
  src: string;
  alt: string;
};

interface CarouselMultiProps {
  title: string;
  logos: LogoAsset[];
  autoplayInterval?: number | null;
}

export default function CarruselSponsor({
  title,
  logos,
  autoplayInterval = 3000,
}: CarouselMultiProps) {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState(0); // itemWidth + gap
  const [visible, setVisible] = useState(1);
  const total = logos.length;

  // mide ancho de ítem y gap computado por CSS para calcular step y visibles
  const measure = () => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const firstItem = track.querySelector<HTMLLIElement>("li");
    if (!firstItem) return;

    const itemW = firstItem.getBoundingClientRect().width;
    const cs = getComputedStyle(track);
    const gap = parseFloat(cs.columnGap || "0");

    const stepPx = itemW + gap;
    const visibleCount = Math.max(
      1,
      Math.round((viewport.clientWidth + gap) / stepPx)
    );

    setStep(stepPx);
    setVisible(visibleCount);
  };

  // aplica el translate solo en cliente
  const applyTransform = useCallback(
    (i: number) => {
      if (!trackRef.current) return;
      trackRef.current.style.transform = `translate3d(${-i * step}px,0,0)`;
      trackRef.current.style.transition = "transform 400ms ease-in-out";
    },
    [step]
  );
  useEffect(() => {
    setReady(true);
    measure();
    // primer pintado sin animación
    requestAnimationFrame(() => {
      const track = trackRef.current;
      if (track) {
        track.style.transition = "none";
        track.style.transform = `translate3d(${-index * step}px, 0, 0)`;
        // habilita la transición para siguientes movimientos
        requestAnimationFrame(() => {
          if (track) track.style.transition = "transform 400ms ease-in-out";
        });
      }
    });

    const onResize = () => {
      // const prevVisible = visible;
      measure();
      // reencuadra el índice si cambia el número de visibles
      requestAnimationFrame(() => {
        const maxIdx = Math.max(0, total - visible);
        setIndex((i) => Math.min(i, maxIdx));
        applyTransform(Math.min(index, maxIdx));
      });
    };

    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // mueve cuando cambie index o medida
  useEffect(() => {
    if (!ready || step === 0) return;
    applyTransform(index);
  }, [ready, step, index, applyTransform]);

  // autoplay
  useEffect(() => {
    if (!ready || !autoplayInterval || total <= visible) return;
    const id = setInterval(() => {
      setIndex((i) => {
        const maxIdx = Math.max(0, total - visible);
        return i >= maxIdx ? 0 : i + 1;
      });
    }, autoplayInterval);
    return () => clearInterval(id);
  }, [ready, autoplayInterval, total, visible]);

  const maxIndex = Math.max(0, total - visible);
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const navDisabled = total <= visible;

  return (
    <div className="relative px-3 sm:px-6 md:px-8 py-8">
      {/* Título */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0a7ea4]">
          {title}
        </h2>
      </div>

      <div className="relative">
        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-gray-200 hover:bg-white/10 rounded transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={navDisabled}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Viewport */}
        <div
          ref={viewportRef}
          className="overflow-hidden px-8 sm:px-10 md:px-12"
        >
          {/* Track: gap vía CSS para que SSR == cliente */}
          <ul
            ref={trackRef}
            role="list"
            aria-label={`Carrusel de ${title.toLowerCase()}`}
            className="flex items-center gap-10 will-change-transform"
            suppressHydrationWarning
          >
            {logos.map((logo, idx) => (
              <li
                key={`${logo.src}-${idx}`}
                role="listitem"
                // layout responsivo puramente en CSS. Sin cálculos en render.
                className="shrink-0 basis-1/2 md:basis-1/3 xl:basis-1/4"
              >
                <div className="relative w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-28">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    // Atributos estables en SSR/cliente
                    loading="lazy"
                    priority={false}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-gray-200 hover:bg-white/10 rounded transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={navDisabled}
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
