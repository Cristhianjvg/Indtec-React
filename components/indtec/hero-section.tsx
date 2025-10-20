"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('img/indtec1.png')`,
          }}
        />
        <div/>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">El congreso</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-balance">
            InDTec es un espacio académico y tecnológico que convoca a la comunidad en el desarrollo y la innovación con
            base en el método.
          </p>
        </div>

        <button
          onClick={() => setIsVideoOpen(true)}
          className="absolute bottom-8 right-8 bg-white text-[rgb(13,71,91)] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg"
        >
          <span className="text-xl">▶</span>
          <span>Video oficial</span>
        </button>
      </section>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsVideoOpen(false)} />

          {/* Modal content */}
          <div className="relative z-10 w-full max-w-4xl mx-4">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                aria-label="Cerrar video"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Video container with 16:9 aspect ratio */}
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/FtZbqJN6V9A?autoplay=1"
                  title="Video oficial InDTec"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
