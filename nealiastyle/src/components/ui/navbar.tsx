/**
 * Navbar UI component para mostrar una barra de navegación superior con logo y selector de tema.
 *
 * ## Ejemplo de uso:
 *
 * ```tsx
 * import { Navbar } from "./navbar";
 *
 * <Navbar theme="health" onThemeChange={setTheme} />
 * ```
 *
 * ## Props principales:
 * - `theme`: string — Tema actual ("health", "vision", "log").
 * - `onThemeChange`: (theme: string) => void — Callback al cambiar el tema.
 */
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import logoHealth from "@/assets/logos/logoHealth.png"
import logoVision from "@/assets/logos/logoVision.png"
import logoLog from "@/assets/logos/logoLog.png"

interface NavbarProps {
  theme: string
  onThemeChange: (theme: string) => void
}

const logos = {
  health: logoHealth,
  vision: logoVision,
  log: logoLog,
}

export function Navbar({ theme, onThemeChange }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-[72px] items-center justify-between bg-primary px-6 py-2 shadow-md">
      <div className="flex h-full items-center">
        <img 
          src={logos[theme as keyof typeof logos]} 
          alt={`${theme} logo`}
          className="h-full w-auto object-contain"
        />
      </div>
      
      <Select value={theme} onValueChange={onThemeChange}>
        <SelectTrigger className="w-[140px] bg-white">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="health">Health</SelectItem>
          <SelectItem value="vision">Vision</SelectItem>
          <SelectItem value="log">Log</SelectItem>
        </SelectContent>
      </Select>
    </nav>
  )
} 