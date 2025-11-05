"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/img/carrusel1.webp",
    title: "INNOVACIÓN",
    subtitle: "nace de ideas y",
    subtitleHighlight: "transforma realidades",
    subtitleEnd: "sociales y tecnológicas",
  },
  {
    image: "/img/carrusel2.webp",
    title: "INVESTIGACIÓN",
    subtitle: "desarrollo científico y",
    subtitleHighlight: "avances tecnológicos",
    subtitleEnd: "para el futuro",
  },
  {
    image: "/img/carrusel3.webp",
    title: "DESARROLLO",
    subtitle: "construyendo el",
    subtitleHighlight: "conocimiento del mañana",
    subtitleEnd: "con tecnología",
  },
];

export function CarruselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[580px] sm:h-[680px] md:h-[780px] bg-[#0a2540] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="relative container mx-auto h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 md:mb-6 text-balance tracking-wider text-gray-300">
            {slides[currentSlide].title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-100 leading-relaxed px-4">
            {slides[currentSlide].subtitle}{" "}
            <span className="text-[#ff6b35] font-semibold">
              {slides[currentSlide].subtitleHighlight}
            </span>{" "}
            {slides[currentSlide].subtitleEnd}
          </p>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-8 w-8 md:h-12 md:w-12"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-8 md:w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-8 w-8 md:h-12 md:w-12"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-8 md:w-8" />
      </Button>

      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 md:h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-6 md:w-8 bg-[#ff6b35]"
                : "w-1.5 md:w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
