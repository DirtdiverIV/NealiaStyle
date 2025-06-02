import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useInstructions } from './useInstructions';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

/**
 * Modal centralizado para mostrar instrucciones de componentes UI.
 * Se renderiza una sola vez en la aplicación y muestra contenido dinámicamente.
 */
export function InstructionsModal() {
  const { isModalOpen, currentInstruction, hideInstructions } = useInstructions();
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = async () => {
    if (currentInstruction?.example) {
      try {
        await navigator.clipboard.writeText(currentInstruction.example);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      } catch (err) {
        console.error('Error copying to clipboard:', err);
      }
    }
  };

  if (!currentInstruction) return null;

  return (
    <Dialog open={isModalOpen} onOpenChange={(open) => !open && hideInstructions()}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center gap-3">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {currentInstruction.name}
            </DialogTitle>
            <Badge variant="tag-rounded" className="bg-primary/10 text-primary">
              Componente UI
            </Badge>
          </div>
          <DialogDescription className="text-gray-600 text-base leading-relaxed mt-2">
            {currentInstruction.description}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="px-6 pb-6 max-h-[70vh]">
          <div className="space-y-6">
            {/* Ejemplo de código */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">Ejemplo de uso</h3>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-600">Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <div className="relative">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono border">
                  <code>{currentInstruction.example}</code>
                </pre>
              </div>
            </div>

            <Separator className="bg-gray-200" />

            {/* Props */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Props principales</h3>
              <div className="space-y-3">
                {currentInstruction.props.map((prop, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 transition-colors hover:bg-gray-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-sm font-semibold text-blue-600">
                            {prop.name}
                          </span>
                          <Badge variant="tag-square" className="text-xs bg-purple-100 text-purple-700">
                            {prop.type}
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {prop.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer con información adicional */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="text-blue-600 text-sm">
                  💡 <strong>Tip:</strong> Todos los componentes son completamente personalizables mediante 
                  la prop <code className="bg-blue-100 px-1 rounded">className</code> y siguen las 
                  convenciones de diseño de Nealia Style.
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
} 