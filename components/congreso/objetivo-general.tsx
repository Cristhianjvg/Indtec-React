import Image from "next/image";

export default function ObjetivoGeneral() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/img/general/objetivos.webp"
              alt="Congreso InDTec"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[var(--color-teal-dark)] mb-4">
              OBJETIVO
              <br />
              GENERAL
            </h2>
            <p className="text-foreground leading-relaxed">
              Impulsar la divulgación científica y tecnológica, promoviendo la
              innovación y la transferencia de conocimiento a nivel nacional e
              internacional, mediante la socialización de resultados de
              investigación que contribuyan al desarrollo del sector productivo
              y la sociedad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
