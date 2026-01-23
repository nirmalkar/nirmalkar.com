import React from 'react';
import Social from '../Social';

interface IntroDataType {
  bioData: {
    bio: { bio: string };
    salutation: string;
    intro: string;
  };
}

const Intro: React.FC<IntroDataType> = React.memo(({ bioData }) => {
  const { bio, salutation, intro } = bioData;

  return (
    <section className="intro-container">
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
