import "./About.css";
import aboutimage from '../assets/images/abouteng.jpg'
import MagneticButton from "./MagneticButton";

import {
    FaLaptopCode,
    FaAward,
    FaUsers,
    FaRocket,
    FaDownload,
} from "react-icons/fa";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">

                {/* Left Side */}

                <div className="about-image">
                    <img src={aboutimage} alt="About" />

                    <div className="experience-card">
                        <h2>3+</h2>
                        <span>Years Experience</span>
                    </div>
                </div>

                {/* Right Side */}

                <div className="about-content">

                    <p className="section-tag">ABOUT ME</p>

                    <h2>
                        Built Modern Websites
                        That Help Businesses Grow.
                    </h2>

                    <p className="about-text">
                        I'm a passionate Frontend Developer specializing in React,
                        WordPress, Elementor, GoHighLevel and modern UI/UX design.
                        I build premium, responsive and high-converting websites
                        that help businesses grow and generate more leads.
                    </p>

                    <div className="about-cards">

                        <div className="info-card">
                            <FaLaptopCode className="icon" />
                            <div>
                                <h3>50+</h3>
                                <span>Projects Completed</span>
                            </div>
                        </div>

                        <div className="info-card">
                            <FaUsers className="icon" />
                            <div>
                                <h3>30+</h3>
                                <span>Happy Clients</span>
                            </div>
                        </div>

                        <div className="info-card">
                            <FaAward className="icon" />
                            <div>
                                <h3>100%</h3>
                                <span>Quality Work</span>
                            </div>
                        </div>

                        <div className="info-card">
                            <FaRocket className="icon" />
                            <div>
                                <h3>Fast</h3>
                                <span>Delivery</span>
                            </div>
                        </div>

                    </div>

                    <a
                        href="/Anesa CV.pdf"
                        download
                        style={{ textDecoration: "none" }}
                    >
                        <MagneticButton className="secondary-btn">
                            Download CV
                            <FaDownload />
                        </MagneticButton>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default About;