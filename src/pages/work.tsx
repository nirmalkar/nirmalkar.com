import React from "react";
import Layout from "../components/layout";
import { ThemeContext } from "../context/themeProvider";
import Card from "../components/Card";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type Project = {
  id: string;
  name: string;
  description: {
    id: string;
    description: string;
  };
  Image: {
    fields: {
      description: {
        en_US: string;
      };
      file: {
        en_US: {
          url: string;
          fileName: string;
          contentType: string;
        };
      };
    };
  }[];
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
  const projects = props.data?.allContentfulProject.edges;
  console.log(projects, "these are the projects!");
  return (
    <Layout>
      <main className="work-container">
        <section className="project-container">
          <h3 style={{ color: theme.colors.oppositePrimary }}>Projects:</h3>
          {projects.map((project) => (
            <Card
              {...{
                bgColor: theme.colors.secondary,
                title: project?.node.name,
                image: project?.node?.Image[0].fields.file.en_US,
                description: project?.node.description.description,
                clickable: true,
                textColor: theme.colors.oppositePrimary,
              }}
            />
          ))}
        </section>
        <section className="technologies-container">
          <h3 style={{ color: theme.colors.oppositePrimary }}>Techologies:</h3>
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
          Image {
            fields {
              description {
                en_US
              }
              file {
                en_US {
                  url
                  fileName
                  contentType
                }
              }
            }
          }
        }
      }
    }
  }
`;
