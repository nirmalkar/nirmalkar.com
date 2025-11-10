import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageSliderProps {
  images: Array<{
    gatsbyImage: any; // Adjust the type according to your Gatsby image type
  }>;
  alt: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, alt }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    dotsClass: 'slick-dots slick-thumb',
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-image-container">
            <GatsbyImage
              image={image.gatsbyImage}
              alt={`${alt} - ${index + 1}`}
              style={{ width: '100%', height: '100%' }}
              objectFit="cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
