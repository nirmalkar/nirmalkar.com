import React, { FC, useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { ThemeContext } from "../../context/themeProvider";
import { navLinks, NavConst } from "../../constants/navigationContants";
import LinkSelect from "../LinkSelect";
import DownAero from "../../assets/svg/DownAero";
import { UseOutsideAlerter } from "../../utils/focusInOrOut";

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
  const [showMoreOptions, setShowMoreOptions] = useState<boolean>(false);
  const ref = useRef(null);
  React.useEffect(() => {
    const checkVal = showMoreOptions;
    UseOutsideAlerter({
      ref,
      functToRun: setShowMoreOptions,
      checkVal: showMoreOptions,
    });
  }, [ref, showMoreOptions]);

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
              <span
                ref={ref}
                onClick={() => setShowMoreOptions((prev) => !prev)}
                className="others-link"
              >
                More &nbsp;
                <div className="arrow-down">
                  <DownAero size={13} color={oppositePrimary} />
                </div>
                {showMoreOptions && (
                    <LinkSelect
                      paths={[
                        { name: "Journey", path: "/journey" },
                        { name: "Info", path: "/info" },
                      ]}
                    />
                )}
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
