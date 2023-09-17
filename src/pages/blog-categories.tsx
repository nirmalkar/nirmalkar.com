import React, { useContext, useEffect } from "react";
import { FC } from "react";
import Layout from "../components/layout";
import { ThemeContext } from "../context/themeProvider";
import Card from "../components/Card";
import { blogs } from "../constants/blogConstant";
import ArticlePreview from "../components/ArticlePreview";
import { graphql } from "gatsby";

interface BlogProps {
  data: any;
}

const Blog: FC<BlogProps> = (props) => {
  const { theme } = useContext(ThemeContext);
  const { secondary, oppositeSecondary } = theme.colors;
  const blogProps = {
    bgColor: oppositeSecondary,
    textColor: secondary,
    clickable: true,
  };
  const posts = props.data?.allContentfulBlogPost.nodes;
  console.log(posts);
  return (
    <div>
      <Layout>
        <div className="blog-category-container">
          {blogs.map((blog, index) => {
            return <Card {...{ ...blogProps, name: blog.name }} />;
          })}
          <ArticlePreview posts={posts} />
        </div>
      </Layout>
    </div>
  );
};

export default Blog;
export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
  }
`;
