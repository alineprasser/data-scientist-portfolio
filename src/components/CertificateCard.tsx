import { PiArrowSquareOut, PiCalendarBlank, PiMedal } from "react-icons/pi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface Certificate {
  titulo: string;
  instituicao: string;
  data: string;
  codigo: string;
  link: string;
  logo: string;
  competencias: string[];
}

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <Card className="w-full justify-between flex flex-col gap-4 border-none relative bg-card border-border card-hover overflow-hidden group hover:-translate-y-1 transition-all duration-300">
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
      <CardHeader className="py-0">
        <CardTitle className="text-base pt-3 text-start leading-tight text-card-foreground group-hover:text-golden transition-colors">
          {certificate.titulo}
        </CardTitle>
        <CardDescription className="flex items-center gap-2">
          <PiCalendarBlank size={16} />
          {certificate.instituicao} • {certificate.data}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {certificate.competencias.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {certificate.competencias.map((skill, i) => (
              <Badge
                variant="accent"
                key={i}>
                {skill}
              </Badge>
            ))}
          </div>
        )}

        {certificate.link ? (
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
        ) : (
          <p className="text-sm text-muted-foreground font-mono text-start">
            Código: {certificate.codigo}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
