import React from "react"
import { Link } from "gatsby"

function navigationBar() {
    return (
        <div className="navigation">
            <Link activeClassName="nav-active" to="/">
                Home
            </Link>
            <Link activeClassName="nav-active" to="/about">
                About
            </Link>
            <Link activeClassName="nav-active" to="/blog">
                Blogs
            </Link>
            <Link activeClassName="nav-active" to="/contact">
                Contact
            </Link>
        </div>
    )
}

export default navigationBar
