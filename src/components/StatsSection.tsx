import { PiBookOpenText, PiMedal, PiTrendUp } from "react-icons/pi";

export default function StatsSection() {
  const StatCard = ({
    icon,
    title,
    value,
  }: {
    icon: React.ReactNode;
    title: string;
    value: string;
  }) => {
    return (
      <div className="flex w-60 group items-center flex-col gap-2 border-accent border rounded-md p-8 hover:scale-103 transition-all duration-300">
        <div className="flex relative items-center justify-center w-20 h-20 bg-accent/30 rounded-full">
          <div className="opacity-0 group-hover:opacity-100 absolute transition-all duration-300 inset-0 bg-accent/40 rounded-full blur-2xl animate-pulse-slow"></div>
          {icon}
        </div>
        <p className="text-4xl font-bold">{value}</p>
        <p className="text-lg text-muted">{title}</p>
      </div>
    );
  };

  return (
    <section className="container w-full flex flex-col gap-10 items-center justify-center px-2 sm:px-4 lg:px-6 py-12">
      <div className="flex flex-col items-center sm:items-stretch sm:flex-row w-full gap-10 justify-center">
        <StatCard
          icon={<PiBookOpenText size={32} />}
          title="Horas de estudo"
          value="+1000"
        />
        <StatCard
          icon={<PiMedal size={32} />}
          title="Certificados"
          value="+29"
        />
        <StatCard
          icon={<PiTrendUp size={32} />}
          title="Anos de experiência"
          value="+5"
        />
      </div>
    </section>
  );
}
