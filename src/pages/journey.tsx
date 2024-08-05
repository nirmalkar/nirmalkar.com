import React from "react";
import { FC } from "react";
import Layout from "../components/layout";
import MyJourney from "../components/MyJourney";
import Seo from "../components/seo";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <Layout>
      <Seo title={"Journey"} description={"This is the jouney page."} />
      <MyJourney />
    </Layout>
  );
};

export default Home;
