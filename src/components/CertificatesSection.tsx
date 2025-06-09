import { PiArrowSquareOut, PiCalendarBlank, PiMedal } from "react-icons/pi";
import { RiGalleryView2 } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { certificates } from "@/lib/certificates";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function CertificatesSection() {
  return (
    <section className="container min-h-screen w-full flex flex-col gap-10 items-center justify-center px-2 sm:px-4 lg:px-6 py-12">
      <h2 className="text-4xl font-bold text-center">Certificados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {certificates.slice(0, 5).map((certificate, index) => (
          <Card
            key={index}
            className="w-xs border-none relative bg-card border-border card-hover overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src={certificate.logo}
                alt={certificate.titulo}
                className="w-full h-32 blur-sm object-cover scale-110 z-[-1] hover:animate-bounce transition-transform duration-1000 group-hover:scale-120"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 to-transparent"></div>
              <div className="absolute top-2 right-2">
                <Badge variant="accent">
                  <PiMedal size={16} />
                  Certified
                </Badge>
              </div>
            </div>
            <img
              src={certificate.logo}
              alt={certificate.titulo}
              className="w-20 h-20 absolute rounded-md top-28 shadow-sm shadow-primary/20 -translate-y-1/2 left-5"
            />
            <CardHeader>
              <CardTitle className="text-base pt-3 text-start leading-tight text-card-foreground group-hover:text-golden transition-colors">
                {certificate.titulo}
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <PiCalendarBlank size={16} />
                {certificate.instituicao} • {certificate.data}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {certificate.competencias.map((skill, i) => (
                  <Badge
                    variant="accent"
                    key={i}>
                    {skill}
                  </Badge>
                ))}
              </div>

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block">
                <Button
                  variant="outline"
                  className="w-full">
                  <PiArrowSquareOut size={16} />
                  Exibir certificado
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
        <Card className="w-xs h-full min-h-[320px] border-dashed bg-transparent hover:bg-card/5 transition-all duration-300 group cursor-pointer">
          <Link
            to="/certificates"
            className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
            <div className="w-20 h-20 rounded-full bg-background/5 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <RiGalleryView2
                size={32}
                className="text-background/40 group-hover:text-golden"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-background/40 group-hover:text-golden">
                Ver todos os certificados
              </h3>
              <p className="text-sm text-background/30">
                Explore minha coleção completa de certificações
              </p>
            </div>
          </Link>
        </Card>
      </div>
    </section>
  );
}
