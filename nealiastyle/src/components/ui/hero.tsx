import * as React from "react"
import { cn } from "@/lib/utils"
import vallcompanys from "@/assets/vallcompanys.jpg"

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  userName?: string
  welcomeText?: string
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ className, userName = "Usuario", welcomeText = "Bienvenido", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: `url(${vallcompanys})`
      }}
      {...props}
    >
      {/* Capa oscura con 70% de opacidad */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Contenido centrado */}
      <div className="relative z-10 text-center text-white">
        <h1 className="mb-2 text-lg" style={{ fontSize: '18px' }}>
          {welcomeText}
        </h1>
        <h2 className="text-2xl font-medium" style={{ fontSize: '24px' }}>
          {userName}
        </h2>
      </div>
    </div>
  )
)

Hero.displayName = "Hero"

export { Hero } 