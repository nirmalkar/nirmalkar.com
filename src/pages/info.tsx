import React from 'react';
import type { FC } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Info: FC = () => {
  return (
    <Layout>
      <Seo title={'Info'} description={'This is the info page.'} />
      Info Page
    </Layout>
  );
};

export default Info;
