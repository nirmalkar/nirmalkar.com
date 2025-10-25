import type {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';

interface HeroImageSource {
  srcSet: string;
  type: string;
  sizes: string;
}

interface HeroImageFallback {
  src: string;
  srcSet: string;
  sizes: string;
}

interface HeroImageGatsbyImage {
  images: {
    sources: HeroImageSource[];
    fallback: HeroImageFallback;
  };
  layout: string;
  width: number;
  height: number;
  placeholder: {
    fallback: string;
  };
}

interface HeroImage {
  gatsbyImage: HeroImageGatsbyImage;
}

interface Description {
  raw: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  publishDate: string;
  tags: string[] | null;
  heroImage: HeroImage;
  type: string;
  description: Description;
}

export interface BlogPostQuery {
  contentfulBlogPost: {
    slug: string;
    author: any;
    title: string;
    publishDate: string;
    rawDate: string;
    heroImage: {
      gatsbyImage: any;
      resize: { src: string };
    };
    description: { raw: string };
    body: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  };
  previous?: { slug: string; title: string };
  next?: { slug: string; title: string };
}
