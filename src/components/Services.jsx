import "./Services.css";
import { FaArrowRight } from "react-icons/fa";

import {
    FaCode,
    FaWordpress,
    FaLaptopCode,
    FaPaintBrush,
    FaRocket,
    FaMobileAlt,
    FaGoogle,
    FaFacebook,
    FaCalendarAlt,
} from "react-icons/fa";

const services = [
    {
        icon: <FaCode />,
        title: "React Development",
        desc: "Modern, fast and scalable React.js websites with responsive UI and clean code."
    },
    {
        icon: <FaWordpress />,
        title: "WordPress Development",
        desc: "Elementor, WooCommerce, custom pages and complete business websites."
    },
    {
        icon: <FaLaptopCode />,
        title: "Frontend Development",
        desc: "Pixel-perfect HTML, CSS, JavaScript and fully responsive websites."
    },
    {
        icon: <FaPaintBrush />,
        title: "UI / UX Design",
        desc: "Modern, attractive and user-friendly interfaces focused on better user experience."
    },
    {
        icon: <FaRocket />,
        title: "Landing Pages",
        desc: "High-converting landing pages optimized for lead generation and sales."
    },
    {
        icon: <FaMobileAlt />,
        title: "Responsive Design",
        desc: "Websites that look and perform perfectly on desktop, tablet and mobile."
    },
    {
        icon: <FaGoogle />,
        title: "Google Ads",
        desc: "Professional Google Ads campaigns to generate quality leads and maximize ROI."
    },
    {
        icon: <FaFacebook />,
        title: "Meta Ads",
        desc: "Facebook & Instagram advertising campaigns for leads, sales and brand growth."
    },
    {
        icon: <FaCalendarAlt />,
        title: "GoHighLevel Automation",
        desc: "Forms, Surveys, Calendars, Sales Funnels, Workflow Automation, CRM Setup, Email & SMS Automation."
    }
];

function Services() {
    return (
        <section className="services" id="services">
            <div className="services-container">

                <p className="section-tag">
                    MY SERVICES
                </p>

                <h2>
                    What I Can Do For You
                </h2>

                <p className="section-desc">
                    I provide modern web development, marketing and CRM solutions that
                    help businesses grow, generate more leads and build a strong online presence.
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>

                            <div className="service-icon">
                                {service.icon}
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.desc}</p>

                            <a href="#contact" className="btn-primary">
                                Learn More
                                <FaArrowRight />
                            </a>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;