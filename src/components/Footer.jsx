import "./Footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaArrowUp,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* About */}

                <div className="footer-about">

                    <h2>
                        AnesaDev<span>.</span>
                    </h2>

                    <p>
                        I create modern, responsive and high-converting websites using
                        React, WordPress, GoHighLevel and the latest web technologies.
                    </p>

                    <div className="social-links">

                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>

                    </div>

                </div>

                {/* Quick Links */}

                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#contact">Contact</a>

                </div>

                {/* Services */}

                <div className="footer-links">

                    <h3>Services</h3>

                    <a href="#services">React Development</a>
                    <a href="#services">WordPress Development</a>
                    <a href="#services">GoHighLevel CRM</a>
                    <a href="#services">Landing Pages</a>
                    <a href="#services">UI / UX Design</a>

                </div>

                {/* Contact */}

                <div className="footer-contact">

                    <h3>Contact</h3>

                    <p>Email</p>
                    <span>aneesach701@gmail.com</span>

                    <p>Phone</p>
                    <span>+92 337 4768957</span>

                    <p>Location</p>
                    <span>Pakistan</span>

                </div>

            </div>

            {/* Bottom */}

            <div className="footer-bottom">

                <p>
                    © 2026 AnesaDev. All Rights Reserved.
                </p>

                <a href="#home" className="top-btn">
                    <FaArrowUp />
                </a>

            </div>

        </footer>
    );
}

export default Footer;