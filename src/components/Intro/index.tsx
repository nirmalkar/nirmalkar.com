import React from 'react';
import { ThemeContext } from '../../context/themeProvider';
import Social from '../Social';

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
  const { oppositeSecondary } = theme?.colors;
  const { bio, salutation, intro } = props.bioData;
  return (
    <section className="intro-container" style={{ color: oppositeSecondary }}>
      <div className="intro-main">
        {salutation}
        <br />
        {intro}
      </div>
      <div className="intro-description">{bio.bio}</div>
      <div className="intro-social">
        <Social />
      </div>
    </section>
  );
};

export default Intro;
