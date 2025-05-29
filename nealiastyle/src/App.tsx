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
import { useState } from "react"
import { toast } from "sonner"
import { Plus, ArrowRight, MoreVertical, Settings, User, LogOut, FileEdit } from 'lucide-react'
import { DateRange } from "react-day-picker"

function App() {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  return (
    <>
      <div className="p-8 max-w-7xl mx-auto bg-background">
        <h1 className="text-4xl font-bold mb-8">Componentes NealiaStyle</h1>

        {/* Botones y Acciones */}
        <section className="mb-12 p-6 rounded-lg bg-white shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6">Botones y Acciones</h2>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Button</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Componente Button con diferentes variantes</span>
              </div>
              <div className="space-x-4 flex items-center gap-4 mb-4">
                <Button>Botón Default</Button>
                <Button icon={Plus}>Default con Icono</Button>
                <Button variant="outlined">Botón Outlined</Button>
                <Button variant="outlined" icon={ArrowRight}>Outlined con Icono</Button>
                <Button variant="icon-only" icon={MoreVertical} aria-label="Más opciones" />
              </div>
            </div>

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">DropdownMenu</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Menú desplegable con opciones</span>
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

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Dialog</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Ventana de diálogo modal</span>
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

        {/* Campos de Entrada */}
        <section className="mb-12 p-6 rounded-lg bg-white shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6">Campos de Entrada</h2>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Input</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Campo de entrada de texto</span>
              </div>
              <Input placeholder="Input de ejemplo" />
            </div>

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Textarea</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Campo de texto multilínea</span>
              </div>
              <Textarea placeholder="Textarea de ejemplo" />
            </div>

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Checkbox</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Casilla de verificación</span>
              </div>
              <div className="flex items-center space-x-4">
                <Checkbox id="terms" />
                <label htmlFor="terms">Aceptar términos</label>
              </div>
            </div>

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">RadioGroup</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Grupo de opciones radio</span>
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

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Select</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Menú de selección</span>
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

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Switch</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Interruptor de alternancia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <label htmlFor="airplane-mode">Modo avión</label>
              </div>
            </div>
          </div>
        </section>

        {/* Navegación y Estructura */}
        <section className="mb-12 p-6 rounded-lg bg-white shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6">Navegación y Estructura</h2>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Tabs</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Pestañas de navegación</span>
              </div>
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList>
                  <TabsTrigger value="tab1">Pestaña 1</TabsTrigger>
                  <TabsTrigger value="tab2">Pestaña 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Contenido de la pestaña 1</TabsContent>
                <TabsContent value="tab2">Contenido de la pestaña 2</TabsContent>
              </Tabs>
            </div>

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Card</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Tarjeta con contenido estructurado</span>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Título de la Tarjeta</CardTitle>
                  <CardDescription>Descripción de la tarjeta</CardDescription>
                </CardHeader>
                <CardContent>
                  Contenido principal de la tarjeta
                </CardContent>
                <CardFooter>
                  <Button>Acción</Button>
                </CardFooter>
              </Card>
            </div>

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Sheet</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Paneles deslizables desde diferentes posiciones</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outlined">Sheet Derecha</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Panel Derecho</h3>
                      <p className="text-muted-foreground">Panel que se abre desde la derecha.</p>
                      <div className="grid gap-4">
                        <Input placeholder="Buscar..." />
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar opción" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Opción 1</SelectItem>
                            <SelectItem value="2">Opción 2</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button>Aplicar</Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outlined">Sheet Izquierda</Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Panel Izquierdo</h3>
                      <p className="text-muted-foreground">Panel que se abre desde la izquierda.</p>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Filtros</label>
                          <div className="space-y-2">
                            <Checkbox id="filter1" />
                            <label htmlFor="filter1" className="text-sm ml-2">Filtro 1</label>
                          </div>
                          <div className="space-y-2">
                            <Checkbox id="filter2" />
                            <label htmlFor="filter2" className="text-sm ml-2">Filtro 2</label>
                          </div>
                        </div>
                        <Button className="w-full">Aplicar Filtros</Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outlined">Sheet Superior</Button>
                  </SheetTrigger>
                  <SheetContent side="top" className="h-[50vh]">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Panel Superior</h3>
                      <p className="text-muted-foreground">Panel que se despliega desde arriba.</p>
                      <div className="grid grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Estadísticas</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Contenido de ejemplo</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>Actividad</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Contenido de ejemplo</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outlined">Sheet Inferior</Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[40vh]">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Panel Inferior</h3>
                      <p className="text-muted-foreground">Panel que se despliega desde abajo.</p>
                      <div className="grid gap-4">
                        <Alert>
                          <AlertTitle>Información</AlertTitle>
                          <AlertDescription>
                            Este es un ejemplo de contenido en el panel inferior.
                          </AlertDescription>
                        </Alert>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outlined">Cancelar</Button>
                          <Button>Aceptar</Button>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Alert y Toast</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Ejemplos interactivos de alertas y notificaciones</span>
              </div>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => {
                      toast.success("¡Éxito!", {
                        description: "La operación se completó correctamente.",
                      })
                    }}
                  >
                    Mostrar Toast de Éxito
                  </Button>
                  <Button 
                    variant="outlined"
                    onClick={() => {
                      toast.error("Error", {
                        description: "Algo salió mal. Por favor, inténtalo de nuevo.",
                      })
                    }}
                  >
                    Mostrar Toast de Error
                  </Button>
                  <Button 
                    variant="outlined"
                    onClick={() => {
                      toast.warning("Advertencia", {
                        description: "Hay cambios sin guardar.",
                      })
                    }}
                  >
                    Mostrar Toast de Advertencia
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
                    Mostrar Toast de Proceso
                  </Button>
                </div>

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

        {/* Datos y Visualización */}
        <section className="mb-12 p-6 rounded-lg bg-white shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6">Datos y Visualización</h2>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Table</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Tabla de reglas de granja</span>
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
                <h3 className="text-lg font-semibold">Avatar y Badge</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Avatar de usuario y etiquetas de estado</span>
              </div>
              <div className="space-y-6">
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
                <h3 className="text-lg font-semibold">Calendar</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Selector de fecha</span>
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

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Slider</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Control deslizante</span>
              </div>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
          </div>
        </section>

        {/* Feedback y Estado */}
        <section className="mb-12 p-6 rounded-lg bg-white shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6">Feedback y Estado</h2>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Skeleton</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Indicador de carga</span>
              </div>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">Pagination</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Control de paginación</span>
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

            <Separator className="my-8 bg-gray-200" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-lg font-semibold">ScrollArea</h3>
                <Separator orientation="vertical" className="h-4 bg-gray-200" />
                <span className="text-sm text-muted-foreground">Área con desplazamiento vertical y horizontal</span>
              </div>
              <div className="space-y-4">
                <div className="flex gap-8">
                  {/* Scroll Vertical */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Scroll Vertical</h4>
                    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                      <div className="space-y-4">
                        <p>Contenido scrolleable vertical</p>
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div key={i} className="text-sm">
                            Item {i + 1}
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Scroll Horizontal */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Scroll Horizontal</h4>
                    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                      <div className="flex gap-4">
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div
                            key={i}
                            className="shrink-0 rounded-md border border-gray-200 bg-white p-4"
                          >
                            <div className="space-y-2">
                              <div className="h-20 w-40 rounded-md bg-gray-100" />
                              <div className="h-4 w-20 rounded-md bg-gray-100" />
                              <div className="h-4 w-16 rounded-md bg-gray-100" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>

                {/* Scroll en ambas direcciones */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Scroll en Ambas Direcciones</h4>
                  <ScrollArea className="h-[400px] w-[350px] rounded-md border p-4">
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
            </div>
          </div>
        </section>
      </div>
      <Toaster />
    </>
  )
}

export default App
