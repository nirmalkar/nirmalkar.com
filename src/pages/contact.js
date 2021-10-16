import React from "react"
import ContactFrom from "../components/ContactFrom"

import NavigationBar from "../components/NavigationBar"
import Seo from "../components/Seo"

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
