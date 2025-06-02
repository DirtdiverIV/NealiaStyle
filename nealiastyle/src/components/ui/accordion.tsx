"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Accordion UI component basado en Radix UI.
 * Permite mostrar y ocultar contenido de forma colapsable.
 *
 * ## Ejemplo de uso:
 *
 * ```tsx
 * import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";
 *
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Sección 1</AccordionTrigger>
 *     <AccordionContent>Contenido de la sección 1</AccordionContent>
 *   </AccordionItem>
 *   <AccordionItem value="item-2">
 *     <AccordionTrigger>Sección 2</AccordionTrigger>
 *     <AccordionContent>Contenido de la sección 2</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 *
 * ## Props principales:
 * - `type`: "single" | "multiple" — Define si permite abrir uno o varios items a la vez.
 * - `collapsible`: boolean — Permite colapsar todos los items.
 * - `value`: string — Valor único para cada item.
 * - `className`: string — Permite añadir clases personalizadas.
 * - `children`: ReactNode — Elementos hijos (items, triggers, content).
 */

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm transition-colors data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=open]:bg-secondary",
        className
      )}
      {...props}
    >
      <div className={cn("pt-0 pb-4 px-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } 