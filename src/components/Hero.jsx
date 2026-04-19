import { useState, useEffect } from "react";

const subtitle = "Backend Focused Full Stack Developer";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (typed.length < subtitle.length) {
      const t = setTimeout(() => {
        setTyped(subtitle.slice(0, typed.length + 1));
      }, 55);
      return () => clearTimeout(t);
    } else {
      setDone(true);
    }
  }, [typed]);

  useEffect(() => {
    const interval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-16 pt-16"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <p className="font-body text-xs text-accent tracking-[0.4em] uppercase mb-8">
          Available for Internships
        </p>

        {/* ISHANT with single & backend */}
        {/* FIX: Added w-fit so the absolute positioning anchors tightly to the text width, not the screen width */}
        <div className="relative w-fit">
          <h1
            className="font-display leading-none text-white select-none"
            style={{
              fontSize: "clamp(80px, 16vw, 220px)",
              letterSpacing: "-0.02em",
            }}
          >
            ISHANT
          </h1>
          <span
            className="font-script text-accent absolute pointer-events-none"
            style={{
              fontSize: "clamp(22px, 4.5vw, 60px)",
              top: "-5%" /* FIX: Moved to negative to float above */,
              right:
                "-5%" /* FIX: Anchored just outside the bounding box of the 'T' */,
              transform: "rotate(-6deg)",
              lineHeight: 1,
            }}
          >
            &amp; backend
          </span>
        </div>

        {/* SINGH + braces */}
        <div className="flex items-end gap-4 md:gap-8 mt-2">
          <h1
            className="font-display leading-none text-white select-none"
            style={{
              fontSize: "clamp(80px, 16vw, 220px)",
              letterSpacing: "-0.02em",
            }}
          >
            SINGH
          </h1>
          <span
            className="font-display text-accent leading-none mb-2 md:mb-4 select-none"
            style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
          >
            {"{ "}
            <span
              style={{ opacity: blink ? 1 : 0, transition: "opacity 0.1s" }}
            >
              _
            </span>
            {" }"}
          </span>
        </div>

        {/* Typing subtitle */}
        <div className="mt-6 md:mt-10 flex items-center">
          <span className="w-8 h-px bg-accent mr-4 shrink-0" />
          <p className="font-body text-base md:text-lg text-white/50 tracking-wide">
            {typed}
            {!done && (
              <span
                className="inline-block w-0.5 h-4 bg-accent ml-0.5 align-middle"
                style={{ opacity: blink ? 1 : 0 }}
              />
            )}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="font-body text-xs font-semibold text-black bg-accent px-8 py-3.5 tracking-[0.2em] uppercase hover:bg-accent/85 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="font-body text-xs font-semibold text-white border border-white/20 px-8 py-3.5 tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="mt-12 flex items-center gap-6">
          <a
            href="https://github.com/Ishant8287"
            target="_blank"
            rel="noreferrer"
            className="font-body text-xs text-white/30 tracking-widest uppercase hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <span className="w-4 h-px bg-white/20" />
          <a
            href="https://linkedin.com/in/ishant-singh-cse"
            target="_blank"
            rel="noreferrer"
            className="font-body text-xs text-white/30 tracking-widest uppercase hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <span className="w-4 h-px bg-white/20" />
          <a
            href="https://mail.google.com/mail/?view=cm&to=singhishant683@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="font-body text-xs text-white/30 tracking-widest uppercase hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-14 bg-white/30 overflow-hidden relative">
          <div className="w-full h-full bg-accent scroll-line" />
        </div>
      </div>
    </section>
  );
}
