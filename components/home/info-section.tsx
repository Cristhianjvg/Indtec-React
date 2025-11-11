"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function InfoSection() {
  const [activeTab, setActiveTab] = useState<"innotec" | "congreso" | "caces">(
    "innotec"
  );

  const sectionRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const sectionTop = useRef(0);
  const sectionHeight = useRef(0);
  const viewportH = useRef(0);
  const ticking = useRef(false);
  const lastY = useRef(0);

  const recalc = () => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    sectionTop.current = window.scrollY + rect.top;
    sectionHeight.current = sectionRef.current.offsetHeight;
    viewportH.current = window.innerHeight;
  };

  const paint = () => {
    ticking.current = false;
    if (!imgRef.current) return;
    if (window.innerWidth < 1024) {
      imgRef.current.style.transform = "translate3d(0,0,0)";
      return;
    }

    const start = sectionTop.current;
    const end = start + sectionHeight.current - viewportH.current;
    const y = lastY.current;

    let p = 0;
    if (y <= start) p = 0;
    else if (y >= end) p = 1;
    else p = (y - start) / (end - start);

    const offset = -p * viewportH.current;
    imgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
  };

  const onScroll = () => {
    lastY.current = window.scrollY;
    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(paint);
    }
  };

  const onResize = () => {
    recalc();
    requestAnimationFrame(() => {
      lastY.current = window.scrollY;
      paint();
    });
  };

  useEffect(() => {
    recalc();
    lastY.current = window.scrollY;
    paint();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
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
        "El III Congreso Internacional de Investigación Científica InDTec 2025, en su presente edición, cuenta con el respaldo del Consejo de Aseguramiento de la Calidad de la Educación Superior (CACES), amparado por la resolución GCE-UCS-REG-02-2025-001. Este aval institucional certifica la excelencia académica del evento y garantiza su alineación con los estándares del sistema de educación superior.",
        "Su apoyo refuerza el carácter del congreso como medio de divulgación científica y como plataforma de impulso a la investigación regional e internacional.",
      ],
    },
  };

  return (
    <section
      id="info-section"
      ref={sectionRef}
      className="relative lg:h-[200vh] h-auto bg-[#0a2540] text-white"
      style={{ contain: "paint" }}
    >
      <div className="lg:sticky lg:top-0 lg:h-screen lg:flex">
        {/* Imagen */}
        <div className="lg:w-1/2 w-full lg:h-screen h-[50vh] overflow-hidden">
          <img
            id="parallax-image"
            ref={imgRef}
            src="/img/inDTecCollage.webp"
            alt="Congreso InnoTec"
            className="w-full lg:h-[200vh] h-full object-cover transition-transform ease-out"
            style={{ willChange: "transform" }}
          />
        </div>

        {/* Contenido */}
        <div className="lg:w-1/2 w-full lg:h-screen min-h-[50vh] flex items-center justify-center px-5 sm:px-8 md:px-12 py-12">
          <div className="w-full max-w-xl">
            {/* Tabs */}
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

              <div className="w-px h-6 bg-[#4a9fd8]" />

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

              <div className="w-px h-6 bg-[#4a9fd8]" />

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

            {/* Contenido móvil */}
            <div className="space-y-3 lg:hidden">
              {content[activeTab].paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-300 leading-relaxed text-xs sm:text-sm"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Contenido escritorio */}
            <div className="hidden lg:block space-y-6 min-h-[22rem]">
              {contentFull[activeTab].paragraphs.map((paragraph, i) => (
                <p key={i} className="text-gray-300 leading-relaxed text-base">
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
