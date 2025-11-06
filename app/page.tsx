import { Footer } from "../components/shared/footer";
import { Header } from "../components/shared/header";
import { CarruselSection } from "../components/home/carrusel-section";
import { Contador } from "../components/home/contador-section";
import { PartnersSection } from "../components/home/partners-section";
import { InfoSection } from "../components/home/info-section";
import { FechasImportantes } from "../components/home/fechas-importantes-section";
import { Experiencia } from "@/components/actividades/experiencia-section";
import { TarifaSection } from "@/components/tarifa/tarifa-section";
import { AreasTematicas } from "@/components/home/areas-tematicas-section";
import Estadisticas from "@/components/congreso/estadisticas";
import Auspiciantes from "@/components/indtec/auspiciantes";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <CarruselSection />

      <PartnersSection />
      <InfoSection />
      <Auspiciantes />
      <Estadisticas />
      <Footer />
    </div>
  );
}
