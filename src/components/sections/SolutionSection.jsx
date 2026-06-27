import { useEffect, useRef } from "react";
import { solutionCards } from "../../data/mockData";

export default function SolutionSection() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        cardsRef.current.forEach((el) => {
            if (el) {
                el.style.opacity = "0";
                el.style.transform = "translateY(30px)";
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section solution-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">The Solution</span>
                    <h2 className="section-title">Advanced Building Security System</h2>
                    <p className="section-subtitle">
                        A digital gate workflow that replaces manual approvals and logs
                    </p>
                </div>

                <div className="solution-grid">
                    {solutionCards.map((card, index) => (
                        <div
                            key={index}
                            className="solution-card"
                            ref={(el) => (cardsRef.current[index] = el)}
                        >
                            <div className={`solution-icon ${card.colorClass}`}>
                                <i className={`fas ${card.icon}`}></i>
                            </div>
                            <h3>{card.title}</h3>
                            <ul className="solution-list">
                                {card.items.map((item) => (
                                    <li key={item}>
                                        <i className="fas fa-check"></i> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}