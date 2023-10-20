import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import { ThemeContext } from "../../context/themeProvider";
import ToggleButton from "../ToggleButton";
import HamburgerMenu from "../../assets/svg/HamburgerMenu";

interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = (props: Props) => {
  const { theme, themeName, toggleTheme } = React.useContext(ThemeContext);
  const { secondary, oppositeSecondary } = theme?.colors;
  const { children } = props;
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
      <div className="toggle-button">
        <ToggleButton currentTheme={themeName} onToggle={toggleTheme} />
        <div className="hamburger-container">
          <HamburgerMenu color={oppositeSecondary} />
        </div>
      </div>
      <main>
        <section className="content">{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
