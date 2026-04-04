import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KeyboardPanel({ onKonami }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ki = 0;

    const onKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;

      if (e.key === "?") {
        setVisible((v) => !v);
        return;
      }
      if (e.key === "g" || e.key === "G") {
        window.open("https://github.com/Ishant8287", "_blank");
        return;
      }
      if (e.key === "p" || e.key === "P") {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (e.key === "c" || e.key === "C") {
        document.getElementById("cs2")?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (e.key === "Escape") {
        setVisible(false);
        return;
      }

      if (e.key === KONAMI[ki]) {
        ki++;
        if (ki === KONAMI.length) {
          ki = 0;
          onKonami?.();
        }
      } else {
        ki = 0;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKonami]);

  return (
    <div id="kbp" className={visible ? "v" : ""}>
      <h4>Keyboard Shortcuts</h4>
      <div className="kr">
        <span>Projects</span>
        <span className="kk">P</span>
      </div>
      <div className="kr">
        <span>GitHub</span>
        <span className="kk">G</span>
      </div>
      <div className="kr">
        <span>Contact</span>
        <span className="kk">C</span>
      </div>
      <div className="kr">
        <span>Toggle panel</span>
        <span className="kk">?</span>
      </div>
    </div>
  );
}
