import { Link } from "gatsby";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeProvider";

type LinkSelectProps = {
  paths: Paths[];
};
type Paths = {
  name: string;
  path: string;
};

const LinkSelect = (props: LinkSelectProps) => {
  const { paths } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div className="select-container">
      {paths.map((path) => (
        <Link key={path.path} to={path.path} className="select-link">
          <div className="select-item">
            {path.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LinkSelect;
