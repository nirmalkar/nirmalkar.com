import React, { useContext, useEffect, useState } from "react";
import { Link, graphql } from "gatsby";
import ArticlePreview from "../../components/ArticlePreview";
import { ThemeContext } from "../../context/themeProvider";
import Layout from "../../components/layout";

type Props = {
  data: any;
  location: any;
};

const BologCategory = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const [posts, setPosts] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = location.pathname.split("/");
      const currPagePath = path[path.length - 2];
      const posts = props.data?.allContentfulBlogPost.nodes.filter(
        (ele: any) => ele.type === currPagePath
      );
      setPosts(posts);
    }
  }, []);
  return (
    <Layout>
      <div className="blogs-container">
        {posts && <ArticlePreview posts={posts} />}
      </div>
    </Layout>
  );
};

export default BologCategory;
export const pageQuery = graphql`
  query BlogQuery {
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
        type
        description {
          raw
        }
      }
    }
  }
`;