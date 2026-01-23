import axios from 'axios';
import React, { useContext, useState, useCallback, useMemo } from 'react';
import type { FormEvent, FC, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Icon from '../assets/images/SocalIcons';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { social } from '../constants/socialContants';
import { ThemeContext } from '../context/themeProvider';

interface ContactForm {
  email: string;
  name: string;
  message: string;
}

interface FormErrors {
  email?: string;
  name?: string;
  message?: string;
}

interface SocialLinkProps {
  name: string;
  link: string;
  fillColor: string;
}

const SocialLink = React.memo<SocialLinkProps>(({ name, link, fillColor }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
    aria-label={name}
  >
    <Icon name={name} fill={fillColor} size={24} />
  </a>
));

SocialLink.displayName = 'SocialLink';

const Contact: FC = () => {
  const { theme } = useContext(ThemeContext);
  const themeColors = useMemo(
    () => ({
      secondary: theme.colors.secondary,
      oppositePrimary: theme.colors.oppositePrimary,
      oppositeSecondary: theme.colors.oppositeSecondary,
      primary: theme.colors.primary,
    }),
    [theme.colors],
  );

  const [contact, setContact] = useState<ContactForm>({
    email: '',
    name: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!contact.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!contact.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!contact.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (contact.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [contact]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setContact((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error for this field when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }
    },
    [errors],
  );

  const handleServerResponse = useCallback(
    (ok: boolean, msg: string, form: HTMLFormElement) => {
      if (ok) {
        form.reset();
        setContact({ email: '', name: '', message: '' });
        setErrors({});
      }
    },
    [],
  );

  const submitContactForm = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!validateForm()) {
        toast.error('Please fix the errors in the form');
        return;
      }

      setIsSubmitting(true);
      const form = e.currentTarget as HTMLFormElement;

      try {
        await axios({
          method: 'post',
          url: 'https://formspree.io/f/mjvpgbrd',
          data: new FormData(form),
        });

        handleServerResponse(true, 'Thanks!', form);
        toast.success("We'll get back to you soon!");
      } catch (error: unknown) {
        const axiosError = error as any;
        const errorMessage =
          axiosError?.response?.data?.error || 'An error occurred';
        handleServerResponse(false, errorMessage, form);
        toast.error('Failed to send message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [validateForm, handleServerResponse],
  );

  return (
    <Layout>
      <Seo title="Contact" description="Get in touch with me" />
      <Toaster position="top-center" />
      <main
        className="contact-container"
        style={{ backgroundColor: themeColors.primary }}
      >
        <div className="contact-wrapper">
          <section className="contact-header">
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">
              I&apos;d love to hear from you. Send me a message and I&apos;ll
              get back to you as soon as possible.
            </p>
          </section>

          <section className="contact-form-section">
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={submitContactForm}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    name="name"
                    type="text"
                    value={contact.name}
                    placeholder="Enter your name"
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="error-message">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={contact.email}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="error-message">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={contact.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? 'message-error' : undefined
                    }
                  />
                  {errors.message && (
                    <span id="message-error" className="error-message">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="form-submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <div className="contact-social">
                  <h3 className="social-title">Or find me on</h3>
                  <div className="social-links">
                    {social.map((socialMedia) => (
                      <SocialLink
                        key={socialMedia.name}
                        name={socialMedia.name}
                        link={socialMedia.link}
                        fillColor={themeColors.oppositePrimary}
                      />
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
