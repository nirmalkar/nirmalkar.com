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
          <h3 className="project-heading">Projects</h3>
          {projects.map((project: { node: Project }, _index: number) => (
            <InfoCard
              key={project.node.id}
              {...{
                title: project?.node.name,
                image: project?.node?.Image,
                description: project?.node.description.description,
                clickable: true,
                textColor: theme.colors.oppositePrimary,
                icons: project?.node.technology.tech_array,
              }}
            />
          ))}
        </section>
        <section className="technologies-container">
          <h3 className="technologies-heading">Technologies</h3>
          <div className="technologies-icons">
            {technologies.map((tech, index) => (
              <div className="icon" key={`tech-${tech}-${index}`}>
                <TechIcons name={tech} />
              </div>
            ))}
          </div>
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
