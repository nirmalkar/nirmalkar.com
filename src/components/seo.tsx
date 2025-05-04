import { useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
type SeoProps = {
  description?: string;
  lang?: string;
  meta?: Array<
    { name: string; content: string } | { property: string; content: string }
  >;
  title: string;
  image?: string;
};
const Seo: React.FC<SeoProps> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  image,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        meta as Array<
          | { name: string; content: string }
          | { property: string; content: string }
        >,
      )}
    />
  );
};

export default Seo;
