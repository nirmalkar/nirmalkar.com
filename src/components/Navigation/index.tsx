import React, { FC } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "../../context/themeProvider";
import { navLinks, NavConst } from "../../constants/navigationContants";
import { playSound } from "../../utils/playSound";

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
  const { theme, themeName } = React.useContext(ThemeContext);
  return (
    <div className={`nav-container-${themeName}`}>
      <Links {...{ navLinks, themeName }} />
    </div>
  );
};

export default Nav;
