import React, { useContext } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { ThemeContext } from "../../context/themeProvider";

const ArticlePreview = ({ posts }) => {
  const { theme } = useContext(ThemeContext);
  const { secondary, oppositeSecondary } = theme.colors;
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  return (
    <div className="article-preview-container">
      <ul className="articles">
        {posts.map((post) => {
          return (
            <li className="article" key={post.slug}>
              <Link to={`/blog/${post.slug}`}>
                <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />
                <h2 style={{color: oppositeSecondary}}>{post.title}</h2>
              </Link>
              <div style={{color: oppositeSecondary}}>
                {post.description?.raw && renderRichText(post.description)}
              </div>
              <div style={{color: oppositeSecondary}}>
                <small className="meta">{post.publishDate}</small>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlePreview;
