import Link from "next/link";
// import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-[#0a2540] text-white py-3 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            INDTEC
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Acerca de
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Programa
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Contacto
            </Link>
          </nav>
        </div>
        {/* <Button className="bg-[#ff6b35] hover:bg-[#ff5722] text-white">
          Registrarse
        </Button> */}
      </div>
    </header>
  );
}
