"use client";
import { useEffect, useRef, useState } from "react";

export function InfoSection() {
  const [activeTab, setActiveTab] = useState("innotec");

  useEffect(() => {
    const applyParallax = () => {
      if (window.innerWidth < 1024) return;

      const section = document.getElementById("info-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      let progress = 0;
      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        progress = Math.abs(rect.top) / (sectionHeight - viewportHeight);
        progress = Math.max(0, Math.min(1, progress));
      } else if (rect.bottom < viewportHeight) {
        progress = 1;
      }

      const img = document.getElementById("parallax-image");
      if (img) {
        img.style.transform = `translateY(${progress * -100}vh)`;
      }
    };

    const handleScroll = () => {
      applyParallax();
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        const img = document.getElementById("parallax-image");
        if (img) {
          img.style.transform = "none";
        }
      } else {
        applyParallax();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = {
    innotec: {
      paragraphs: [
        "El III Congreso Internacional de Investigación Científica InDTec 2025, es un evento académico de alto nivel, orientado a la divulgación científica y tecnológica, la innovación y la transferencia de conocimiento a nivel nacional e internacional. Es organizado por el Instituto Superior Tecnológico Sudamericano (ISTS) de Loja, Ecuador, institución líder en investigación en la Zona 7 del país.",
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
        "El III Congreso Internacional de Investigación Científica InDTec 2025, es un evento académico de alto nivel, orientado a la divulgación científica y tecnológica, la innovación y la transferencia de conocimiento a nivel nacional e internacional. Es organizado por el Instituto Superior Tecnológico Sudamericano (ISTS) de Loja, Ecuador, institución líder en investigación en la Zona 7 del país.",
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
        "El III Congreso Internacional de Investigación Científica InDTec 2025, en su presente edición, cuenta con el respaldo del Consejo de Aseguramiento de la Calidad de la Educación Superior (CACES), amparado por la resolución GCE-UCS-REG-02-2025-001. Este aval institucional certifica la excelencia académica del evento y garantiza su alineación con los estándares del sistema de educación superior",
        "Su apoyo refuerza el carácter del congreso como medio de divulgación científica y como plataforma de impulso a la investigación regional e internacional.",
      ],
    },
  };

  return (
    <section
      id="info-section"
      className="relative lg:h-[200vh] h-auto bg-[#0a2540] text-white"
    >
      <div className="lg:sticky lg:top-0 lg:h-screen lg:flex">
        {/* Imagen - arriba en móvil, izquierda en desktop */}
        <div className="lg:w-1/2 w-full lg:h-screen h-[50vh] overflow-hidden">
          <img
            id="parallax-image"
            src="/img/inDTecCollage.webp"
            alt="Congreso InnoTec"
            className="w-full lg:h-[200vh] h-full object-cover transition-transform duration-100 ease-out"
          />
        </div>

        {/* Contenido derecho - abajo en móvil, derecha en desktop */}
        <div className="lg:w-1/2 w-full lg:h-screen min-h-[50vh] flex items-center justify-center px-5 sm:px-8 md:px-12 py-12">
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
          </div>
        </div>
      </div>
    </section>
  );
}
