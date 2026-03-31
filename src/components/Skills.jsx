import Reveal from "./Reveal";

const skillsData = [
  { group: "Languages", tags: ["Java", "JavaScript"] },
  { group: "Backend", tags: ["Node.js", "Express.js"] },
  { group: "Database", tags: ["MongoDB", "Mongoose"] },
  {
    group: "Core Concepts",
    tags: ["REST APIs", "JWT Auth", "RBAC", "Pagination"],
  },
  { group: "Frontend", tags: ["React", "TailwindCSS"] },
  { group: "Tools", tags: ["Git", "Postman", "VS Code"] },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-num">03</span>
            <h2 className="section-title">Skills</h2>
            <div className="section-line"></div>
          </div>
        </Reveal>
        <Reveal className="skills-grid">
          {skillsData.map((skill, idx) => (
            <div key={idx} className="skill-group">
              <p className="skill-group-label">{skill.group}</p>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
