import React from "react";
import BlogIcons from "../../assets/svg/Blog";
import { GatsbyImage } from "gatsby-plugin-image";
import TechIcon from "../TechIcon";
import { ThemeContext } from "../../context/themeProvider";

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
  layout: "fixed" | "fullWidth" | "constrained";
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
  image?: { gatsbyImage: GatsbyImage };
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
  const { theme } = React.useContext(ThemeContext);
  return (
    <div
      key={title || name || description}
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
            {image && <GatsbyImage alt={"asd"} image={image.gatsbyImage} />}
          </div>
          <div className="description">
            {description}
            <div className="card-descriotion-icons">
              {icons?.map((icon) => (
                <div
                  style={{ background: theme.colors.primary }}
                  className="icon"
                >
                  <TechIcon name={icon} size={25} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {name && <BlogIcons {...{ size: 100, name, fill: textColor }} />}
    </div>
  );
}

export default Card;
