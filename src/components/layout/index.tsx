import { IoIosCloseCircleOutline } from '@react-icons/all-files/io/IoIosCloseCircleOutline';
import { IoListCircleOutline } from '@react-icons/all-files/io5/IoListCircleOutline';
import React, { useContext } from 'react';
import type { ReactNode, FC } from 'react';
import { ThemeContext } from '../../context/themeProvider';
import { ToggleContext } from '../../context/toggleProvider';
import SideBar from '../SideBar';
import ToggleButton from '../ToggleButton';
import Footer from './footer';
import Header from './header';

interface Props {
  children?: ReactNode;
}
const Layout: FC<Props> = (props: Props) => {
  const { theme, themeName, toggleTheme } = useContext(ThemeContext);
  const toggleContext = useContext(ToggleContext);

  if (!toggleContext) {
    throw new Error('ToggleContext is undefined. Ensure the provider is set.');
  }

  const { toggle, isToggled } = toggleContext;
  const { children } = props;

  const toggleSidebar = () => {
    toggle();
  };

  return (
    <div
      className="layout"
      id="wrapper"
      style={{
        backgroundColor: theme.colors.primary,
        // backgroundImage: `radial-gradient(${secondary} 10%, transparent 11%), radial-gradient(${secondary} 10%, transparent 11%)`,
        backgroundSize: '10px 10px',
        backgroundPosition: '0 0, 30px 30px',
        backgroundRepeat: 'repeat',
      }}
    >
      <div>
        <Header />
        <SideBar isVisible={isToggled} toggleSidebar={toggleSidebar} />
        <div className="toggle-button">
          <ToggleButton currentTheme={themeName} onToggle={toggleTheme} />
          <button
            onClick={toggleSidebar}
            className="hamburger-container"
            aria-label="Toggle Sidebar"
          >
            <IoIosCloseCircleOutline
              size={30}
              className={`icon ${isToggled ? 'show' : 'hide'}`}
              style={{ color: theme.colors.oppositePrimary }}
            />
            <IoListCircleOutline
              size={30}
              className={`icon ${isToggled ? 'hide' : 'show'}`}
              style={{ color: theme.colors.oppositePrimary }}
            />
          </button>
        </div>
      </div>
      <main className={`content ${isToggled ? "shifted" : ""}`}>
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
