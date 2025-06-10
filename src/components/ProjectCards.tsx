import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Project } from "../types/projetc";
import { PiGithubLogo } from "react-icons/pi";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="bg-white w-full text-start rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="lg:flex lg:min-h-80">
        <div className="lg:w-1/2 h-56 lg:h-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
          <div className="flex-1">
            <h3 className="flex justify-between items-center text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
              {project.title}
              <span>
                <Badge variant="accent">{project.category}</Badge>
              </span>
            </h3>

            <div className="flex flex-col gap-4  overflow-y-scroll max-h-[45dvh]">
              <p className="text-gray-600 mb-4 text-sm lg:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              {project.features && (
                <div className="mb-4">
                  <Button
                    variant="link"
                    onClick={() => setShowFeatures(!showFeatures)}
                    className="flex items-center gap-2 text-xs p-0 font-medium text-primary hover:text-primary/80 transition-all duration-300 mb-3">
                    <ChevronUp
                      size={16}
                      className={cn({ "rotate-180": showFeatures })}
                    />
                    {showFeatures ? "Ocultar detalhes" : "Ver detalhes"}
                  </Button>

                  {showFeatures && (
                    <div
                      className="border-t pt-4 animate-fadeIn"
                      dangerouslySetInnerHTML={{ __html: project.features }}
                    />
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full">
              <Button className="w-full">
                <PiGithubLogo size={16} />
                Ver Código
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
