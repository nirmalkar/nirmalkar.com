import { graphql } from 'gatsby';
import type { GatsbyImage } from 'gatsby-plugin-image';
import get from 'lodash/get';
import React from 'react';
import InfoCard from '../components/InfoCard';
import Layout from '../components/layout';
import Seo from '../components/seo';
import TechIcons from '../components/TechIcon';
import { technologies } from '../constants/workConstant';
import { ThemeContext } from '../context/themeProvider';
type GatsbyImageFallback = {
  src: string;
  srcSet: string;
  sizes: string;
};

type GatsbyImageSource = {
  srcSet: string;
  type: string;
  sizes: string;
};

type GatsbyImageImages = {
  sources: GatsbyImageSource[];
  fallback: GatsbyImageFallback;
};

type GatsbyImage = {
  images: GatsbyImageImages;
  layout: 'fixed' | 'fullWidth' | 'constrained';
  width: number;
  height: number;
  placeholder: {
    fallback: string;
  };
};

type Image = {
  gatsbyImage: GatsbyImage;
};

type Description = {
  id: string;
  description: string;
};
type Project = {
  id: string;
  name: string;
  description: Description;
  Image: Image[];
  technology: { tech_array: string[] };
};

type Data = {
  allContentfulProject: {
    edges: {
      node: Project;
    }[];
  };
};

type WorkPropsType = {
  data: Data;
  location: any;
};

function Work(props: WorkPropsType) {
  const { theme } = React.useContext(ThemeContext);
  const projects = get(props, 'data.allContentfulProject.edges');
  return (
    <Layout>
      <Seo title={'Work'} description={'This is the work page.'} />
      <main className="work-container">
        <section className="project-container">
          <h3 style={{ color: theme.colors.oppositePrimary }}>Projects:</h3>
          {projects.map((project: { node: Project }) => (
            <InfoCard
              key={project.node.id}
              {...{
                bgColor: theme.colors.secondary,
                title: project?.node.name,
                image: project?.node?.Image[0],
                description: project?.node.description.description,
                clickable: true,
                textColor: theme.colors.oppositePrimary,
                icons: project?.node.technology.tech_array,
              }}
            />
          ))}
        </section>
        <section className="technologies-container">
          <h3 style={{ color: theme.colors.oppositePrimary }}>
            Techologies:
            <div className="technologies-icons">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  style={{ background: theme.colors.secondary }}
                  className="icon"
                >
                  <TechIcons name={tech} />
                </div>
              ))}
            </div>
          </h3>
        </section>
      </main>
    </Layout>
  );
}

export default Work;
export const pageQuery = graphql`
  query ProjectQuery {
    allContentfulProject {
      edges {
        node {
          id
          name
          description {
            id
            description
          }
          technology {
            tech_array
          }
          Image {
            gatsbyImage(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 500
              height: 280
            )
          }
        }
      }
    }
  }
`;
