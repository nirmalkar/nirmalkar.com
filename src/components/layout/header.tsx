import { navigate } from 'gatsby';
import React from 'react';
import { ThemeContext } from '../../context/themeProvider';
import { playSound } from '../../utils/playSound';
import Navigation from '../Navigation';

const Header: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const headerIconClick = () => {
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    if (path !== '/') {
      navigate('/');
      playSound('linkSound');
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
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              headerIconClick();
            }
          }}
          role="button"
          tabIndex={0}
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
