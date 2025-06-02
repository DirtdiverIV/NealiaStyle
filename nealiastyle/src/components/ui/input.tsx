import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Input UI component reutilizable para formularios.
 * Permite personalizar estilos y props estándar de un input HTML.
 *
 * ## Ejemplo de uso:
 *
 * ```tsx
 * import { Input } from "./input";
 *
 * <Input type="text" placeholder="Nombre" />
 * ```
 *
 * ## Props principales:
 * - `type`: string — Tipo de input (text, password, email, etc).
 * - `className`: string — Clases personalizadas.
 * - Otros props estándar de input HTML.
 */

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
