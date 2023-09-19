import React from "react";
import { FC } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div>
      <Layout>
      <Seo
        title={"About"}
        description={"This is about page for Nirmalkar"}
      />
      </Layout>
    </div>
  );
};

export default About;
