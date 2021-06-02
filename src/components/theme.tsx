// this one doesn't really make sense to render on its own, so don't bother.

import * as React from 'react'

type Theme = 'light' | 'dark'
const ThemeContext = React.createContext<
  readonly [Theme, React.Dispatch<React.SetStateAction<Theme>>] | undefined
>(undefined)

function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme should be used within a ThemeProvider')
  }
  return context
}

function ThemeProvider({
  initialTheme = 'light',
  ...props
}: {
  initialTheme?: Theme
  children: React.ReactNode
}) {
  const [theme, setTheme] = React.useState<Theme>(initialTheme)
  const value = [theme, setTheme] as const
  return <ThemeContext.Provider value={value} {...props} />
}

export {useTheme, ThemeProvider}
export type {Theme}
