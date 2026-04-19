import useInView from "../hooks/useInView";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-6 md:px-16 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <div ref={ref} className={`fade-up ${inView ? "visible" : ""}`}>
          {/* Header */}
          <p className="font-script text-accent text-3xl md:text-4xl mb-1">
            Let's
          </p>
          <h2
            className="font-display text-white leading-none mb-12"
            style={{ fontSize: "clamp(48px, 10vw, 140px)" }}
          >
            WORK
            <br />
            TOGETHER
          </h2>

          {/* Description */}
          <p className="font-body text-white/40 text-base md:text-lg max-w-xl mb-12 leading-relaxed">
            Looking for a backend-focused full stack intern? I'm actively
            applying for internships before July 2026. Let's talk.
          </p>

          {/* Email CTA */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=singhishant683@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block font-body text-sm font-semibold text-black bg-accent px-10 py-4 tracking-[0.25em] uppercase hover:bg-accent/85 transition-colors mb-16 mx-auto md:mx-0"
          >
            singhishant683@gmail.com
          </a>

          {/* Links row */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-10 border-t border-white/[0.06]">
            <a
              href="https://github.com/Ishant8287"
              target="_blank"
              rel="noreferrer"
              className="font-body text-xs text-white/30 tracking-[0.3em] uppercase hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a
              href="https://linkedin.com/in/ishant-singh-cse"
              target="_blank"
              rel="noreferrer"
              className="font-body text-xs text-white/30 tracking-[0.3em] uppercase hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a
              href="https://github.com/Ishant8287"
              target="_blank"
              rel="noreferrer"
              className="font-body text-xs text-white/30 tracking-[0.3em] uppercase hover:text-accent transition-colors"
            >
              Portfolio Source
            </a>
          </div>

          {/* Footer note */}
          <p className="font-body text-white/15 text-xs tracking-widest mt-10">
            © 2026 ISHANT SINGH — BUILT WITH REACT + VITE + TAILWIND
          </p>
        </div>
      </div>
    </section>
  );
}
