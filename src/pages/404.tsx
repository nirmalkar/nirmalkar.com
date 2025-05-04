import { BiMessageSquareError } from '@react-icons/all-files/bi/BiMessageSquareError';
import type { PageProps, HeadFC } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import { ThemeContext } from '../context/themeProvider';

const NotFoundPage: React.FC<PageProps> = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <Layout>
      <div className="not-found">
        <BiMessageSquareError
          style={{ color: theme.colors.oppositeSecondary }}
          size={300}
        />
        <p
          style={{ color: theme.colors.oppositeSecondary }}
          className="not-found-text"
        >
          Page Not Found!
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
