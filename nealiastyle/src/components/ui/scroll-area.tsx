"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar orientation="vertical" />
    <ScrollBar orientation="horizontal" />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-[16px] p-[6px]", // Container con padding para el track
      orientation === "horizontal" &&
        "h-[16px] flex-col w-full p-[6px]", // Container con padding para el track
      className
    )}
    style={{
      // Para que siempre sea visible
      opacity: 1
    }}
    {...props}
  >
    <div className={cn(
      "relative flex-1 bg-gray-300/80 rounded-[40px]",
      orientation === "vertical" ? "w-1" : "h-1" // Track de 4px
    )}>
      <ScrollAreaPrimitive.ScrollAreaThumb 
        className={cn(
          "flex-1 absolute bg-primary rounded-[40px]",
          orientation === "vertical"
            ? "!w-2 -left-[2px]" // 8px de ancho, -2px para centrar
            : "!h-2 -top-[2px]", // 8px de alto, -2px para centrar
        )}
      />
    </div>
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
