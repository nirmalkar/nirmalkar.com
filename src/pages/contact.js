import React from "react"
import ContactFrom from "../components/ContactFrom"

import NavigationBar from "../components/Navigation"
import Seo from "../components/SiteSeo"
import Theme from "../components/Theme"

function Contact() {
    return (
        <>
            <Seo title="Contact" />
            <NavigationBar />
            <Theme />
            <h1>
                <ContactFrom />
            </h1>
        </>
    )
}

export default Contact
