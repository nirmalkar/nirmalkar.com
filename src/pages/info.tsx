import React from "react";
import { FC } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

interface InfoProps {}

const Info: FC<InfoProps> = () => {
  return (
    <Layout>
      <Seo title={"Info"} description={"This is the info page."} />
      Info Page
    </Layout>
  );
};

export default Info;
