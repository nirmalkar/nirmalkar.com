import React from "react"

import Instagram from "../images/social-icons/ig.js"
import Github from "../images/social-icons/gh.js"
import LinkedIn from "../images/social-icons/in.js"
import Twitter from "../images/social-icons/t.js"

function SocialIcons() {
    const icons = (
        <>
            <a
                href="https://www.linkedin.com/in/nirmalkar/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <LinkedIn color={"#231f20"} />
                </div>
            </a>
            <a
                href="https://github.com/nirmalkar"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <Github color={"#231f20"} />
                </div>
            </a>
            <a
                href="https://twitter.com/nirmalkar_"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <Twitter color={"#231f20"} />
                </div>
            </a>
            <a
                href="https://www.instagram.com/monty_davinci/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <Instagram color={"#231f20"} />
                </div>
            </a>
        </>
    )
    return <div className="social-icons">{icons}</div>
}

export default SocialIcons
