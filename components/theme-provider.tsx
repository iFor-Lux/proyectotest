'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  useTheme,
  type ThemeProviderProps,
} from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { theme, setTheme } = useTheme()

  return (
    <NextThemesProvider {...props}>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/10 dark:bg-gray-200/10 hover:bg-gray-800/20 dark:hover:bg-gray-200/20 transition-colors"
        >
          {theme === 'light' ? (
            <>
              <Moon className="w-5 h-5" />
              <span className="text-sm">Modo Noche</span>
            </>
          ) : (
            <>
              <Sun className="w-5 h-5" />
              <span className="text-sm">Modo Día</span>
            </>
          )}
        </button>
      </div>
      {children}
    </NextThemesProvider>
  )
}
