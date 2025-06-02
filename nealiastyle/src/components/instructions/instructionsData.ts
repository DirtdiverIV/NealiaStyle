export interface ComponentInstruction {
  name: string;
  description: string;
  example: string;
  props: Array<{
    name: string;
    type: string;
    description: string;
  }>;
}

export const instructionsData: Record<string, ComponentInstruction> = {
  Button: {
    name: "Button",
    description: "Button UI component reutilizable con variantes y tamaños personalizables. Basado en Radix UI y compatible con iconos.",
    example: `import { Button } from "./button";

<Button variant="default" size="lg">Guardar</Button>
<Button variant="outlined" icon={Icono}>Con icono</Button>`,
    props: [
      { name: "variant", type: '"default" | "outlined" | "icon-only" | "neutral" | "neutral-outlined"', description: "Variante visual del botón" },
      { name: "size", type: '"default" | "sm" | "lg" | "icon"', description: "Tamaño del botón" },
      { name: "icon", type: "LucideIcon", description: "Icono opcional a mostrar" },
      { name: "asChild", type: "boolean", description: "Usar como Slot en vez de <button>" },
      { name: "className", type: "string", description: "Clases personalizadas" },
      { name: "children", type: "ReactNode", description: "Contenido del botón" }
    ]
  },

  Input: {
    name: "Input",
    description: "Input UI component reutilizable para formularios. Permite personalizar estilos y props estándar de un input HTML.",
    example: `import { Input } from "./input";

<Input type="text" placeholder="Nombre" />`,
    props: [
      { name: "type", type: "string", description: "Tipo de input (text, password, email, etc)" },
      { name: "className", type: "string", description: "Clases personalizadas" },
      { name: "placeholder", type: "string", description: "Texto de marcador de posición" }
    ]
  },

  Select: {
    name: "Select",
    description: "Select UI component basado en Radix UI. Permite seleccionar una opción de una lista desplegable con soporte para grupos, labels y scroll.",
    example: `import { Select, SelectTrigger, SelectContent, SelectItem } from "./select";

<Select>
  <SelectTrigger>Selecciona una opción</SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Uno</SelectItem>
    <SelectItem value="2">Dos</SelectItem>
  </SelectContent>
</Select>`,
    props: [
      { name: "children", type: "ReactNode", description: "Elementos hijos (trigger, content, items)" },
      { name: "className", type: "string", description: "Clases personalizadas" },
      { name: "value", type: "string", description: "Valor seleccionado" },
      { name: "onValueChange", type: "(value: string) => void", description: "Callback al cambiar valor" }
    ]
  },

  Dialog: {
    name: "Dialog",
    description: "Dialog UI component basado en Radix UI. Permite mostrar contenido en un modal superpuesto, con soporte para header, footer y cierre.",
    example: `import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "./dialog";

<Dialog>
  <DialogTrigger>Mostrar modal</DialogTrigger>
  <DialogContent>
    <DialogTitle>Título</DialogTitle>
    <DialogDescription>Descripción</DialogDescription>
    <div>Contenido del modal</div>
  </DialogContent>
</Dialog>`,
    props: [
      { name: "open", type: "boolean", description: "Controla la visibilidad del modal" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback al abrir/cerrar" },
      { name: "className", type: "string", description: "Clases personalizadas" },
      { name: "children", type: "ReactNode", description: "Elementos hijos (trigger, content, etc)" }
    ]
  },

  Card: {
    name: "Card",
    description: "Card UI component para mostrar contenido agrupado en un contenedor estilizado. Incluye subcomponentes para header, title, description, content y footer.",
    example: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descripción</CardDescription>
  </CardHeader>
  <CardContent>Contenido principal</CardContent>
  <CardFooter>Pie de tarjeta</CardFooter>
</Card>`,
    props: [
      { name: "className", type: "string", description: "Clases personalizadas" },
      { name: "children", type: "ReactNode", description: "Contenido del card o subcomponentes" }
    ]
  },

  Badge: {
    name: "Badge",
    description: "Badge UI component para mostrar etiquetas, tags y estados. Incluye variantes para tags y estados con opciones de cierre.",
    example: `import { Badge } from "./badge";

<Badge variant="tag-rounded">Tag Redondeado</Badge>
<Badge variant="status-completed">Finalizada</Badge>
<Badge variant="tag-rounded-closable" onClose={() => console.log('cerrado')}>
  Cerrable
</Badge>`,
    props: [
      { name: "variant", type: '"tag-rounded" | "tag-square" | "tag-rounded-closable" | "tag-square-closable" | "status-completed" | "status-in-progress" | "status-pending"', description: "Variante visual del badge" },
      { name: "onClose", type: "() => void", description: "Callback para cerrar (solo variantes closable)" },
      { name: "className", type: "string", description: "Clases personalizadas" },
      { name: "children", type: "ReactNode", description: "Contenido del badge" }
    ]
  },

  Calendar: {
    name: "Calendar",
    description: "Calendar UI component basado en React Day Picker. Permite seleccionar fechas individuales o rangos con navegación entre meses.",
    example: `import { Calendar } from "./calendar";

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>

<Calendar
  mode="range"
  selected={dateRange}
  onSelect={setDateRange}
/>`,
    props: [
      { name: "mode", type: '"single" | "multiple" | "range"', description: "Modo de selección de fechas" },
      { name: "selected", type: "Date | DateRange", description: "Fecha(s) seleccionada(s)" },
      { name: "onSelect", type: "(date: Date | DateRange) => void", description: "Callback al seleccionar fecha" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  Checkbox: {
    name: "Checkbox",
    description: "Checkbox UI component basado en Radix UI. Casilla de verificación para selección múltiple con estados checked, unchecked e indeterminate.",
    example: `import { Checkbox } from "./checkbox";

<Checkbox id="terms" />
<label htmlFor="terms">Aceptar términos</label>

<Checkbox checked={isChecked} onCheckedChange={setIsChecked} />`,
    props: [
      { name: "checked", type: "boolean | 'indeterminate'", description: "Estado del checkbox" },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback al cambiar estado" },
      { name: "disabled", type: "boolean", description: "Desactivar el checkbox" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  Textarea: {
    name: "Textarea",
    description: "Textarea UI component para entrada de texto multilínea. Perfecto para formularios que requieren contenido extenso.",
    example: `import { Textarea } from "./textarea";

<Textarea placeholder="Escribe tu mensaje aquí..." />
<Textarea rows={5} value={content} onChange={(e) => setContent(e.target.value)} />`,
    props: [
      { name: "placeholder", type: "string", description: "Texto de marcador de posición" },
      { name: "rows", type: "number", description: "Número de filas visibles" },
      { name: "value", type: "string", description: "Valor del textarea" },
      { name: "onChange", type: "(e: ChangeEvent) => void", description: "Callback al cambiar contenido" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  Alert: {
    name: "Alert",
    description: "Alert UI component para mostrar mensajes importantes, notificaciones y advertencias. Incluye variantes para diferentes tipos de alertas.",
    example: `import { Alert, AlertTitle, AlertDescription } from "./alert";

<Alert>
  <AlertTitle>Información</AlertTitle>
  <AlertDescription>Este es un mensaje informativo.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Ha ocurrido un error.</AlertDescription>
</Alert>`,
    props: [
      { name: "variant", type: '"default" | "destructive" | "warning" | "success"', description: "Variante visual de la alerta" },
      { name: "className", type: "string", description: "Clases personalizadas" },
      { name: "children", type: "ReactNode", description: "Contenido de la alerta (título, descripción)" }
    ]
  },

  Avatar: {
    name: "Avatar",
    description: "Avatar UI component para mostrar imágenes de perfil de usuario con fallback automático a iniciales.",
    example: `import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

<Avatar>
  <AvatarImage src="https://github.com/usuario.png" alt="Usuario" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
    props: [
      { name: "className", type: "string", description: "Clases personalizadas" },
      { name: "children", type: "ReactNode", description: "AvatarImage y AvatarFallback" }
    ]
  },

  Switch: {
    name: "Switch",
    description: "Switch UI component basado en Radix UI. Interruptor para alternar entre dos estados (encendido/apagado).",
    example: `import { Switch } from "./switch";

<Switch id="notifications" />
<label htmlFor="notifications">Notificaciones</label>

<Switch checked={isEnabled} onCheckedChange={setIsEnabled} />`,
    props: [
      { name: "checked", type: "boolean", description: "Estado del switch" },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback al cambiar estado" },
      { name: "disabled", type: "boolean", description: "Desactivar el switch" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  Table: {
    name: "Table",
    description: "Table UI component para mostrar datos tabulares. Incluye subcomponentes para header, body, rows y cells con estilos consistentes.",
    example: `import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Nombre</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Juan</TableCell>
      <TableCell>juan@email.com</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    props: [
      { name: "className", type: "string", description: "Clases personalizadas" },
      { name: "children", type: "ReactNode", description: "TableHeader, TableBody y otros subcomponentes" }
    ]
  },

  Tabs: {
    name: "Tabs",
    description: "Tabs UI component basado en Radix UI. Sistema de pestañas para organizar contenido en secciones navegables.",
    example: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Pestaña 1</TabsTrigger>
    <TabsTrigger value="tab2">Pestaña 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Contenido 1</TabsContent>
  <TabsContent value="tab2">Contenido 2</TabsContent>
</Tabs>`,
    props: [
      { name: "defaultValue", type: "string", description: "Valor por defecto de la pestaña activa" },
      { name: "value", type: "string", description: "Valor controlado de la pestaña activa" },
      { name: "onValueChange", type: "(value: string) => void", description: "Callback al cambiar pestaña" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  Accordion: {
    name: "Accordion",
    description: "Accordion UI component basado en Radix UI. Permite mostrar/ocultar contenido en secciones colapsables con animaciones suaves.",
    example: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>¿Qué es esto?</AccordionTrigger>
    <AccordionContent>
      Esta es la respuesta al contenido colapsable.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
    props: [
      { name: "type", type: '"single" | "multiple"', description: "Tipo de acordeón (uno o múltiples abiertos)" },
      { name: "collapsible", type: "boolean", description: "Si permite colapsar todos los elementos" },
      { name: "defaultValue", type: "string | string[]", description: "Valores por defecto abiertos" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  DropdownMenu: {
    name: "DropdownMenu",
    description: "DropdownMenu UI component basado en Radix UI. Menú desplegable para acciones contextuales con soporte para iconos y separadores.",
    example: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./dropdown-menu";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="icon-only" icon={MoreVertical} />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem icon={Edit}>Editar</DropdownMenuItem>
    <DropdownMenuItem icon={Delete}>Eliminar</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    props: [
      { name: "children", type: "ReactNode", description: "Trigger y content del menú" },
      { name: "open", type: "boolean", description: "Controla la visibilidad del menú" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback al cambiar visibilidad" }
    ]
  },

  RadioGroup: {
    name: "RadioGroup",
    description: "RadioGroup UI component basado en Radix UI. Grupo de opciones de radio para selección única entre múltiples opciones.",
    example: `import { RadioGroup, RadioGroupItem } from "./radio-group";

<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <label htmlFor="option1">Opción 1</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <label htmlFor="option2">Opción 2</label>
  </div>
</RadioGroup>`,
    props: [
      { name: "defaultValue", type: "string", description: "Valor por defecto seleccionado" },
      { name: "value", type: "string", description: "Valor controlado seleccionado" },
      { name: "onValueChange", type: "(value: string) => void", description: "Callback al cambiar valor" },
      { name: "disabled", type: "boolean", description: "Desactivar todo el grupo" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  Slider: {
    name: "Slider",
    description: "Slider UI component basado en Radix UI. Control deslizante para seleccionar valores numéricos dentro de un rango.",
    example: `import { Slider } from "./slider";

<Slider defaultValue={[50]} max={100} step={1} />

<Slider
  value={value}
  onValueChange={setValue}
  min={0}
  max={100}
  step={5}
/>`,
    props: [
      { name: "value", type: "number[]", description: "Valores actuales del slider" },
      { name: "defaultValue", type: "number[]", description: "Valores por defecto del slider" },
      { name: "onValueChange", type: "(value: number[]) => void", description: "Callback al cambiar valor" },
      { name: "min", type: "number", description: "Valor mínimo" },
      { name: "max", type: "number", description: "Valor máximo" },
      { name: "step", type: "number", description: "Incremento del slider" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  Skeleton: {
    name: "Skeleton",
    description: "Skeleton UI component para mostrar indicadores de carga animados. Útil para representar contenido mientras se está cargando.",
    example: `import { Skeleton } from "./skeleton";

<Skeleton className="h-4 w-[200px]" />

<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`,
    props: [
      { name: "className", type: "string", description: "Clases personalizadas para forma y tamaño" }
    ]
  },

  Pagination: {
    name: "Pagination",
    description: "Pagination UI component para navegar entre páginas de contenido. Incluye botones de anterior/siguiente y números de página.",
    example: `import { Pagination } from "./pagination";

<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => setCurrentPage(page)}
/>`,
    props: [
      { name: "currentPage", type: "number", description: "Página actual" },
      { name: "totalPages", type: "number", description: "Total de páginas" },
      { name: "onPageChange", type: "(page: number) => void", description: "Callback al cambiar página" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  ScrollArea: {
    name: "ScrollArea",
    description: "ScrollArea UI component basado en Radix UI. Área de desplazamiento personalizada con scroll suave y controles estilizados.",
    example: `import { ScrollArea } from "./scroll-area";

<ScrollArea className="h-[400px] w-full rounded-md border p-4">
  <div className="w-[800px]">
    <p>Contenido que requiere scroll horizontal y vertical...</p>
  </div>
</ScrollArea>`,
    props: [
      { name: "className", type: "string", description: "Clases personalizadas para tamaño y estilo" },
      { name: "children", type: "ReactNode", description: "Contenido que se puede desplazar" }
    ]
  },

  Separator: {
    name: "Separator",
    description: "Separator UI component basado en Radix UI. Línea separadora para dividir contenido visual, horizontal o vertical.",
    example: `import { Separator } from "./separator";

<div>
  <p>Contenido superior</p>
  <Separator className="my-4" />
  <p>Contenido inferior</p>
</div>

<div className="flex">
  <p>Izquierda</p>
  <Separator orientation="vertical" className="mx-4" />
  <p>Derecha</p>
</div>`,
    props: [
      { name: "orientation", type: '"horizontal" | "vertical"', description: "Orientación del separador" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  Hero: {
    name: "Hero",
    description: "Hero UI component personalizado para mostrar contenido destacado con imagen de fondo, overlay y texto de bienvenida.",
    example: `import { Hero } from "./hero";

<Hero 
  userName="David Gómez" 
  welcomeText="Bienvenido" 
  className="rounded-xl min-h-[300px]" 
/>`,
    props: [
      { name: "userName", type: "string", description: "Nombre del usuario a mostrar" },
      { name: "welcomeText", type: "string", description: "Texto de bienvenida" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  SearchInput: {
    name: "SearchInput",
    description: "SearchInput UI component personalizado para búsqueda con icono integrado y callback de búsqueda.",
    example: `import { SearchInput } from "./searchinput";

<SearchInput 
  placeholder="Buscar sección..." 
  onSearch={(term) => console.log('Buscando:', term)} 
/>`,
    props: [
      { name: "placeholder", type: "string", description: "Texto de marcador de posición" },
      { name: "onSearch", type: "(searchTerm: string) => void", description: "Callback al realizar búsqueda" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  SectionCard: {
    name: "SectionCard",
    description: "SectionCard UI component personalizado para mostrar tarjetas de sección con icono y nombre.",
    example: `import { SectionCard } from "./sectioncard";
import { Home } from "lucide-react";

<SectionCard 
  icon={Home} 
  name="Inicio" 
  size="md" 
/>`,
    props: [
      { name: "icon", type: "LucideIcon", description: "Icono de la sección" },
      { name: "name", type: "string", description: "Nombre de la sección" },
      { name: "size", type: '"sm" | "md" | "lg"', description: "Tamaño de la tarjeta" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  },

  SectionFooter: {
    name: "SectionFooter",
    description: "SectionFooter UI component personalizado para navegación inferior con secciones activas.",
    example: `import { SectionFooter } from "./sectionfooter";
import { Home, User, Settings } from "lucide-react";

const items = [
  { icon: Home, name: "Inicio", id: "home" },
  { icon: User, name: "Perfil", id: "profile" },
  { icon: Settings, name: "Ajustes", id: "settings" }
];

<SectionFooter
  items={items}
  activeSection="home"
  onSectionChange={setActiveSection}
/>`,
    props: [
      { name: "items", type: "SectionFooterItem[]", description: "Array de elementos de navegación" },
      { name: "activeSection", type: "string", description: "ID de la sección activa" },
      { name: "onSectionChange", type: "(sectionId: string) => void", description: "Callback al cambiar sección" },
      { name: "className", type: "string", description: "Clases personalizadas" }
    ]
  }
}; 