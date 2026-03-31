import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-num">04</span>
            <h2 className="section-title">Contact</h2>
            <div className="section-line"></div>
          </div>
        </Reveal>
        <Reveal className="contact-layout">
          <div>
            <h3 className="contact-heading">
              Let's build
              <br />
              scalable
              <br />
              <em>systems.</em>
            </h3>
            <p className="contact-sub">
              Actively looking for backend engineering internships. If you're
              hiring or just want to talk tech, my inbox is open.
            </p>
          </div>
          <div className="contact-links">
            <a className="contact-item" href="mailto:singhishant683@gmail.com">
              <div className="contact-item-left">
                <p className="contact-item-key">Email</p>
                <p className="contact-item-val">singhishant683@gmail.com</p>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
            <a
              className="contact-item"
              href="https://github.com/Ishant8287"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-item-left">
                <p className="contact-item-key">GitHub</p>
                <p className="contact-item-val">@Ishant8287</p>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
            <a
              className="contact-item"
              href="https://www.linkedin.com/in/ishant-singh-9b3bb93a7"
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-item-left">
                <p className="contact-item-key">LinkedIn</p>
                <p className="contact-item-val">Ishant Singh</p>
              </div>
              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
