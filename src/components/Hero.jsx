
import "./Hero.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import {
    SiReact,
    SiWordpress,
    SiElementor,
    SiFigma,
} from "react-icons/si";

import heroImg from "../assets/images/hero.png";

function Hero() {
    return (
        <section className="hero" id="home">

            {/* Background Blur */}
            <div className="blur blur1"></div>
            <div className="blur blur2"></div>

            <div className="hero-container">

                {/* =========================
            LEFT CONTENT
        ========================= */}
                <motion.div
                    className="hero-left"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >



                    <h1>
                        Built
                        <span> Premium Websites </span>
                        That Convert Visitors Into Clients.
                    </h1>

                    <p>
                        I help businesses grow with modern React websites,
                        WordPress development, Elementor, GoHighLevel,
                        landing pages, and beautiful UI/UX.
                    </p>

                    {/* Buttons */}
                    <div className="hero-buttons">

                        <a href="#contact" className="btn-primary">
                            Hire Me
                            <FaArrowRight />
                        </a>

                        <a href="#projects" className="btn-secondary">
                            View Work
                        </a>

                    </div>

                    {/* Stats */}
                    <div className="hero-stats">

                        <div>
                            <h2>50+</h2>
                            <span>Projects</span>
                        </div>

                        <div>
                            <h2>30+</h2>
                            <span>Clients</span>
                        </div>

                        <div>
                            <h2>100%</h2>
                            <span>Satisfaction</span>
                        </div>

                    </div>

                </motion.div>


                {/* =========================
            RIGHT IMAGE
        ========================= */}
                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >

                    {/* Main Image */}
                    <div className="hero-card">
                        <img
                            src={heroImg}
                            alt="Zobia Portfolio"
                        />
                    </div>

                    {/* Floating Technologies */}

                    <div className="floating react">
                        <SiReact />
                        <span>React</span>
                    </div>

                    <div className="floating wp">
                        <SiWordpress />
                        <span>WordPress</span>
                    </div>

                    <div className="floating elementor">
                        <SiElementor />
                        <span>Elementor</span>
                    </div>

                    <div className="floating figma">
                        <SiFigma />
                        <span>Figma</span>
                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;
