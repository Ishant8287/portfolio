import useInView from '../hooks/useInView'
import { skills } from '../data'

export default function Skills() {
  const [headerRef, headerVisible] = useInView()

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-16 fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <p className="font-script text-accent text-3xl md:text-4xl mb-1">My</p>
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(60px, 10vw, 130px)' }}
          >
            SKILLS
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/[0.07]">
          {skills.map((skill, i) => (
            <SkillCard key={skill.number} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`relative p-8 border border-white/[0.07] group hover:bg-white/[0.03] transition-all duration-500 cursor-default fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Big faded number */}
      <span
        className="absolute top-4 right-5 font-display text-white/[0.04] leading-none select-none group-hover:text-accent/10 transition-colors duration-500"
        style={{ fontSize: 'clamp(60px, 6vw, 90px)' }}
      >
        {skill.number}
      </span>

      {/* Hover left border */}
      <div className="absolute left-0 top-0 w-0.5 h-0 bg-accent group-hover:h-full transition-all duration-500" />

      {/* Category */}
      <h3 className="font-body font-bold text-xl md:text-2xl text-white mb-0.5 relative z-10">
        {skill.category}
      </h3>

      {/* Cursive subtitle */}
      <p className="font-script text-accent text-xl md:text-2xl mb-5 relative z-10">
        {skill.subtitle}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {skill.items.map((item) => (
          <span
            key={item}
            className="font-body text-[11px] text-white/40 border border-white/[0.08] px-2.5 py-1 group-hover:border-accent/25 group-hover:text-white/60 transition-all duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
