import { motion } from "framer-motion";
import Reveal from "./Reveal";
import "../Skills.css";

export default function Skills({ skills = [] }) {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-num">03</span>
            <h2 className="section-title">Skills</h2>
            <div className="section-line" />
          </div>
        </Reveal>

        <div className="skills__layout">
          {skills.map((skill, i) => (
            <Reveal key={skill.group} delay={i * 0.07} className="skill-group">
              <p className="skill-group__label">{skill.group}</p>
              <div className="skill-group__tags">
                {skill.tags.map((tag, j) => (
                  <motion.span
                    key={tag}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.06 + j * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Marquee strip */}
        <Reveal delay={0.3}>
          <div className="skills__marquee-wrap">
            <div className="skills__marquee">
              {[...Array(3)].map((_, i) =>
                skills
                  .flatMap((s) => s.tags)
                  .map((tag, j) => (
                    <span key={`${i}-${j}`} className="marquee__item">
                      {tag}
                      <span className="marquee__sep">·</span>
                    </span>
                  )),
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
