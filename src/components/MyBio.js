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
    const [dark, setDark] = React.useState(false)
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
        setDark(isDark)
    }, [isDark])

    return (
        <div className="bio">
            {author?.name && (
                <div>
                    <div
                        className={
                            dark ? "intro-primary-dark" : "intro-primary"
                        }
                    >
                        Hi, <br /> I'm {author.name}
                    </div>
                    <div
                        className={
                            dark ? "intro-secondary-dark" : "intro-secondary"
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
