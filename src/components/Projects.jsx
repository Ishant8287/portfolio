import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  return (
    <section id="projects">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-num">02</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line" />
          </div>
        </FadeIn>
        <div className="projects-list">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 80}>
              <ProjectCard project={project} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
