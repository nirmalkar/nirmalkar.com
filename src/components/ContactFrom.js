import React, { useState } from "react"

function ContactFrom() {
    const [fromData, setFormData] = useState({})
    const submitContactForm = () => {}
    const inputHandler = e => {
        setFormData({
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className="contact-form-container">
            <form className="form" onSubmit={() => submitContactForm()}>
                <div>
                    <label for="name">Name</label>
                    <input
                        required
                        value={fromData.name}
                        id="name"
                        onChange={e => inputHandler(e)}
                    />
                </div>
                <div>
                    <label for="email">Email</label>
                    <input
                        required
                        value={fromData.email}
                        id="email"
                        onChange={e => inputHandler(e)}
                    />
                </div>
                <div>
                    <label for="message">Message</label>
                    <textarea id="message" onChange={e => inputHandler(e)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ContactFrom
