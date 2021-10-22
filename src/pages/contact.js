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
            <div>
                <ContactFrom />
            </div>
        </>
    )
}

export default Contact
