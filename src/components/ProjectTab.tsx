import type { ReactNode } from "react";

interface ProjectTabProps {
  title: string;
  defaultChecked?: boolean;
  children: ReactNode;
}

export default function ProjectTab({
  title,
  defaultChecked = false,
  children,
}: ProjectTabProps) {
  const id = title.toLowerCase().replace(/\s+/g, "_");

  return (
    <>
      <input
        type="radio"
        name="project_tabs"
        className="tab transition-all bg-white/80 cursor-pointer rounded-none duration-300"
        aria-label={title}
        defaultChecked={defaultChecked}
        id={id}
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {children}
      </div>
    </>
  );
}
