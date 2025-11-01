import TarifasHero from "@/components/tarifa/tarifas-hero";
import { Footer } from "../../components/shared/footer";
import Header from "../../components/shared/header";
import ParticipacionPricing from "@/components/tarifa/participacion-pricing";
import DivulgacionCientifica from "@/components/tarifa/divulgacion-cientifica";
import CoorganizadorSection from "@/components/tarifa/coorganizadores";
import DatosPago from "@/components/tarifa/datos-pago";
import { Statistics } from "@/components/shared/statistics";

export default function TarifasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TarifasHero />
        <ParticipacionPricing />
        <DivulgacionCientifica />
        <CoorganizadorSection />
        <DatosPago />
        <Statistics />
      </main>
      <Footer />
    </div>
  );
}
