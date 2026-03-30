import FadeIn from "./FadeIn";

function Skills({ skills }) {
  return (
    <section id="skills">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-num">03</span>
            <h2 className="section-title">Skills</h2>
            <div className="section-line" />
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="skill-group-label">{group}</p>
                <div className="skill-tags">
                  {items.map((s) => (
                    <span key={s} className="skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Skills;
