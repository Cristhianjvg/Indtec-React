import Image from "next/image";
import { Footer } from "../components/shared/footer";
import { Header } from "../components/shared/header";
import { CarruselSection } from "../components/home/carrusel-section";
import { Contador } from "../components/home/contador-section";
import { PartnersSection } from "../components/home/partners-section";
import { InfoSection } from "../components/home/info-section";
import { FechasImportantes } from "../components/home/fechas-importantes-section";
import { Experiencia } from "@/components/home/experiencia-section";
import { TarifaSection } from "@/components/home/tarifa-section";
import { AreasTematicas } from "@/components/home/areas-tematicas-section";
import Estadisticas from "@/components/congreso/estadisticas";
import { PonentesSection } from "@/components/home/ponentes-section";
import { EnviosTrabajoSection } from "@/components/home/envio-trabajo-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <main className="pt-16"> */}
      <CarruselSection />
      <Contador />
      <PartnersSection />
      <InfoSection />
      <FechasImportantes />
      <Experiencia />
      <AreasTematicas />
      <TarifaSection />
      <EnviosTrabajoSection />
      <PonentesSection />
      <Estadisticas />
      <Footer />
      {/* </main> */}
    </div>
  );
}
