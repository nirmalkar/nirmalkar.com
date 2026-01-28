import { IoIosCloseCircleOutline } from '@react-icons/all-files/io/IoIosCloseCircleOutline';
import { IoListCircleOutline } from '@react-icons/all-files/io5/IoListCircleOutline';
import React, { useContext, lazy, Suspense } from 'react';
import type { ReactNode, FC } from 'react';
import { ThemeContext } from '../../context/themeProvider';
import { useToggle } from '../../context/toggleProvider';
import SideBar from '../SideBar';
import ToggleButton from '../ToggleButton';
import Header from './header';

const Footer = lazy(() => import('./footer'));

interface Props {
  children?: ReactNode;
}
const Layout: FC<Props> = React.memo((props: Props) => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const { toggle, isToggled } = useToggle();
  const { children } = props;

  const toggleSidebar = () => {
    toggle();
  };

  const iconStyle = React.useMemo(
    () => ({
      color: 'var(--icon-color)',
    }),
    [themeName],
  );

  return (
    <div className="layout" id="wrapper">
      <a
        href="#main-content"
        className="skip-link"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '6px',
          background: 'var(--about-bg, rgba(255, 255, 255, 0.9))',
          color: 'var(--about-text, #000000)',
          padding: '8px',
          textDecoration: 'none',
          borderRadius: '4px',
          zIndex: 1000,
          transition: 'top 0.3s',
        }}
        onFocus={(e) => (e.target.style.top = '6px')}
        onBlur={(e) => (e.target.style.top = '-40px')}
      >
        Skip to main content
      </a>
      <Header />
      <SideBar isVisible={isToggled} toggleSidebar={toggleSidebar} />
      <div className="toggle-button">
        <ToggleButton currentTheme={themeName} onToggle={toggleTheme} />
        <div
          onClick={toggleSidebar}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleSidebar();
            }
          }}
          id="hamburger"
          className={`hamburger-container ${isToggled ? 'active' : ''}`}
          role="button"
          tabIndex={0}
          aria-label={isToggled ? 'Close menu' : 'Open menu'}
          aria-expanded={isToggled}
        >
          <IoIosCloseCircleOutline
            size={32}
            className={`icon ${isToggled ? 'show' : 'hide'}`}
            style={iconStyle}
            aria-hidden="true"
          />
          <IoListCircleOutline
            size={32}
            className={`icon ${isToggled ? 'hide' : 'show'}`}
            style={iconStyle}
          />
        </div>
      </div>
      <main
        id="main-content"
        className={`content ${isToggled ? 'shifted' : ''}`}
        role="main"
        aria-label="Main content"
      >
        <section>{children}</section>
      </main>
      <Suspense fallback={<div className="footer-placeholder" />}>
        <Footer />
      </Suspense>
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;
