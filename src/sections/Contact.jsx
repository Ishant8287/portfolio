import { contact } from "../data/fallbackData";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <Reveal>
        <h2 className="text-4xl mb-4">Let's build something</h2>
      </Reveal>

      <Reveal>
        <p className="text-gray-400 mb-6">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>

        <div className="flex justify-center gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
