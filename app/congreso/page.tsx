import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import CongresoCarrusel from "../../components/congreso/congreso-carrusel";
import ObjetivoGeneral from "../../components/congreso/objetivo-general";
import ObjetivosEspecificos from "../../components/congreso/objetivos-especificos";
import PublicoObjetivo from "../../components/congreso/publico-objetivo";
import Modalidades from "../../components/congreso/modalidades";
import Estadisticas from "../../components/congreso/estadisticas";
import { FechasImportantes } from "@/components/home/fechas-importantes-section";
import { AreasTematicas } from "@/components/home/areas-tematicas-section";

export default function CongresoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CongresoCarrusel />
        <ObjetivoGeneral />
        <ObjetivosEspecificos />
        <PublicoObjetivo />
        <Modalidades />
        <AreasTematicas/>
        <FechasImportantes />
        <Estadisticas />
      </main>
      <Footer />
    </div>
  );
}
