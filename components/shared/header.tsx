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

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "INICIO", icon: Home },
  { href: "/congreso", label: "EL CONGRESO", icon: Presentation },
  { href: "/actividades", label: "ACTIVIDADES", icon: Calendar },
  { href: "/tarifa", label: "TARIFAS", icon: DollarSign },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const goTrabajos = () => {
    setMobileMenuOpen(false);
    router.push("/trabajos");
  };

  const goInscripcion = () => {
    setMobileMenuOpen(false);
    router.push("https://forms.office.com/r/vr1TKLNYmp?origin=lprLink"); // ← reemplaza tu formulario
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative h-10 w-[150px]">
              <Image
                src="/img/logos/logoInDTec.webp"
                alt="InDTec Logo"
                fill
                className="object-contain"
                priority
                sizes="150px"
              />
            </div>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>

          {/* Botones escritorio + menú móvil */}
          <div className="flex items-center gap-4">
            {/* Botón Enviar Trabajos */}
            <button
              onClick={goTrabajos}
              className="hidden lg:flex bg-[#ff6b35] hover:bg-[#ff5722] text-white font-medium px-6 py-2 rounded-full items-center gap-2 transition-colors"
            >
              Enviar trabajos
              <span className="text-lg">›</span>
            </button>

            {/* Botón Inscripción */}
            <button
              onClick={goInscripcion}
              className="hidden lg:flex bg-[#ff6b35] hover:bg-[#ff5722] text-white font-medium px-6 py-2 rounded-full items-center gap-2 transition-colors"
            >
              Inscripción
              <span className="text-lg">›</span>
            </button>

            {/* Botón menú móvil */}
            <button
              className="lg:hidden p-2 text-cyan-400"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
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
          <nav
            id="mobile-nav"
            className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-white/10 pt-4"
          >
            {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}

            {/* Botón móvil: Enviar Trabajos */}
            <button
              onClick={goTrabajos}
              className="bg-[#ff6b35] hover:bg-[#ff5722] text-white font-medium px-6 py-2 rounded-full flex items-center justify-center gap-2 mt-2 transition-colors"
            >
              Enviar trabajos
              <span className="text-lg">›</span>
            </button>

            {/* Botón móvil: Inscripción */}
            <button
              onClick={goInscripcion}
              className="bg-[#ff6b35] hover:bg-[#ff5722] text-white font-medium px-6 py-2 rounded-full flex items-center justify-center gap-2 mt-2 transition-colors"
            >
              Inscripción
              <span className="text-lg">›</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
