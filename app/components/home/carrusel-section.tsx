"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "img/abstract-technology-network-connections-blue-dark.jpg",
    title: "INNOVACIÓN",
    subtitle: "nace de ideas y",
    subtitleHighlight: "transforma realidades",
    subtitleEnd: "sociales y tecnológicas",
  },
  {
    image: "img/research-science-laboratory-technology-blue.jpg",
    title: "INVESTIGACIÓN",
    subtitle: "desarrollo científico y",
    subtitleHighlight: "avances tecnológicos",
    subtitleEnd: "para el futuro",
  },
  {
    image: "img/digital-transformation-network-data-blue.jpg",
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
    <section className="relative h-[500px] md:h-[600px] bg-[#0a2540] overflow-hidden">
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
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="relative container mx-auto h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 text-balance tracking-wider">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-100 leading-relaxed">
            {slides[currentSlide].subtitle}{" "}
            <span className="text-[#ff6b35] font-semibold">
              {slides[currentSlide].subtitleHighlight}
            </span>{" "}
            {slides[currentSlide].subtitleEnd}
          </p>
        </div>
      </div>

      {/* Navigation arrows */}
      {/* <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button> */}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-[#ff6b35]" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
