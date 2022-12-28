import React, { FC } from "react";
import { Link } from "gatsby";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  return (
    <div className="nav-container">
      <Link to="home" className="nav">
        Home
      </Link>
      <Link to="blog" className="nav">
        Blog
      </Link>
      <Link to="info" className="nav">
        Info
      </Link>
      <Link to="about" className="nav">
        About
      </Link>
      <Link to="contact" className="nav">
        Contact
      </Link>
    </div>
  );
};

export default Nav;
