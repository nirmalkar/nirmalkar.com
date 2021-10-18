import React from "react"

import Sun from "../images/Sun.js"
import Moon from "../images/Moon.svg"
import { ThemeContext } from "../context/ThemeContext"

function Theme() {
    const { isDark, setIsDarkMode } = React.useContext(ThemeContext)
    return (
        <div className="theme-button-container">
            {!isDark ? (
                <div className="theme-btn-sun" onClick={() => setIsDarkMode()}>
                    <Sun />
                </div>
            ) : (
                <div className="theme-btn-moon">
                    <img
                        className="moon"
                        onClick={() => setIsDarkMode()}
                        src={Moon}
                        alt="moon"
                    />
                </div>
            )}
        </div>
    )
}

export default Theme
