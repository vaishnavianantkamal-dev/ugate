import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, ShieldCheck, Search, Smartphone, Users } from "lucide-react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
};

const WhyUGate = () => {
    const isMobile = useIsMobile();
    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
        >
            <section style={{
                padding: isMobile ? "60px 20px" : "100px 24px",
                background: "#000000",
                textAlign: "center",
                position: "relative",
                overflow: "hidden"
            }}>
                {/* Subtle background decorative element */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    height: "80%",
                    background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 0
                }} />

                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div style={{ marginBottom: isMobile ? "40px" : "60px" }}>
                        <h2 style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: isMobile ? "3rem" : "clamp(3.5rem, 8vw, 6rem)",
                            color: "#ffffff",
                            lineHeight: 0.9,
                            marginBottom: "16px",
                            letterSpacing: "2px"
                        }}>
                            WHY <span style={{ color: "transparent", WebkitTextStroke: "1px #ffffff" }}>UGATE?</span>
                        </h2>
                        <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: isMobile ? "1rem" : "1.1rem",
                            color: "#888888",
                            maxWidth: "540px",
                            margin: "0 auto",
                            lineHeight: 1.6
                        }}>
                            We combine cutting-edge technology with intuitive design to provide the most reliable society management ecosystem.
                        </p>
                    </div>

                    {/* Black Cards Grid */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: isMobile ? "16px" : "20px",
                        marginBottom: isMobile ? "60px" : "80px"
                    }}>
                        {[
                            { title: "Saves time & effort", icon: Zap },
                            { title: "Improves security", icon: ShieldCheck },
                            { title: "100% transparency", icon: Search },
                            { title: "User-friendly mobile app", icon: Smartphone },
                            { title: "Works for all age groups", icon: Users }
                        ].map((point, i) => {
                            const Icon = point.icon;
                            return (
                                <motion.div 
                                    key={i}
                                    whileHover={isMobile ? {} : { y: -10, scale: 1.03 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    style={{
                                        padding: isMobile ? "30px 24px" : "40px 32px",
                                        background: "#0a0a0a",
                                        borderRadius: "24px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "24px",
                                        border: "1px solid rgba(255, 255, 255, 0.05)",
                                        transition: "all 0.3s ease",
                                        cursor: "default",
                                        textAlign: "center",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                                    }}
                                >
                                    <div style={{ 
                                        width: isMobile ? "54px" : "64px",
                                        height: isMobile ? "54px" : "64px",
                                        borderRadius: "14px",
                                        background: "rgba(255,255,255,0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#ffffff",
                                        marginBottom: "8px"
                                    }}>
                                        <Icon size={isMobile ? 26 : 32} strokeWidth={1.5} />
                                    </div>
                                    <h4 style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: isMobile ? "1.05rem" : "1.15rem",
                                        fontWeight: 600,
                                        color: "#ffffff",
                                        margin: 0,
                                        lineHeight: 1.3,
                                        letterSpacing: "-0.01em"
                                    }}>
                                        {point.title}
                                    </h4>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA Buttons */}
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: "stretch",
                        position: "relative",
                        zIndex: 2
                    }}>
                        <Link to="/pricing" style={{
                            padding: "18px 40px",
                            background: "#ffffff",
                            color: "#000000",
                            textDecoration: "none",
                            borderRadius: "100px",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            border: "1px solid #ffffff",
                            textAlign: "center"
                        }}>
                            Get Started Free →
                        </Link>
                        <Link to="/contact" style={{
                            padding: "18px 40px",
                            background: "transparent",
                            color: "#ffffff",
                            textDecoration: "none",
                            borderRadius: "100px",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            textAlign: "center"
                        }}>
                            Schedule Demo 📅
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default WhyUGate;
