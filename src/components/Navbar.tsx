import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Sobre", href: "#stats" },
  { label: "Experiência", href: "#professional" },
  { label: "Projetos", href: "#projects" },
  { label: "Certificados", href: "#certificates" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const showNav = window.scrollY > window.innerHeight * 0.8;
      setIsVisible(showNav);

      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`sm:fixed hidden sm:block top-0 z-50 w-full backdrop-blur-sm bg-primary/80 border-b border-accent/10 ${
        isVisible ? "opacity-100" : "opacity-0 select-none pointer-events-none"
      } transition-opacity duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-xs lg:text-sm cursor-pointer transition-all duration-200 linear text-accent hover:text-accent/80`}>
                <span className="relative space-y-1">
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full transition-all delay-300 duration-500 linear",
                      activeSection === item.href.substring(1) && "w-full"
                    )}></span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
