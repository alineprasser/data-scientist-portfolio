import "./App.css";
import HeroSection from "@/components/HeroSection";
import ProfessionalSection from "@/components/ProfessionalSection";
import ProjectsSection from "@/components/ProjectsSection";

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-screen bg-primary text-accent min-h-screen">
      <HeroSection />
      <ProfessionalSection />
      <ProjectsSection />
    </main>
  );
}

export default App;
