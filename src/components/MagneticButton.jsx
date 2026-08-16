import { useRef } from "react";
import "./MagneticButton.css";

function MagneticButton({ children, className = "", onClick, type = "button" }) {
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        const button = buttonRef.current;

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };

    const handleMouseLeave = () => {
        buttonRef.current.style.transform = "translate(0px,0px)";
    };

    return (
        <button
            ref={buttonRef}
            type={type}
            className={`magnetic-btn ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default MagneticButton;