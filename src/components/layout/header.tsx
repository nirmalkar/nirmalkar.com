import { navigate } from 'gatsby';
import React from 'react';
import { playSound } from '../../utils/playSound';
import Navigation from '../Navigation';

const Header: React.FC = () => {
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
        background: 'transparent',
        backdropFilter: 'none',
        borderBottom: 'none',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div
          onClick={headerIconClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              headerIconClick();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Navigate to home page"
          className="header-icon"
          style={{
            backgroundColor: 'var(--about-stat-bg, rgba(255, 255, 255, 0.1))',
            color: 'var(--about-text, #ffffff)',
            border: '1px solid var(--about-border, rgba(255, 255, 255, 0.1))',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
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
