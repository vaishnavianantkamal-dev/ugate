import { motion } from "framer-motion";

const CostComparison = () => {
    return (
        <section style={{
            padding: "clamp(60px, 8vw, 100px) 24px",
            background: "#000000",
            position: "relative",
            overflow: "hidden"
        }}>
            <style>{`
                .comparison-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 0;
                    background: #0a0a0a;
                    border: 1px solid rgba(255,255,255,0.07);
                    position: relative;
                }
                
                @media (max-width: 900px) {
                    .comparison-container {
                        grid-template-columns: 1fr;
                    }
                }

                .column {
                    padding: 36px 48px;
                    position: relative;
                    transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
                }

                .traditional-col {
                    border-right: 1px solid rgba(255,255,255,0.07);
                }

                .urbangate-col {
                    background: #111111;
                    z-index: 10;
                    box-shadow: 0 0 100px rgba(255,255,255,0.05);
                }

                .comparison-container:hover .traditional-col {
                    opacity: 1;
                }

                .comparison-container:hover .urbangate-col {
                    transform: scale(1.02);
                    box-shadow: 0 0 120px rgba(255,255,255,0.08);
                }

                .vs-badge {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 60px;
                    height: 60px;
                    background: #ffffff;
                    color: #000000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 1.5rem;
                    border-radius: 50%;
                    z-index: 20;
                    border: 8px solid #0a0a0a;
                }

                @media (max-width: 900px) {
                    .vs-badge {
                        display: none;
                    }
                    .traditional-col {
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,0.07);
                    }
                }

                .check-list {
                    list-style: none;
                    padding: 0;
                    margin: 24px 0;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .check-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.95rem;
                    color: #ffffff;
                }

                .traditional-col .check-item {
                    color: #888;
                }

                .check-icon {
                    width: 18px;
                    height: 18px;
                    background: #ffffff;
                    color: #000000;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 10px;
                    font-weight: 900;
                    flex-shrink: 0;
                }

                .traditional-col .check-icon {
                    background: #333;
                    color: #ffffff;
                }
            `}</style>

            <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <div style={{ 
                    fontFamily: "'Space Mono', monospace", 
                    fontSize: "11px", 
                    letterSpacing: "3px", 
                    color: "#ffffff", 
                    marginBottom: "16px",
                    textTransform: "uppercase"
                }}>
                    MARKET COMPARISON
                </div>
                <h2 style={{ 
                    fontFamily: "'Bebas Neue', sans-serif", 
                    fontSize: "clamp(3rem, 7vw, 6rem)", 
                    color: "#ffffff", 
                    lineHeight: 1
                }}>
                    THE COMPETITION VS. THE FUTURE
                </h2>
            </div>

            <div className="comparison-container">
                <div className="vs-badge">VS</div>

                {/* Traditional */}
                <div className="column traditional-col">
                    <h3 style={{ 
                        fontFamily: "'Bebas Neue', sans-serif", 
                        fontSize: "2rem", 
                        color: "#ffffff", 
                        letterSpacing: "1px",
                        marginBottom: "8px"
                    }}>
                        TRADITIONAL SYSTEM
                    </h3>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "#888" }}>
                        MANUAL + MULTI-VENDOR
                    </p>

                    <ul className="check-list">
                        {[
                            "Paper registers & stationery",
                            "Additional guard time",
                            "Lost packages & theft",
                            "Manual billing errors",
                            "Separate communication tools",
                            "Zero audit trails"
                        ].map((item, i) => (
                            <li key={i} className="check-item">
                                <span className="check-icon">✕</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div style={{ marginTop: "auto" }}>
                        <div style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>ESTIMATED ANNUAL COST</div>
                        <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "#ffffff", fontFamily: "'Space Mono', monospace" }}>
                            ₹85,000+
                        </div>
                    </div>
                </div>

                {/* Urbangate */}
                <div className="column urbangate-col">
                    <div style={{ 
                        background: "#ffffff", 
                        color: "#000000", 
                        display: "inline-block", 
                        padding: "4px 12px", 
                        fontFamily: "'Space Mono', monospace", 
                        fontSize: "10px", 
                        borderRadius: "999px",
                        marginBottom: "16px"
                    }}>
                        RECOMMENDED
                    </div>
                    <h3 style={{ 
                        fontFamily: "'Bebas Neue', sans-serif", 
                        fontSize: "2rem", 
                        color: "#ffffff", 
                        letterSpacing: "1px",
                        marginBottom: "8px"
                    }}>
                        URBANGATE PLATFORM
                    </h3>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "#888" }}>
                        ALL-IN-ONE DIGITAL ECOSYSTEM
                    </p>

                    <ul className="check-list">
                        {[
                            "Services Integration",
                            "Digital Visitor Management",
                            "Setup & Training Included",
                            "All Features & Updates",
                            "Mobile Apps for Residents",
                            "Enterprise Audit Trails"
                        ].map((item, i) => (
                            <li key={i} className="check-item" style={{ color: "#ffffff" }}>
                                <span className="check-icon">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div style={{ marginTop: "auto" }}>
                        <div style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>YEAR 1 + YEAR 2 COST</div>
                        <div style={{ fontSize: "3.5rem", fontWeight: 800, color: "#ffffff", fontFamily: "'Space Mono', monospace" }}>
                            ₹0
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "60px" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#555" }}>
                    * Comparison based on average 100-flat society operational costs.
                </p>
            </div>
        </section>
    );
};

export default CostComparison;