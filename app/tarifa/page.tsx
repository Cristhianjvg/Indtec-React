"use client";
import { useState } from "react";
import TarifasHero from "@/components/tarifa/tarifas-hero";
import { Footer } from "@/components/shared/footer";
import Header from "@/components/shared/header";
import DatosPago from "@/components/tarifa/datos-pago";
import { Statistics } from "@/components/shared/statistics";
import { TarifaSection } from "@/components/tarifa/tarifa-section";

// Importa con nombres diferentes
import ParticipacionPricing from "@/components/tarifa/participacion-pricing";
import DivulgacionCientifica from "@/components/tarifa/divulgacion-cientifica";
import CoorganizadorSection from "@/components/tarifa/coorganizadores";

export default function TarifasPage() {
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TarifasHero />
        <TarifaSection onShowSection={setVisibleSection} />
        
        
        {/* SOLO estas líneas deben existir para las secciones */}
        {visibleSection === 'participacion-pricing' && <ParticipacionPricing />}
        {visibleSection === 'divulgacion-cientifica' && <DivulgacionCientifica />}
        {visibleSection === 'coorganizadores' && <CoorganizadorSection />}
        
        <DatosPago />
        <Statistics />
      </main>
      <Footer />
    </div>
  );
}