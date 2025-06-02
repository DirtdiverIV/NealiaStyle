import * as React from "react"
import { useState } from "react"
import { Search, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * SearchInput UI component para búsquedas con input y botón de acción.
 * Permite buscar texto y limpiar el campo fácilmente.
 *
 * ## Ejemplo de uso:
 *
 * ```tsx
 * import { SearchInput } from "./searchinput";
 *
 * <SearchInput placeholder="Buscar..." onSearch={fn} onClear={fn} />
 * ```
 *
 * ## Props principales:
 * - `placeholder`: string — Texto del placeholder.
 * - `onSearch`: (searchTerm: string) => void — Callback al buscar.
 * - `onClear`: () => void — Callback al limpiar.
 * - `defaultValue`: string — Valor inicial.
 * - `className`: string — Clases personalizadas.
 */

interface SearchInputProps extends Omit<React.ComponentProps<"input">, 'onChange' | 'value'> {
  placeholder?: string
  onSearch?: (searchTerm: string) => void
  onClear?: () => void
  defaultValue?: string
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, placeholder = "Buscar...", onSearch, onClear, defaultValue = "", ...props }, ref) => {
    const [searchValue, setSearchValue] = useState(defaultValue)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setSearchValue(value)
      
      // Si se vacía el input, ejecutar onClear
      if (value === "" && onClear) {
        onClear()
      }
    }

    const handleSearch = () => {
      if (searchValue.trim() && onSearch) {
        onSearch(searchValue.trim())
      }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearch()
      }
    }

    return (
      <div className="relative w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5" style={{ color: '#0A0A0A' }} />
        <input
          className={cn(
            "flex h-11 w-full rounded-[24px] border border-gray-300 bg-white pl-12 py-2 text-base shadow-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            searchValue ? "pr-12" : "pr-4",
            className
          )}
          style={{ color: '#0A0A0A' }}
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          ref={ref}
          {...props}
        />
        
        {/* Botón de búsqueda que aparece cuando hay texto */}
        {searchValue && (
          <button
            onClick={handleSearch}
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors",
              className
            )}
            type="button"
          >
            <ArrowRight className="size-5" style={{ color: '#0A0A0A' }} />
          </button>
        )}
      </div>
    )
  }
)

SearchInput.displayName = "SearchInput"

export { SearchInput } 