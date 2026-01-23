import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import React, { useMemo } from 'react';
import Intro from '../components/Intro';
import Layout from '../components/layout';
import Seo from '../components/seo';

interface BioData {
  bio: {
    bio: string;
  };
  salutation: string;
  intro: string;
}

interface BioQuery {
  allContentfulLandingPageContent: {
    edges: Array<{
      node: BioData;
    }>;
  };
}

interface IndexPageProps extends PageProps {
  data: BioQuery;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const bio = useMemo(() => {
    return data?.allContentfulLandingPageContent?.edges?.[0]?.node;
  }, [data]);

  return (
    <Layout>
      <Seo
        title="Home"
        description="Hemant Nirmalkar - Full Stack Developer. Welcome to my personal portfolio website where I share my projects, blog posts, and professional experience."
      />
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
