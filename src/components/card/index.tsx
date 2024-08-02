import React from "react";
import BlogIcons from "../../assets/svg/Blog";
import { GatsbyImage } from "gatsby-plugin-image";

type CardProps = {
  name?: string;
  description?: string;
  bgColor?: string;
  textColor: string;
  clickable: boolean;
  onCardClick?: () => void;
};

function Card({
  name,
  description,
  bgColor,
  textColor,
  clickable,
  onCardClick,
}: CardProps) {
  return (
    <div
      className="card-container"
      style={{
        backgroundColor: bgColor ?? "#fff",
        cursor: clickable ? "pointer" : "",
      }}
      onClick={onCardClick}
    >
      <div className="title" style={{ color: textColor }}>
        {name}
      </div>
      <div className="description" style={{ color: textColor }}>
        {description}
      </div>
      <BlogIcons {...{ size: 100, name, fill: textColor }} />
    </div>
  );
}

export default Card;
