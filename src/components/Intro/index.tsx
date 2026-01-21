import React from 'react';
import { ThemeContext } from '../../context/themeProvider';
import Social from '../Social';

interface IntroDataType {
  bioData: {
    bio: { bio: string };
    salutation: string;
    intro: string;
  };
}

const Intro: React.FC<IntroDataType> = React.memo(({ bioData }) => {
  const { theme } = React.useContext(ThemeContext);
  const { oppositeSecondary } = theme?.colors || {
    oppositeSecondary: '#333333',
  };

  const { bio, salutation, intro } = bioData;

  const sectionStyle = React.useMemo(
    () => ({ color: oppositeSecondary }),
    [oppositeSecondary],
  );

  return (
    <section className="intro-container" style={sectionStyle}>
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
});

Intro.displayName = 'Intro';

export default Intro;
