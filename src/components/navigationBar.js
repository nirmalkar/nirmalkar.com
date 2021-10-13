import React, { useState } from "react"
import { Link } from "gatsby"
import CloseMenu from "../images/close1.png"
import Menu from "../images/menu2.png"

function NavigationBar() {
    const [isMenuShown, setIsMenuShown] = useState(false)
    return (
        <div className="navigation">
            <div className="nav-mobile">
                {isMenuShown ? (
                    <img
                        onClick={() => setIsMenuShown(!isMenuShown)}
                        className="nav-img-close"
                        src={CloseMenu}
                        alt="Logo"
                        style={{ width: "2rem" }}
                    />
                ) : (
                    <img
                        onClick={() => setIsMenuShown(!isMenuShown)}
                        className="nav-img"
                        src={Menu}
                        alt="Logo"
                        style={{ width: "2.2rem" }}
                    />
                )}
            </div>

            <Link className="nav" activeClassName="nav-active" to="/">
                Home
            </Link>
            <Link className="nav" activeClassName="nav-active" to="/about">
                About
            </Link>
            <Link className="nav" activeClassName="nav-active" to="/blog">
                Blogs
            </Link>
            <Link className="nav" activeClassName="nav-active" to="/contact">
                Contact
            </Link>
        </div>
    )
}

export default NavigationBar
