import React, { createContext, useState } from "react"

const initialState = {
    dark: false,
}
export const ThemeContext = createContext(initialState)

const supportsDarkMode = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(supportsDarkMode())
    return (
        <ThemeContext.Provider
            value={{
                dark: isDark,
                setIsDark,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
