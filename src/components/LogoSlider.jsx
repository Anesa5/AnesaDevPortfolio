import "./LogoSlider.css";

import react from "../assets/images/react.jpg";
import wordpress from "../assets/images/wordpress.jpg";
import elementor from "../assets/images/elementor.jpg";
import figma from "../assets/images/google.jpg";
import ghl from "../assets/images/ghl.jpg";
import shopify from "../assets/images/shopify.jpg";
import meta from "../assets/images/meta.jpg";


const logos = [
    react,
    wordpress,
    elementor,
    figma,
    ghl,
    shopify,
    meta,

    // Duplicate for infinite slider
    react,
    wordpress,
    elementor,
    figma,
    ghl,
    shopify,
    meta,
];

function LogoSlider() {
    return (
        <section className="logo-slider-section">

            <p className="logo-title">
                TECHNOLOGIES I WORK WITH
            </p>

            <div className="logo-slider">

                <div className="logo-track">

                    {logos.map((logo, index) => (
                        <div className="logo-card" key={index}>
                            <img src={logo} alt="Technology Logo" />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default LogoSlider;