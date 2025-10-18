"use client";

import Link from "next/link";
// import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  BookOpen,
  Calendar,
  Diamond,
  FolderOpen,
  X,
} from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 text-2xl font-bold">
            <span className="text-green-500">In</span>
            <span className="text-orange-500">:</span>
            <span className="text-orange-500">D</span>
            <span className="text-blue-400">Tec</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              <Home className="h-4 w-4" />
              INICIO
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              <BookOpen className="h-4 w-4" />
              EL CONGRESO
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              <Calendar className="h-4 w-4" />
              EVENTO
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              <Diamond className="h-4 w-4" />
              TARIFAS
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              <FolderOpen className="h-4 w-4" />
              MEMORIAS
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* <Button className="hidden lg:flex bg-[#ff6b35] hover:bg-[#ff5722] text-white font-medium px-6 py-2 rounded-full items-center gap-2">
              Enviar trabajos
              <span className="text-lg">›</span>
            </Button> */}

            {/* Mobile menu button */}
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

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-white/10 pt-4">
            <Link
              href="#"
              className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              INICIO
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="h-4 w-4" />
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
              href="#"
              className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Diamond className="h-4 w-4" />
              TARIFAS
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FolderOpen className="h-4 w-4" />
              MEMORIAS
            </Link>
            {/* <Button className="bg-[#ff6b35] hover:bg-[#ff5722] text-white font-medium px-6 py-2 rounded-full flex items-center justify-center gap-2 mt-2">
              Enviar trabajos
              <span className="text-lg">›</span>
            </Button> */}
          </nav>
        )}
      </div>
    </header>
  );
}
