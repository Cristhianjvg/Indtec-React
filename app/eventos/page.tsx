import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { PonentesSection } from "@/components/home/ponentes-section";
import Estadisticas from "@/components/congreso/estadisticas";
import { CarruselSection } from "@/components/home/carrusel-section";
import { Contador } from "@/components/home/contador-section";

export default function EventosPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <CarruselSection />
                <Contador />
                <PonentesSection />
                <Estadisticas />
            </main>
            <Footer />
        </div>
    );
}