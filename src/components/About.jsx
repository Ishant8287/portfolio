export default function About() {
  return (
    <section id="about">
      <div className="ag">
        <div>
          <div className="slbl rev">About</div>
          <h2 className="stit rev">
            Building systems
            <br />
            <span className="fire">that scale.</span>
          </h2>
          <div className="at rev">
            <p>
              I'm a <strong>backend-focused developer</strong> who thrives on
              designing clean, efficient server-side systems. My work centers on
              building REST APIs, authentication layers, and database
              architectures that aren't just functional — they're built to last.
            </p>
            <p>
              With deep experience in <strong>Node.js and MongoDB</strong>, I
              approach every project with an architecture-first mindset. Great
              backend code is invisible to users but unmistakable to the teams
              that maintain it.
            </p>
            <p>
              Currently looking for opportunities to contribute to complex
              backend systems and grow as an engineer.
            </p>
          </div>
          <div className="ah rev">
            <div className="ahi">REST API design &amp; development</div>
            <div className="ahi">JWT authentication &amp; RBAC systems</div>
            <div className="ahi">MongoDB schema design &amp; optimization</div>
            <div className="ahi">Modular, maintainable architecture</div>
          </div>
        </div>

        <div className="rev">
          <div className="ac">
            <div className="acbar">
              <div className="dot" style={{ background: "#ef4444" }} />
              <div
                className="dot"
                style={{ background: "var(--accent)", marginLeft: "4px" }}
              />
              <div
                className="dot"
                style={{ background: "#4ade80", marginLeft: "4px" }}
              />
              <span
                style={{
                  fontSize: ".63rem",
                  color: "var(--text3)",
                  marginLeft: ".48rem",
                }}
              >
                ishant.config.js
              </span>
            </div>
            <span className="cc">// backend engineer config</span>
            <br />
            <span className="ck">const</span> engineer = {"{"}
            <br />
            &nbsp;&nbsp;name: <span className="cs">"Ishant Singh"</span>,<br />
            &nbsp;&nbsp;role: <span className="cs">"Backend Engineer"</span>,
            <br />
            &nbsp;&nbsp;stack: [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="cs">"Node.js"</span>,{" "}
            <span className="cs">"Express.js"</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="cs">"MongoDB"</span>,{" "}
            <span className="cs">"React"</span>
            <br />
            &nbsp;&nbsp;],
            <br />
            &nbsp;&nbsp;passions: [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="cs">"Clean Architecture"</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="cs">"API Design"</span>,
            <span className="cs">"Security"</span>
            <br />
            &nbsp;&nbsp;],
            <br />
            &nbsp;&nbsp;available: <span className="cn">true</span>,<br />
            &nbsp;&nbsp;coffee: <span className="cf">Infinity</span>
            <br />
            {"}"};<br />
            <br />
            <span className="ck">export default</span> engineer;
          </div>
        </div>
      </div>
    </section>
  );
}
