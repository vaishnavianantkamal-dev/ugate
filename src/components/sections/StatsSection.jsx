import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { featurePreviewCards } from "../../data/mockData";

export default function FeaturePreviewSection() {
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
        <section className="section features-preview">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Key Features</span>
                    <h2 className="section-title">Everything You Need for Smart Security</h2>
                </div>

                <div className="features-grid">
                    {featurePreviewCards.map((card, index) => (
                        <div
                            key={index}
                            className="feature-preview-card"
                            ref={(el) => (cardsRef.current[index] = el)}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                        >
                            <div className="feature-preview-icon">
                                <i className={`fas ${card.icon}`}></i>
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <Link to={card.link} className="feature-link">
                                Learn more <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}