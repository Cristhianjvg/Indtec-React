// import { Button } from "@/components/ui/button";

export function InfoSection() {
  return (
    <section className="py-16 bg-[#0a2540] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold mb-6">Acerca del Congreso</h2>

          <p className="text-gray-300 leading-relaxed">
            El Congreso Internacional de Investigación y Desarrollo Tecnológico
            es un espacio de encuentro para investigadores, académicos y
            profesionales interesados en compartir sus avances y descubrimientos
            en diversas áreas del conocimiento científico y tecnológico.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Durante tres días, expertos nacionales e internacionales presentarán
            sus trabajos de investigación, participarán en mesas redondas y
            talleres especializados, fomentando el intercambio de ideas y la
            colaboración entre instituciones.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Este evento busca promover la innovación, el desarrollo tecnológico
            y la transferencia de conocimiento entre la academia, la industria y
            la sociedad, contribuyendo al avance científico y al desarrollo
            sostenible de nuestra región.
          </p>

          <div className="pt-4">
            {/* <Button className="bg-[#ff6b35] hover:bg-[#ff5722] text-white">
              Más información
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
