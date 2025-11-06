"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  Home,
  Presentation,
  Calendar,
  DollarSign,
  BookOpen,
  X,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="img/logos/logoInDTec.webp"
              alt="InDTec Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              <Home className="h-4 w-4" />
              INICIO
            </Link>
            <Link
              href="/congreso"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              <Presentation className="h-4 w-4" />
              EL CONGRESO
            </Link>
            <Link
              href="/eventos"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              <Calendar className="h-4 w-4" />
              ACTIVIDADES
            </Link>
            <Link
              href="/tarifa"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              <DollarSign className="h-4 w-4" />
              TARIFAS
            </Link>
          </nav>

          {/* Botón escritorio y menú móvil */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/trabajos")}
              className="hidden lg:flex bg-[#ff6b35] hover:bg-[#ff5722] text-white font-medium px-6 py-2 rounded-full items-center gap-2 transition-colors"
            >
              Enviar trabajos
              <span className="text-lg">›</span>
            </button>

            {/* Botón menú móvil */}
            <button
              className="lg:hidden p-2 text-cyan-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-white/10 pt-4">
            <Link
              href="/"
              className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              INICIO
            </Link>
            <Link
              href="/congreso"
              className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Presentation className="h-4 w-4" />
              EL CONGRESO
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="h-4 w-4" />
              EVENTO
            </Link>
            <Link
              href="/tarifa"
              className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <DollarSign className="h-4 w-4" />
              TARIFAS
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="h-4 w-4" />
              MEMORIAS
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                router.push("/trabajos");
              }}
              className="bg-[#ff6b35] hover:bg-[#ff5722] text-white font-medium px-6 py-2 rounded-full flex items-center justify-center gap-2 mt-2 transition-colors"
            >
              Enviar trabajos
              <span className="text-lg">›</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
