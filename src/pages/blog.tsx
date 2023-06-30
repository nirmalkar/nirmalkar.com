import React from "react";
import { FC } from "react";
import Layout from "../components/layout";

interface BlogProps {}

const Blog: FC<BlogProps> = () => {
  return (
    <div>
      <Layout>Blog Page</Layout>
    </div>
  );
};

export default Blog;
