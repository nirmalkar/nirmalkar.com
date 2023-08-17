import React, { FC } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "../../context/themeProvider";
import ToggleButton from "../ToggleButton";
import { navLinks, NavConst } from "../../constants/navigationContants";

interface NavProps {}
interface Links {
  themeName: string;
  navLinks: NavConst[];
}

const Links: FC<Links> = ({ themeName, navLinks }) => {
  return (
    <>
      {navLinks.map((nav, i) => (
        <>
          <Link to={nav.path} className="nav">
            {nav.name}
          </Link>
          {i < navLinks.length - 1 && <span>/</span>}
        </>
      ))}
    </>
  );
};
const Nav: FC<NavProps> = () => {
  const { theme, themeName, toggleTheme } = React.useContext(ThemeContext);
  return (
    <div className={`nav-container-${themeName}`}>
      <div className="nav-icon">N</div>
      <Links {...{ navLinks, themeName }} />
      <ToggleButton currentTheme={themeName} onToggle={toggleTheme} />
    </div>
  );
};

export default Nav;
