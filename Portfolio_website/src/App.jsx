import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import Academics from "./components/Academics";
import Skills    from "./components/Skills";
import Projects  from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Academics />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}