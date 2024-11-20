import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const currentTheme = localStorage.getItem('darkMode')
        return currentTheme ? JSON.parse(currentTheme) : false
    })

    const toggleTheme = (checked) => {
        setIsDarkMode(checked)
    }

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
        const theme = isDarkMode ? 'dark-theme' : 'light-theme'
        document.documentElement.setAttribute('data-theme', theme)

        const themeLink = document.getElementById('theme-css-link')
        themeLink.href = isDarkMode ? "src/styles/dark-theme.css" : "src/styles/light-theme.css"
    }, [isDarkMode])


    const value = {
        isDarkMode,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
          {children}
        </ThemeContext.Provider>
      )  
}

export default ThemeContext
