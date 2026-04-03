import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Cursor />
      <ScrollProgress />
    </div>
  );
}
