import React, { createContext, useState } from "react"

const initialState = {
    dark: false,
}
export const ThemeContext = createContext(initialState)
export const ThemeProvider = ({ children }) => {
    const getIsDarkFrmLocalStorage = localStorage.getItem("isDark")
        ? localStorage.getItem("isDark")
        : window.matchMedia("(prefers-color-scheme: dark)").matches === true
    const [isDark, setIsDark] = useState(getIsDarkFrmLocalStorage)
    const setIsDarkMode = () => {
        localStorage.setItem("isDark", !isDark)
        setIsDark(!isDark)
    }
    return (
        <ThemeContext.Provider
            value={{
                dark: isDark,
                setIsDarkMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
