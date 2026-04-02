import { useState, useEffect } from "react";

import Cursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Reveal from "./components/Reveal";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // adjust time if needed

    return () => clearTimeout(timer);
  }, []);

  // 🔥 Block UI until loading finishes
  if (loading) return <Loader />;

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Reveal />
      </main>
      <Footer />
    </>
  );
}

export default App;
