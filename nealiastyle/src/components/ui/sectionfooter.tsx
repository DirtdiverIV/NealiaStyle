import * as React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

/**
 * SectionFooter UI component para mostrar un footer de navegación por secciones con iconos.
 * Permite resaltar la sección activa y manejar cambios de sección.
 *
 * ## Ejemplo de uso:
 *
 * ```tsx
 * import { SectionFooter } from "./sectionfooter";
 *
 * <SectionFooter items={items} activeSection={active} onSectionChange={fn} />
 * ```
 *
 * ## Props principales:
 * - `items`: Array<{icon, name, id}> — Lista de secciones.
 * - `activeSection`: string — ID de la sección activa.
 * - `onSectionChange`: (id: string) => void — Callback al cambiar sección.
 * - `className`: string — Clases personalizadas.
 */

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
          "w-full border border-b-0 bg-gray-100 rounded-t-2xl flex items-center justify-around py-4 px-2",
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
                "flex flex-col items-center justify-center px-4 py-2 rounded-md transition-colors cursor-pointer flex-1 mx-1",
                isActive ? "bg-primary" : "bg-transparent hover:bg-gray-200"
              )}
            >
              <Icon className="size-6 text-gray-600 mb-1" />
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
