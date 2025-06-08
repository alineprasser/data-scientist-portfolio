import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  company: string;
  position: "start" | "end";
}

const timelineData: TimelineItem[] = [
  {
    year: "Jul 2024 - Atual",
    title: "Cientista de Dados Sênior",
    description:
      "Atuo como líder técnico na construção de soluções analíticas, unindo visão de arquitetura com mão na massa. Tenho experiência com ambientes diversos — como Cloudera, Kubernetes e SAS — e foco em orquestrar microserviços e sistemas robustos para lidar com grandes volumes de dados. Desenvolvi e implementei soluções de OCR para automação do processamento de documentos e aplico modelos de machine learning voltados à previsão, classificação e extração de informações, como regiões de interesse e entidades nomeadas. Gosto de transformar dados em decisões, estruturando pipelines que garantem integridade, eficiência e resultados reais.",
    company: "Vert Analytics",
    position: "start",
  },
  {
    year: "Mai 2022 - Jul 2024",
    title: "Cientista de Dados Pleno",
    description:
      "Atuei na construção de arquiteturas robustas que integravam diferentes ambientes (Cloudera, Kubernetes, SAS), com foco em escalabilidade e eficiência. Trabalhei com orquestração de microserviços em Kubernetes e liderei o desenvolvimento de soluções de OCR para automatizar o processamento de documentos, tanto digitais quanto físicos. No campo da análise de dados, apliquei técnicas estatísticas avançadas para gerar insights estratégicos e embasar decisões. Também desenvolvi modelos de machine learning voltados para previsão, classificação, extração de regiões de interesse e entidades nomeadas — sempre com atenção à qualidade e à estrutura dos dados que sustentavam essas soluções.",
    company: "Vert Analytics",
    position: "end",
  },
  {
    year: "Fev 2022 - Mai 2022",
    title: "Cientista de Dados Júnior",
    description:
      "Tenho experiência no desenvolvimento de arquiteturas voltadas à mineração de texto e processamento inteligente de documentos. Participo ativamente de reuniões com clientes, desde o planejamento até a apresentação de resultados. Também atuo na análise de dados para construção de dashboards, no desenho de infraestrutura para OCR e no planejamento de estratégias para otimização de performance dos sistemas, sempre buscando eficiência e escalabilidade.",
    company: "Vert Analytics",
    position: "start",
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
    ? "timeline-start md:text-end"
    : "timeline-end text-start";
  const marginClass = isStart && "md:mb-10";

  return (
    <li>
      {index !== 0 && <hr />}
      <div className="timeline-middle">
        <TimelineIcon />
      </div>
      <div className={`text-start ${containerClass} ${marginClass}`}>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-sedan">{item.title}</CardTitle>
            <p className="font-mono italic text-sm text-muted-foreground">
              {item.year} / {item.company}
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      </div>
      <hr />
    </li>
  );
};

export default function ProfessionalSection() {
  return (
    <div className="container min-h-screen w-full flex flex-col gap-10 items-center justify-center px-4 sm:px-6 lg:px-10 py-12">
      <h2 className="text-4xl font-bold">Experiência Profissional</h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={`${item.year}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}
