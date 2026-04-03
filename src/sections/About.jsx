import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-4">
      <Reveal>
        <h2 className="text-4xl font-bold mb-6">About</h2>
      </Reveal>

      <Reveal>
        <p className="text-gray-400 leading-relaxed">
          A backend-focused developer who enjoys crafting clean APIs, robust
          data models, and systems that don't fall apart under pressure.
          Actively seeking backend engineering internships.
        </p>

        <div className="mt-6 text-sm text-gray-500">
          📍 India | Available for internships
        </div>
      </Reveal>
    </section>
  );
}
