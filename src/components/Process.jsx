import "./Process.css";
import {
    FaComments,
    FaPencilRuler,
    FaCode,
    FaRocket,
} from "react-icons/fa";

const process = [
    {
        number: "01",
        icon: <FaComments />,
        title: "Discovery",
        desc: "Understanding your business goals, target audience and project requirements."
    },
    {
        number: "02",
        icon: <FaPencilRuler />,
        title: "UI / UX Design",
        desc: "Creating modern layouts and user-friendly interfaces before development."
    },
    {
        number: "03",
        icon: <FaCode />,
        title: "Development",
        desc: "Building responsive, fast and scalable websites using modern technologies."
    },
    {
        number: "04",
        icon: <FaRocket />,
        title: "Launch",
        desc: "Testing, optimization and deployment with complete client support."
    }
];

function Process() {
    return (
        <section className="process">

            <div className="process-container">

                <span className="section-title">
                    MY PROCESS
                </span>

                <h2>
                    How I Work
                </h2>

                <p className="process-text">
                    Every project follows a clear workflow to ensure
                    quality, speed and client satisfaction.
                </p>

                <div className="process-grid">

                    {process.map((item, index) => (

                        <div className="process-card" key={index}>

                            <span className="process-number">
                                {item.number}
                            </span>

                            <div className="process-icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Process;