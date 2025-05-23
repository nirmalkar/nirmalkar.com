import { BLOCKS } from '@contentful/rich-text-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React, { useContext, useState } from 'react';
import type { FC } from 'react';

import Layout from '../components/layout';
import Modal from '../components/Modal';
import Seo from '../components/seo';
import { ThemeContext } from '../context/themeProvider';

interface AboutProps {
  data: any;
}

const About: FC<AboutProps> = (props) => {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { oppositeSecondary } = theme.colors;
  const node = props?.data?.allContentfulPerson?.edges[0].node;
  const image = node.image.gatsbyImage;
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { gatsbyImage, description } = node.data.target;
        const imageData = getImage(gatsbyImage);
        return imageData ? (
          <GatsbyImage
            image={imageData}
            alt={description || 'Embedded asset'}
          />
        ) : null;
      },
    },
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout>
      <Seo title={'About'} description={'This is about page for Nirmalkar'} />
      <div
        onClick={openModal}
        onKeyDown={(e) => e.key === 'Enter' && openModal()}
        role="button"
        tabIndex={0}
        className="profile-picture"
      >
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
