"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText, Mic } from "lucide-react";

export function EnviosTrabajoSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#ff6b35] tracking-wide">
          ENVÍOS DE TRABAJO
        </h2>

        {/* Dos columnas */}
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 relative">
          {/* Col 1 */}
          <div className="flex flex-col items-center gap-3 py-8">
            <div className="rounded-full bg-white p-4">
              <FileText className="w-10 h-10 text-[#1e5a7d]" />
            </div>
            <h3 className="text-[#1e5a7d] text-xl md:text-2xl font-semibold">
              Artículo Científico
            </h3>

            <Button
              asChild
              className="rounded-xl h-9 px-4 text-[13px] bg-white hover:bg-[#ff7f52] hover:text-white text-[#ff7f52] border border-[#ff7f52] shadow-sm"
            >
              <a href="/envios/articulo">Envío de trabajos</a>
            </Button>
          </div>

          {/* Divisor vertical (solo desktop) */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 border-l border-dashed border-slate-300" />

          {/* Col 2 */}
          <div className="flex flex-col items-center gap-3 py-8">
            <div className="rounded-full bg-white p-4">
              <Mic className="w-10 h-10 text-[#1e5a7d]" />
            </div>
            <h3 className="text-[#1e5a7d] text-xl md:text-2xl font-semibold">
              Ponencias
            </h3>

            <Button
              asChild
              className="rounded-xl h-9 px-4 text-[13px] bg-white hover:bg-[#ff7f52] hover:text-white text-[#ff7f52] border border-[#ff7f52] shadow-sm"
            >
              <a href="/envios/ponencias">Envío de trabajos</a>
            </Button>
          </div>
        </div>

        {/* Separador horizontal */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="border-t border-dashed border-slate-300" />
        </div>

        {/* Logos y notas */}
        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Scopus */}
          <div className="flex flex-col items-center justify-end text-center gap-3 h-40">
            <div className="relative w-60 h-32">
              <Image
                src="/img/logos/scopus.png"
                alt="Scopus"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-slate-600 text-xs max-w-xs">
              Todos los artículos técnicos deben ser subidos a la plataforma
              SCOPUS.
            </p>
          </div>

          {/* Latindex */}
          <div className="flex flex-col items-center justify-end text-center gap-3 h-40">
            <div className="relative w-52 h-24">
              <Image
                src="/img/logos/latindex.png"
                alt="Latindex"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-slate-600 text-xs max-w-xs">
              Todos los artículos humanísticos deben ser subidos a la plataforma
              LATINDEX 2.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
