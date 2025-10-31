"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Props:
 * - src: ruta de la imagen alta (el collage).
 * - alt: texto alternativo.
 * - imgScale: qué tan alta es la imagen respecto al viewport dentro del marco sticky.
 *             1.8 = la imagen es 180% del alto del viewport (se recomienda entre 1.6 y 2).
 * - trackHeight: altura del “tramo” que activa el efecto (en vh). A mayor valor, más recorrido.
 */
export function StickyRevealImage({
  src,
  alt = "Collage",
  imgScale = 1.8,
  trackHeight = 220, // el contenedor total; el bloque visible no pasa de 100vh
}: {
  src: string;
  alt?: string;
  imgScale?: number;
  trackHeight?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Progreso 0 → 1 mientras el usuario atraviesa el “track”
      // El track mide trackHeight * vh y el sticky ocupa 1 * vh
      const trackPx = (trackHeight / 100) * vh;
      // const start = rect.top - (trackPx - vh); // cuando el sticky empieza a “pegarse”
      // const end = rect.top + rect.height - vh; // cuando deja de estar visible
      const raw = (vh - rect.top) / (trackPx - vh); // 0..1 durante el tramo central
      const p = Math.min(1, Math.max(0, raw));

      // Guardamos el progreso en una CSS var
      el.style.setProperty("--reveal", String(p));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [trackHeight]);

  // Cuánto “exceso” de altura tiene la imagen respecto al contenedor visible (100vh).
  // Eso determina cuánto se puede desplazar hacia arriba.
  const excessPercent = (imgScale - 1) * 100; // p.ej., 1.8 → 80%

  return (
    // El wrapper mide más que 100vh para que haya recorrido,
    // pero el bloque visible (sticky) NUNCA excede el viewport.
    <div
      ref={wrapRef}
      className="relative"
      style={{ height: `${trackHeight}vh` }} // tramo por el que se “revela”
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0a2540]">
        {/* Marco azul opcional */}
        <div className="mx-auto max-w-[620px] p-2 rounded-[28px] ring-2 ring-[#2bb3ff] bg-[#0b2a46]/60">
          <div className="relative overflow-hidden rounded-2xl h-[calc(100vh-2rem)] max-h-[780px] mx-auto">
            {/* La imagen es más alta que el contenedor (imgScale) y se traslada con el scroll */}
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                height: `${imgScale * 100}%`,
                transform: `translateY(calc(var(--reveal,0) * -${excessPercent}%))`,
              }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 620px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
