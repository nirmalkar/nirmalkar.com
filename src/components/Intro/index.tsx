import React from "react";
import { ThemeContext } from "../../context/themeProvider";
import Social from "../Social";

interface Bio {
  bio: string;
}

interface BioData {
  bio: Bio;
  salutation: string;
  intro: string;
}

interface IntroDataType {
  bioData: BioData;
}

const Intro: React.FC<IntroDataType> = (props) => {
  const { theme } = React.useContext(ThemeContext);
  const { oppositeSecondary, oppositePrimary } = theme?.colors;
  const { bio, salutation, intro } = props.bioData;

  return (
    <section className="intro-container" style={{ color: oppositeSecondary }}>
      <div className="intro-content">
        <div className="intro-main">
          <span className="intro-salutation">{salutation}</span>
          <br />
          <span className="intro-title">{intro}</span>
        </div>
        <div className="intro-description">{bio.bio}</div>
        <div className="intro-social">
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Intro;
