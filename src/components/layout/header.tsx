import React from "react";
import Navigation from "../Navigation";
import { ThemeContext } from "../../context/themeProvider";

const Header: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <header
      style={{
        background: `${theme.colors.primary}50`,
        borderBottom: `1px solid ${theme.colors.secondary}`,
      }}
    >
      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
