import { FaLaptopCode } from '@react-icons/all-files/fa/FaLaptopCode';
import { IoHomeOutline } from '@react-icons/all-files/io5/IoHomeOutline';
import { IoInformationCircleOutline } from '@react-icons/all-files/io5/IoInformationCircleOutline';
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline';
import { RiContactsLine } from '@react-icons/all-files/ri/RiContactsLine';
import { Link } from 'gatsby';
import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../../context/themeProvider';

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
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--primaryColor',
      theme.colors.primary,
    );
    document.documentElement.style.setProperty(
      '--oppositePrimaryColor',
      theme.colors.oppositePrimary,
    );
    document.documentElement.style.setProperty(
      '--secondaryLighterColor',
      theme.colors.secondaryLighter,
    );
  }, [theme]);

  return (
    <div
      ref={sidebarRef}
      className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}
    >
      <nav>
        <div
          role="button"
          tabIndex={0}
          onClick={toggleSidebar}
          onKeyDown={(e) =>
            (e.key === 'Enter' || e.key === ' ') && toggleSidebar()
          }
        >
          <Link to="/">
            <li>
              <IoHomeOutline style={{ color: theme.colors.oppositePrimary }} />
              Home
            </li>
          </Link>
          {/* <Link to="/blog">
            <li>
              <FaBlogger style={{ color: theme.colors.oppositePrimary }} />
              Blog
            </li>
          </Link> */}
          <Link to="/work">
            <li>
              <FaLaptopCode style={{ color: theme.colors.oppositePrimary }} />
              Work
            </li>
          </Link>
          <Link to="/about">
            <li>
              <IoPersonOutline
                style={{ color: theme.colors.oppositePrimary }}
              />
              About me
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <RiContactsLine style={{ color: theme.colors.oppositePrimary }} />
              Contact
            </li>
          </Link>
          <Link to="/info">
            <li>
              <IoInformationCircleOutline
                style={{ color: theme.colors.oppositePrimary }}
              />
              Info
            </li>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
