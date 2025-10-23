import React, { FormEvent, useContext, useState } from "react";
import { FC } from "react";
import Layout from "../components/layout";
import { ThemeContext } from "../context/themeProvider";
import Icon from "../assets/images/SocalIcons";
import { social } from "../constants/socialContants";
import Seo from "../components/seo";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const { theme } = useContext(ThemeContext);
  const { secondary, oppositePrimary, oppositeSecondary, primary } = theme.colors;
  const [contact, setContact] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleServerResponse = (
    ok: boolean,
    msg: string,
    form: { reset: () => void }
  ) => {
    if (ok) {
      form.reset();
      setContact({ email: "", name: "", message: "" });
    }
  };

  const submitContactForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    axios({
      method: "post",
      url: "https://formspree.io/f/mjvpgbrd",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
        toast.success("We'll get back to you soon!");
      })
      .catch((r) => {
        handleServerResponse(false, r.response?.data?.error || "An error occurred", form);
        toast.error("Failed to send message. Please try again later.");
      });
  };

  return (
    <Layout>
      <Seo title="Contact" description="Get in touch with me" />
      <Toaster position="top-center" />
      <main className="contact-container" style={{ backgroundColor: primary }}>
        <div className="contact-wrapper">
          <section className="contact-header">
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">
              I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
            </p>
          </section>

          <section className="contact-form-section">
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={submitContactForm}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    id="name"
                    className="form-input"
                    name="name"
                    type="text"
                    value={contact.name}
                    placeholder="Enter your name"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={contact.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={contact.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className="form-submit">
                  Send Message
                </button>

                <div className="contact-social">
                  <h3 className="social-title">Or find me on</h3>
                  <div className="social-links">
                    {social.map((socialMedia) => (
                      <a
                        key={socialMedia.name}
                        href={socialMedia.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={socialMedia.name}
                      >
                        <Icon
                          name={socialMedia.name}
                          fill={oppositePrimary}
                          size={24}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
};

export default Contact;
