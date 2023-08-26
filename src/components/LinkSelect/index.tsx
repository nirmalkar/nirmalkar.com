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
  const { oppositeSecondary, secondary } = theme.colors;
  return (
    <div className="select-container">
      {paths.map((path) => (
        <Link style={{ color: secondary }} to={path.path}>
          <div
            className="select"
            style={{ backgroundColor: oppositeSecondary, color: secondary }}
          >
            {path.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LinkSelect;
