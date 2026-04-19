import useInView from '../hooks/useInView'

const stats = [
  { value: '7+', label: 'Projects Shipped' },
  { value: '8.5', label: 'CGPA' },
  { value: '2027', label: 'B.Tech CS' },
  { value: '<150ms', label: 'API Response (RetailFlow)' },
]

export default function About() {
  const [ref, inView] = useInView()
  const [statsRef, statsVisible] = useInView()

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-script text-accent text-3xl md:text-4xl mb-1">Who I</p>
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: 'clamp(60px, 10vw, 130px)' }}
          >
            AM
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <div
            ref={ref}
            className={`fade-up ${inView ? 'visible' : ''}`}
          >
            <p className="font-body text-white/60 text-base md:text-lg leading-relaxed mb-6">
              I'm Ishant Singh — a backend-focused full stack developer pursuing B.Tech in CS at JSS Academy of Technical Education, Noida (2023–2027).
            </p>
            <p className="font-body text-white/60 text-base md:text-lg leading-relaxed mb-6">
              I build production-ready APIs, multi-tenant systems, and AI-integrated applications. My focus is backend depth — clean architecture, optimized queries, and systems that actually scale. I don't just ship features; I care about what happens under the hood.
            </p>
            <p className="font-body text-white/60 text-base md:text-lg leading-relaxed mb-10">
              Currently looking for backend/full stack internships where I can contribute real work — not just fix typos and run tests.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&to=singhishant683@gmail.com"
target="_blank"
rel="noreferrer"
                className="font-body text-xs text-black bg-accent px-7 py-3 tracking-[0.2em] uppercase font-semibold hover:bg-accent/80 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/Ishant8287"
                target="_blank"
                rel="noreferrer"
                className="font-body text-xs text-white border border-white/15 px-7 py-3 tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right — stats */}
          <div
            ref={statsRef}
            className={`grid grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] fade-up ${statsVisible ? 'visible' : ''}`}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-dark p-8 group hover:bg-white/[0.03] transition-colors duration-300"
              >
                <p
                  className="font-display text-accent leading-none mb-2 group-hover:scale-105 transition-transform duration-300 origin-left"
                  style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
                >
                  {stat.value}
                </p>
                <p className="font-body text-white/30 text-xs tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
