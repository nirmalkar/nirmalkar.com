import React, { createContext, useState } from "react"

import { isBrowser } from "../utils/index"

const initialState = {
    dark: false,
}
export const ThemeContext = createContext(initialState)
const supportsDarkMode = () => {
    if (!isBrowser) {
        return
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches === true
}
export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(isBrowser && supportsDarkMode())
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
