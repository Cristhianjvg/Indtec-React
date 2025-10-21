"use client";
import { useEffect, useRef, useState } from "react";

export function InfoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("innotec");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (
        containerTop <= 0 &&
        containerTop > -(containerHeight - windowHeight)
      ) {
        const progress =
          Math.abs(containerTop) / (containerHeight - windowHeight);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      } else if (containerTop > 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    innotec: {
      paragraphs: [
        "Sed ipsum placerat commodo elementum Donec amet, placerat elementum id Vestibulum ullamcorper vitae amet, sapien ex placerat. non. Cras lobortis, quis Nam non",
        "vitae quam amet, efficitur. consectetur elementum efficitur. sapien non odio Morbi ex nec id malesuada eget elit. maximus laoreet id vitae Donec gravida nisl.",
        "sollicitudin. eu volutpat Vestibulum Donec eget faucibus venenatis Praesent. quam adipiscing viverra tincidunt nulla. placerat Donec scelerisque est. non non.",
      ],
    },
    congreso: {
      paragraphs: [
        "El Congreso Internacional de Investigación y Desarrollo Tecnológico es un espacio de encuentro para investigadores, académicos y profesionales.",
        "Durante tres días, expertos nacionales e internacionales presentarán sus trabajos de investigación, participarán en mesas redondas y talleres especializados.",
        "Este evento busca promover la innovación, el desarrollo tecnológico y la transferencia de conocimiento entre la academia y la industria.",
      ],
    },
    caces: {
      paragraphs: [
        "El Consejo de Aseguramiento de la Calidad de la Educación Superior (CACES) es el organismo público técnico.",
        "Encargado de normar, regular y coordinar el Sistema de Aseguramiento de la Calidad de la Educación Superior.",
        "CACES garantiza la calidad de las instituciones de educación superior mediante procesos de evaluación y acreditación.",
      ],
    },
  };

  const contentFull = {
    innotec: {
      paragraphs: [
        "Sed ipsum placerat commodo elementum Donec amet, placerat elementum id Vestibulum ullamcorper vitae amet, sapien ex placerat. non. Cras lobortis, quis Nam non",
        "vitae quam amet, efficitur. consectetur elementum efficitur. sapien non odio Morbi ex nec id malesuada eget elit. maximus laoreet id vitae Donec gravida nisl.",
        "sollicitudin. eu volutpat Vestibulum Donec eget faucibus venenatis Praesent. quam adipiscing viverra tincidunt nulla. placerat Donec scelerisque est. non non.",
        "tincidunt eget odio nibh tempor Nullam nulla, varius nisi malesuada maximus lacus, nec lacus Cras ex. fringilla turpis vehicula, amet, placerat. luctus felis,",
        "vitae quam amet, efficitur. consectetur elementum efficitur. sapien non odio Morbi ex nec id malesuada eget elit. maximus laoreet id vitae Donec gravida nisl.",
      ],
    },
    congreso: {
      paragraphs: [
        "El Congreso Internacional de Investigación y Desarrollo Tecnológico es un espacio de encuentro para investigadores, académicos y profesionales.",
        "Durante tres días, expertos nacionales e internacionales presentarán sus trabajos de investigación, participarán en mesas redondas y talleres especializados.",
        "Este evento busca promover la innovación, el desarrollo tecnológico y la transferencia de conocimiento entre la academia y la industria.",
        "Fomentando el intercambio de ideas y la colaboración entre instituciones para contribuir al avance científico.",
        "El congreso representa una oportunidad única para establecer redes de colaboración y conocer las últimas tendencias en investigación.",
      ],
    },
    caces: {
      paragraphs: [
        "El Consejo de Aseguramiento de la Calidad de la Educación Superior (CACES) es el organismo público técnico.",
        "Encargado de normar, regular y coordinar el Sistema de Aseguramiento de la Calidad de la Educación Superior.",
        "CACES garantiza la calidad de las instituciones de educación superior mediante procesos de evaluación y acreditación.",
        "Su objetivo es promover la excelencia académica y el mejoramiento continuo de la educación superior en el país.",
        "Trabaja en conjunto con instituciones educativas para elevar los estándares de calidad educativa.",
      ],
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0a2540] text-white"
      style={{ height: "2100px" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Imagen con scroll interno */}
          <div
            ref={imageRef}
            className="w-full lg:w-[50%] h-[40vh] lg:h-full relative overflow-hidden order-1 lg:order-1"
          >
            <div
              className="absolute top-0 left-0 w-full transition-transform duration-100 ease-out"
              style={{
                transform: `translateY(-${
                  scrollProgress * (2400 - window.innerHeight)
                }px)`,
              }}
            >
              <img
                src="/img/inDTecCollage.png"
                alt="Congreso InnoTec"
                className="w-full h-[2400px] object-cover"
              />
            </div>
          </div>

          {/* Contenido derecho */}
          <div className="w-full lg:w-[50%] flex items-center justify-center px-5 sm:px-8 md:px-12 py-6 lg:py-0 order-2 lg:order-2">
            <div className="w-full max-w-xl">
              {/* Pestañas con separadores */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2 mb-5 lg:mb-12">
                <button
                  onClick={() => setActiveTab("innotec")}
                  className={`text-sm sm:text-base lg:text-lg font-semibold transition-colors whitespace-nowrap ${
                    activeTab === "innotec"
                      ? "text-[#ff6b35]"
                      : "text-[#4a9fd8] hover:text-[#ff6b35]"
                  }`}
                >
                  ¿Qué es InDTec?
                </button>

                <div className="w-px h-6 bg-[#4a9fd8]"></div>

                <button
                  onClick={() => setActiveTab("congreso")}
                  className={`text-sm sm:text-base lg:text-lg font-semibold transition-colors whitespace-nowrap ${
                    activeTab === "congreso"
                      ? "text-[#ff6b35]"
                      : "text-[#4a9fd8] hover:text-[#ff6b35]"
                  }`}
                >
                  Sobre el Congreso
                </button>

                <div className="w-px h-6 bg-[#4a9fd8]"></div>

                <button
                  onClick={() => setActiveTab("caces")}
                  className={`text-sm sm:text-base lg:text-lg font-semibold transition-colors whitespace-nowrap ${
                    activeTab === "caces"
                      ? "text-[#ff6b35]"
                      : "text-[#4a9fd8] hover:text-[#ff6b35]"
                  }`}
                >
                  CACES
                </button>
              </div>

              {/* Contenido - Versión móvil (resumida) */}
              <div className="space-y-3 lg:hidden">
                {content[activeTab as keyof typeof content].paragraphs.map(
                  (paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-300 leading-relaxed text-xs sm:text-sm"
                    >
                      {paragraph}
                    </p>
                  )
                )}
              </div>

              {/* Contenido - Versión desktop (completa) */}
              <div className="hidden lg:block space-y-6">
                {contentFull[
                  activeTab as keyof typeof contentFull
                ].paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-300 leading-relaxed text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Botón */}
              <div className="mt-5 lg:mt-10">
                <button className="bg-transparent border-2 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white px-5 sm:px-8 py-2 sm:py-2.5 rounded-md transition-colors font-semibold text-xs sm:text-sm lg:text-base inline-flex items-center gap-2">
                  Saber más
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
