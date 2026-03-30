import scrollTo from "../utils/scrollTo";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2026 Ishant Singh</p>
      <button className="footer-scroll-top" onClick={() => scrollTo("hero")}>
        Back to top ↑
      </button>
    </footer>
  );
}

export default Footer;
