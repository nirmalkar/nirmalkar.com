import React from "react";
import BlogIcons from "../../assets/svg/Blog";

type CardProps = {
  name: string;
  description?: string;
  bgColor?: string;
  textColor: string;
  clickable: boolean;
};

function Card({ name, description, bgColor, textColor, clickable }: CardProps) {
  return (
    <div
      className="card-container"
      style={{
        backgroundColor: bgColor ?? "#fff",
        cursor: clickable ? "pointer" : "",
      }}
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
