import { RiGalleryView2 } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { certificates } from "@/lib/certificates";
import CertificateCard from "./CertificateCard";

export default function CertificatesSection() {
  return (
    <section className="container min-h-screen w-full flex flex-col gap-10 items-center justify-center px-2 sm:px-4 lg:px-6 py-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold text-center">Certificados</h2>
        <p className="text-center text-muted text-lg max-w-2xl mx-auto">
          Um pouco do que estudei, pratiquei e aprendi ao longo do caminho. Mais
          do que títulos, esses certificados guardam histórias de noites
          curiosas e descobertas importantes.
        </p>
      </div>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {certificates.slice(0, 5).map((certificate, index) => (
          <CertificateCard
            key={index}
            certificate={certificate}
          />
        ))}
        <Card className="flex flex-col w-[calc(100%-2rem)] lg:w-xs items-center justify-center min-h-[320px] border-dashed border-background/60 bg-transparent hover:bg-card/5 transition-all duration-300 group cursor-pointer">
          <Link
            to="/certificates"
            className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
            <div className="w-20 h-20 rounded-full bg-background/5 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <RiGalleryView2
                size={32}
                className="text-background/60 group-hover:text-golden"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-background/80 group-hover:text-golden">
                Ver todos os certificados
              </h3>
              <p className="text-sm text-background/60">
                Explore minha coleção completa de certificações
              </p>
            </div>
          </Link>
        </Card>
      </div>
    </section>
  );
}
