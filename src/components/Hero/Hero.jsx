import { useEffect, useState } from "react";
import HeroCanvas from "./HeroCanvas";

const roles = [
  "Backend Engineer",
  "API Architect",
  "Node.js Developer",
  "System Designer",
];

export default function Hero() {
  const [roleText, setRoleText] = useState("");

  useEffect(() => {
    let ri = 0,
      ci = 0,
      del = false;
    let timeout;

    function typeRole() {
      const r = roles[ri];
      if (!del) {
        ci++;
        setRoleText(r.substring(0, ci));
        if (ci === r.length) {
          del = true;
          timeout = setTimeout(typeRole, 2100);
          return;
        }
      } else {
        ci--;
        setRoleText(r.substring(0, ci));
        if (ci === 0) {
          del = false;
          ri = (ri + 1) % roles.length;
          timeout = setTimeout(typeRole, 400);
          return;
        }
      }
      timeout = setTimeout(typeRole, del ? 55 : 95);
    }

    timeout = setTimeout(typeRole, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" style={{ paddingTop: 0, margin: 0, maxWidth: "none" }}>
      {/* Background */}
      <div className="hbg">
        <div className="hgrid" />
        <div className="hglow" />
        <div className="hglow2" />
        <div className="hline" />
        <div className="hline" />
        <div className="cm tl" />
        <div className="cm tr" />
        <div className="cm bl" />
        <div className="cm br" />
      </div>

      <div className="hi">
        {/* Left */}
        <div>
          <div className="htag rev">
            <span className="htdot" />
            Open to Backend Roles
          </div>
          <h1 className="hname">
            <span className="line rev">ISHANT</span>
            <span className="line fire rev">SINGH</span>
          </h1>
          <div className="hrole rev">
            <span>{roleText}</span>
            <span
              style={{
                color: "var(--accent)",
                animation: "bl 1s infinite",
                display: "inline-block",
              }}
            >
              _
            </span>
          </div>
          <p className="htag2 rev">
            I build <strong>scalable APIs</strong> and backend systems that
            power real-world apps — engineered for performance, security, and
            growth.
          </p>
          <div className="hctas rev">
            <a href="#projects" className="btnp">
              View Projects →
            </a>
            <a href="#cs2" className="btno">
              Let's Talk
            </a>
          </div>
          <div className="hstats rev">
            <div>
              <div className="sn">
                3<em>+</em>
              </div>
              <div className="sl">Projects</div>
            </div>
            <div>
              <div className="sn">
                5<em>+</em>
              </div>
              <div className="sl">Technologies</div>
            </div>
            <div>
              <div className="sn">
                100<em>%</em>
              </div>
              <div className="sl">Backend Focus</div>
            </div>
          </div>
        </div>

        {/* Right - Canvas */}
        <HeroCanvas />
      </div>

      <div className="sh">
        <div className="sl2" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
