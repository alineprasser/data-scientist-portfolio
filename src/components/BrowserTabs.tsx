import React from "react";
import { Code, Folder } from "lucide-react";
import { projects } from "@/lib/projetcs";

interface BrowserTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const BrowserTabs: React.FC<BrowserTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  const getTabIcon = (category: string) => {
    switch (category) {
      case "Todos":
        return <Folder size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <div className="bg-gray-100 rounded-t-xl border-b border-gray-200">
      <div className="flex items-center gap-2 p-3 border-b border-gray-200">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm text-gray-600 font-medium">
            Projects Portfolio
          </span>
        </div>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`flex cursor-pointer items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
              activeCategory === category
                ? "bg-white text-primary border-accent"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent"
            }`}>
            {getTabIcon(category)}
            {category}
            {category === "Todos" && (
              <span className="ml-1 px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
                {projects.length}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
