import React from "react"
import ContactFrom from "../components/ContactFrom"

import NavigationBar from "../components/Navigation"
import Seo from "../components/SiteSeo"

function Contact() {
    return (
        <>
            <Seo title="Contact" />
            <NavigationBar />
            <h1>
                <ContactFrom />
            </h1>
        </>
    )
}

export default Contact
