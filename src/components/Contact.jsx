import { useState } from "react";

export default function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("Send Message");
  const [btnBg, setBtnBg] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = () => {
    if (!fields.name || !fields.email || !fields.message) {
      setBtnBg("var(--red)");
      setStatus("Fill all fields");
      setTimeout(() => {
        setBtnBg("");
        setStatus("Send Message");
      }, 2000);
      return;
    }
    setStatus("Sending...");
    setDisabled(true);
    setTimeout(() => {
      setStatus("Sent! ✓");
      setBtnBg("var(--green)");
      setFields({ name: "", email: "", message: "" });
      setTimeout(() => {
        setStatus("Send Message");
        setBtnBg("");
        setDisabled(false);
      }, 3000);
    }, 1100);
  };

  return (
    <div id="cs2">
      <div className="ci">
        <div className="slbl rev">Contact</div>
        <h2 className="stit rev">
          Let's <span className="fire">Connect</span>
        </h2>
        <div className="cg">
          {/* Left info */}
          <div className="cin rev">
            <h3>Open to opportunities</h3>
            <p>
              Whether you have a backend role, a freelance project, or just want
              to talk systems architecture — my inbox is always open. I reply
              within 24 hours.
            </p>
            <div className="cls">
              <a href="mailto:ishantsingh8287@gmail.com" className="cl">
                <div className="cli">📧</div>
                <span>ishantsingh8287@gmail.com</span>
              </a>
              <a
                href="https://github.com/Ishant8287"
                target="_blank"
                rel="noreferrer"
                className="cl"
              >
                <div className="cli">🐙</div>
                github.com/Ishant8287
              </a>
              <a
                href="https://www.linkedin.com/in/ishant-singh-9b3bb93a7"
                target="_blank"
                rel="noreferrer"
                className="cl"
              >
                <div className="cli">💼</div>
                linkedin.com/in/ishant-singh
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="cf2 rev">
            <div className="ff">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={fields.name}
                onChange={handleChange}
              />
            </div>
            <div className="ff">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={fields.email}
                onChange={handleChange}
              />
            </div>
            <div className="ff">
              <label>Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about the opportunity..."
                value={fields.message}
                onChange={handleChange}
              />
            </div>
            <button
              className="bts"
              onClick={handleSend}
              disabled={disabled}
              style={{ background: btnBg || undefined }}
            >
              <span>{status}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
