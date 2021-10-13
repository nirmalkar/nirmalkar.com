import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SocialIcons from "../components/socialIcons"

import Bio from "../components/Bio"
import NavigationBar from "../components/NavigationBar"
import Seo from "../components/Seo"

const BlogIndex = ({ data, location }) => {
    // const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            <Seo title="Home | Portfolio" />
            <NavigationBar />
            <div className="home-layout">
                <div className="h-grid">
                    <div>
                        <Bio />
                        <SocialIcons />
                    </div>
                    <div className="h-grid-item-img">
                        <StaticImage
                            src="../images/profile-pic.jpg"
                            height={600}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Hemant Nirmalkar"
                            style={{ borderRadius: "50%" }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogIndex

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
