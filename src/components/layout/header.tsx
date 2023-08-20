import React from "react";
import Navigation from "../Navigation";
import { navigate } from "gatsby";
import { ThemeContext } from "../../context/themeProvider";

const Header: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
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
          onClick={() => navigate("/")}
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
