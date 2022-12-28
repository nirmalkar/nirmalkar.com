import * as React from "react";
import Navigation from "../Navigation";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <>
      <div className="layout" id="wrapper">
        <Navigation />
        <div id="page-content-wrapper">{children}</div>
      </div>
    </>
  );
};

export default Layout;
