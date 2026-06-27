export default function PageHero({ badge, title, subtitle }) {
    return (
        <section className="section" style={{ paddingTop: "120px", paddingBottom: "60px" }}>
            <div className="container">
                <div className="section-header">
                    {badge && <span className="section-badge">{badge}</span>}
                    <h2 className="section-title">{title}</h2>
                    {subtitle && <p className="section-subtitle">{subtitle}</p>}
                </div>
            </div>
        </section>
    );
}