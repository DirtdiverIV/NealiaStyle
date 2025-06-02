"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

/**
 * Separator UI component basado en Radix UI.
 * Permite separar visualmente secciones de contenido de forma horizontal o vertical.
 *
 * ## Ejemplo de uso:
 *
 * ```tsx
 * import { Separator } from "./separator";
 *
 * <Separator orientation="horizontal" />
 * ```
 *
 * ## Props principales:
 * - `orientation`: "horizontal" | "vertical" — Dirección del separador.
 * - `className`: string — Clases personalizadas.
 */

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
