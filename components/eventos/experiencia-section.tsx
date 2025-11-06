import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Experiencia() {
  return (
    <section className="py-0 bg-gray-50">
      <div className="flex flex-col md:flex-row max-w-full">
        {/* Image - takes 30% width on desktop */}
        <div className="relative h-64 md:h-80 lg:h-96 w-full md:w-[40%] flex-shrink-0">
          <Image
            src="/img/indtec2.webp"
            alt="Conferencia InDTec"
            fill
            className="object-cover"
          />
        </div>

        {/* Content - takes 70% width on desktop */}
        <div className="flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-12 md:py-16 text-center bg-gray-50 w-full md:w-[60%]">
          <h2
            className="
    text-[2rem] sm:text-[2.3rem] lg:text-[2.6rem]
    font-semibold leading-tight tracking-[-0.02em]
    text-[#11527c] mb-3
  "
          >
            ¿Listo para planificar tu experiencia en{" "}
            <br className="hidden sm:block" /> InDtec?
          </h2>

          <p className="text-[#1a1a1a] text-sm sm:text-base font-normal mb-8">
            Explora las conferencias talleres y espacios interactivos que te
            esperan
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              size="default"
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors bg-transparent"
            >
              Ver Agenda
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {/* <Button size="default" className="bg-primary hover:bg-primary/90">

              Descargar
              <Download className="ml-2 h-4 w-4" />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
