import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={sticky ? "navbar sticky" : "navbar"}>
            <div className="container">

                {/* Logo */}

                <a href="#home" className="logo" onClick={closeMenu}>
                    AnesaDev<span>.</span>
                </a>

                {/* Navigation */}

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                    <li>
                        <a href="#home" onClick={closeMenu}>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" onClick={closeMenu}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#services" onClick={closeMenu}>
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="#projects" onClick={closeMenu}>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#testimonials" onClick={closeMenu}>
                            Testimonials
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            Contact
                        </a>
                    </li>

                </ul>

                {/* Hire Me Button */}

                <a
                    href="#contact"
                    className="btn-primary"
                    onClick={closeMenu}
                >
                    Hire Me
                    <FaArrowRight />
                </a>

                {/* Mobile Menu */}

                <div
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>
        </header>
    );
}

export default Navbar;