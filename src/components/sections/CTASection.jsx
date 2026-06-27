import { Link } from "react-router-dom";

export default function CTASection() {
    return (
        <section className="section cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2>The Future is Here</h2>
                    <p>Secure your building. Simplify your system. Upgrade your lifestyle.</p>
                    <div className="cta-offer">
                        <div className="offer-badge">
                            <i className="fas fa-gift"></i>
                            <span>Special Offer</span>
                        </div>
                        <div className="offer-text">Zero Cost for 2 Years</div>
                        <p className="offer-subtitle">No initial investment. No Subscription Charges.</p>
                    </div>
                    <div className="cta-buttons">
                        <Link to="/pricing" className="btn btn-primary btn-large">
                            <span>Get Started Now</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                        <Link to="/contact" className="btn btn-secondary btn-large">
                            <span>Schedule Demo</span>
                            <i className="fas fa-calendar"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}