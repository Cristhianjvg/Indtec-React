import { CarruselSection } from "../components/home/carrusel-section";
import { Footer } from "../components/shared/footer";
import { Header } from "../components/shared/header";
import { HeroSection } from "../components/indtec/hero-section";
import { Modalities } from "../components/indtec/modalities";
import { ObjectiveSection } from "../components/indtec/objective-section";
import { SpecificObjectives } from "../components/indtec/specific-objectives";
import { TargetAudience } from "../components/indtec/target-audience";
import { Statistics } from "../components/indtec/statistics";

export default function InDTec() {
  return (
    <main className="min-h-screen">
      <Header />
      <div>
        <CarruselSection />
        <HeroSection />
        <ObjectiveSection />
        <SpecificObjectives />
        <TargetAudience />
        <Modalities />
        <Statistics />
      </div>
      <Footer />
    </main>
  )
}
