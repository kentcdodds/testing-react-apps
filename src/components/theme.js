// this one doesn't really make sense to render on its own, so don't bother.

import React from 'react'

const ThemeContext = React.createContext()

function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme should be used within a ThemeProvider')
  }
  return context
}

function ThemeProvider({initialTheme = 'light', ...props}) {
  const [theme, setTheme] = React.useState(initialTheme)
  return <ThemeContext.Provider value={[theme, setTheme]} {...props} />
}

export {useTheme, ThemeProvider}
