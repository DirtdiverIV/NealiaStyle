import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { LucideIcon } from 'lucide-react'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold font-[Mulish] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 box-border",
  {
    variants: {
      variant: {
        default:
          "rounded-[24px] bg-primary text-black shadow hover:bg-primary-hover hover:text-white active:bg-primary-pressed active:text-white",
        outlined:
          "rounded-[24px] bg-white border-2 border-primary text-black hover:bg-primary hover:text-black active:bg-primary-pressed active:text-white active:border-primary-pressed",
        "icon-only":
          "rounded-full bg-transparent text-black hover:bg-secondary",
      },
      size: {
        default: "h-10 px-6",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
      },
      hasIcon: {
        true: "items-center [&_svg]:size-5 [&_svg]:shrink-0",
        false: "items-center",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hasIcon: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: LucideIcon
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, hasIcon, icon: Icon, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isIconOnly = variant === 'icon-only'
    
    return (
      <Comp
        className={cn(buttonVariants({ 
          variant, 
          size: isIconOnly ? 'icon' : size, 
          hasIcon: !!Icon, 
          className 
        }))}
        ref={ref}
        {...props}
      >
        {Icon && <span className="flex items-center"><Icon /></span>}
        {!isIconOnly && <span className="flex items-center">{children}</span>}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
