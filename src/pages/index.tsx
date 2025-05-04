import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { get } from 'lodash';
import * as React from 'react';
import Intro from '../components/Intro';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Social from '../components/Social';

const IndexPage: React.FC<PageProps> = (props) => {
  const bio = get(props, 'data.allContentfulLandingPageContent.edges[0].node');
  return (
    <Layout>
      <Seo title={'Home'} description={'This is the home page.'} />
      {bio && <Intro bioData={bio} />}
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query BioQuery {
    allContentfulLandingPageContent {
      edges {
        node {
          bio {
            bio
          }
          salutation
          intro
        }
      }
    }
  }
`;
