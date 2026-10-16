import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Capabilities from '../components/Capabilities';
import Principles from '../components/Principles';
import About from '../components/About';
import Contact from '../components/Contact';

/** Main portfolio view */
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Projects />
      <Capabilities />
      <Principles />
      <About />
      <Contact />
    </main>
  );
}
