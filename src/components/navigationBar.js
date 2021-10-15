import React, { useState } from "react"
import { Link } from "gatsby"
import CloseMenu from "../images/close1.png"
import Menu from "../images/menu2.png"

function NavigationBar() {
    const [isMenuShown, setIsMenuShown] = useState(false)
    console.log(isMenuShown)
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
                    className={!isMenuShown ? "" : "nav-block"}
                    activeClassName="nav-active"
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className={!isMenuShown ? "" : "nav-block"}
                    activeClassName="nav-active"
                    to="/about"
                >
                    About
                </Link>
                <Link
                    className={!isMenuShown ? "" : "nav-block"}
                    activeClassName="nav-active"
                    to="/blog"
                >
                    Blogs
                </Link>
                <Link
                    className={!isMenuShown ? "" : "nav-block"}
                    activeClassName="nav-active"
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default NavigationBar
