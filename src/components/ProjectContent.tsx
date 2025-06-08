import { PiGithubLogo } from "react-icons/pi";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ProjectContentProps {
  image: string;
  alt: string;
  title: string;
  badge: string;
  description: React.ReactNode;
  features?: React.ReactNode;
  githubLink: string;
}

export default function ProjectContent({
  image,
  alt,
  title,
  badge,
  description,
  features,
  githubLink,
}: ProjectContentProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <img
          src={image}
          alt={alt}
          className="relative w-full object-cover rounded-md max-h-[400px] md:max-h-[500px]"
        />
      </div>
      <div className="text-start flex h-full flex-col justify-between gap-4">
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold flex items-start sm:items-center flex-col sm:flex-row gap-2">
              {title} <Badge variant="accent">{badge}</Badge>
            </h4>
            <hr />
          </div>
          <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
            {description}
            {features && (
              <>
                <h5 className="text-lg font-bold mt-4">Funcionalidades</h5>
                <hr />
                {features}
              </>
            )}
          </div>
        </div>
        <Button>
          <PiGithubLogo />
          <a
            href={githubLink}
            target="_blank">
            Ver projeto
          </a>
        </Button>
      </div>
    </div>
  );
}
