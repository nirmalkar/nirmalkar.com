import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/LayoutBlog"
import Seo from "../components/SiteSeo"
import { ThemeContext } from "../context/ThemeContext"
import Theme from "../components/Theme"
import NavigationBar from "../components/Navigation"

const BlogPostTemplate = ({ data, location }) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const { isDark } = React.useContext(ThemeContext)
    const { previous, next } = data
    return (
        <>
            <Seo
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <NavigationBar />
            <Theme />
            <Layout location={location} title={siteTitle}>
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
                    <nav className="blog-post-nav">
                        <ul
                            style={{
                                display: `flex`,
                                flexWrap: `wrap`,
                                justifyContent: `space-between`,
                                listStyle: `none`,
                                padding: 0,
                            }}
                        >
                            <li>
                                {previous && (
                                    <Link to={previous.fields.slug} rel="prev">
                                        ← {previous.frontmatter.title}
                                    </Link>
                                )}
                            </li>
                            <li>
                                {next && (
                                    <Link to={next.fields.slug} rel="next">
                                        {next.frontmatter.title} →
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </Layout>
        </>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(
            id: { eq: $id, ne: "28d223e7-7150-59c4-99c8-96f619e4efc3" }
        ) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`
