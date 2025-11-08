import { Footer } from "../components/shared/footer";
import { Header } from "../components/shared/header";
import { CarruselSection } from "../components/home/carrusel-section";
import { PartnersSection } from "../components/home/partners-section";
import { InfoSection } from "@/components/home/info-section";
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
