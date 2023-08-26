import React from "react";
import { FC } from "react";
import Layout from "../components/layout";
import MyJourney from "../components/MyJourney";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Layout>
        <MyJourney />
      </Layout>
    </div>
  );
};

export default Home;
