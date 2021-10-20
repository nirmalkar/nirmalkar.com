import * as React from "react"
import { Link, graphql } from "gatsby"

import BlogLayout from "../components/LayoutBlog"
import Seo from "../components/SiteSeo"
import NavigationBar from "../components/Navigation"
import { ThemeContext } from "../context/ThemeContext"

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
            <div className="blog-list-container">
                <ol className="blog-list-container-ol">
                    {posts.map(post => {
                        const title = post.frontmatter.title || post.fields.slug
                        return (
                            <li
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
                                            <Link
                                                to={post.fields.slug}
                                                itemProp="url"
                                            >
                                                <span
                                                    itemProp="headline"
                                                    className={
                                                        isDark
                                                            ? ""
                                                            : "blog-color-dark-headline"
                                                    }
                                                >
                                                    {title}
                                                </span>
                                            </Link>
                                        </h2>
                                        <small
                                            className={
                                                isDark
                                                    ? ""
                                                    : "blog-color-dark-text"
                                            }
                                        >
                                            {post.frontmatter.date}
                                        </small>
                                    </header>
                                    <section>
                                        <p
                                            className={
                                                isDark
                                                    ? ""
                                                    : "blog-color-dark-text"
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
