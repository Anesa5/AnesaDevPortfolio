import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";
import client3 from "../assets/images/client3.jpg";

const testimonials = [
    {
        image: client1,
        name: "John Smith",
        role: "Business Owner",
        review:
            "Amazing experience! The website exceeded my expectations. Fast delivery, clean code and excellent communication.",
    },
    {
        image: client2,
        name: "Sarah Williams",
        role: "Marketing Manager",
        review:
            "Very professional developer. My landing page looks premium and performs perfectly on every device.",
    },
    {
        image: client3,
        name: "David Johnson",
        role: "CEO",
        review:
            "Outstanding work! Everything was delivered on time with modern design and smooth animations.",
    },
];

function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">

            <div className="testimonials-container">

                <span className="section-title">
                    TESTIMONIALS
                </span>

                <h2>What My Clients Say</h2>

                <p className="testimonial-text">
                    Client satisfaction is my top priority. Here are some reviews from
                    clients who trusted me with their projects.
                </p>

                <div className="testimonial-grid">

                    {testimonials.map((item, index) => (
                        <div className="testimonial-card" key={index}>

                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <p className="review">
                                "{item.review}"
                            </p>

                            <div className="client">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div>
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Testimonials;