import scrollTo from "../utils/scrollTo";

const NAV_ITEMS = ["about", "projects", "skills", "contact"];

function Navbar({ activeSection, menuOpen, setMenuOpen, dark, toggleTheme }) {
  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="nav">
        <span className="nav-logo" onClick={() => scrollTo("hero")}>
          IS.
        </span>
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                className={activeSection === item ? "active" : ""}
                onClick={() => scrollTo(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? (
              /* Sun icon */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon icon */
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button
          style={{
            position: "absolute",
            top: 20,
            right: "5vw",
            background: "none",
            border: "none",
            fontSize: 24,
            cursor: "pointer",
            color: "var(--color-text)",
          }}
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            onClick={() => {
              scrollTo(item);
              setMenuOpen(false);
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navbar;
