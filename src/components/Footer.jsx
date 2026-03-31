export default function Footer() {
  const scrollToTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <p className="footer-copy">© 2026 Ishant Singh</p>
      <button className="footer-top" onClick={scrollToTop}>
        Back to top ↑
      </button>
    </footer>
  );
}
