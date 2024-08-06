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
        I love tinkering with web tools and frameworks to create cool stuff
        online and when I'm offline, you’ll find me in the mountains. ✌🏼
      </div>
    </section>
  );
};

export default Intro;
