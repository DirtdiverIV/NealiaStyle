import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Textarea UI component reutilizable para formularios.
 * Permite personalizar estilos y props estándar de un textarea HTML.
 *
 * ## Ejemplo de uso:
 *
 * ```tsx
 * import { Textarea } from "./textarea";
 *
 * <Textarea placeholder="Descripción" />
 * ```
 *
 * ## Props principales:
 * - `className`: string — Clases personalizadas.
 * - Otros props estándar de textarea HTML.
 */

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
