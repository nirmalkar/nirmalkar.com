import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <div className="home-layout">
      <Seo title="Home | Portfolio" />
      <Link to="/blog">Blogs</Link>
      <div className="h-grid">
        <div>
          <Bio />
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
