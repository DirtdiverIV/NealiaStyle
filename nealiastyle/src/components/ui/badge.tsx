import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { X, Circle } from "lucide-react"

/**
 * Badge UI component para mostrar etiquetas, estados o tags con diferentes variantes.
 * Permite mostrar badges redondeados, cuadrados, con opción de cierre y estados personalizados.
 *
 * ## Ejemplo de uso:
 *
 * ```tsx
 * import { Badge } from "./badge";
 *
 * <Badge variant="tag-rounded">Etiqueta</Badge>
 * <Badge variant="status-completed">Completado</Badge>
 * <Badge variant="tag-rounded-closable" onClose={() => {}}>Cerrable</Badge>
 * ```
 *
 * ## Props principales:
 * - `variant`: string — Variante visual del badge (ver código para opciones).
 * - `onClose`: () => void — Callback para cerrar el badge (si es closable).
 * - `className`: string — Permite añadir clases personalizadas.
 * - `children`: ReactNode — Contenido del badge.
 */

const badgeVariants = cva(
  "inline-flex items-center text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        // Tags Group
        "tag-rounded": "bg-gray-300 rounded-[24px] px-3 py-1",
        "tag-square": "bg-gray-300 rounded-[4px] px-3 py-1",
        "tag-rounded-closable": "bg-gray-300 rounded-[24px] pl-3 pr-1 py-1",
        "tag-square-closable": "bg-gray-300 rounded-[4px] pl-3 pr-1 py-1",
        
        // Status Group
        "status-completed": "bg-success/20 rounded-[16px] pl-2 pr-3 py-1",
        "status-in-progress": "bg-secondary rounded-[16px] pl-2 pr-3 py-1",
        "status-pending": "bg-gray-300 rounded-[16px] pl-2 pr-3 py-1",
      },
    },
    defaultVariants: {
      variant: "tag-rounded",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  onClose?: () => void
}

function Badge({ className, variant, onClose, children, ...props }: BadgeProps) {
  const isClosable = variant?.includes('closable')
  const isStatus = variant?.includes('status')

  return (
    <div className={cn(badgeVariants({ variant }), "inline-flex items-center gap-2", className)} {...props}>
      {isStatus && (
        <Circle 
          className={cn(
            "w-2 h-2 fill-current",
            variant === "status-completed" && "text-success",
            variant === "status-in-progress" && "text-primary",
            variant === "status-pending" && "text-gray-600"
          )} 
        />
      )}
      {children}
      {isClosable && (
        <button
          type="button"
          onClick={onClose}
          className="rounded-full bg-gray-500 p-1 hover:bg-gray-600 transition-colors"
        >
          <X className="w-2 h-2 text-white" />
        </button>
      )}
    </div>
  )
}

export { Badge, badgeVariants }
