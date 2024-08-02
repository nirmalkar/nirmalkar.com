import React, { useContext } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { ThemeContext } from "../../context/themeProvider";
import { BlogPost } from "../../types/posts";

type ArticlePreviewPropsType = {
  posts: BlogPost;
};

const ArticlePreview = ({ posts }: ArticlePreviewPropsType) => {
  const { theme } = useContext(ThemeContext);
  const { primary, oppositePrimary, oppositeSecondary } = theme.colors;
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  return (
    <div className="article-preview-container">
      <div className="articles">
        {!posts.length && (
          <div className="article-not-found">
            <p style={{ color: oppositePrimary }}>
              No blog available, Please select another category!
            </p>
          </div>
        )}
        {posts.map((post) => {
          return (
            <div
              className="article"
              style={{ backgroundColor: `${primary}a1` }}
              key={post.slug}
            >
              <Link to={`/blog/${post.slug}`}>
                <GatsbyImage
                  className="br-1"
                  alt=""
                  image={post.heroImage.gatsbyImage}
                />
                <h2 style={{ color: oppositeSecondary }}>{post.title}</h2>

                <div
                  className="article-description"
                  style={{ color: oppositeSecondary }}
                >
                  {post.description?.raw && renderRichText(post.description)}
                </div>
                <div style={{ color: oppositeSecondary }}>
                  <small className="meta">{post.publishDate}</small>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlePreview;
