import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { TrabajoSection } from "../../components/trabajos/trabajos-section"
import { SubmissionSection } from "../../components/trabajos/submission-section"
import { JournalsSection } from "../../components/trabajos/journals-section"
import { PaymentSection } from "../../components/trabajos/payment-section"
import Estadisticas from "@/components/congreso/estadisticas"

export default function Trabajos() {
    return (
        <main className="min-h-screen">
            <Header />
            <div>
                <TrabajoSection />
                <SubmissionSection />
                <JournalsSection />
                <PaymentSection />
                <Estadisticas />
            </div>
            <Footer />
        </main>
    )
}
