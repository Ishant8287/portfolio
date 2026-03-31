import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-num">01</span>
            <h2 className="section-title">About</h2>
            <div className="section-line"></div>
          </div>
        </Reveal>

        <Reveal className="about-layout">
          <p className="about-text">
            I'm a <strong>backend-focused developer</strong> building real-world
            projects with
            <strong>Node.js, Express, and MongoDB</strong>. I care about clean
            code structure, secure authentication systems, and scalable API
            design.
            <br />
            <br />
            Currently grinding DSA daily and building{" "}
            <strong>RetailFlow</strong> — a full-stack SaaS platform for retail
            store management. Final year student, actively seeking backend
            engineering internships.
          </p>
          <div className="about-meta">
            <div className="meta-row">
              <span className="meta-key">Location</span>
              <span className="meta-val">India 🇮🇳</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">Status</span>
              <span className="meta-val available">● Open to Internships</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">Focus</span>
              <span className="meta-val">Backend Engineering</span>
            </div>
            <div className="meta-row">
              <span className="meta-key">Currently</span>
              <span className="meta-val">
                Building RetailFlow · Grinding DSA
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-key">Stack</span>
              <span className="meta-val">Node.js · Express · MongoDB</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
