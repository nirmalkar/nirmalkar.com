import React from "react"

import Instagram from "../images/social-icons/ig.svg"
import Github from "../images/social-icons/gh.svg"
import LinkedIn from "../images/social-icons/in.svg"

function SocialIcons() {
    const icons = (
        <>
            <a
                href="https://www.linkedin.com/in/nirmalkar/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <img src={LinkedIn} alt="LinkedIn" />
                </div>
            </a>
            <a
                href="https://github.com/nirmalkar"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <img src={Github} alt="Github" />
                </div>
            </a>
            <a
                href="https://www.instagram.com/monty_davinci/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <img src={Instagram} alt="instagram" />
                </div>
            </a>
        </>
    )
    return <div className="social-icons">{icons}</div>
}

export default SocialIcons
