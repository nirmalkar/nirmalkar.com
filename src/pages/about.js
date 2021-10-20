import React from "react"

import Seo from "../components/SiteSeo"
import NavigationBar from "../components/Navigation"
import Theme from "../components/Theme"

function About() {
    return (
        <>
            <Seo title="About" />
            <NavigationBar />
            <Theme />
            <h1>About page</h1>
        </>
    )
}

export default About
