import React from 'react';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { useInstructions } from './useInstructions';
import { cn } from '@/lib/utils';

interface InstructionsButtonProps {
  /**
   * Nombre del componente para el cual mostrar instrucciones.
   * Debe coincidir con una clave en instructionsData.
   */
  componentName: string;
  
  /**
   * Clase CSS adicional para personalizar el botón.
   */
  className?: string;
  
  /**
   * Tamaño del botón.
   */
  size?: 'sm' | 'default' | 'lg';
  
  /**
   * Mostrar solo el icono o incluir texto.
   */
  variant?: 'icon-only' | 'with-text';

  /**
   * Deshabilitar el botón.
   */
  disabled?: boolean;
}

/**
 * Botón reutilizable para mostrar instrucciones de componentes UI.
 * Se puede colocar junto a cualquier componente para acceder rápidamente a su documentación.
 */
export function InstructionsButton({ 
  componentName, 
  className, 
  size = 'sm',
  variant = 'icon-only',
  disabled = false
}: InstructionsButtonProps) {
  const { showInstructions } = useInstructions();

  const handleClick = () => {
    if (!disabled) {
      showInstructions(componentName);
    }
  };

  if (variant === 'with-text') {
    return (
      <Button
        variant="outlined"
        size={size}
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          "border-primary text-primary hover:bg-primary hover:text-white",
          "transition-all duration-200 gap-2 flex-shrink-0",
          className
        )}
        title={disabled ? "Instrucciones no disponibles" : `Ver instrucciones de ${componentName}`}
      >
        <Info className="w-4 h-4 flex-shrink-0" />
        <span className="text-xs font-medium whitespace-nowrap">Instrucciones</span>
      </Button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        // Tamaño fijo y forma
        "w-8 h-8 min-w-[2rem] min-h-[2rem] rounded-full",
        // Flexbox para centrar perfectamente
        "flex items-center justify-center flex-shrink-0",
        // Colores y bordes
        "border-2 border-primary/30 bg-primary/10",
        "text-primary hover:text-white hover:bg-primary hover:border-primary",
        // Transiciones y efectos
        "transition-all duration-200 hover:scale-105 active:scale-95",
        "shadow-sm hover:shadow-md",
        // Foco y accesibilidad
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        // Estados disabled
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        "disabled:hover:bg-primary/10 disabled:hover:text-primary disabled:hover:border-primary/30",
        className
      )}
      title={disabled ? "Instrucciones no disponibles" : `Ver instrucciones de ${componentName}`}
      type="button"
    >
      <Info className="w-4 h-4 flex-shrink-0" />
    </button>
  );
} 