"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function InfoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("innotec");
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh();
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;

      if (vh === 0) return;

      if (containerTop <= 0 && containerTop > -(containerHeight - vh)) {
        const progress = Math.abs(containerTop) / (containerHeight - vh);
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
  }, [vh]);

  const content = {
    innotec: {
      paragraphs: [
        "El Congreso Internacional de Tecnología, Investigación, Desarrollo e Innovación (InDTec) 2025, en su tercera edición, es un evento académico de alto nivel, orientado a la divulgación científica y tecnológica, la innovación y la transferencia de conocimiento a nivel nacional e internacional. Es organizado por el Instituto Superior Tecnológico Sudamericano (ISTS) de Loja, Ecuador, institución líder en investigación en la Zona 7 del país.",
        "El evento está dirigido a universidades, institutos superiores tecnológicos, conservatorios de música y artes, así como a investigadores independientes. Sus principales objetivos son difundir resultados de investigación, fomentar publicaciones en revistas indexadas como Latindex y Scopus, fortalecer la capacidad de absorción tecnológica y promover la vinculación entre la academia, el sector productivo y la sociedad.",
        "En su edición de 2023, InDTec reunió a 900 estudiantes, contó con el aval del CACES, la participación de 4 institutos coorganizadores y recibió 67 artículos sometidos a revisión por pares. En 2024, participaron 1.500 estudiantes, se mantuvo el aval del CACES, se incorporaron 10 instituciones coorganizadoras, además de auspiciantes y ponentes provenientes de México, Colombia, Perú y Brasil. Ese año se recibieron 70 artículos, de los cuales 30 fueron publicados en revistas indexadas.",
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
        "El Congreso Internacional de Tecnología, Investigación, Desarrollo e Innovación (InDTec) 2025, en su tercera edición, es un evento académico de alto nivel, orientado a la divulgación científica y tecnológica, la innovación y la transferencia de conocimiento a nivel nacional e internacional. Es organizado por el Instituto Superior Tecnológico Sudamericano (ISTS) de Loja, Ecuador, institución líder en investigación en la Zona 7 del país.",
        "El evento está dirigido a universidades, institutos superiores tecnológicos, conservatorios de música y artes, así como a investigadores independientes. Sus principales objetivos son difundir resultados de investigación, fomentar publicaciones en revistas indexadas como Latindex y Scopus, fortalecer la capacidad de absorción tecnológica y promover la vinculación entre la academia, el sector productivo y la sociedad.",
        "En su edición de 2023, InDTec reunió a 900 estudiantes, contó con el aval del CACES, la participación de 4 institutos coorganizadores y recibió 67 artículos sometidos a revisión por pares. En 2024, participaron 1.500 estudiantes, se mantuvo el aval del CACES, se incorporaron 10 instituciones coorganizadoras, además de auspiciantes y ponentes provenientes de México, Colombia, Perú y Brasil. Ese año se recibieron 70 artículos, de los cuales 30 fueron publicados en revistas indexadas.",
      ],
    },
    congreso: {
      paragraphs: [
        "El III Congreso Internacional de Investigación Científica InDTec 2025, organizado por el Instituto Superior Tecnológico Sudamericano de Loja, se celebrará los días 27 y 28 de noviembre en modalidad híbrida.",
        "Este evento se consolida como un medio de divulgación científica de alto nivel, orientado a la presentación de investigaciones, el intercambio académico y la proyección de avances científicos y tecnológicos. Su propósito es fomentar la publicación en revistas indexadas como Latindex y Scopus, fortaleciendo la transferencia de conocimiento y el vínculo entre academia, sector productivo y sociedad. InDTec 2025 constituye una plataforma clave para el impulso de la investigación regional e internacional.",
      ],
    },
    caces: {
      paragraphs: [
        "El Congreso InDTec 2025, en su presente edición, cuenta con el respaldo del Consejo de Aseguramiento de la Calidad de la Educación Superior (CACES),", 
        "amparado por la resolución GCE‑UCS‑REG‑02‑2025‑001. Este aval institucional certifica la excelencia académica del evento y garantiza su alineación con los estándares del sistema de educación superior",
        "Su apoyo refuerza el carácter del congreso como medio de divulgación científica y como plataforma de impulso a la investigación regional e internacional."
      ],
    },
  };

  const getButtonLink = () => {
    switch (activeTab) {
      case "innotec":
        return "/congreso";
      case "congreso":
        return "/congreso";
      default:
        return "/congreso";
    }
  };

  const isExternalLink = () => {
    return activeTab === "caces";
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
                transform:
                  vh > 0
                    ? `translateY(-${scrollProgress * (2400 - vh)}px)`
                    : undefined,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/inDTecCollage.webp"
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

              <div className="mt-5 lg:mt-10">
                {isExternalLink() ? (
                  <a
                    href={getButtonLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white px-5 sm:px-8 py-2 sm:py-2.5 rounded-md transition-colors font-semibold text-xs sm:text-sm lg:text-base inline-flex items-center gap-2"
                  >
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
                  </a>
                ) : (
                  <Link
                    href={getButtonLink()}
                    className="bg-transparent border-2 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white px-5 sm:px-8 py-2 sm:py-2.5 rounded-md transition-colors font-semibold text-xs sm:text-sm lg:text-base inline-flex items-center gap-2"
                  >
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
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
