import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeProvider";

type Props = {
  index: number;
  position: number;
};

const JourneyCard = (props: Props) => {
  const { index, position } = props;
  const { theme } = useContext(ThemeContext);
  const { oppositePrimary, secondary, primary, oppositeSecondary } =
    theme.colors;
  const cardColor = { color: primary, backgroundColor: oppositeSecondary };
  return (
    <div
      className="journey-card"
      style={
        index % 2 === 0
          ? { ...cardColor, top: "-3.5rem", rotate: "-10deg" }
          : { ...cardColor, top: "-4rem", rotate: "-10deg" }
      }
    >
      
    </div>
  );
};

export default JourneyCard;
