import { Link, graphql } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';
import ArticlePreview from '../components/ArticlePreview';
import Filter from '../components/Filter';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { ThemeContext } from '../context/themeProvider';

type Props = {
  data: any;
  location: any;
};
type FilteredVauesType = {
  category: string;
  sort: string;
};
const initialFilterValues = {
  category: '',
  sort: '',
};
const parseDateString = (dateString: string): Date => {
  const normalizedDateString = dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');
  return new Date(normalizedDateString);
};
const BologCategory = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const [posts, setPosts] = useState();
  const [filteredValues, setFilteredValues] =
    useState<FilteredVauesType>(initialFilterValues);
  const sortByDate = (items: any[], sortOrder: 'asc' | 'desc') => {
    return items.sort((a, b) => {
      const dateA = parseDateString(a.publishDate);
      const dateB = parseDateString(b.publishDate);

      if (sortOrder === 'asc') {
        return dateA.getTime() - dateB.getTime();
      } else {
        return dateB.getTime() - dateA.getTime();
      }
    });
  };

  useEffect(() => {
    const { sort } = filteredValues;
    const posts = props.data?.allContentfulBlogPost.nodes.filter((ele: any) => {
      if (filteredValues.category) {
        return ele.type === filteredValues.category;
      }
      return ele;
    });
    const sortOrder = sort ? (sort === 'latest' ? 'desc' : 'asc') : 'desc';
    sortByDate(posts, sortOrder);
    setPosts(posts);
  }, [filteredValues]);
  const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilteredValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilteredValues(initialFilterValues);
  };
  return (
    <Layout>
      <Seo title={'Blog'} description={'This is the blog page.'} />
      <div className="filter-container">
        <Filter {...{ onFilterChange, filteredValues, handleClearFilters }} />
      </div>
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
