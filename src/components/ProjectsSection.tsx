import AnimatedSection from "./AnimatedSection";
import { BrowserTabs } from "./BrowserTabs";
import { ProjectCard } from "./ProjectCards";
import { useState } from "react";
import { categories, projects } from "../lib/projetcs";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Tradutor de Imagem");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.title === activeCategory);

  return (
    <section
      id="projects"
      className=" w-full flex flex-col gap-10 items-center px-2 sm:px-4 lg:px-6 py-12">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center">Projetos</h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mx-auto flex flex-col max-w-xs xs:max-w-md sm:max-w-5xl w-full p-2">
          <BrowserTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="bg-white flex flex-col rounded-b-xl shadow-lg min-h-[400px]">
            <div className="p-2 sm:p-6 lg:p-8">
              <div className="flex flex-col gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.githubLink}
                    className="animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
