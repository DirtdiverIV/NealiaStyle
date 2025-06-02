import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Alert UI component para mostrar mensajes de estado o notificaciones.
 * Incluye variantes para diferentes tipos de alerta (éxito, error, warning, info, etc).
 *
 * ## Ejemplo de uso:
 *
 * ```tsx
 * import { Alert, AlertTitle, AlertDescription } from "./alert";
 *
 * <Alert variant="success">
 *   <AlertTitle>¡Éxito!</AlertTitle>
 *   <AlertDescription>La operación se realizó correctamente.</AlertDescription>
 * </Alert>
 * ```
 *
 * ## Props principales:
 * - `variant`: "default" | "destructive" | "error" | "success" | "warning" | "info" — Tipo de alerta.
 * - `className`: string — Permite añadir clases personalizadas.
 * - `children`: ReactNode — Elementos hijos (título, descripción, iconos).
 */

const alertVariants = cva(
  "relative w-full rounded-lg px-4 py-3 text-sm [&>svg+div]:-translate-y-1 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-secondary text-black",
        destructive: "bg-error text-white",
        error: "bg-error text-white",
        success: "bg-success text-white",
        warning: "bg-warning text-black",
        info: "bg-warning text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-semibold", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
