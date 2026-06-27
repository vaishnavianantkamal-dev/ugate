import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BottomCTA = () => {
    return (
        <section style={{
            padding: "160px 24px",
            background: "#000000",
            position: "relative",
            overflow: "hidden",
            textAlign: "center"
        }}>
            {/* Background Grain/Noise or subtle grid could go here */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0.03,
                backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
                pointerEvents: "none"
            }} />

            <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ 
                        fontFamily: "'Space Mono', monospace", 
                        fontSize: "12px", 
                        letterSpacing: "4px", 
                        color: "#ffffff", 
                        marginBottom: "24px",
                        textTransform: "uppercase"
                    }}>
                        FINAL STEP
                    </div>
                    <h2 style={{ 
                        fontFamily: "'Bebas Neue', sans-serif", 
                        fontSize: "clamp(4rem, 10vw, 8rem)", 
                        color: "#ffffff", 
                        lineHeight: 0.9,
                        marginBottom: "40px"
                    }}>
                        READY TO <br /> EVOLVE?
                    </h2>
                    
                    <div style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        gap: "24px" 
                    }}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                to="/contact"
                                style={{
                                    background: "#ffffff",
                                    color: "#000000",
                                    padding: "24px 64px",
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    fontSize: "1.8rem",
                                    letterSpacing: "1px",
                                    textDecoration: "none",
                                    display: "inline-block",
                                    borderRadius: "0", // Surgical square look
                                    boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                                }}
                            >
                                SECURE YOUR SOCIETY NOW
                            </Link>
                        </motion.div>

                        <p style={{ 
                            fontFamily: "'DM Sans', sans-serif", 
                            fontSize: "1rem", 
                            color: "#555555", 
                            maxWidth: "500px" 
                        }}>
                            Join the elite circle of societies powered by Urbangate. 
                            Zero setup fees. Zero subscription for 2 years.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BottomCTA;