import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react'

type IThemeContextProps = {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContextProps | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const themeLocal = localStorage.getItem('theme') as
        | 'dark'
        | 'light'
        | null

      if (themeLocal === 'dark' || themeLocal === 'light') {
        return themeLocal
      }
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    localStorage.setItem('theme', newTheme)

    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)

    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
