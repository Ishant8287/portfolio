import { skills } from "./data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="slbl rev">Arsenal</div>
      <h2 className="stit rev">
        Tech <span className="fire">Stack</span>
      </h2>
      <div className="skg" style={{ marginTop: "3rem" }}>
        {skills.map(({ category, items }) => (
          <div key={category} className="rev">
            <div className="sgt">{category}</div>
            <div className="skc">
              {items.map(({ icon, bg, name }) => (
                <div key={name} className="skcd">
                  <div className="ski" style={{ background: bg }}>
                    {icon}
                  </div>
                  <span className="skn">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
