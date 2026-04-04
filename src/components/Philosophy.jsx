import { philosophy, practices } from "./data/philosophy";

function PhilosophyCard({ icon, title, body }) {
  return (
    <div className="phc rev">
      <div className="phi">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default function Philosophy() {
  return (
    <>
      <section id="philosophy">
        <div className="slbl rev">Approach</div>
        <h2 className="stit rev">
          Backend <span className="fire">Philosophy</span>
        </h2>
        <p
          className="rev"
          style={{
            color: "var(--text2)",
            maxWidth: "520px",
            lineHeight: "1.78",
            marginBottom: "3rem",
            fontSize: ".93rem",
          }}
        >
          Every system I build follows principles that prioritize clarity,
          security, and maintainability over shortcuts.
        </p>
        <div className="phg">
          {philosophy.map((item) => (
            <PhilosophyCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section id="practices">
        <div className="slbl rev">Standards</div>
        <h2 className="stit rev">
          Performance &amp; <span className="fire">Practices</span>
        </h2>
        <div className="phg" style={{ marginTop: "3rem" }}>
          {practices.map((item) => (
            <PhilosophyCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
