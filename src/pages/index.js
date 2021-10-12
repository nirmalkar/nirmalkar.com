import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <Seo title="Home | Portfolio" />
      <Link to="/blog">Blogs</Link>
      <Bio />
      <StaticImage
        src="../images/profile-pic.jpg"
        width={800}
        height={800}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Hemant Nirmalkar"
        style={{ marginBottom: `1.45rem` }}
      />
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
