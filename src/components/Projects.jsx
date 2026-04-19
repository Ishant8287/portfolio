import useInView from '../hooks/useInView'
import { mainProjects, moreProjects } from '../data'

export default function Projects() {
  const [headerRef, headerVisible] = useInView()

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <p className="font-script text-accent text-3xl md:text-4xl mb-1">Selected</p>
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(60px, 10vw, 130px)' }}
          >
            PROJECTS
          </h2>
        </div>

        {/* Main projects */}
        <div className="flex flex-col gap-6 mb-20">
          {mainProjects.map((project, i) => (
            <MainProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More projects */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-script text-accent text-2xl">More</span>
            <h3 className="font-display text-white text-4xl md:text-5xl tracking-wide">PROJECTS</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {moreProjects.map((project, i) => (
              <SmallProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MainProjectCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`group relative border border-white/[0.07] p-8 md:p-10 hover:border-accent/30 transition-all duration-500 fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <span className="font-body text-[11px] text-accent/70 tracking-[0.3em] uppercase mb-2 block">
            {project.tag}
          </span>
          <h3
            className="font-display text-white leading-none group-hover:text-accent transition-colors duration-300"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            {project.name}
          </h3>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="font-body text-xs text-white/40 border border-white/10 px-4 py-2 tracking-widest uppercase hover:border-white/40 hover:text-white transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="font-body text-xs text-black bg-accent px-4 py-2 tracking-widest uppercase font-semibold hover:bg-accent/80 transition-colors"
          >
            {project.liveLabel}
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-white/50 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
        {project.description}
      </p>

      {/* Highlight */}
      <div className="flex items-start gap-3 mb-6 p-4 border-l-2 border-accent/40 bg-accent/[0.03]">
        <span className="font-body text-xs text-accent/70 leading-relaxed">
          ⚡ {project.highlight}
        </span>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-body text-[11px] text-white/30 border border-white/[0.07] px-3 py-1 group-hover:border-accent/20 group-hover:text-white/50 transition-all duration-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function SmallProjectCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`group relative border border-white/[0.07] p-6 hover:border-accent/30 transition-all duration-500 fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="absolute inset-0 bg-accent/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute left-0 top-0 w-0.5 h-0 bg-accent group-hover:h-full transition-all duration-500" />

      <div className="flex items-start justify-between mb-3">
        <h4 className="font-display text-white text-2xl md:text-3xl group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h4>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="font-body text-[10px] text-white/30 hover:text-accent transition-colors tracking-widest uppercase"
          >
            GH
          </a>
          <span className="text-white/10">·</span>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="font-body text-[10px] text-white/30 hover:text-accent transition-colors tracking-widest uppercase"
          >
            Live
          </a>
        </div>
      </div>

      <p className="font-body text-white/40 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-body text-[10px] text-white/25 border border-white/[0.06] px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
