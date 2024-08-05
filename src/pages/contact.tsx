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
  const { secondary, oppositePrimary, oppositeSecondary } = theme.colors;
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
        toast.success("we'll get back to you soon!");
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
        console.log(r);
      });
  };

  return (
    <Layout>
      <Seo title={"Contact"} description={"This is the contact page."} />
      <Toaster />
      <div className="contact-container">
        <h2 className="contact-heading" style={{ color: oppositeSecondary }}>
          Say Hello!
        </h2>
        <div
          className="contact-card"
          style={{
            backgroundColor: secondary,
            boxShadow: `${secondary} 0px 0px 5px 0px, ${secondary} 0px 0px 1px 0px`,
          }}
        >
          <form className="contact-form" onSubmit={submitContactForm}>
            <div className="contact-form-group">
              <input
                className="contact-input"
                name="name"
                type="text"
                value={contact.name}
                placeholder="Your name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="Your email"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <textarea
                className="contact-input"
                value={contact.message}
                name="message"
                placeholder="Start typing here"
                onChange={handleChange}
                required
              />
            </div>
            <button
              className="contact-submit"
              style={{
                backgroundColor: secondary,
                border: `1px solid ${oppositePrimary}`,
                color: oppositePrimary,
              }}
              type="submit"
            >
              Submit
            </button>
            <div className="contact-icons">
              {social.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social"
                  style={{ backgroundColor: secondary }}
                >
                  <Icon size={20} fill={oppositeSecondary} name={social.name} />
                </a>
              ))}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
