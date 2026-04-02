import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import "../Projects.css";

const GitHubIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 2H2v12h12v-4M10 2h4v4M14 2L6 10" />
  </svg>
);

export default function Projects({ projects = [] }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-num">02</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line" />
          </div>
        </Reveal>

        <div className="projects__list">
          {projects.map((proj, i) => (
            <Reveal key={proj.id} delay={i * 0.08}>
              <motion.div
                className="project-item"
                onHoverStart={() => setHovered(proj.id)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  borderColor:
                    hovered === proj.id ? "var(--accent)" : "var(--border)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Number */}
                <div className="proj__num">{proj.id}</div>

                {/* Body */}
                <div className="proj__body">
                  <div className="proj__title-row">
                    <h3 className="proj__name">{proj.name}</h3>
                    <AnimatePresence>
                      {hovered === proj.id && (
                        <motion.div
                          className="proj__hover-indicator"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          style={{ originX: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  <p className="proj__desc">{proj.desc}</p>
                  <div className="proj__tech">
                    {proj.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="proj__links">
                  <a
                    className="proj__link"
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                    Code
                  </a>
                  {proj.live ? (
                    <a
                      className="proj__link proj__link--live"
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalIcon />
                      Live
                    </a>
                  ) : (
                    <span className="proj__soon">Soon</span>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
