// import {Header} from "@/components/header";
// import {Footer} from "@/components/footer";
// import TarifasHero from "@/components/tarifas/tarifas-hero";
// import ParticipacionPricing from "@/components/tarifas/participacion-pricing";
// import DivulgacionCientifica from "@/components/tarifas/divulgacion-cientifica";
// import CoorganizadorSection from "@/components/tarifas/coorganizador-section";
// import DatosPago from "@/components/tarifas/datos-pago";
// import TarifasStats from "@/components/tarifas/tarifas-stats";

import Footer from "../../components/shared/footer";
import Header from "../../components/shared/header";

export default function TarifasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* <TarifasHero />
        <ParticipacionPricing />
        <DivulgacionCientifica />
        <CoorganizadorSection />
        <DatosPago />
        <TarifasStats /> */}
      </main>
      <Footer />
    </div>
  );
}
