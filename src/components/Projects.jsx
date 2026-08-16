import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import project7 from "../assets/images/project7.png";
import project8 from "../assets/images/project8.png";
import project9 from "../assets/images/project9.png";

const projects = [
    {
        image: project7,
        title: "Business Landing Page",
        category: "React Website",
        description:
            "Modern landing page with smooth animations and responsive layout.",
        live: "https://haniya-aesthetics.vercel.app/",
        github: "#",
        tech: ["React", "CSS", "Framer Motion"],
    },

    {
        image: project8,
        title: "WordPress Business Website",
        category: "WordPress",
        description:
            "Professional Elementor website designed for business growth.",
        live: "https://my-va-buddy.vercel.app/",
        github: "#",
        tech: ["WordPress", "Elementor", "WooCommerce"],
    },

    {
        image: project9,
        title: "GoHighLevel Funnel",
        category: "CRM",
        description:
            "Complete funnel, forms, automation and lead management setup.",
        live: "https://crockery-ten.vercel.app/",
        github: "#",
        tech: ["GoHighLevel", "Automation", "CRM"],
    },
];

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">

                <span className="section-title">
                    MY PROJECTS
                </span>

                <h2>Featured Work</h2>

                <p className="projects-text">
                    Some of my recent projects that helped businesses improve
                    their online presence and generate more leads.
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>

                            {/* Project Image */}
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                            </div>

                            {/* Project Content */}
                            <div className="project-content">

                                <span className="project-category">
                                    {project.category}
                                </span>

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                {/* Technologies */}
                                <div className="tech-stack">
                                    {project.tech.map((item, i) => (
                                        <span key={i}>
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="project-buttons">

                                    {/* Live Website */}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt />
                                        <span>View Project</span>
                                    </a>

                                    {/* GitHub */}
                                    {project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub />
                                            <span>GitHub</span>
                                        </a>
                                    )}

                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;