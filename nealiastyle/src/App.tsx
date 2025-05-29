import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Pagination } from "@/components/ui/pagination"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Command, CommandInput, CommandList, CommandItem } from "@/components/ui/command"
import { Toaster } from "@/components/ui/sonner"
import { Navbar } from "@/components/ui/navbar"
import { useState, useEffect } from "react"
import { toast } from "sonner"
import { Plus, ArrowRight, MoreVertical, Settings, User, LogOut, FileEdit } from 'lucide-react'
import { DateRange } from "react-day-picker"

function App() {
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [theme, setTheme] = useState("health");

  useEffect(() => {
    document.documentElement.classList.remove("theme-health", "theme-vision", "theme-log");
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar theme={theme} onThemeChange={setTheme} />
        <main className="pt-[72px] min-h-screen">
          <div className="p-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold">Libreria Nealia</h1>
            </div>
            
            {/* Interacción */}
            <section className="mb-12 p-6 rounded-lg bg-white shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Interacción y Controles</h2>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Button</h3>
                    <Separator orientation="vertical" className="h-4 bg-gray-200" />
                    <span className="text-sm text-gray-600">Botones interactivos con múltiples variantes y estados</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Button>Botón Default</Button>
                      <Button icon={Plus}>Default con Icono</Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="outlined">Botón Outlined</Button>
                      <Button variant="outlined" icon={ArrowRight}>Outlined con Icono</Button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">DropdownMenu</h3>
                    <Separator orientation="vertical" className="h-4 bg-gray-200" />
                    <span className="text-sm text-gray-600">Menú desplegable para acciones contextuales</span>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="icon-only" icon={MoreVertical} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem icon={FileEdit}>
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem icon={User}>
                        Perfil
                      </DropdownMenuItem>
                      <DropdownMenuItem icon={Settings}>
                        Configuración
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem icon={LogOut} className="text-red-600">
                        Cerrar Sesión
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Dialog</h3>
                    <Separator orientation="vertical" className="h-4 bg-gray-200" />
                    <span className="text-sm text-gray-600">Ventanas modales para información importante</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Abrir Diálogo</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Ejemplo de Diálogo</DialogTitle>
                        <DialogDescription>
                          Este es un ejemplo de contenido en un diálogo.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </section>

            {/* Formularios */}
            <section className="mb-12 p-6 rounded-lg bg-white shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Formularios y Entrada de Datos</h2>
              <div className="space-y-8">
                {/* Primera fila: Input, Select, Textarea */}
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">Input</h3>
                      <Separator orientation="vertical" className="h-4 bg-gray-200" />
                      <span className="text-sm text-gray-600">Campo de texto para entrada de datos</span>
                    </div>
                    <Input placeholder="Input de ejemplo" />
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">Select</h3>
                      <Separator orientation="vertical" className="h-4 bg-gray-200" />
                      <span className="text-sm text-gray-600">Lista desplegable para selección de opciones</span>
                    </div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Opción 1</SelectItem>
                        <SelectItem value="2">Opción 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">Textarea</h3>
                      <Separator orientation="vertical" className="h-4 bg-gray-200" />
                      <span className="text-sm text-gray-600">Campo de texto multilínea para contenido extenso</span>
                    </div>
                    <Textarea placeholder="Textarea de ejemplo" />
                  </div>
                </div>

                {/* Segunda fila: Checkbox, RadioGroup, Switch */}
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">Checkbox</h3>
                      <Separator orientation="vertical" className="h-4 bg-gray-200" />
                      <span className="text-sm text-gray-600">Casillas de verificación para selección múltiple</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Checkbox id="terms" />
                      <label htmlFor="terms">Aceptar términos</label>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">RadioGroup</h3>
                      <Separator orientation="vertical" className="h-4 bg-gray-200" />
                      <span className="text-sm text-gray-600">Grupo de opciones para selección única</span>
                    </div>
                    <RadioGroup defaultValue="option-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-1" id="option-1" />
                        <label htmlFor="option-1">Opción 1</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-2" id="option-2" />
                        <label htmlFor="option-2">Opción 2</label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">Switch</h3>
                      <Separator orientation="vertical" className="h-4 bg-gray-200" />
                      <span className="text-sm text-gray-600">Interruptor para alternar estados</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <label htmlFor="airplane-mode">Modo avión</label>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Datos y Visualización */}
            <section className="mb-12 p-6 rounded-lg bg-white shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Visualización y Navegación</h2>
              <div className="space-y-8">
                {/* Primera fila: Calendar y ScrollArea */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">Calendar</h3>
                      <Separator orientation="vertical" className="h-4 bg-gray-200" />
                      <span className="text-sm text-gray-600">Selector de fechas interactivo con rango</span>
                    </div>
                    <div className="inline-block border rounded-lg p-4">
                      <Calendar
                        mode="range"
                        selected={range}
                        onSelect={setRange}
                        className="rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">ScrollArea</h3>
                      <Separator orientation="vertical" className="h-4 bg-gray-200" />
                      <span className="text-sm text-gray-600">Área de desplazamiento personalizada con scroll suave</span>
                    </div>
                    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                      <div className="w-[800px]">
                        <div className="grid grid-cols-3 gap-4">
                          {Array.from({ length: 30 }).map((_, i) => (
                            <div
                              key={i}
                              className="rounded-md border border-gray-200 bg-white p-4"
                            >
                              <div className="space-y-2">
                                <div className="h-20 w-full rounded-md bg-gray-100" />
                                <div className="h-4 w-[80%] rounded-md bg-gray-100" />
                                <div className="h-4 w-[60%] rounded-md bg-gray-100" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                </div>

                {/* Segunda fila: Skeleton y Pagination */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">Skeleton</h3>
                      <Separator orientation="vertical" className="h-4 bg-gray-200" />
                      <span className="text-sm text-gray-600">Indicador de carga con animación fluida</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">Pagination</h3>
                      <Separator orientation="vertical" className="h-4 bg-gray-200" />
                      <span className="text-sm text-gray-600">Control de navegación entre páginas</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Pagination
                        currentPage={1}
                        totalPages={5}
                        onPageChange={(page) => {
                          toast.info(`Navegando a la página ${page}`)
                        }}
                      />
                    </div>
                  </div>
                </div>

                <Separator className="my-8 bg-gray-200" />

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Table</h3>
                    <Separator orientation="vertical" className="h-4 bg-gray-200" />
                    <span className="text-sm text-gray-600">Tabla de reglas de granja</span>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Descripción Regla</TableHead>
                        <TableHead>Orden</TableHead>
                        <TableHead>Desde</TableHead>
                        <TableHead>Hasta</TableHead>
                        <TableHead>Origen</TableHead>
                        <TableHead>Regla activa</TableHead>
                        <TableHead>Nota servicio</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Anclar granja vaciando Hembras</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">01/07/2023</TableCell>
                        <TableCell className="text-center">31/12/2024</TableCell>
                        <TableCell className="text-center">
                          <Select defaultValue="granja">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="granja">Granja</SelectItem>
                              <SelectItem value="centro">Centro</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-center"><Checkbox defaultChecked /></TableCell>
                        <TableCell className="text-center">1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Trasladar machos a centro 1</TableCell>
                        <TableCell className="text-center">2</TableCell>
                        <TableCell className="text-center">01/08/2023</TableCell>
                        <TableCell className="text-center">30/06/2024</TableCell>
                        <TableCell className="text-center">
                          <Select defaultValue="centro">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="granja">Granja</SelectItem>
                              <SelectItem value="centro">Centro</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-center"><Checkbox /></TableCell>
                        <TableCell className="text-center">2</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Priorizar hembras jóvenes en destino</TableCell>
                        <TableCell className="text-center">3</TableCell>
                        <TableCell className="text-center">01/09/2023</TableCell>
                        <TableCell className="text-center">31/12/2024</TableCell>
                        <TableCell className="text-center">
                          <Select defaultValue="granja">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="granja">Granja</SelectItem>
                              <SelectItem value="centro">Centro</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-center"><Checkbox defaultChecked /></TableCell>
                        <TableCell className="text-center">1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Reservar espacio para gestantes</TableCell>
                        <TableCell className="text-center">4</TableCell>
                        <TableCell className="text-center">01/10/2023</TableCell>
                        <TableCell className="text-center">31/12/2025</TableCell>
                        <TableCell className="text-center">
                          <Select defaultValue="granja">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="granja">Granja</SelectItem>
                              <SelectItem value="centro">Centro</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-center"><Checkbox /></TableCell>
                        <TableCell className="text-center">3</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <Separator className="my-8 bg-gray-200" />

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Avatar y Badge</h3>
                    <Separator orientation="vertical" className="h-4 bg-gray-200" />
                    <span className="text-sm text-gray-600">Avatar de usuario y etiquetas de estado</span>
                  </div>
                  <div className="space-y-6">
                    {/* Avatar Group */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Avatars</h4>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage src="https://github.com/neovim.png" alt="@neovim" />
                          <AvatarFallback>NV</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* Tags Group */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Tags</h4>
                      <div className="flex items-center gap-4">
                        <Badge variant="tag-rounded">Tag Redondeado</Badge>
                        <Badge variant="tag-square">Tag Cuadrado</Badge>
                        <Badge 
                          variant="tag-rounded-closable" 
                          onClose={() => toast.info("Tag cerrado")}
                        >
                          Tag Redondeado Cerrable
                        </Badge>
                        <Badge 
                          variant="tag-square-closable"
                          onClose={() => toast.info("Tag cerrado")}
                        >
                          Tag Cuadrado Cerrable
                        </Badge>
                      </div>
                    </div>

                    {/* Status Group */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Estados</h4>
                      <div className="flex items-center gap-4">
                        <Badge variant="status-completed">Finalizada</Badge>
                        <Badge variant="status-in-progress">En curso</Badge>
                        <Badge variant="status-pending">Pendiente</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-8 bg-gray-200" />

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Slider</h3>
                    <Separator orientation="vertical" className="h-4 bg-gray-200" />
                    <span className="text-sm text-gray-600">Control deslizante</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </div>
            </section>

            {/* Notificaciones y Alertas */}
            <section className="mb-12 p-6 rounded-lg bg-white shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Notificaciones y Alertas</h2>
              <div className="space-y-8">
                {/* Toast */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Toast</h3>
                    <Separator orientation="vertical" className="h-4 bg-gray-200" />
                    <span className="text-sm text-gray-600">Sistema de notificaciones temporales</span>
                  </div>
                  <div className="flex space-x-4">
                    <Button 
                      onClick={() => {
                        toast.success("¡Éxito!", {
                          description: "La operación se completó correctamente.",
                        })
                      }}
                    >
                      Toast de Éxito
                    </Button>
                    <Button 
                      variant="outlined"
                      onClick={() => {
                        toast.error("Error", {
                          description: "Algo salió mal. Por favor, inténtalo de nuevo.",
                        })
                      }}
                    >
                      Toast de Error
                    </Button>
                    <Button 
                      variant="outlined"
                      onClick={() => {
                        toast.warning("Advertencia", {
                          description: "Hay cambios sin guardar.",
                        })
                      }}
                    >
                      Toast de Advertencia
                    </Button>
                    <Button 
                      variant="outlined"
                      onClick={() => {
                        toast.promise(
                          new Promise((resolve) => setTimeout(resolve, 2000)),
                          {
                            loading: "Procesando...",
                            success: "¡Proceso completado!",
                            error: "Error en el proceso",
                          }
                        )
                      }}
                    >
                      Toast de Proceso
                    </Button>
                  </div>
                </div>

                {/* Alert */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Alert</h3>
                    <Separator orientation="vertical" className="h-4 bg-gray-200" />
                    <span className="text-sm text-gray-600">Sistema de alertas y mensajes importantes</span>
                  </div>
                  <div className="space-y-4">
                    <Alert>
                      <AlertTitle>¡Información Importante!</AlertTitle>
                      <AlertDescription>
                        Este es un mensaje informativo con acciones.
                        <div className="mt-2">
                          <Button variant="outlined" size="sm">Saber más</Button>
                        </div>
                      </AlertDescription>
                    </Alert>

                    <Alert variant="destructive">
                      <AlertTitle>Error Crítico</AlertTitle>
                      <AlertDescription>
                        Ha ocurrido un error que requiere tu atención.
                        <div className="mt-2 space-x-2">
                          <Button variant="outlined">Resolver</Button>
                          <Button variant="outlined">Ignorar</Button>
                        </div>
                      </AlertDescription>
                    </Alert>

                    <Alert variant="success">
                      <AlertTitle>Actualización Disponible</AlertTitle>
                      <AlertDescription>
                        Hay una nueva versión disponible del sistema.
                        <div className="mt-2 space-x-2">
                          <Button variant="outlined" size="sm">
                            Actualizar Ahora
                          </Button>
                          <Button variant="outlined" size="sm">
                            Recordar más tarde
                          </Button>
                        </div>
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Toaster />
      </div>
    </>
  )
}

export default App
