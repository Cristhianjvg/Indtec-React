import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { PonentesSection } from "@/components/actividades/ponentes-section";
import Estadisticas from "@/components/congreso/estadisticas";
import { CarruselSection } from "@/components/home/carrusel-section";
import { Contador } from "@/components/home/contador-section";
import { Experiencia } from "@/components/actividades/experiencia-section";
import { TalleresSection } from "@/components/actividades/talleres-section";

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CarruselSection />
        <Experiencia />
        <PonentesSection />
        <TalleresSection />
        <Estadisticas />
      </main>
      <Footer />
    </div>
  );
}
