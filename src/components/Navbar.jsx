import { useState, useEffect } from "react";
import useTheme from "./hooks/useTheme";

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const resumeHref = "/resume.pdf";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  const navLinks = [
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#projects", label: "projects" },
    { href: "#philosophy", label: "philosophy" },
    { href: "#cs2", label: "contact" },
  ];

  return (
    <>
      <nav id="nav" className={scrolled ? "sc" : ""}>
        <a href="#" className="nl">
          IS<em>.</em>
        </a>

        <div className="nls">
          {navLinks.map(({ href, label }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="na">
          <button className="btn-th" onClick={toggle} aria-label="Toggle theme">
            {dark ? "🌙" : "☀️"}
          </button>
          <a href={resumeHref} className="btn-re" download="resume.pdf">
            resume ↓
          </a>
          <button
            className="nmb"
            style={{ display: "none" }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div id="mno" className={mobileOpen ? "open" : ""} onClick={closeMenu} />

      {/* Mobile nav drawer */}
      <div id="mn" className={mobileOpen ? "open" : ""}>
        {navLinks.map(({ href, label }) => (
          <a key={label} href={href} className="ml" onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a
          href={resumeHref}
          download="resume.pdf"
          onClick={closeMenu}
          style={{
            marginTop: "auto",
            border: "1px solid var(--accent)",
            borderRadius: "6px",
            padding: ".62rem 1rem",
            textAlign: "center",
            color: "var(--accent)",
            letterSpacing: ".06em",
          }}
        >
          resume ↓
        </a>
      </div>
    </>
  );
}
