import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Button } from "nirui";
import Layout from "../common/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Button>asdf</Button>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
