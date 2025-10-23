import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeProvider';

type Props = {
  index: number;
  position: number;
};

const JourneyCard = (props: Props) => {
  const { index } = props;
  const { theme } = useContext(ThemeContext);
  const { primary, oppositeSecondary } = theme.colors;
  const cardColor = { color: primary, backgroundColor: oppositeSecondary };
  const handleJourneyCardClick = () => {
    console.log('hello world!');
    ``;
  };
  return (
    <div
      className="journey-card"
      role="button"
      tabIndex={0}
      onClick={handleJourneyCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleJourneyCardClick();
        }
      }}
      style={
        index % 2 === 0
          ? { ...cardColor, top: '-3.5rem', rotate: '-10deg' }
          : { ...cardColor, top: '-4rem', rotate: '-10deg' }
      }
    ></div>
  );
};

export default JourneyCard;
