import React from "react";
import Navigation from "../Navigation";
import { navigate } from "gatsby";
import { ThemeContext } from "../../context/themeProvider";
import ToggleButton from "../ToggleButton";
import { playSound } from "../../utils/playSound";

const Header: React.FC = (props) => {
  const { theme, themeName, toggleTheme } = React.useContext(ThemeContext);
  const headerIconClick = () => {
    const path = typeof window !== "undefined" ? window.location.pathname : "";
    if (path !== "/") {
      navigate("/");
      playSound("linkSound");
    }
  };
  return (
    <header
      className="header-container"
      style={{
        background: `${theme.colors.primary}50`,
        borderBottom: `1px solid ${theme.colors.secondary}`,
      }}
    >
      <div>
        <div
          onClick={headerIconClick}
          className="header-icon"
          style={{
            backgroundColor: theme.colors.secondary,
            color: theme.colors.oppositeSecondary,
          }}
        >
          N
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
