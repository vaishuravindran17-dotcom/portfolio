import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('thinking')

  useEffect(() => {
    document.body.className = `theme-${mode}`
  }, [mode])

  const toggle = () => setMode(m => (m === 'feeling' ? 'thinking' : 'feeling'))

  return (
    <ThemeContext.Provider value={{ mode, toggle, isFeeling: mode === 'feeling' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
