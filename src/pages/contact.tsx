import React from "react";
import { FC } from "react";
import Layout from "../components/layout";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <div>
      <Layout>Contact Page</Layout>
    </div>
  );
};

export default Contact;
