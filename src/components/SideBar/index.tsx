import { Link } from "gatsby";
import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/themeProvider";
import { RiContactsLine } from "@react-icons/all-files/ri/RiContactsLine";
import { IoPersonOutline } from "@react-icons/all-files/io5/IoPersonOutline";
import { FaBlogger } from "@react-icons/all-files/fa/FaBlogger";
import { IoHomeOutline } from "@react-icons/all-files/io5/IoHomeOutline";
import { IoInformationCircleOutline } from "@react-icons/all-files/io5/IoInformationCircleOutline";
import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode";

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
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primaryColor",
      theme.colors.primary
    );
    document.documentElement.style.setProperty(
      "--oppositePrimaryColor",
      theme.colors.oppositePrimary
    );
    document.documentElement.style.setProperty(
      "--secondaryLighterColor",
      theme.colors.secondaryLighter
    );
  }, [theme]);

  const navigationItems = [
    {
      to: "/",
      icon: <IoHomeOutline size={24} />,
      label: "Home",
    },
    {
      to: "/work",
      icon: <FaLaptopCode size={24} />,
      label: "Work",
    },
    {
      to: "/about",
      icon: <IoPersonOutline size={24} />,
      label: "About me",
    },
    {
      to: "/contact",
      icon: <RiContactsLine size={24} />,
      label: "Contact",
    },
    {
      to: "/info",
      icon: <IoInformationCircleOutline size={24} />,
      label: "Info",
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`sidebar-backdrop ${isVisible ? "visible" : "hidden"}`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar ${isVisible ? "visible" : "hidden"}`}
      >
        <nav>
          <ul>
            {navigationItems.map((item, index) => (
              <li
                key={item.to}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                className={isVisible ? "animate-in" : ""}
              >
                <Link to={item.to} onClick={toggleSidebar} className="sidebar-link">
                  <span className="sidebar-icon">{item.icon}</span>
                  <span className="sidebar-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
