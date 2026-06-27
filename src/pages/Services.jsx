import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { servicesPageData as d } from "../data/Servicesdata";

function useScrollReveal() {
    const refs = useRef([]);
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
        refs.current.forEach((el) => {
            if (el) {
                el.style.opacity = "0";
                el.style.transform = "translateY(30px)";
                el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                observer.observe(el);
            }
        });
        return () => observer.disconnect();
    }, []);
    return refs;
}

export default function Services() {
    useEffect(() => window.scrollTo(0, 0), []);

    const careRefs = useScrollReveal();
    const healthRefs = useScrollReveal();
    const societyRefs = useScrollReveal();
    const billRefs = useScrollReveal();
    const advRefs = useScrollReveal();
    const groupRefs = useScrollReveal();

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="page-header-content">
                        <span className="page-badge">{d.badge}</span>
                        <h1>
                            {d.title}<br />
                            <span className="gradient-text">{d.titleGradient}</span>
                        </h1>
                        <p>{d.subtitle}</p>
                        <p>{d.paidAddonNote}</p>
                    </div>
                </div>
            </section>

            {/* Partnership Banner */}
            <section className="section">
                <div className="container">
                    <div className="partnership-banner">
                        <div className="partnership-content">
                            <span className="section-badge">{d.partnership.badge}</span>
                            <h2 className="section-title1">
                                {d.partnership.title} <span className="section-title1">{d.partnership.brand}</span>
                            </h2>
                            <h6 className="paid-addon-note">{d.partnership.addonNote}</h6>
                            <p className="partnership-description">{d.partnership.description}</p>
                            <div className="partnership-benefits">
                                {d.partnership.benefits.map((b) => (
                                    <div className="partnership-benefit" key={b.label}>
                                        <i className={`fas ${b.icon}`}></i>
                                        <span>{b.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Home Services Linear List */}
            <section className="section alt-bg">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">{d.homeServices.badge}</span>
                        <h2 className="section-title1">{d.homeServices.title}</h2>
                        <p className="section-subtitle1">{d.homeServices.subtitle}</p>
                    </div>
                    <ul className="core-services-linear">
                        {d.homeServices.items.map((item) => (
                            <li key={item} className="text-white">{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Partner Group Cards */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">{d.partnerGroups.badge}</span>
                        <h2 className="section-title1">{d.partnerGroups.title}</h2>
                        <p className="section-subtitle1">{d.partnerGroups.subtitle}</p>
                    </div>
                    <div className="partner-group-grid">
                        {d.partnerGroups.groups.map((group, i) => (
                            <div
                                key={i}
                                className="partner-group-card"
                                ref={(el) => (groupRefs.current[i] = el)}
                            >
                                <h4>{group.title}</h4>
                                <ul>
                                    {group.items.map((item) => (
                                        <li key={item}>
                                            <i className="fas fa-check"></i>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Care Services */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">{d.careServices.badge}</span>
                        <h2 className="section-title1">{d.careServices.title}</h2>
                        <p className="paid-addon-note" style={{ paddingBottom: "1rem" }}>
                            {d.careServices.paidAddonNote}
                        </p>
                        <p className="section-subtitle1">{d.careServices.subtitle}</p>
                    </div>
                    <div className="care-services">
                        {d.careServices.cards.map((card, i) => (
                            <div
                                key={i}
                                className="care-card"
                                ref={(el) => (careRefs.current[i] = el)}
                            >
                                <div className="care-icon">
                                    <i className={`fas ${card.icon}`}></i>
                                </div>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                                <div className="care-features">
                                    {card.features.map((f) => (
                                        <span key={f.label}>
                                            <i className={`fas ${f.icon}`}></i> {f.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Healthcare Services */}
            <section className="section alt-bg">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">{d.healthcareServices.badge}</span>
                        <h2 className="section-title1">{d.healthcareServices.title}</h2>
                        <p className="section-subtitle1">{d.healthcareServices.subtitle}</p>
                    </div>
                    <div className="healthcare-grid">
                        {d.healthcareServices.cards.map((card, i) => (
                            <div
                                key={i}
                                className="healthcare-card"
                                ref={(el) => (healthRefs.current[i] = el)}
                            >
                                <div className="healthcare-icon">
                                    <i className={`fas ${card.icon}`}></i>
                                </div>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                                <ul className="healthcare-list">
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

            {/* Society Services */}
            <section className="section">
                <div className="container">
                    <div className="section-header1">
                        <span className="section-badge">{d.societyServices.badge}</span>
                        <h2 className="section-title1">{d.societyServices.title}</h2>
                        <p className="section-subtitl1">{d.societyServices.subtitle}</p>
                    </div>
                    <div className="society-services-grid">
                        {d.societyServices.cards.map((card, i) => (
                            <div
                                key={i}
                                className="society-service"
                                ref={(el) => (societyRefs.current[i] = el)}
                            >
                                <div className="society-icon">
                                    <i className={`fas ${card.icon}`}></i>
                                </div>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                                <div className="society-details">
                                    {card.details.map((detail) => (
                                        <span key={detail}>{detail}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bill Management */}
            <section className="section alt-bg">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">{d.billManagement.badge}</span>
                        <h2 className="section-title1">{d.billManagement.title}</h2>
                        <h6 className="paid-addon-note" style={{ marginBottom: "1rem" }}>
                            {d.billManagement.gatewayNote}
                        </h6>
                        <p className="section-subtitle1">{d.billManagement.subtitle}</p>
                    </div>
                    <div className="bill-services">
                        {d.billManagement.categories.map((cat, i) => (
                            <div
                                key={i}
                                className="bill-category"
                                ref={(el) => (billRefs.current[i] = el)}
                            >
                                <div className="bill-category-header">
                                    <i className={`fas ${cat.icon}`}></i>
                                    <h3>{cat.title}</h3>
                                </div>
                                <div className="bill-list">
                                    {cat.items.map((item) => (
                                        <div className="bill-item" key={item.label}>
                                            <i className={`fas ${item.icon}`}></i>
                                            <span>{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hobit Advantage */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">{d.hobitAdvantage.badge}</span>
                        <h2 className="section-title1">{d.hobitAdvantage.title}</h2>
                        <p className="section-subtitle1">{d.hobitAdvantage.subtitle}</p>
                    </div>
                    <div className="advantage-showcase">
                        {d.hobitAdvantage.cards.map((card, i) => (
                            <div
                                key={i}
                                className="advantage-showcase-card"
                                ref={(el) => (advRefs.current[i] = el)}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                            >
                                <i className={`fas ${card.icon}`}></i>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>{d.cta.title}</h2>
                        <p>{d.cta.subtitle}</p>
                        <div className="cta-buttons">
                            <Link to="/pricing" className="btn btn-primary btn-large">
                                <span>{d.cta.primaryLabel}</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                <span>{d.cta.secondaryLabel}</span>
                                <i className={`fas ${d.cta.secondaryIcon}`}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}