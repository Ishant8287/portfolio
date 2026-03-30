import FadeIn from "./FadeIn";
import scrollTo from "../utils/scrollTo";

function Hero({ name, tagline, email, links }) {
  return (
    <section id="hero">
      <FadeIn className="hero-inner" delay={0}>
        <p className="hero-label">Available for internships</p>
        <h1 className="hero-name">{name}</h1>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-cta">
          <a className="btn-primary" onClick={() => scrollTo("projects")}>
            View Work ↓
          </a>
          <a
            className="btn-secondary"
            href={links?.linkedin || `mailto:${email}`}
            target={links?.linkedin ? "_blank" : undefined}
            rel={links?.linkedin ? "noreferrer" : undefined}
          >
            Get in Touch
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

export default Hero;
