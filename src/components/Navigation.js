import React, { useState } from "react"
import { Link } from "gatsby"

import { ThemeContext } from "../context/ThemeContext"
import Menu from "../images/menu2.png"
import CloseMenu from "../images/close1.png"
import Home from "../images/home.js"

const isBrowser = typeof window !== "undefined"

function NavigationBar() {
    const [isMenuShown, setIsMenuShown] = useState(false)
    const [dark, setDark] = React.useState(false)
    const { isDark } = React.useContext(ThemeContext)
    let path
    if (isBrowser) {
        path = window.location.pathname
    }

    React.useEffect(() => {
        setDark(isDark)
    }, [isDark])

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
                            ? dark
                                ? "link-dark"
                                : "link-light"
                            : "nav-block"
                    }
                    to="/"
                >
                    <Home
                        color={
                            (dark && path) === "/" || (isMenuShown && !dark)
                                ? "#fff"
                                : dark
                                ? "rgb(199, 199, 199)"
                                : "#231f20"
                        }
                    />
                </Link>
                {/* <Link
                    className={
                        !isMenuShown
                            ? dark
                                ? "link-dark"
                                : "link-light"
                            : "nav-block"
                    }
                    activeClassName={dark ? "nav-active-dark" : "nav-active"}
                    to="/blog"
                >
                    Blog
                </Link> */}
                <Link
                    className={
                        !isMenuShown
                            ? dark
                                ? "link-dark"
                                : "link-light"
                            : "nav-block"
                    }
                    activeClassName={dark ? "nav-active-dark" : "nav-active"}
                    to="/about"
                >
                    About
                </Link>
                <Link
                    className={
                        !isMenuShown
                            ? dark
                                ? "link-dark"
                                : "link-light"
                            : "nav-block"
                    }
                    activeClassName={dark ? "nav-active-dark" : "nav-active"}
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default NavigationBar
