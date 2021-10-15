// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import "./src/scss/main.scss"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    return <ThemeProvider>{element}</ThemeProvider>
}
