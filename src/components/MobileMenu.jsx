import scrollTo from "../utils/scrollTo";

const NAV_ITEMS = ["about", "projects", "skills", "contact"];

function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
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
          color: "#111110",
        }}
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
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
  );
}

export default MobileMenu;
