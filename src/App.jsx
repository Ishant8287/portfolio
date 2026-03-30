import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useActiveSection from "./hooks/useActiveSection";
import useTheme from "./hooks/useTheme";
import data from "./data/portfolioData";
import "./styles/portfolio.css";

function App() {
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, toggleTheme] = useTheme();

  return (
    <>
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        dark={dark}
        toggleTheme={toggleTheme}
      />
      <Hero
        name={data.name}
        tagline={data.tagline}
        email={data.links.email}
        links={data.links}
      />
      <About about={data.about} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Contact links={data.links} />
      <Footer />
    </>
  );
}

export default App;
