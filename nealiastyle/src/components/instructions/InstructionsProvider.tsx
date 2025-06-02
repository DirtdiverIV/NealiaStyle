import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ComponentInstruction } from './instructionsData';

interface InstructionsContextType {
  isModalOpen: boolean;
  currentInstruction: ComponentInstruction | null;
  showInstructions: (componentName: string) => void;
  hideInstructions: () => void;
}

const InstructionsContext = createContext<InstructionsContextType | undefined>(undefined);

interface InstructionsProviderProps {
  children: ReactNode;
}

export function InstructionsProvider({ children }: InstructionsProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentInstruction, setCurrentInstruction] = useState<ComponentInstruction | null>(null);

  const showInstructions = (componentName: string) => {
    // Lazy import de los datos para mejor performance
    import('./instructionsData').then(({ instructionsData }) => {
      const instruction = instructionsData[componentName];
      if (instruction) {
        setCurrentInstruction(instruction);
        setIsModalOpen(true);
      }
    });
  };

  const hideInstructions = () => {
    setIsModalOpen(false);
    // Delay para permitir la animación de cierre
    setTimeout(() => setCurrentInstruction(null), 200);
  };

  return (
    <InstructionsContext.Provider
      value={{
        isModalOpen,
        currentInstruction,
        showInstructions,
        hideInstructions,
      }}
    >
      {children}
    </InstructionsContext.Provider>
  );
}

export function useInstructionsContext() {
  const context = useContext(InstructionsContext);
  if (context === undefined) {
    throw new Error('useInstructionsContext must be used within an InstructionsProvider');
  }
  return context;
} 