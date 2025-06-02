import { useInstructionsContext } from './InstructionsProvider';

/**
 * Hook personalizado para usar el sistema de instrucciones.
 * Proporciona una API simple para mostrar y ocultar instrucciones de componentes.
 * 
 * @returns Objeto con métodos para controlar las instrucciones
 */
export function useInstructions() {
  const context = useInstructionsContext();

  return {
    /**
     * Muestra las instrucciones para un componente específico
     * @param componentName - Nombre del componente (debe existir en instructionsData)
     */
    showInstructions: context.showInstructions,
    
    /**
     * Oculta el modal de instrucciones
     */
    hideInstructions: context.hideInstructions,
    
    /**
     * Estado actual del modal de instrucciones
     */
    isModalOpen: context.isModalOpen,
    
    /**
     * Instrucción actualmente mostrada
     */
    currentInstruction: context.currentInstruction,
  };
} 