import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SocialIcons from "../components/Social"

import Bio from "../components/MyBio"
import NavigationBar from "../components/Navigation"
import Seo from "../components/SiteSeo"
import { ThemeContext } from "../context/ThemeContext"
import Jokes from "../components/Jokes"
import Theme from "../components/Theme"

const NirmalkarIndex = ({ data, location }) => {
    // const siteTitle = data.site.siteMetadata?.title || `Title`
    const { idDark, setIsDarkMode } = React.useContext(ThemeContext)
    React.useEffect(() => {
        document.addEventListener("DOMContentLoaded", () => {
            console.log(document)
        })
    }, [])
    return (
        <div>
            <Theme />
            <Seo title="Home" />
            <NavigationBar />
            <div className="home-layout">
                <div className="h-grid">
                    <div>
                        <Bio />
                        <div className="socialIcons">
                            <SocialIcons />
                        </div>
                    </div>
                    <div className="h-grid-item-img">
                        <StaticImage
                            src="../images/profile-pic.jpg"
                            height={600}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Hemant Nirmalkar"
                            imgStyle={{ borderRadius: "50%" }}
                            style={{ borderRadius: "50%" }}
                        />
                    </div>
                </div>
                <div className="joke-container">
                    <Jokes />
                </div>
            </div>
        </div>
    )
}

export default NirmalkarIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
`
