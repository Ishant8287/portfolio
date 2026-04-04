import { useState, useEffect, useCallback } from "react";

import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import KeyboardPanel from "./components/KeyboardPanel";
import EasterEgg from "./components/EasterEgg/EasterEgg";
import useScrollReveal from "./components/hooks/useScrollReveal";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [easterEgg, setEasterEgg] = useState(false);

  // Hide loader after animation completes
  useEffect(() => {
    document.body.classList.add("loading");
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("loading");
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  // Scroll reveal for .rev elements — re-run after loading
  useScrollReveal();

  const launchEE = useCallback(() => setEasterEgg(true), []);
  const closeEE = useCallback(() => setEasterEgg(false), []);

  return (
    <>
      <Cursor />
      <Loader visible={loading} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Philosophy />
      <Contact />
      <Footer />
      <KeyboardPanel onKonami={launchEE} />
      <EasterEgg visible={easterEgg} onClose={closeEE} />
    </>
  );
}
