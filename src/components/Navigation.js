import React, { useState } from "react"
import { Link } from "gatsby"
import CloseMenu from "../images/close1.png"
import Menu from "../images/menu2.png"
import { ThemeContext } from "../context/ThemeContext"

function NavigationBar() {
    const [isMenuShown, setIsMenuShown] = useState(false)
    const { isDark } = React.useContext(ThemeContext)
    return (
        <div className="navigation">
            <div
                onClick={() => setIsMenuShown(!isMenuShown)}
                className="nav-mobile"
            >
                {isMenuShown ? (
                    <div className="nav-img-close">
                        <img
                            src={CloseMenu}
                            alt="Logo"
                            style={{ width: "2rem" }}
                        />
                    </div>
                ) : (
                    <div className="nav-img">
                        <img
                            src={Menu}
                            alt="Logo"
                            style={{ width: "2.2rem" }}
                        />
                    </div>
                )}
            </div>
            <div className={!isMenuShown ? "nav-container" : "nav-links-mob"}>
                <Link
                    className={
                        !isMenuShown
                            ? isDark
                                ? "link-dark"
                                : "link-light"
                            : "nav-block"
                    }
                    activeClassName={isDark ? "nav-active-dark" : "nav-active"}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className={
                        !isMenuShown
                            ? isDark
                                ? "link-dark"
                                : "link-light"
                            : "nav-block"
                    }
                    activeClassName={isDark ? "nav-active-dark" : "nav-active"}
                    to="/about"
                >
                    About
                </Link>
                <Link
                    className={
                        !isMenuShown
                            ? isDark
                                ? "link-dark"
                                : "link-light"
                            : "nav-block"
                    }
                    activeClassName={isDark ? "nav-active-dark" : "nav-active"}
                    to="/blog"
                >
                    Blogs
                </Link>
                <Link
                    className={
                        !isMenuShown
                            ? isDark
                                ? "link-dark"
                                : "link-light"
                            : "nav-block"
                    }
                    activeClassName={isDark ? "nav-active-dark" : "nav-active"}
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default NavigationBar
