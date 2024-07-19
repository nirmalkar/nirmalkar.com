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
