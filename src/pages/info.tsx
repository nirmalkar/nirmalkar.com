import React from "react";
import { FC } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

interface InfoProps {}

const Info: FC<InfoProps> = () => {
  return (
    <div>
      <Layout>
      <Seo
        title={"Info"}
        description={"This is info page for Nirmalkar"}
      />
        Info Page</Layout>
    </div>
  );
};

export default Info;
