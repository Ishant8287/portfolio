import FadeIn from "./FadeIn";

function Contact({ links }) {
  return (
    <section id="contact">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-num">04</span>
            <h2 className="section-title">Contact</h2>
            <div className="section-line" />
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="contact-inner">
            <div>
              <h3 className="contact-heading">
                Let's build scalable backend systems.
                <br />
                something.
              </h3>
              <p className="contact-sub">
                I'm actively looking for backend engineering internships. If
                you're hiring or just want to talk tech, reach out.
              </p>
            </div>
            <div className="contact-links">
              <a className="contact-link-item" href={`mailto:${links.email}`}>
                <div>
                  <p className="contact-link-label">Email</p>
                  <p className="contact-link-value">{links.email}</p>
                </div>
                <span className="contact-arrow">→</span>
              </a>
              <a
                className="contact-link-item"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <p className="contact-link-label">GitHub</p>
                  <p className="contact-link-value">@Ishant8287</p>
                </div>
                <span className="contact-arrow">→</span>
              </a>
              <a
                className="contact-link-item"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <p className="contact-link-label">LinkedIn</p>
                  <p className="contact-link-value">Ishant Singh</p>
                </div>
                <span className="contact-arrow">→</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Contact;
