import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { Button } from "./ui/button";
import AnimatedSection from "./AnimatedSection";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  company: string;
  position: "start" | "end";
  skills?: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "Jul 2024 - Atual",
    title: "Cientista de Dados Sênior",
    description:
      "Líder técnico em soluções analíticas, com foco em arquitetura e implementação. Experiência em ambientes como Cloudera, Kubernetes e SAS, orquestrando microserviços para grandes volumes de dados. Atuei com OCR e modelos de machine learning para automação, previsão e extração de informações. Gosto de transformar dados em decisões por meio de pipelines eficientes e confiáveis.",
    company: "Vert Analytics",
    position: "start",
    skills: [
      "Desenvolvimento de modelos de regiões de interesse",
      "Liderança",
      "Arquitetura de soluções",
      "OCR",
      "Estatística",
      "Reconhecimento óptico de caracteres",
      "Cicd",
      "Kubernetes",
      "MLflow",
      "DevOps",
      "Pandas (Software)",
      "Mineração de dados",
      "NLP",
      "Sistemas de inteligência artificial",
      "MLOps",
      "Git",
      "cd4ml",
    ],
  },
  {
    year: "Mai 2022 - Jul 2024",
    title: "Cientista de Dados Pleno",
    description:
      "Construi arquiteturas escaláveis integrando ambientes como Cloudera, Kubernetes e SAS. Liderei a orquestração de microserviços em Kubernetes e desenvolvi soluções de OCR para automação de documentos. Apliquei estatística avançada e machine learning em tarefas de previsão, classificação e extração de informações (regiões de interesse e entidades nomeadas), sempre priorizando a qualidade e estrutura dos dados.",
    company: "Vert Analytics",
    position: "end",
    skills: [
      "Desenvolvimento de modelos de regiões de interesse",
      "Arquitetura de soluções",
      "OCR",
      "SAS",
      "Estatística",
      "Reconhecimento óptico de caracteres",
      "SAS Visual Analytics",
      "Mineração de textos",
      "Kubernetes",
      "Programação SAS",
      "Análise de dados",
      "DevOps",
      "Pandas (Software)",
      "Mineração de dados",
      "NLP",
      "Sistemas de inteligência artificial",
      "Git",
    ],
  },
  {
    year: "Fev 2022 - Mai 2022",
    title: "Cientista de Dados Júnior",
    description:
      "Experiência no desenvolvimento de arquiteturas para mineração de texto e processamento inteligente de documentos. Atuação em toda a jornada com o cliente — do planejamento à entrega de resultados. Envolvimento com análise de dados, construção de dashboards, infraestrutura para OCR e estratégias de otimização de performance com foco em eficiência e escalabilidade.",
    company: "Vert Analytics",
    position: "start",
    skills: [
      "Arquitetura de soluções",
      "OCR",
      "Estatística",
      "Reconhecimento óptico de caracteres",
      "Kubernetes",
      "DevOps",
      "Pandas (Software)",
      "Mineração de dados",
      "NLP",
      "Sistemas de inteligência artificial",
      "Git",
    ],
  },
  {
    year: "Jul 2020 - Mar 2021",
    title: "Estagiário de TI",
    description:
      "Acompanhei a implementação da rede interna da escola, realizando a manutenção dos computadores e oferecendo suporte técnico a profissionais e clientes. Também gerenciei o sistema interno de alunos, garantindo seu funcionamento eficiente.",
    company: "Escola Múltipla",
    position: "end",
  },
];

const TimelineIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  const isStart = item.position === "start";
  const containerClass = isStart
    ? "timeline-start text-start md:text-end"
    : "timeline-end text-start";
  const marginClass = isStart && "md:mb-10";
  const [showAll, setShowAll] = useState(false);

  return (
    <li className="w-full">
      {index !== 0 && <hr />}
      <div className="timeline-middle">
        <TimelineIcon />
      </div>
      <div
        className={`${containerClass} ${marginClass} w-[85dvw] md:w-[40dvw] lg:w-[40dvw] relative overflow-hidden group`}>
        <Card className="hover:shadow-lg bg-background sm:bg-primary z-0 group-hover:bg-background  border-secondary transition-discrete  duration-300 w-full">
          <CardHeader className="flex flex-col gap-0 p-4">
            <CardTitle className="text-lg text-primary sm:text-accent group-hover:text-primary flex flex-col gap-0 font-normal font-sedan">
              {item.title}
              <span className="font-mono italic text-sm text-muted-foreground">
                {item.year} • {item.company}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-4 pt-0">
            <p className="text-primary sm:text-muted group-hover:text-primary text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
            {item.skills && (
              <div
                className={cn(
                  "flex flex-wrap items-baseline justify-start gap-2 pb-2",
                  isStart && "md:justify-end"
                )}>
                {item.skills
                  .slice(0, showAll ? item.skills.length : 3)
                  .map((skill) => (
                    <Badge
                      key={skill}
                      variant="accent"
                      className="text-xs sm:text-sm ">
                      {skill}
                    </Badge>
                  ))}
                {item.skills.length > 3 && (
                  <Button
                    type="button"
                    variant="link"
                    className="px-1 py-1 leading-tight m-0 sm:text-accent underline text-xs group-hover:text-primary"
                    onClick={() => setShowAll((prev) => !prev)}>
                    {showAll ? "Mostrar menos" : "Mostrar todas"}
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <hr />
    </li>
  );
};

export default function ProfessionalSection() {
  return (
    <section
      id="professional"
      className="min-h-screen w-full flex flex-col gap-10 items-center justify-center px-2 sm:px-4 lg:px-6 py-12">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center">
          Experiência Profissional
        </h2>
      </AnimatedSection>
      <AnimatedSection
        delay={0.2}
        className="w-full max-w-6xl">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-full">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={`${item.year}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </ul>
      </AnimatedSection>
    </section>
  );
}
