import React, { FC } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "../../context/themeProvider";
import { navLinks, NavConst } from "../../constants/navigationContants";
import DownAero from "../../assets/svg/DownAero";

interface NavProps {}
interface Links {
  themeName: string;
  navLinks: NavConst[];
  theme: Theme;
}
interface Theme {
  colors: Colors;
}
interface Colors {
  oppositePrimary: string;
  oppositeSecondary: string;
  primary: string;
  secondary: string;
}
const Links: FC<Links> = ({ themeName, navLinks, theme }) => {
  const { oppositePrimary } = theme.colors;
  return (
    <>
      {navLinks.map((nav, i) => {
        const isTabOhters = nav.name === "others";
        return (
          <>
            {!isTabOhters && (
              <Link to={nav.path} className="nav">
                {nav.name}
              </Link>
            )}
            {isTabOhters && (
              <span className="others-link">
                Others &nbsp;
                <div className="arrow-down">
                  <DownAero size={13} color={oppositePrimary} />
                </div>
              </span>
            )}
            {i < navLinks.length - 1 && <span>/</span>}
          </>
        );
      })}
    </>
  );
};
const Nav: FC<NavProps> = () => {
  const { theme, themeName } = React.useContext(ThemeContext);
  return (
    <div className={`nav-container-${themeName}`}>
      <Links {...{ navLinks, themeName, theme }} />
    </div>
  );
};

export default Nav;
