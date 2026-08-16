import "./CTA.css";
import { FaArrowRight } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

function CTA() {
    return (
        <section className="cta">

            <div className="cta-container">

                <span className="cta-tag">
                    LET'S WORK TOGETHER
                </span>

                <h2>
                    Have a Project in Mind?
                    <br />
                    Let's Build Something Amazing.
                </h2>

                <p>
                    Whether you need a modern website, a high-converting landing page,
                    a WordPress solution, or a React application, I'm here to help turn
                    your ideas into reality.
                </p>

                <div className="cta-buttons">

                    <a href="#contact">
                        <MagneticButton className="primary-btn">
                            Hire Me
                            <FaArrowRight />
                        </MagneticButton>
                    </a>

                    <MagneticButton className="cta-btn-secondary">
                        View Projects
                    </MagneticButton>

                </div>

            </div>

        </section>
    );
}

export default CTA;