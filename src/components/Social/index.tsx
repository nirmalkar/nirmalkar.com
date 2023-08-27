import React from "react";
import { ThemeContext } from "../../context/themeProvider";
import Icon from "../../assets/images/SocalIcons";
import { social } from "../../constants/socialContants";
interface SocialProps {}

const Social: React.FC<SocialProps> = () => {
  const { theme, themeName, toggleTheme } = React.useContext(ThemeContext);
  const { secondary, oppositeSecondary } = theme?.colors;
  return (
    <div className="social-container">
      {social.map((social) => (
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social"
          style={{ backgroundColor: secondary }}
        >
          <Icon fill={oppositeSecondary} name={social.name} />
        </a>
      ))}
    </div>
  );
};

export default Social;
