import { certificates } from "@/lib/certificates";
import CertificateCard from "@/components/CertificateCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PiArrowLeft, PiMagnifyingGlass } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useSEO } from "@/hooks/useSEO";

export default function Certificates() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useSEO({
    title: "Matheus Melotti | Certificados e Conquistas",
    description:
      "Explore minha jornada de aprendizado e desenvolvimento profissional através dos meus certificados e conquistas em Data Science.",
    keywords:
      "certificados, cursos, data science, machine learning, conquistas profissionais, educação continuada",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const certificatesSection = document.getElementById("certificates");
      if (certificatesSection) {
        const navbarHeight = 64;
        const elementPosition = certificatesSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const filteredCertificates = certificates.filter((certificate) =>
    certificate.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen w-screen bg-primary">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-accent/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button
            variant="ghost"
            className="gap-2 text-accent hover:text-accent/80 hover:bg-transparent"
            onClick={handleBack}>
            <PiArrowLeft size={20} />
            Voltar
          </Button>
        </div>
      </nav>

      <div className="container flex flex-col w-full min-h-screen mx-auto px-4 pt-24 pb-12">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl text-accent font-bold mb-4">
              Certificados e Conquistas
            </h1>
            <p className="text-muted text-lg">
              Explore minha jornada de aprendizado e desenvolvimento
              profissional
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-md w-full mx-auto mb-8">
            <div className="relative">
              <PiMagnifyingGlass
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                type="text"
                placeholder="Buscar certificados..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                className="pl-10 bg-background/5 border-accent/20 text-accent placeholder:text-muted-foreground focus-visible:ring-accent"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 place-items-center">
            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((certificate) => (
                <CertificateCard
                  key={certificate.codigo}
                  certificate={certificate}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted/80 text-lg">
                  Nenhum certificado encontrado para "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </main>
  );
}
