import React, { useContext } from "react";
import { Link, graphql } from "gatsby";
import ArticlePreview from "../../components/ArticlePreview";
import { ThemeContext } from "../../context/themeProvider";
import Layout from "../../components/layout";

type Props = {
  data: any
};

const BologCategory = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const { secondary, oppositeSecondary } = theme.colors;
  const posts = props.data?.allContentfulBlogPost.nodes;
  return <Layout><div className="blogs-container"><ArticlePreview posts={posts} /></div></Layout>;
};

export default BologCategory;
export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
  }
`;