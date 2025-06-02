import { cn } from "@/lib/utils"

/**
 * Skeleton UI component para mostrar un placeholder animado mientras se carga contenido.
 *
 * ## Ejemplo de uso:
 *
 * ```tsx
 * import { Skeleton } from "./skeleton";
 *
 * <Skeleton className="h-6 w-32" />
 * ```
 *
 * ## Props principales:
 * - `className`: string — Clases personalizadas para tamaño y forma.
 */

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200", className)}
      {...props}
    />
  )
}

export { Skeleton }
