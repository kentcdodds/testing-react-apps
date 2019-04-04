import React from 'react'

const ThemeContext = React.createContext()

function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme should be used within a ThemeProvider')
  }
  return context
}

function ThemeProvider(props) {
  const [theme, setTheme] = React.useState('light')
  return <ThemeContext.Provider value={[theme, setTheme]} {...props} />
}

export {useTheme, ThemeProvider}
