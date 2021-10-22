import React, { useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

function ContactFrom() {
    const [fromData, setFormData] = useState({})
    const { isDark } = React.useContext(ThemeContext)
    const submitContactForm = () => {}
    const inputHandler = e => {
        setFormData({
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className="contact-form-container">
            <form
                className={isDark ? "form-dark" : "form"}
                onSubmit={() => submitContactForm()}
            >
                <div>
                    <input
                        placeholder="Name"
                        className="name"
                        required
                        value={fromData.name}
                        id="name"
                        onChange={e => inputHandler(e)}
                    />
                </div>
                <div>
                    <input
                        placeholder="Email"
                        className="email"
                        required
                        value={fromData.email}
                        id="email"
                        onChange={e => inputHandler(e)}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Message"
                        className="text-area"
                        id="message"
                        onChange={e => inputHandler(e)}
                    />
                </div>
                <button className="submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactFrom
