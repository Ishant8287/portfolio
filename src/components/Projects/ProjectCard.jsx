export default function ProjectCard({ project, onCaseStudy }) {
  const { icon, title, description, tech, github, live } = project;

  return (
    <div className="pc rev">
      <div className="pct">
        <div className="pib">{icon}</div>
        <div className="pls">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="pl">
              GH
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="pl">
              ↗
            </a>
          )}
        </div>
      </div>
      <div className="pt">{title}</div>
      <p className="pd">{description}</p>
      <div className="ptech">
        {tech.map((t) => (
          <span key={t} className="tt">
            {t}
          </span>
        ))}
      </div>
      <button className="bcs" onClick={() => onCaseStudy(project.key)}>
        view_case_study() →
      </button>
    </div>
  );
}
