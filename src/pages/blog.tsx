import React, { useContext } from "react";
import { FC } from "react";
import Layout from "../components/layout";
import { ThemeContext } from "../context/themeProvider";
import Card from "../components/card";
import { blogs } from "../constants/blogConstant";

interface BlogProps {}

const Blog: FC<BlogProps> = () => {
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
        <div className="blog-category-container">
          {blogs.map((blog, index) => {
            return <Card {...{ ...blogProps, name: blog.name }} />;
          })}
        </div>
      </Layout>
    </div>
  );
};

export default Blog;
