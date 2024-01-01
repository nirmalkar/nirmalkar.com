import React, { useContext, useState } from "react";
import { FC } from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import readingTime from "reading-time";

import Seo from "../components/seo";
import Layout from "../components/layout";
import { ThemeContext } from "../context/themeProvider";
import Modal from "../components/Modal";

interface AboutProps {}

const About: FC<AboutProps> = (props) => {
  const { theme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const { secondary, primary, oppositePrimary, oppositeSecondary } =
    theme.colors;
  const node = props?.data?.allContentfulPerson?.edges[2].node;
  console.log(node);
  const image = node.image.gatsbyImage;
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImage, description } = node.data.target;
        return <GatsbyImage image={getImage(gatsbyImage)} alt={description} />;
      },
    },
  };
  return (
    <Layout>
      <Seo title={"About"} description={"This is about page for Nirmalkar"} />
      <div className="profile-picture">
        <GatsbyImage className="about-picture" alt={node.name} image={image} />
      </div>
      <div className="about-container">
        <div className="about-description" style={{ color: oppositeSecondary }}>
          <p>{node.description}</p>
        </div>
        <div className="blog-text" style={{ color: oppositeSecondary }}>
          {node.shortBio.raw && renderRichText(node.shortBio, options)}
        </div>
      </div>
      {showModal && <Modal imageUrl={imageUrl} onClose={handleCloseModal} />}
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulPerson {
      edges {
        node {
          id
          name
          email
          description
          shortBio {
            raw
          }
          image {
            gatsbyImage(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 400
              height: 400
            )
          }
        }
      }
    }
  }
`;
