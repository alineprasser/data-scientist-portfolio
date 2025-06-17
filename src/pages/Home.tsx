import HeroSection from "@/components/HeroSection";
import ProfessionalSection from "@/components/ProfessionalSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  useSEO({
    title: "Matheus Melotti | Data Scientist",
    description:
      "Portfólio profissional de Data Scientist com projetos e experiências em análise de dados, machine learning e visualização de dados.",
    keywords:
      "data scientist, cientista de dados, análise de dados, machine learning, portfolio, data analysis, python, R, SQL",
  });

  return (
    <main className="flex flex-col items-center justify-center w-screen bg-primary text-accent min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProfessionalSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
