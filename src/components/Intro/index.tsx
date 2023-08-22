import React from "react";
import { ThemeContext } from "../../context/themeProvider";
interface IntroProps {}
const Intro: React.FC<IntroProps> = () => {
  const { theme } = React.useContext(ThemeContext);
  const { oppositeSecondary } = theme?.colors;
  return (
    <section className="intro-container" style={{ color: oppositeSecondary }}>
      <div className="intro-main">
        Hi,
        <br />I am Hemant Nirmalkar
      </div>
      <div className="intro-description">
        I love tinkering with new web tools and frameworks to create cool stuff
        on the web. Yet, my true escape is in the mountains, where I find peace
        and beauty beyond screens.
      </div>
    </section>
  );
};

export default Intro;
