import React from "react"
import { Link, graphql } from "gatsby"

import Seo from "../components/SiteSeo"
import NavigationBar from "../components/Navigation"
import Theme from "../components/Theme"
import BlogLayout from "../components/LayoutBlog"
import { ThemeContext } from "../context/ThemeContext"

function About({ data, location }) {
    const post = data?.allMarkdownRemark.nodes[0]
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const { isDark } = React.useContext(ThemeContext)
    return (
        <>
            <Seo title="About" />
            <NavigationBar />
            <Theme />
            <BlogLayout location={location} title={siteTitle}>
                <div className="post-container">
                    <article
                        className={isDark ? "post-dark" : ""}
                        itemScope
                        itemType="http://schema.org/Article"
                    >
                        <header>
                            <h1
                                className={
                                    isDark
                                        ? "post-heading-dark"
                                        : "post-heading"
                                }
                                itemProp="headline"
                            >
                                {post.frontmatter.title}
                            </h1>
                            <p>{post.frontmatter.date}</p>
                        </header>
                        <section
                            dangerouslySetInnerHTML={{ __html: post.html }}
                            itemProp="articleBody"
                        />
                        <hr />
                        <footer></footer>
                    </article>
                </div>
            </BlogLayout>
        </>
    )
}

export default About

export const pageQuery = graphql`
    query About {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            filter: { frontmatter: { title: { eq: "About Me" } } }
            sort: { fields: frontmatter___title, order: ASC }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                }
                fields {
                    slug
                }
                html
            }
        }
    }
`
