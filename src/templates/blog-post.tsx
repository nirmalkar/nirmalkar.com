import React, { useEffect, useState } from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import readingTime from "reading-time";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

import Seo from "../components/seo";
import Layout from "../components/layout";
import { ThemeContext } from "../context/themeProvider";
import { BlogPost } from "../types/posts";
import CopyToClipboardButton from "../components/CopyToClipboardButton";

const BlogPostTemplate = (props: BlogPost) => {
  const { theme } = React.useContext(ThemeContext);
  const { primary, oppositeSecondary } = theme?.colors;
  const post = get(props, "data.contentfulBlogPost");
  const previous = get(props, "data.previous");
  const next = get(props, "data.next");
  const plainTextDescription = documentToPlainTextString(
    JSON.parse(post.description.raw)
  );
  const [copyStatus, setCopyStatus] = useState(false);
  const copyContent = () => {
    setCopyStatus(true);
    setTimeout(() => {
      setCopyStatus(false);
    }, 1000);
  };
  const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw));
  const { minutes: timeToRead } = readingTime(plainTextBody);

  const options = {
    renderMark: {
      [MARKS.CODE]: (text: string) => {
        const blockId = `code-block-${Math.random().toString(36).substr(2, 9)}`;
        useEffect(() => {
          Prism.highlightAll();
        }, []);

        return (
          <div style={{ position: "relative" }}>
            <CopyToClipboard text={text} onCopy={copyContent}>
              <CopyToClipboardButton theme={theme} text={text} />
            </CopyToClipboard>
          </div>
        );
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (
        node: any,
        children:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | React.ReactFragment
          | React.ReactPortal
          | null
          | undefined
      ) => <p>{children}</p>,
    },
  };

  return (
    <Layout>
      <Seo
        title={post.title}
        description={plainTextDescription}
        image={`http:${post.heroImage.resize.src}`}
      />
      <div className="blog-layout" style={{ backgroundColor: `${primary}a1` }}>
        <span style={{ color: oppositeSecondary }}>
          <div className="blog-image">
            {post.heroImage?.gatsbyImage && (
              <GatsbyImage
                alt={post.title}
                image={post.heroImage?.gatsbyImage}
              />
            )}
          </div>
          <div className="blog-title mt-2">{post.title}</div>
          {post.author?.name} &middot;{" "}
          <time dateTime={post.rawDate}>{post.publishDate}</time> &middot;{" "}
          {timeToRead} minute read
        </span>
        <div>
          <div className="blog-text" style={{ color: oppositeSecondary }}>
            {post.body?.raw && renderRichText(post.body, options)}
          </div>
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
