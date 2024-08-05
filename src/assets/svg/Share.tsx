import React from "react";

type ShareIconProps = { size: number; color: string };

const ShareIcon = (props: ShareIconProps) => {
  const { size, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 100 100"
      id="share"
      fill={color ?? "#333"}
    >
      <path d="M75 64c-4.8 0-9.1 2.3-11.8 5.8L38.9 55.7c1.5-3.7 1.5-7.8 0-11.5l24.3-14.1c2.7 3.5 7 5.8 11.8 5.8 8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15c0 2 .4 4 1.1 5.7L36.8 40.8C34 37.3 29.8 35 25 35c-8.3 0-15 6.7-15 15s6.7 15 15 15c4.8 0 9.1-2.3 11.8-5.8l24.3 14.1C60.4 75 60 77 60 79c0 8.3 6.7 15 15 15s15-6.7 15-15-6.7-15-15-15zm0-54c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11zM25 61c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11zm50 29c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z"></path>
      <path d="M1644-510v1684H-140V-510h1784m8-8H-148v1700h1800V-518z"></path>
    </svg>
  );
};

export default ShareIcon;
