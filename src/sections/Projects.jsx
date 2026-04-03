import { projects } from "../data/fallbackData";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const MotionDiv = motion.div;

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Reveal>
        <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((p, i) => (
          <Reveal key={i}>
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
              hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>

              <p className="text-gray-400 mb-4">{p.description}</p>

              <div className="flex gap-2 flex-wrap mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-gray-800 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  GitHub →
                </a>
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    Live →
                  </a>
                ) : null}
              </div>
            </MotionDiv>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
