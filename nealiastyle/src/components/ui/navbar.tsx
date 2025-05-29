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
    <nav className="h-[72px] bg-primary px-6 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="h-full flex items-center">
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