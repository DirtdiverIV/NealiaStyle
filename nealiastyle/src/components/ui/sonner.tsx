"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

/**
 * Toaster (Sonner) UI component para mostrar notificaciones flotantes.
 * Permite personalizar el tema y los estilos de los toasts.
 *
 * ## Ejemplo de uso:
 *
 * ```tsx
 * import { Toaster } from "./sonner";
 *
 * <Toaster />
 * ```
 *
 * ## Props principales:
 * - `theme`: string — Tema visual ("light", "dark", "system").
 * - `className`: string — Clases personalizadas.
 * - Otros props según Sonner docs.
 */

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast bg-primary text-white rounded-lg shadow-lg border-0",
          title: "text-white font-semibold",
          description: "text-white/90",
          actionButton: "bg-primary-hover text-white",
          cancelButton: "bg-white/10 text-white",
          error: "!bg-error !border-error",
          success: "!bg-success !border-success",
          warning: "!bg-warning !text-white !border-warning",
          info: "!bg-primary !border-primary",
          loading: "!bg-primary !text-white !border-primary",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }


// app/layout.tsx
// import { Toaster } from "@/components/ui/sonner"
 
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <main>{children}</main>
//         <Toaster />
//       </body>
//     </html>
//   )
// }