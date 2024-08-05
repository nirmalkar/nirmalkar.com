import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeProvider";
import Location from "../../assets/svg/Localtion";
import JourneyCard from "./JourneyCard";

type Props = {};

const MyJourney = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const { oppositePrimary, oppositeSecondary } = theme.colors;

  const line1Y = "30%";
  const medianY = "50%"; // Adjust this value to control the position of the median line
  const line2Y = "70%";
  const a = [2, 10, 18, 26, 34, 42, 50, 58];
  return (
    <div className="journey-road-container">
      {a.map((ele, i) => (
        <div
          key={ele}
          className="journey-card-container"
          style={
            i % 2 === 0
              ? { left: `${ele}%`, top: "43%" }
              : { left: `${ele}%`, top: "69%" }
          }
        >
          <JourneyCard position={ele} index={i} />
        </div>
      ))}
      {a.map((ele, i) => (
        <div
          key={ele}
          className="journey-loaction"
          style={
            i % 2 === 0
              ? { left: `${ele}%`, top: "43%" }
              : { left: `${ele}%`, top: "52%" }
          }
        >
          <Location size={20} color={oppositeSecondary} />
        </div>
      ))}
      <svg width="1300" height="200">
        <line
          x1="0"
          y1={line1Y}
          x2="100%"
          y2={line1Y}
          stroke={oppositePrimary}
          strokeWidth="2"
        />
        <line
          x1="0"
          y1={medianY}
          x2="100%"
          y2={medianY}
          stroke={oppositeSecondary}
          strokeWidth="1"
          strokeDasharray="10, 20"
        />
        <line
          x1="0"
          y1={line2Y}
          x2="100%"
          y2={line2Y}
          stroke={oppositePrimary}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default MyJourney;
