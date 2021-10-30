import React, { createContext, useEffect, useState } from "react"

const initialState = {
    dark: false,
}
export const ThemeContext = createContext(initialState)
export const ThemeProvider = ({ children }) => {
    const body = document.querySelector("body")
    const getIsDarkFrmLocalStorage = localStorage.getItem("isDark")
        ? JSON.parse(localStorage.getItem("isDark"))
        : window.matchMedia("(prefers-color-scheme: dark)").matches === true
    const [isDark, setIsDark] = useState(getIsDarkFrmLocalStorage)

    useEffect(() => {
        setIsDark(getIsDarkFrmLocalStorage)
    }, [getIsDarkFrmLocalStorage])

    useEffect(() => {
        if (isDark === true) {
            body.style.background = "#313239"
        } else {
            body.style.background = "#fff"
        }
    }, [])
    const setIsDarkMode = () => {
        localStorage.setItem("isDark", !isDark)
        setIsDark(!isDark)
        if (isDark === true) {
            body.style.background = "#fff"
        } else {
            body.style.background = "#313239"
        }
    }
    return (
        <ThemeContext.Provider
            value={{
                isDark,
                setIsDarkMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
