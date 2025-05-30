import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps extends React.ComponentProps<"nav"> {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination = ({ 
  className,
  totalPages,
  currentPage,
  onPageChange,
  ...props
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    >
      <ul className="flex flex-row items-center gap-1">
        <li>
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] text-sm text-black transition-colors hover:text-primary active:text-primary-pressed disabled:pointer-events-none disabled:opacity-50"
            aria-label="Ir a página anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </li>
        
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-[4px] text-sm transition-colors",
                currentPage === page 
                  ? "bg-secondary text-black" 
                  : "text-black hover:text-primary active:text-primary-pressed"
              )}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] text-sm text-black transition-colors hover:text-primary active:text-primary-pressed disabled:pointer-events-none disabled:opacity-50"
            aria-label="Ir a página siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export { Pagination }
