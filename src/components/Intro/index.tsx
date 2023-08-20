import React from "react";
import { ThemeContext } from "../../context/themeProvider";
interface IntroProps {}
const Intro: React.FC<IntroProps> = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { oppositeSecondary } = theme?.colors;
  return (
    <section className="intro-container" style={{ color: oppositeSecondary }}>
      <div className="intro-main">
        Hi,
        <br />I am Hemant Nirmalkar
      </div>
      <div className="intro-description">
        I enjoy experimenting with new tools and frameworks to create cool and
        exciting stuff on the web.
      </div>
    </section>
  );
};

export default Intro;
