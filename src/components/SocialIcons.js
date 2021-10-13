import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function SocialIcons() {
    const icons = (
        <>
            <div className="icon">
                <a
                    href="https://www.linkedin.com/in/nirmalkar/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <StaticImage
                        src="../images/social-icons/in.png"
                        height={24}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="linkedIn"
                    />
                </a>
            </div>
            <a
                href="https://github.com/nirmalkar"
                target="_blank"
                rel="noreferrer"
            >
                <div className="icon">
                    <StaticImage
                        src="../images/social-icons/gh.png"
                        height={24}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="github"
                    />
                </div>
            </a>
            <a href="social.linkedIn" target="_blank" rel="noreferrer">
                <div className="icon">
                    <StaticImage
                        src="../images/social-icons/ig.png"
                        height={24}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="instagram"
                    />
                </div>
            </a>
        </>
    )
    return <div className="social-icons">{icons}</div>
}

export default SocialIcons
