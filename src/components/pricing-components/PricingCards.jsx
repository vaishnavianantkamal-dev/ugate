import { motion } from "framer-motion";
import SlotCounter from "./SlotCounter";

const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const PricingCards = () => {
    return (
        <section style={{
            padding: "80px 24px",
            background: "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <style>{`
                .premium-pricing-card {
                    background: #111111;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                    padding: 64px 48px;
                    max-width: 700px;
                    width: 100%;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                }

                .premium-pricing-card::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -150%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.05),
                        transparent
                    );
                    transform: skewX(-20deg);
                    animation: shimmer 4s infinite;
                }

                @keyframes shimmer {
                    0% { left: -150%; }
                    30% { left: 150%; }
                    100% { left: 150%; }
                }

                .floating-badge {
                    display: inline-block;
                    font-family: 'Space Mono', monospace;
                    font-size: 11px;
                    letter-spacing: 3px;
                    color: #ffffff;
                    border: 1px solid rgba(255,255,255,0.2);
                    padding: 8px 24px;
                    border-radius: 999px;
                    text-transform: uppercase;
                    margin-bottom: 32px;
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }

                .price-display {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 32px;
                    margin-bottom: 40px;
                }

                .regular-price {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .offer-price {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}</style>

            <motion.div 
                className="premium-pricing-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="floating-badge">Limited Time Offer</div>

                <h2 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    color: "#ffffff",
                    lineHeight: 1,
                    marginBottom: "16px",
                    textTransform: "uppercase"
                }}>
                    Zero Cost for 2 Years
                </h2>

                <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.1rem",
                    color: "#888888",
                    marginBottom: "48px",
                    maxWidth: "500px",
                    margin: "0 auto 48px"
                }}>
                    Complete access to all features with no upfront investment. Scale your society management with military-grade security.
                </p>

                <div className="price-display">
                    <div className="regular-price">
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "#555", marginBottom: "8px" }}>REGULAR PRICE</span>
                        <span style={{ fontSize: "2rem", color: "#333", textDecoration: "line-through", fontWeight: 700 }}>₹XX,XXX</span>
                    </div>

                    <div style={{ fontSize: "2rem", color: "#222", fontWeight: 300 }}>→</div>

                    <div className="offer-price">
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "#888", marginBottom: "8px" }}>YEAR 1 + YEAR 2</span>
                        <span style={{ 
                            fontSize: "5rem", 
                            color: "#ffffff", 
                            fontWeight: 800, 
                            lineHeight: 1,
                            fontFamily: "'Space Mono', monospace"
                        }}>
                            <SlotCounter target={0} duration={2500} />
                        </span>
                    </div>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                    textAlign: "left",
                    marginBottom: "48px",
                    maxWidth: "500px",
                    margin: "0 auto 48px"
                }}>
                    {[
                        "No card required",
                        "No subscription fees",
                        "Full feature activation",
                        "All features included"
                    ].map((feature, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#a0a0a0" }}>
                            <CheckIcon />
                            {feature}
                        </div>
                    ))}
                </div>

                <a 
                    href="#get-started"
                    style={{
                        display: "block",
                        width: "100%",
                        padding: "20px",
                        background: "#ffffff",
                        color: "#000000",
                        textDecoration: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        borderRadius: "4px",
                        transition: "all 0.3s ease",
                        border: "1px solid #ffffff",
                        boxSizing: "border-box"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#ffffff";
                        e.currentTarget.style.color = "#000000";
                    }}
                >
                    Get Started Now →
                </a>
            </motion.div>
        </section>
    );
};

export default PricingCards;    