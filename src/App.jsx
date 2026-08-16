import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";
import StatsCounter from "./components/StatsCounter";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>

      <ScrollProgress />
      <Navbar />
      <Hero />
      <LogoSlider />
      <About />
      <StatsCounter />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default App;