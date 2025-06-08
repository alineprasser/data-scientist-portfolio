import "./App.css";
import HeroSection from "@/components/HeroSection";
import ProfessionalSection from "./components/ProfessionalSection";

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-screen bg-primary text-accent min-h-screen">
      <HeroSection />
      <ProfessionalSection />
    </main>
  );
}

export default App;
