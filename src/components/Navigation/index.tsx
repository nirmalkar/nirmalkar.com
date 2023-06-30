import React, { FC } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "../../context/themeProvider";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  console.log(toggleTheme, "here is the toggle theme!");
  const onThemeChange = () => {
    toggleTheme();
  };
  return (
    <div className="nav-container" style={{}}>
      <button onClick={() => onThemeChange()}>toggel theme!</button>
      <Link to="/" className="nav">
        Home
      </Link>
      /
      <Link to="/blog" className="nav">
        Blog
      </Link>
      /
      <Link to="/info" className="nav">
        Info
      </Link>
      /
      <Link to="/about" className="nav">
        About
      </Link>
      /
      <Link to="/contact" className="nav">
        Contact
      </Link>
      /
      <Link to="/journey" className="nav">
        Journey
      </Link>
    </div>
  );
};

export default Nav;
