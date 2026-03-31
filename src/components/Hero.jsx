export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-text">BACKEND</div>
      <div className="hero-eyebrow">Available for Internships</div>
      <h1 className="hero-name">
        Ishant
        <br />
        <span>Singh.</span>
      </h1>
      <p className="hero-desc">
        Node.js backend engineer building scalable REST APIs with clean
        architecture, secure JWT auth systems, and real-world SaaS products.
      </p>
      <div className="hero-cta">
        <a className="btn-primary" href="#projects">
          View Work ↓
        </a>
        <a
          className="btn-ghost"
          href="https://www.linkedin.com/in/ishant-singh-9b3bb93a7"
          target="_blank"
          rel="noreferrer"
        >
          Get in Touch
        </a>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        Scroll
      </div>
    </section>
  );
}
