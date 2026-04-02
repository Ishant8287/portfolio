import "../Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <span className="footer__logo">
              IS<span className="footer__dot">.</span>
            </span>
            <span className="footer__copy">
              © {year} Ishant Singh. Built with MERN.
            </span>
          </div>
          <div className="footer__right">
            <a
              href="https://github.com/Ishant8287"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ishant-singh-9b3bb93a7"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              LinkedIn
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=singhishant683@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
