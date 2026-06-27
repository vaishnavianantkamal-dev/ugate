import { useEffect, useRef } from "react";
import { problemCards } from "../../data/mockData";

export default function ProblemSection() {
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
        <section className="section problem-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">The Challenge</span>
                    <h2 className="section-title">
                        The Core Problem in Residential Buildings
                    </h2>
                    <p className="section-subtitle">
                        Traditional security systems are outdated and create vulnerabilities
                    </p>
                </div>

                <div className="problems-grid">
                    {problemCards.map((card, index) => (
                        <div
                            key={index}
                            className={`problem-card${card.highlight ? " highlight bg-red-500 text-white" : ""}`}
                            ref={(el) => (cardsRef.current[index] = el)}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                        >
                            <div className="problem-icon">
                                <i className={`fas ${card.icon}${card.highlight ? " text-white" : ""}`}></i>
                            </div>
                            <h3 className={card.highlight ? "text-white" : ""}>{card.title}</h3>
                            <p className={card.highlight ? "result-text text-white" : ""}>{card.description}</p>
                            {card.stat && <div className="problem-stat">{card.stat}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}