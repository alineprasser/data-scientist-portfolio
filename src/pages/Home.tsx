import HeroSection from "@/components/HeroSection";
import ProfessionalSection from "@/components/ProfessionalSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen bg-primary text-accent min-h-screen">
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
