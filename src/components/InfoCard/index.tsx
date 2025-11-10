import React from 'react';
import BlogIcons from '../../assets/svg/Blog';
import ImageSlider from '../ImageSlider';
import TechIcon from '../TechIcon';

interface GatsbyImage {
  images: {
    sources: {
      srcSet: string;
      type: string;
      sizes: string;
    }[];
    fallback: {
      src: string;
      srcSet: string;
      sizes: string;
    };
  };
  layout: 'fixed' | 'fullWidth' | 'constrained';
  width: number;
  height: number;
  placeholder: {
    fallback: string;
  };
}

type CardProps = {
  name?: string;
  title?: string;
  description?: string;
  bgColor?: string;
  textColor: string;
  clickable: boolean;
  image?: { gatsbyImage: GatsbyImage } | Array<{ gatsbyImage: GatsbyImage }>;
  onCardClick?: () => void;
  icons: string[];
};

function Card({
  name,
  title,
  description,
  image,
  bgColor,
  textColor,
  clickable,
  onCardClick,
  icons,
}: CardProps) {
  return (
    <div
      key={title || name || description}
      className="work-card"
      style={{
        cursor: clickable ? 'pointer' : '',
      }}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={onCardClick}
      onKeyDown={(e) => {
        if (clickable && (e.key === 'Enter' || e.key === ' ')) {
          onCardClick?.();
        }
      }}
    >
      {title && (
        <div className="title" style={{ color: textColor }}>
          {title}
        </div>
      )}
      <div className="card-content" style={{ color: textColor }}>
        <div className="content-row">
          {image && (
            <div className="image">
              <ImageSlider
                images={Array.isArray(image) ? image : [image]}
                alt={title || 'Project image'}
              />
            </div>
          )}
          <div className="description">{description}</div>
        </div>
        {icons?.length > 0 && (
          <div className="card-description-icons">
            {icons.map((icon) => (
              <div className="icon" key={icon}>
                <TechIcon name={icon} size={20} />
              </div>
            ))}
          </div>
        )}
      </div>
      {name && <BlogIcons {...{ size: 100, name, fill: textColor }} />}
    </div>
  );
}

export default Card;
