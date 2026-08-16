import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoSlider />
            <About />
            <Services />
            <Projects />
            <Process />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    );
}

export default Home;