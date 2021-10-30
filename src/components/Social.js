import React from "react"

import Instagram from "../images/social-icons/ig.js"
import Github from "../images/social-icons/gh.js"
import LinkedIn from "../images/social-icons/in.js"
import Twitter from "../images/social-icons/t.js"
import { ThemeContext } from "../context/ThemeContext.js"

function SocialIcons() {
    const { isDark } = React.useContext(ThemeContext)
    console.log("theme issue", isDark)
    const icons = (
        <>
            <a
                href="https://www.linkedin.com/in/nirmalkar/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <LinkedIn
                        width={"100"}
                        color={isDark ? "rgb(240, 240, 240)" : "#231f20"}
                    />
                </div>
            </a>
            <a
                href="https://github.com/nirmalkar"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <Github width={"100"} color={isDark ? "#fff" : "#231f20"} />
                </div>
            </a>
            <a
                href="https://twitter.com/nirmalkar_"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <Twitter
                        width={"100"}
                        color={isDark ? "#fff" : "#231f20"}
                    />
                </div>
            </a>
            <a
                href="https://www.instagram.com/monty_davinci/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <Instagram
                        width={"100"}
                        color={isDark ? "#fff" : "#231f20"}
                    />
                </div>
            </a>
        </>
    )
    return <div className="social-icons">{icons}</div>
}

export default SocialIcons
