import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
interface ToggleButtonProps {
  currentTheme?: string;
  onToggle?: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onToggle,
  currentTheme,
}) => {
  const [toggleVal, setToggleVal] = useState("light");
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setToggleVal((val) => {
        if (val === "dark") {
          return "light";
        } else {
          return "dark";
        }
      });
    }
  };
  return (
    <div>
      <input
        onChange={handleToggle}
        type="checkbox"
        className={`checkbox`}
        id="checkbox"
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className="fas fa-moon"></i>
        <FontAwesomeIcon icon={faMoon} />
        <FontAwesomeIcon icon={faSun} />
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
