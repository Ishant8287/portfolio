import FadeIn from "./FadeIn";

function About({ about }) {
  return (
    <section id="about">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-num">01</span>
            <h2 className="section-title">About</h2>
            <div className="section-line" />
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="about-grid">
            <p className="about-text">{about}</p>
            <div className="about-meta">
              <div className="about-meta-item">
                <p className="meta-label">Location</p>
                <p className="meta-value">India</p>
              </div>
              <div className="about-meta-item">
                <p className="meta-label">Status</p>
                <p className="meta-value">Final Year — Open to Internships</p>
              </div>
              <div className="about-meta-item">
                <p className="meta-label">Focus</p>
                <p className="meta-value">Backend Engineering</p>
              </div>
              <div className="about-meta-item">
                <p className="meta-label">Currently</p>
                <p className="meta-value">Building RetailFlow · Grinding DSA</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default About;
