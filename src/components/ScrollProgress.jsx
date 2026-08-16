import { useEffect, useState } from "react";
import "./ScrollProgress.css";

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const percent = (scrollTop / height) * 100;
            setProgress(percent);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className="scroll-progress"
            style={{ width: `${progress}%` }}
        ></div>
    );
}

export default ScrollProgress;