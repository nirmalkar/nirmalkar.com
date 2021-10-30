/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "../context/ThemeContext"

const Bio = () => {
    const [state, setState] = React.useState(false)
    const { isDark, setIsDarkMode } = React.useContext(ThemeContext)
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                    }
                }
            }
        }
    `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author
    // const social = data.site.siteMetadata?.social
    React.useEffect(() => {
        setState(isDark)
    }, [isDark])
    console.log("theme issue", isDark)
    return (
        <div className="bio">
            {author?.name && (
                <div>
                    <div
                        className={
                            !state ? "intro-primary" : "intro-primary-dark"
                        }
                    >
                        Hi,
                    </div>
                    <div
                        className={
                            !state ? "intro-primary" : "intro-primary-dark"
                        }
                    >
                        I am {author.name}
                    </div>{" "}
                    <div
                        className={
                            !state ? "intro-secondary" : "intro-secondary-dark"
                        }
                    >
                        {author?.summary || null}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Bio
