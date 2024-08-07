import React, { useState, useContext } from "react";
import MoonIcon from "../../assets/svg/Moon";
import SunIcon from "../../assets/svg/Sun";
import { ThemeContext } from "../../context/themeProvider";
import { playSound } from "../../utils/playSound";
interface ToggleButtonProps {
  currentTheme?: string;
  onToggle?: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onToggle,
  currentTheme,
}) => {
  const [toggleVal, setToggleVal] = useState<string>("light");
  const { theme, themeName, toggleTheme } = useContext(ThemeContext);
  const { secondary, oppositeSecondary } = theme?.colors;
  const isDarkMode = themeName === "dark";

  const handleToggle = () => {
    playSound("toggleSound");
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
    <div className="toggle-button-container">
      <input
        onChange={handleToggle}
        type="checkbox"
        className={`checkbox`}
        id="checkbox"
        checked={isDarkMode}
      />
      <label
        htmlFor="checkbox"
        className="checkbox-label"
        style={{ backgroundColor: oppositeSecondary }}
      >
        <span className="ball" style={{ backgroundColor: secondary }}>
          {themeName === "dark" ? <SunIcon /> : <MoonIcon />}
        </span>
      </label>
    </div>
  );
};

export default ToggleButton;
