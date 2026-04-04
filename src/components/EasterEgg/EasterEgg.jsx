import { useEffect } from "react";
import SnakeGame from "./SnakeGame";

export default function EasterEgg({ visible, onClose }) {
  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div id="ee" className={visible ? "show" : ""}>
      {visible && <SnakeGame onClose={onClose} />}
      <div className="eh">🐍 Snake! Arrow keys to play · ESC to exit</div>
      <button
        className="ecl"
        onClick={onClose}
        style={{ position: "relative", top: "auto", right: "auto" }}
      >
        ESC — Close
      </button>
    </div>
  );
}
