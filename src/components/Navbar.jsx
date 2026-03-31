import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsMobileOpen(false);

  return (
    <>
      <nav>
        <a className="nav-logo" href="#hero">
          IS.
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* RIGHT SIDE ACTIONS*/}
        <div className="nav-actions">
          <div className="nav-status">
            <span className="status-dot"></span>
            Open to Internships
          </div>

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Hamburger*/}
          <button
            className="hamburger"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu*/}
      <div className={`mobile-menu ${isMobileOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={closeMenu}>
          ✕
        </button>
        <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
          About
        </a>
        <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>
          Projects
        </a>
        <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>
          Skills
        </a>
        <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </>
  );
}
