import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import { ThemeContext } from "../../context/themeProvider";

interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = (props: Props) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  console.log(toggleTheme, "here is the toggle theme!");
  const { children } = props;
  return (
    <div
      className="layout"
      id="wrapper"
      style={{ background: theme.colors.primary }}
    >
      <Header />
      <main>
        <section className="content">{children}</section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
