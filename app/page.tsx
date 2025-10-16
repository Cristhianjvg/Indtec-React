import Image from "next/image";
import { Footer } from "./components/shared/footer";
import { Header } from "./components/shared/header";
import { CarruselSection } from "./components/home/carrusel-section";
import { Contador } from "./components/home/contador";
import { PartnersSection } from "./components/home/partners";
import { InfoSection } from "./components/home/info-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <CarruselSection />
      <Contador />
      <PartnersSection />
      <InfoSection />
      {/* <Header />
      <HeroSection />
      <CountdownTimer />
      <PartnersSection />
      <InfoSection />
      <ImportantDates />
      <ThematicAreas />
      <AssistantsSection />
      <ColorBars />
      <SponsorsSection />
      <StatisticsSection />
      <Footer /> */}
      <Footer />
    </div>
  );
}
