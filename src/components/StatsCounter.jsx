import "./StatsCounter.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Counter({ end, suffix }) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 20);

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 20);

        return () => clearInterval(timer);
    }, [inView, end]);

    return (
        <h2 ref={ref}>
            {count}
            {suffix}
        </h2>
    );
}

function StatsCounter() {
    const stats = [
        {
            number: 50,
            suffix: "+",
            title: "Projects Completed",
        },
        {
            number: 30,
            suffix: "+",
            title: "Happy Clients",
        },
        {
            number: 3,
            suffix: "+",
            title: "Years Experience",
        },
        {
            number: 100,
            suffix: "%",
            title: "Client Satisfaction",
        },
    ];

    return (
        <section className="stats">
            <div className="stats-container">
                {stats.map((item, index) => (
                    <div className="stat-card" key={index}>
                        <Counter end={item.number} suffix={item.suffix} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StatsCounter;