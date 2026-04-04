import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <>
      <section id="projects">
        <div className="slbl rev">Work</div>
        <h2 className="stit rev">
          What I've <span className="fire">Forged</span>
        </h2>
        <div className="pg" style={{ marginTop: "3rem" }} id="pgrid">
          {projects.map((project) => (
            <ProjectCard
              key={project.key}
              project={project}
              onCaseStudy={setActiveKey}
            />
          ))}
        </div>
      </section>

      <ProjectModal activeKey={activeKey} onClose={() => setActiveKey(null)} />
    </>
  );
}
