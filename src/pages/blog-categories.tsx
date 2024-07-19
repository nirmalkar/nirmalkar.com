import React, { useContext, useEffect } from "react";
import { FC } from "react";
import Layout from "../components/layout";
import { ThemeContext } from "../context/themeProvider";
import Card from "../components/Card";
import { blogs } from "../constants/blogConstant";
import { Link, graphql } from "gatsby";
import Seo from "../components/seo";

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

  return (
    <div>
      <Layout>
        <Seo
          title={"Blog Categories"}
          description={"This is blog categories for Nirmalkar"}
        />
        <div className="blog-category-container">
          {blogs.map((blog, index) => {
            return (
              <Link key={blog.name} to={`/blog/${blog.name}`}>
                <Card {...{ ...blogProps, name: blog.name }} />
              </Link>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default Blog;
