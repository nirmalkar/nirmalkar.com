import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import type {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Prism from 'prismjs';
import React, { useEffect, useState, useContext } from 'react';
import readingTime from 'reading-time';

import CopyToClipboardButton from '../components/CopyToClipboardButton';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { ThemeContext } from '../context/themeProvider';
import type { BlogPostQuery } from '../types/posts';

type DataProps = PageProps<BlogPostQuery>;

const BlogPostTemplate: React.FC<DataProps> = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const { primary, oppositeSecondary } = theme.colors;

  const post = data.contentfulBlogPost;
  const previous = data.previous;
  const next = data.next;

  const descriptionText = documentToPlainTextString(
    JSON.parse(post.description.raw ?? '{}'),
  );
  const bodyText = documentToPlainTextString(JSON.parse(post.body.raw ?? '{}'));
  const { minutes: timeToRead } = readingTime(bodyText);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const options = {
    renderMark: {
      [MARKS.CODE]: (text: React.ReactNode) => (
        <div className="relative">
          <CopyToClipboardButton
            text={typeof text === 'string' ? text : ''}
            onCopy={handleCopy}
            copying={copied}
            theme={theme}
          />
        </div>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => (
        <p className="mb-4 leading-relaxed">{children}</p>
      ),
    },
  };

  const richTextBody =
    post.body as RenderRichTextData<ContentfulRichTextGatsbyReference>;

  return (
    <Layout>
      <Seo
        title={post.title}
        description={descriptionText}
        image={`http:${post.heroImage.resize.src}`}
      />

      <div
        className="blog-layout container mx-auto px-4 py-8"
        style={{ backgroundColor: `${primary}a1` }}
      >
        <header className="mb-8 text-center text-oppositeSecondary">
          {post.heroImage.gatsbyImage && (
            <div className="blog-image mb-6">
              <GatsbyImage
                className="w-full h-96 object-cover rounded-lg shadow-md"
                alt={post.title}
                image={post.heroImage.gatsbyImage}
              />
            </div>
          )}
          <h1
            className="blog-title mt-4 text-4xl font-bold"
            style={{ color: oppositeSecondary }}
          >
            {post.title}
          </h1>
          <div
            className="blog-meta text-sm mt-2"
            style={{ color: oppositeSecondary }}
          >
            {post.author?.name || 'Anonymous'} &middot;{' '}
            <time dateTime={post.rawDate}>{post.publishDate}</time> &middot;{' '}
            {Math.ceil(timeToRead)} min read
          </div>
        </header>

        <article
          className="blog-text prose max-w-none mx-auto"
          style={{ color: oppositeSecondary }}
        >
          {renderRichText(richTextBody, options)}

          {(previous || next) && (
            <nav className="post-navigation flex justify-between mt-8">
              {previous ? (
                <Link
                  to={`/blog/${previous.slug}`}
                  rel="prev"
                  className="text-blue-500 hover:underline"
                >
                  ← {previous.title}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  to={`/blog/${next.slug}`}
                  rel="next"
                  className="text-blue-500 hover:underline"
                >
                  {next.title} →
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </article>
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
