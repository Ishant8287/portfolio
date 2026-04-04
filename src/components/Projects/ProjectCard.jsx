export default function ProjectCard({ project, onCaseStudy }) {
  const { icon, title, description, tech, github, live } = project;
  const stopCardClick = (event) => event.stopPropagation();

  return (
    <div className="pc rev">
      <div className="pct">
        <div className="pib">{icon}</div>
        <div className="pls">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="pl"
              aria-label={`Open ${title} GitHub repository`}
              onClick={stopCardClick}
            >
              GH
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="pl"
              aria-label={`Open ${title} live demo`}
              onClick={stopCardClick}
            >
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
