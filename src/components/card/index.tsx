import React from "react";
import BlogIcons from "../../assets/svg/Blog";
import { GatsbyImage } from "gatsby-plugin-image";
type ImageFile = {
  url: string;
  fileName: string;
  contentType: string;
};

type CardProps = {
  name?: string;
  title?: string;
  description?: string;
  bgColor?: string;
  textColor: string;
  clickable: boolean;
  image?: ImageFile;
  onCardClick?: () => void;
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
}: CardProps) {
  console.log(image, "image");
  return (
    <div
      key={image?.fileName}
      className="card-container"
      style={{
        backgroundColor: bgColor ?? "#fff",
        cursor: clickable ? "pointer" : "",
      }}
      onClick={onCardClick}
    >
      {title && (
        <div className="title" style={{ color: textColor }}>
          {title}
        </div>
      )}
      <div className="description" style={{ color: textColor }}>
        <div className="card-content">
          <div className="image">
            {image && (
              <img
                className="card-image"
                src={image.url}
                alt={image.fileName}
                loading="lazy"
              />
            )}
          </div>
          <div className="description">{description}</div>
        </div>
      </div>
      {name && <BlogIcons {...{ size: 100, name, fill: textColor }} />}
    </div>
  );
}

export default Card;
