import { Link } from 'gatsby';
import React, { useState, useContext, useRef } from 'react';
import type { FC } from 'react';
import DownAero from '../../assets/svg/DownAero';
import { navLinks } from '../../constants/navigationContants';
import type { NavConst } from '../../constants/navigationContants';
import { ThemeContext } from '../../context/themeProvider';
import { useOutsideAlerter } from '../../utils/focusInOrOut'; // note the hook import
import LinkSelect from '../LinkSelect';

interface LinksProps {
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

const Links: FC<LinksProps> = ({ navLinks, theme }) => {
  const { oppositePrimary } = theme.colors;
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useOutsideAlerter({
    ref: wrapperRef,
    functToRun: setShowMoreOptions,
    checkVal: showMoreOptions,
  });

  return (
    <>
      {navLinks.map((nav, i) => {
        const isOthers = nav.name === 'others';
        return (
          <div key={nav.name}>
            {!isOthers && (
              <Link to={nav.path} className="nav">
                {nav.name}
              </Link>
            )}
            {isOthers && (
              <span
                ref={wrapperRef}
                role="button"
                tabIndex={0}
                onClick={() => setShowMoreOptions((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setShowMoreOptions((prev) => !prev);
                  }
                }}
                className="others-link"
              >
                More &nbsp;
                <div className="arrow-down">
                  <DownAero size={13} color={oppositePrimary} />
                </div>
                {showMoreOptions && (
                  <LinkSelect
                    paths={[
                      { name: 'About Me', path: '/about' },
                      { name: 'Info', path: '/info' },
                    ]}
                  />
                )}
              </span>
            )}
            {i < navLinks.length - 1 && <span>/</span>}
          </div>
        );
      })}
    </>
  );
};

const Nav: FC = () => {
  const { theme, themeName } = useContext(ThemeContext);
  return (
    <div className={`nav-container-${themeName}`}>
      <Links {...{ navLinks, themeName, theme }} />
    </div>
  );
};

export default Nav;
