import React from "react";
import { FC } from "react";
import Layout from "../components/layout";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Layout></Layout>
    </div>
  );
};

export default Home;