import * as path from 'path';
import * as dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Nirmalkar`,
    siteUrl: `https://www.nirmalkar.com`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Show which CSS rules are removed
        develop: false,
        tailwind: false,
        ignore: [
          '/src/style/main.scss',
          '/src/style/fonts.scss',
          '/src/style/normalize.scss',
          '/src/style/base/_reset.scss',
          '/src/style/base/_typography.scss',
        ],
        content: [
          path.join(__dirname, 'src/**/*.{js,jsx,ts,tsx}'),
          path.join(__dirname, 'src/**/*.html'),
          path.join(__dirname, 'public/**/*.html'),
          path.join(
            __dirname,
            'node_modules/slick-carousel/slick/**/*.{js,css}',
          ),
        ],
        cssProcessorOptions: {
          default: {
            safelist: {
              standard: [
                /^gatsby-/,
                /^mdx-/,
                /^hljs-/,
                /^prism-/,
                /^code/,
                /^pre/,
                // Theme variables and CSS custom properties
                /^--/,
                // Responsive breakpoints and at-rules
                /^@media/,
                /^@supports/,
                /^@keyframes/,
                // Font face declarations
                /^@font-face/,
                // Important utility classes
                'body',
                'html',
                'a',
                'button',
                'input',
                'textarea',
                'select',
                'img',
                'div',
                'span',
                'p',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'ul',
                'ol',
                'li',
                // Component states that might be dynamically added
                'active',
                'disabled',
                'focus',
                'hover',
                'visited',
                'loading',
                'error',
                'success',
                // Layout classes
                'container',
                'wrapper',
                'content',
                'main',
                'header',
                'footer',
                'nav',
                'section',
                'article',
                'aside',
                // Animation states
                'fade-in',
                'slide-in',
                'visible',
                'hidden',
                'show',
                'hide',
                // Slick carousel classes (keep if used)
                'slick-slider',
                'slick-track',
                'slick-list',
                'slick-slide',
                'slick-prev',
                'slick-next',
                'slick-dots',
              ],
              deep: [
                // Keep selectors containing these patterns
                /gatsby-/,
                /mdx-/,
                /hljs-/,
                /prism-/,
                /theme-/,
                /about-/,
                /intro-/,
                /social-/,
                /navigation-/,
                /sidebar-/,
                /modal-/,
                /work-/,
                /contact-/,
                /blog-/,
                /card-/,
                /filter-/,
                /article-/,
                /footer-/,
                /header-/,
                /layout-/,
                /slick-/,
              ],
            },
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-M4TGDCN1CL',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};

export default config;
