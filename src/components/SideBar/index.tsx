import { Link } from "gatsby";
import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/themeProvider";

type SideBarPropsType = { isVisible: boolean; toggleSidebar: () => void };

const SideBar = ({ isVisible, toggleSidebar }: SideBarPropsType) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { theme } = useContext(ThemeContext);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      toggleSidebar();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--secondaryColor",
      theme.colors.secondary
    );
    document.documentElement.style.setProperty(
      "--oppositeSecondaryColor",
      theme.colors.oppositeSecondary
    );
  }, [theme]);

  return (
    <div
      ref={sidebarRef}
      className={`sidebar ${isVisible ? "visible" : "hidden"}`}
    >
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
