import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React, { useState, useMemo } from 'react';
import type { FC } from 'react';

import Layout from '../components/layout';
import Modal from '../components/Modal';
import Seo from '../components/seo';

interface PersonImage {
  gatsbyImage?: IGatsbyImageData;
}

interface Person {
  id: string;
  name: string;
  email: string;
  description: string;
  shortBio: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  image: PersonImage;
}

interface AboutQuery {
  allContentfulPerson: {
    edges: Array<{
      node: Person;
    }>;
  };
}

interface AboutProps {
  data: AboutQuery;
}

const About: FC<AboutProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const node = useMemo(() => {
    return props?.data?.allContentfulPerson?.edges.find(
      (edge: { node: { name: string } }) =>
        edge.node.name === 'Hemant Nirmalkar',
    )?.node;
  }, [props?.data?.allContentfulPerson?.edges]);

  const image = node?.image?.gatsbyImage;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!node) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo title={'About'} description={'This is about page for Nirmalkar'} />
      <div className="about-container">
        <div className="about-content">
          <div className="about-grid">
            <div className="about-main-content">
              <div className="about-section">
                <h1 className="about-description">{node.description}</h1>
              </div>

              <div className="about-section about-bio">
                {renderRichText(node.shortBio)}
              </div>
            </div>

            <div className="about-image-section">
              <div
                onClick={openModal}
                onKeyDown={(e) => e.key === 'Enter' && openModal()}
                role="button"
                tabIndex={0}
                className="profile-picture"
                aria-label="View full size profile picture"
              >
                {image && (
                  <GatsbyImage
                    className="about-picture"
                    alt={node.name}
                    image={image}
                  />
                )}
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
