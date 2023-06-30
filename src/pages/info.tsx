import React from "react";
import { FC } from "react";
import Layout from "../components/layout";

interface InfoProps {}

const Info: FC<InfoProps> = () => {
  return (
    <div>
      <Layout>Info Page</Layout>
    </div>
  );
};

export default Info;
