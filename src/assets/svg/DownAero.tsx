import React from "react";

type DownAeroProps = {
  color: string;
  size: number;
};

const DownAero = (props: DownAeroProps) => {
  const { color, size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 32 32"
      height={size}
      width={size}
      fill={color}
      id="down-arrow"
    >
      <path d="M16 22a2 2 0 0 1-1.41-.59l-10-10a2 2 0 0 1 2.82-2.82L16 17.17l8.59-8.58a2 2 0 0 1 2.82 2.82l-10 10A2 2 0 0 1 16 22Z"></path>
    </svg>
  );
};

export default DownAero;
