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

import { usePortfolio } from "./hooks/usePortfolio";

function App() {
  const { data, loading, error } = usePortfolio();

  if (loading) return <Loader />;

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero name={data.name} role={data.role} />
        <About about={data.about} />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Contact email={data.email} />
        <Reveal />
      </main>
      <Footer />
    </>
  );
}

export default App;
