import React, { useState } from "react";
import { FC } from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from '../components/layout';
import Modal from '../components/Modal';
import Seo from '../components/seo';
import { ThemeContext } from '../context/themeProvider';

interface AboutProps {
  data: any;
}

const About: FC<AboutProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const node = props?.data?.allContentfulPerson?.edges[0].node;
  const image = node.image.gatsbyImage;
  const options = {};

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Seo title={"About"} description={"This is about page for Nirmalkar"} />
      <div className="about-container">
        <div className="about-content">
          <div className="about-grid">
            <div className="about-main-content">
              <div className="about-section">
                <h1 className="about-description">{node.description}</h1>
              </div>

              <div className="about-section about-bio">
                {node.shortBio.raw && renderRichText(node.shortBio, options)}
              </div>
            </div>

            <div className="about-image-section">
              <div
                onClick={openModal}
                onKeyDown={(e) => e.key === "Enter" && openModal()}
                role="button"
                tabIndex={0}
                className="profile-picture"
              >
                <GatsbyImage
                  className="about-picture"
                  alt={node.name}
                  image={image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} imageData={image} />
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
              width: 800
              height: 800
            )
          }
        }
      }
    }
  }
`;
