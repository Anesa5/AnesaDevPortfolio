import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaPaperPlane,
} from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        budget: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phone = "923374768957";

        const message = `*New Portfolio Inquiry*

👤 Name: ${formData.name}

📧 Email: ${formData.email}

📌 Subject: ${formData.subject}

💰 Budget: ${formData.budget}

📝 Message:
${formData.message}`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

        setFormData({
            name: "",
            email: "",
            subject: "",
            budget: "",
            message: "",
        });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                {/* Left Side */}

                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span>CONTACT ME</span>

                    <h2>
                        Let's Build Something
                        <br />
                        Amazing Together.
                    </h2>

                    <p>
                        Have a project in mind? Send me a message and I'll get back to
                        you as soon as possible.
                    </p>

                    <div className="info-box">
                        <FaEnvelope />
                        <div>
                            <h4>Email</h4>
                            <p>aneesach701@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <FaPhoneAlt />
                        <div>
                            <h4>Phone</h4>
                            <p>+92 337 4768957</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <FaMapMarkerAlt />
                        <div>
                            <h4>Location</h4>
                            <p>Pakistan</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side */}

                <motion.form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Project Budget</option>
                        <option>$100 - $500</option>
                        <option>$500 - $1000</option>
                        <option>$1000+</option>
                    </select>

                    <textarea
                        rows="6"
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">
                        Send Message
                        <FaPaperPlane />
                    </button>
                </motion.form>

            </div>
        </section>
    );
}

export default Contact;