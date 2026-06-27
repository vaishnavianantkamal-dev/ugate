import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const SecurityHero = ({ data = {} }) => {
    const isMobile = useIsMobile();

    const {
        title = "For Security",
        description = "Empower your security guards with our intuitive guard management app. Manage visitor entries, deliveries, and incidents seamlessly from their mobile device.",
        highlights = ["Real-time Entry Logging", "Instant SOS Protocol", "Digital Guard Patrol", "Zero Manual Errors"],
        buttons = [
            { label: "Get Demo", href: "/contact", variant: "outline" },
            { label: "Learn More", href: "#", variant: "filled" }
        ],
    } = data;

    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                height: isMobile ? "auto" : "100vh",
                minHeight: isMobile ? "600px" : "600px",
                overflow: "hidden",
                background: `#f5f5f5`,
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center"
            }}
        >
            {/* Background Image Layer (Mobile: Top, Desktop: Right Half) */}
            <div style={{
                position: isMobile ? "relative" : "absolute",
                top: 0,
                right: 0,
                width: isMobile ? "100%" : "55%",
                height: isMobile ? "350px" : "100%",
                backgroundImage: `url('/guard_hero_new.png')`,
                backgroundSize: "cover",
                backgroundPosition: isMobile ? "center top" : "center right",
                zIndex: 0,
                maskImage: isMobile ? "linear-gradient(to bottom, black 75%, transparent)" : "linear-gradient(to right, transparent, black 25%)",
                WebkitMaskImage: isMobile ? "linear-gradient(to bottom, black 75%, transparent)" : "linear-gradient(to right, transparent, black 25%)",
                display: "block"
            }} />

            <div className="container" style={{ 
                maxWidth: "1500px", 
                margin: "0 auto", 
                zIndex: 1, 
                position: "relative",
                padding: isMobile ? "40px 20px 80px" : "0 100px"
            }}>
                <div style={{ 
                    display: "flex", 
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: isMobile ? "32px" : "60px"
                }}>
                    
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ flex: isMobile ? "1" : "0 1 800px", textAlign: isMobile ? "center" : "left" }}
                    >
                        {/* Badge */}
                        <div style={{
                            display: "inline-block",
                            padding: "8px 20px",
                            background: "#000000",
                            color: "#ffffff",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            marginBottom: "24px",
                        }}>
                            Security Protocol
                        </div>

                        {/* Title */}
                        <h1
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: isMobile ? "3rem" : "clamp(4.5rem, 8vw, 6.5rem)",
                                fontWeight: 400,
                                color: "#000000",
                                letterSpacing: "-0.01em",
                                marginBottom: "20px",
                                lineHeight: 0.9,
                                textTransform: "uppercase",
                                whiteSpace: "normal"
                            }}
                        >
                            FOR SECURITY
                        </h1>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: isMobile ? "1rem" : "1.2rem",
                                color: "#444444",
                                lineHeight: 1.6,
                                marginBottom: "40px",
                                maxWidth: isMobile ? "100%" : "520px",
                                margin: isMobile ? "0 auto 40px" : "0 0 40px"
                            }}
                        >
                            {description}
                        </p>

                        {/* Highlights */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                            gap: "16px 32px",
                            marginBottom: "48px",
                        }}>
                            {highlights.map((text, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <div style={{ width: "6px", height: "6px", background: "#000", borderRadius: "50%" }} />
                                    <span style={{ 
                                        fontFamily: "'DM Sans', sans-serif", 
                                        fontSize: "0.95rem", 
                                        fontWeight: 700, 
                                        color: "#000" 
                                    }}>{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div style={{
                            display: "flex",
                            gap: "16px",
                            flexWrap: "wrap",
                        }}>
                            {buttons.map((btn, i) => (
                                <Link
                                    key={i}
                                    to={btn.href}
                                    style={{
                                        padding: "16px 48px",
                                        borderRadius: "4px",
                                        fontSize: "0.95rem",
                                        fontWeight: 700,
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        border: "1.5px solid #000",
                                        background: btn.variant === "filled" ? "#000" : "transparent",
                                        color: btn.variant === "filled" ? "#fff" : "#000",
                                        transition: "all 0.3s ease",
                                        textAlign: "center",
                                        fontFamily: "'DM Sans', sans-serif",
                                        minWidth: isMobile ? "100%" : "180px"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = btn.variant === "filled" ? "transparent" : "#000";
                                        e.currentTarget.style.color = btn.variant === "filled" ? "#000" : "#fff";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background =
                                            btn.variant === "filled" ? "#000" : "transparent";
                                        e.currentTarget.style.color =
                                            btn.variant === "filled" ? "#fff" : "#000";
                                    }}
                                >
                                    {btn.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side is now part of the background */}
                    {!isMobile && (
                        <div style={{ flex: "1" }} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default SecurityHero;