import React from "react";
import { FC } from "react";
import Layout from "../components/layout";
import MyJourney from "../components/MyJourney";
import Seo from "../components/seo";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Layout>
      <Seo
        title={"Journey"}
        description={"This is jouney page for Nirmalkar"}
      />
        <MyJourney />
      </Layout>
    </div>
  );
};

export default Home;
