import { useEffect } from "react";
import { caseStudies } from "../data/projects";

export default function ProjectModal({ activeKey, onClose }) {
  const d = activeKey ? caseStudies[activeKey] : null;

  useEffect(() => {
    if (activeKey) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeKey]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!d)
    return (
      <div id="mo" onClick={handleBackdropClick}>
        <div className="mb">
          <button className="mc" onClick={onClose}>
            ✕
          </button>
          <div id="mcon" />
        </div>
      </div>
    );

  return (
    <div id="mo" className="open" onClick={handleBackdropClick}>
      <div className="mb">
        <button className="mc" onClick={onClose}>
          ✕
        </button>
        <div id="mcon">
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: ".4rem",
            }}
          >
            <span style={{ fontSize: "2.1rem" }}>{d.i}</span>
            <div>
              <div className="mt">{d.t}</div>
              <div className="msub">{d.s}</div>
            </div>
          </div>

          {/* Problem */}
          <div className="ms">
            <div className="mst">Problem Statement</div>
            <p>{d.p}</p>
          </div>

          {/* Approach */}
          <div className="ms">
            <div className="mst">Approach</div>
            <p>{d.a}</p>
          </div>

          {/* Architecture */}
          <div className="ms">
            <div className="mst">Architecture</div>
            <div className="aw">
              {d.arch.map((item, i) =>
                item.ar ? (
                  <span key={i} className="aar">
                    →
                  </span>
                ) : (
                  <span
                    key={i}
                    className="abox"
                    style={{
                      background: item.c,
                      border: `1px solid ${item.b}`,
                    }}
                  >
                    {item.l}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Challenges */}
          <div className="ms">
            <div className="mst">Challenges Faced</div>
            <ul>
              {d.ch.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          {/* Learnings */}
          <div className="ms">
            <div className="mst">Learnings</div>
            <ul>
              {d.lrn.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
