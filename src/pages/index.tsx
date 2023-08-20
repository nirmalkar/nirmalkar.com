import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
// import { Button } from "nirui";
import Layout from "../components/layout";
import Social from "../components/Social";
import Intro from "../components/Intro";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Intro />
      <Social />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
