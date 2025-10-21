import Image from "next/image";
import { Footer } from "../components/shared/footer";
import { Header } from "../components/shared/header";
import { CarruselSection } from "../components/home/carrusel-section";
import { Contador } from "../components/home/contador";
import { PartnersSection } from "../components/home/partners";
import { InfoSection } from "../components/home/info-section";
import { FechasImportantes } from "../components/home/fechas-importantes";
import { AreasTematicas } from "../components/home/areasTematicas-section";
import { Experiencia } from "@/components/home/experiencia";
import { TarifaSection } from "@/components/home/tarifa-section";

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
      <Footer />
      {/* </main> */}
    </div>
  );
}
