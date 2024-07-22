import React, { ReactNode, FC, useContext, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { ThemeContext } from "../../context/themeProvider";
import { ToggleContext } from "../../context/toggleProvider";
import ToggleButton from "../ToggleButton";
import HamburgerMenu from "../../assets/svg/HamburgerMenu";
import SideBar from "../SideBar";

interface Props {
  children?: ReactNode;
}
const Layout: FC<Props> = (props: Props) => {
  const { theme, themeName, toggleTheme } = useContext(ThemeContext);
  const { toggle, isToggled } = useContext(ToggleContext);
  const { secondary, oppositeSecondary } = theme?.colors;
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
        backgroundImage: `radial-gradient(${secondary} 10%, transparent 11%), radial-gradient(${secondary} 10%, transparent 11%)`,
        backgroundSize: "10px 10px",
        backgroundPosition: "0 0, 30px 30px",
        backgroundRepeat: "repeat",
      }}
    >
      <Header />
      <SideBar isVisible={isToggled} toggleSidebar={toggleSidebar} />
      <div className="toggle-button">
        <ToggleButton currentTheme={themeName} onToggle={toggleTheme} />
        <div onClick={toggleSidebar} className="hamburger-container">
          <HamburgerMenu color={oppositeSecondary} />
        </div>
      </div>
      <div className={`content ${isToggled ? "shifted" : ""}`}>
        <main>
          <section className="content">{children}</section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
