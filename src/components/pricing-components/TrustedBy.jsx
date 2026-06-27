// TrustedBy.jsx
import { motion } from "framer-motion";

const TrustedBy = ({ data = {} }) => {
    const { title = "Trusted by Societies Across India", logos = [] } = data;

    return (
        <div
            style={{
                background: "#ffffff",
                padding: "40px 0",
                borderTop: "1px solid #000000",
                borderBottom: "1px solid #000000",
                position: "relative",
                overflow: "hidden",
                margin: "80px 0"
            }}
        >
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <p style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#000000",
                    letterSpacing: "2px",
                    textTransform: "uppercase"
                }}>
                    {title}
                </p>
            </div>

            <div style={{
                display: "flex",
                overflow: "hidden",
                whiteSpace: "nowrap",
                position: "relative"
            }}>
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    style={{
                        display: "inline-flex",
                        gap: "60px",
                        alignItems: "center"
                    }}
                >
                    {[...Array(20)].map((_, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "60px" }}>
                            <span style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "1.8rem",
                                color: "#000000",
                                letterSpacing: "1px"
                            }}>
                                2,400+ SOCIETIES
                            </span>
                            <span style={{ color: "#000000", opacity: 0.2 }}>•</span>
                            <span style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "1.8rem",
                                color: "#000000",
                                letterSpacing: "1px"
                            }}>
                                98.7% UPTIME
                            </span>
                            <span style={{ color: "#000000", opacity: 0.2 }}>•</span>
                            <span style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "1.8rem",
                                color: "#000000",
                                letterSpacing: "1px"
                            }}>
                                RERA COMPLIANT
                            </span>
                            <span style={{ color: "#000000", opacity: 0.2 }}>•</span>
                            <span style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "1.8rem",
                                color: "#000000",
                                letterSpacing: "1px"
                            }}>
                                ISO 27001
                            </span>
                            <span style={{ color: "#000000", opacity: 0.2 }}>•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TrustedBy;