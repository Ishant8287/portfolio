import Reveal from "./Reveal";

const projectsData = [
  {
    id: "01",
    name: "RetailFlow",
    desc: "A SaaS platform for retail store management — POS billing, inventory, khata book, supplier tracking, analytics, and AI insights in one system built for small business owners.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS"],
    github: "https://github.com/Ishant8287/RetailFlow",
    live: "https://retail-flow-xi.vercel.app/",
  },
  {
    id: "02",
    name: "Blog API",
    desc: "A production-ready REST API with CRUD operations, resource relationships, filtering, JWT authentication, RBAC, pagination and scalable architecture. Backend fundamentals done right.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "RBAC"],
    github: "https://github.com/Ishant8287/Blog-api-backend",
    live: null,
  },
  {
    id: "03",
    name: "GymTracker",
    desc: "A React-based weekly workout tracker. Add exercises, log sets, reps, and weight — keeping your training consistent and data-driven.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Ishant8287/gym-tracker-react",
    live: "https://gym-tracker-react-nine.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-num">02</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line"></div>
          </div>
        </Reveal>

        <div className="projects-list">
          {projectsData.map((proj) => (
            <Reveal key={proj.id} className="project-item">
              <div className="proj-num">{proj.id}</div>
              <div className="proj-body">
                <h3 className="proj-name">{proj.name}</h3>
                <p className="proj-desc">{proj.desc}</p>
                <div className="proj-tech">
                  {proj.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="proj-links">
                <a
                  className="proj-link"
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
                {proj.live ? (
                  <a
                    className="proj-link"
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M6 2H2v12h12v-4M10 2h4v4M14 2L6 10" />
                    </svg>
                    Live
                  </a>
                ) : (
                  <span className="proj-soon">— Soon</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
