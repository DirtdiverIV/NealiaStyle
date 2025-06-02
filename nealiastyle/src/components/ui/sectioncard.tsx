import * as React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SectionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const SectionCard = React.forwardRef<HTMLDivElement, SectionCardProps>(
  ({ className, icon: Icon, name, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-24 text-xs",
      md: "h-28 text-sm",
      lg: "h-32 text-base",
      xl: "h-36 text-lg",
    };

    const iconSizes = {
      sm: "w-6 h-6",
      md: "w-8 h-8",
      lg: "w-10 h-10",
      xl: "w-12 h-12",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center gap-2 border-2 rounded w-full transition-colors hover:bg-gray-50 cursor-pointer",
          sizeClasses[size],
          className
        )}
        style={{
          backgroundColor: "#F8F9FA",
          borderColor: "#ADB5BD",
        }}
        {...props}
      >
        <Icon className={cn("text-gray-600", iconSizes[size])} />
        <span className="text-gray-700 font-medium text-center leading-tight px-2">
          {name}
        </span>
      </div>
    );
  }
);

SectionCard.displayName = "SectionCard";

export { SectionCard };
