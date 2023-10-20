import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
// import { Button } from "nirui";
import Layout from "../components/layout";
import Social from "../components/Social";
import Intro from "../components/Intro";
import Seo from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Seo title={"Home"} description={"This is home page for Nirmalkar"} />
      <Intro />
      <Social />
    </Layout>
  );
};

export default IndexPage;
