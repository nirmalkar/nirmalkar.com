import React from "react";

type Props = {
  color: string;
};

function HamburgerMenu({ color }: Props) {
  return (
    <svg
      width={30}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 500 500"
      viewBox="0 0 500 500"
      id="hamburger-menu"
    >
      <circle
        cx="250"
        cy="250"
        r="200"
        fill="none"
        stroke={color ?? "#000"}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="20"
      ></circle>
      <rect
        fill={color ?? "#000"}
        width="200"
        height="40"
        x="150"
        y="296.67"
      ></rect>
      <rect
        fill={color ?? "#000"}
        width="200"
        height="40"
        x="150"
        y="230"
      ></rect>
      <rect
        fill={color ?? "#000"}
        width="200"
        height="40"
        x="150"
        y="163.33"
      ></rect>
    </svg>
  );
}

export default HamburgerMenu;
