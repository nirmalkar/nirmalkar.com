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
    <section className="intro-container" aria-label="Introduction">
      <div className="intro-content">
        <div className="intro-main">
          <h1 className="intro-salutation">{salutation}</h1>
          <p className="intro-title">{intro}</p>
        </div>
        <div className="intro-description">{bio.bio}</div>
        <nav className="intro-social" aria-label="Social media links">
          <Social />
        </nav>
      </div>
    </section>
  );
});

Intro.displayName = 'Intro';

export default Intro;
