import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import Layout from "../components/layout";
import { ThemeContext } from "../context/themeProvider";

const BlogPostTemplate = (props) => {
  const { theme } = React.useContext(ThemeContext);
  const { oppositeSecondary } = theme?.colors;
  const post = get(props, "data.contentfulBlogPost");
  const previous = get(props, "data.previous");
  const next = get(props, "data.next");
  const plainTextDescription = documentToPlainTextString(
    JSON.parse(post.description.raw)
  );
  const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw));

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImage, description } = node.data.target;
        return <GatsbyImage image={getImage(gatsbyImage)} alt={description} />;
      },
    },
  };

  return (
    <Layout>
      <Seo
        title={post.title}
        description={plainTextDescription}
        image={`http:${post.heroImage.resize.src}`}
      />
      <div>
        <span style={{color: oppositeSecondary}}>
          {post.author?.name} &middot;{" "}
          <time dateTime={post.rawDate}>{post.publishDate}</time>
        </span>
        <div>
          <div style={{color: oppositeSecondary}}>{post.body?.raw && renderRichText(post.body, options)}</div>
          {(previous || next) && (
            <nav>
              <ul>
                {previous && (
                  <li>
                    <Link to={`/blog/${previous.slug}`} rel="prev">
                      ← {previous.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/blog/${next.slug}`} rel="next">
                      {next.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        raw
      }
      tags
      description {
        raw
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`;
