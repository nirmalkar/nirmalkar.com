import * as React from "react";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <>
      <div className="layout" id="wrapper">
        <div id="page-content-wrapper">{children}</div>
      </div>
    </>
  );
};

export default Layout;
