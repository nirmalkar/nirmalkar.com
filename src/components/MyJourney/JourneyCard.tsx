import React from "react";

type Props = {
  index: number;
  position: number;
};

const JourneyCard = (props: Props) => {
  const { index, position } = props;
  return (
    <div
      className="journey-card-container"
      style={
        index % 2 === 0
          ? { top: "-3.5rem", rotate: "10deg" }
          : { top: "-3.5rem" }
      }
    >
      asdf
    </div>
  );
};

export default JourneyCard;
