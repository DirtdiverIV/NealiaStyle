import * as React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SectionFooterItem {
  icon: LucideIcon;
  name: string;
  id: string;
}

interface SectionFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SectionFooterItem[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const SectionFooter = React.forwardRef<HTMLDivElement, SectionFooterProps>(
  ({ className, items, activeSection, onSectionChange, ...props }, ref) => {
    const handleItemClick = (sectionId: string) => {
      onSectionChange(sectionId);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full border border-b-0 bg-gray-100",
          "rounded-t-[16px]",
          "flex items-center justify-around",
          "py-4 px-2",
          className
        )}
        style={{
          borderColor: "#CED4DA",
        }}
        {...props}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={index}
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "flex flex-col items-center justify-center",
                "px-4 py-2 rounded-md",
                "transition-colors cursor-pointer",
                "flex-1 mx-1",
                isActive ? "bg-primary" : "bg-transparent hover:bg-gray-200"
              )}
            >
              <Icon className="w-6 h-6 text-gray-600 mb-1" />
              <span className="text-sm font-medium text-gray-700 text-center">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    );
  }
);

SectionFooter.displayName = "SectionFooter";

export { SectionFooter, type SectionFooterItem };
