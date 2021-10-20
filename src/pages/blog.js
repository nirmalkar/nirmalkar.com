import * as React from "react"
import { Link, graphql } from "gatsby"

import BlogLayout from "../components/LayoutBlog"
import Seo from "../components/SiteSeo"
import NavigationBar from "../components/Navigation"
import { ThemeContext } from "../context/ThemeContext"
import { navigate } from "@reach/router"
import Theme from "../components/Theme"

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const { isDark } = React.useContext(ThemeContext)
    const posts = data.allMarkdownRemark.nodes

    if (posts.length === 0) {
        return (
            <BlogLayout location={location} title={siteTitle}>
                <Seo title="Blog Posts" />
                <p>
                    No blog posts found. Add markdown posts to "content/blog"
                    (or the directory you specified for the
                    "gatsby-source-filesystem" plugin in gatsby-config.js).
                </p>
            </BlogLayout>
        )
    }

    return (
        <>
            <Seo title="Blog Posts" />
            <NavigationBar />
            <Theme />
            <div className="blog-list-container">
                <ol className="blog-list-container-ol">
                    {posts.map(post => {
                        const title = post.frontmatter.title || post.fields.slug
                        return (
                            <Link
                                className="blog-post-link"
                                to={post.fields.slug}
                                itemProp="url"
                            >
                                <li
                                    onClick={() =>
                                        navigate(`${post.fields.slug}`)
                                    }
                                    key={post.fields.slug}
                                    className="blog-list-item"
                                >
                                    <article
                                        className="post-list-item"
                                        itemScope
                                        itemType="http://schema.org/Article"
                                    >
                                        <header>
                                            <h2>
                                                <span
                                                    itemProp="headline"
                                                    className={
                                                        isDark
                                                            ? "blog-color-dark-headline"
                                                            : "blog-color-light-headLine"
                                                    }
                                                >
                                                    {title}
                                                </span>
                                            </h2>
                                            <small
                                                className={
                                                    isDark
                                                        ? "blog-color-dark-text"
                                                        : "blog-color-light-text"
                                                }
                                            >
                                                {post.frontmatter.date}
                                            </small>
                                        </header>
                                        <section>
                                            <p
                                                className={
                                                    isDark
                                                        ? "blog-color-dark-text"
                                                        : "blog-color-light-text"
                                                }
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        post.frontmatter
                                                            .description ||
                                                        post.excerpt,
                                                }}
                                                itemProp="description"
                                            />
                                        </section>
                                    </article>
                                </li>
                            </Link>
                        )
                    })}
                </ol>
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
