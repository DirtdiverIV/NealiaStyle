import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { X, Circle } from "lucide-react"

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
