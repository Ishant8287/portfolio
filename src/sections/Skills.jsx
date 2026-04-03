import Reveal from "../components/Reveal";

const skills = {
  Languages: ["JavaScript", "Java"],
  Backend: ["Node.js", "Express"],
  Database: ["MongoDB"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Reveal>
        <h2 className="text-4xl text-center mb-12">Skills</h2>
      </Reveal>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {Object.entries(skills).map(([key, value]) => (
          <Reveal key={key}>
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h3 className="mb-4 font-semibold">{key}</h3>

              <div className="flex flex-wrap gap-2">
                {value.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-sm bg-gray-800 rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
