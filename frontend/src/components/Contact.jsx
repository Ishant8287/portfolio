import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { sendContactMessage } from "../services/api";
import "../Contact.css";

const LINKS = (data) => [
  {
    key: "Email",
    val: data?.email || "singhishant683@gmail.com",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${data?.email || "singhishant683@gmail.com"}`,
  },
  {
    key: "GitHub",
    val: "@Ishant8287",
    href: data?.github || "https://github.com/Ishant8287",
  },
  {
    key: "LinkedIn",
    val: "Ishant Singh",
    href:
      data?.linkedin || "https://www.linkedin.com/in/ishant-singh-9b3bb93a7",
  },
];

export default function Contact({ data }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      await sendContactMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    }
  };

  const links = LINKS(data);

  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-num">04</span>
            <h2 className="section-title">Contact</h2>
            <div className="section-line" />
          </div>
        </Reveal>

        <div className="contact__layout">
          {/* Left col */}
          <Reveal className="contact__left" delay={0.05}>
            <h3 className="contact__heading">
              Let&apos;s build
              <br />
              scalable
              <br />
              <em>systems.</em>
            </h3>
            <p className="contact__sub">
              Actively looking for backend engineering internships. If
              you&apos;re hiring or just want to talk tech, my inbox is open.
            </p>

            <div className="contact__links">
              {links.map(({ key, val, href }) => (
                <a
                  key={key}
                  className="contact__link-item"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact__link-left">
                    <span className="contact__link-key">{key}</span>
                    <span className="contact__link-val">{val}</span>
                  </div>
                  <span className="contact__arrow">↗</span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal className="contact__form-col" delay={0.15}>
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form__row">
                <div className="form__field">
                  <label htmlFor="name" className="form__label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form__input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <div className="form__field">
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form__input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              <div className="form__field">
                <label htmlFor="message" className="form__label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form__input form__textarea"
                  placeholder="What are you building?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                />
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    className="form__success"
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <span>✓</span> Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                ) : (
                  <motion.button
                    key="submit"
                    type="submit"
                    className="form__submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {status === "loading" ? (
                      <span className="form__spinner" />
                    ) : (
                      <>
                        Send Message
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M2 8h12M10 4l4 4-4 4" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>

              {status === "error" && <p className="form__error">{errorMsg}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
