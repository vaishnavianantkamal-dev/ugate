import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const SecurityHero = () => {
    const isMobile = useIsMobile();

    const features = [
        "Real-time Entry Logging",
        "Instant SOS Protocol",
        "Digital Guard Patrol",
        "Zero Manual Errors"
    ];

    return (
        <section style={{ 
            background: "#ffffff", 
            minHeight: "100vh", 
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            padding: isMobile ? "100px 24px" : "0"
        }}>
            {/* Background Text Overlay */}
            {!isMobile && (
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "15%",
                    transform: "translateY(-50%)",
                    fontSize: "15vw",
                    fontWeight: 900,
                    color: "rgba(0,0,0,0.03)",
                    lineHeight: 1,
                    zIndex: 0,
                    pointerEvents: "none",
                    whiteSpace: "nowrap"
                }}>
                    AURORA
                </div>
            )}

            <div className="container" style={{ 
                maxWidth: "1300px", 
                margin: "0 auto", 
                paddingLeft: isMobile ? "0" : "120px",
                zIndex: 1,
                position: "relative"
            }}>
                <div style={{ 
                    display: "flex", 
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "20px"
                }}>
                    
                    {/* Left Side: Content */}
                    <div style={{ flex: "1", maxWidth: isMobile ? "100%" : "600px" }}>
                        {/* Subheading Badge */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: "24px" }}
                        >
                            <span style={{
                                background: "#000000",
                                color: "#ffffff",
                                padding: "8px 20px",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                letterSpacing: "2px",
                                textTransform: "uppercase"
                            }}>
                                Security Protocol
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "clamp(4rem, 10vw, 7rem)",
                                fontWeight: 400,
                                lineHeight: 0.9,
                                marginBottom: "24px",
                                color: "#ffffff",
                                textTransform: "uppercase",
                                textShadow: "0 2px 10px rgba(0,0,0,0.3)"
                            }}
                        >
                            FOR <br /> SECURITY
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                fontSize: "1.1rem",
                                color: "#eeeeee",
                                lineHeight: 1.6,
                                marginBottom: "40px",
                                maxWidth: "500px",
                                textShadow: "0 1px 5px rgba(0,0,0,0.2)"
                            }}
                        >
                            Empower your security guards with our intuitive guard management app. 
                            Manage visitor entries, deliveries, and incidents seamlessly from their mobile device.
                        </motion.p>

                        {/* Feature Tags */}
                        <div style={{ 
                            display: "grid", 
                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                            gap: "16px",
                            marginBottom: "48px"
                        }}>
                            {features.map((feature, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    style={{ 
                                        display: "flex", 
                                        alignItems: "center", 
                                        gap: "10px",
                                        fontSize: "0.9rem",
                                        fontWeight: 700,
                                        color: "#ffffff"
                                    }}
                                >
                                    <div style={{ width: "6px", height: "6px", background: "#ffffff", borderRadius: "50%" }} />
                                    {feature}
                                </motion.div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
                        >
                            <button style={{
                                padding: "16px 40px",
                                border: "1px solid #ffffff",
                                background: "transparent",
                                color: "#ffffff",
                                fontSize: "0.95rem",
                                fontWeight: 700,
                                cursor: "pointer",
                                transition: "all 0.3s ease"
                            }}>
                                Get Demo
                            </button>
                            <button style={{
                                padding: "16px 40px",
                                border: "1px solid #ffffff",
                                background: "#ffffff",
                                color: "#000000",
                                fontSize: "0.95rem",
                                fontWeight: 700,
                                cursor: "pointer",
                                transition: "all 0.3s ease"
                            }}>
                                Learn More
                            </button>
                        </motion.div>
                    </div>

                        </div>

                        <div style={{ 
                            flex: "1",
                            display: "flex",
                            justifyContent: "flex-end",
                            position: "relative",
                            minHeight: isMobile ? "300px" : "auto",
                            marginTop: isMobile ? "40px" : "0"
                        }}>
                            {/* Ambient Glow behind guard */}
                            <div style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                background: "radial-gradient(circle, rgba(0,0,0,0.05) 0%, rgba(255,255,255,0) 70%)",
                                zIndex: -1
                            }} />
                            
                            {/* Dark Overlay for better text contrast */}
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: isMobile 
                                    ? "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)" 
                                    : "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)",
                                zIndex: -1
                            }} />
                            
                            <img 
                                src="/security_guard_cutout.png" 
                                alt="Professional Security Guard"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: isMobile ? "center top" : "right top",
                                    zIndex: -2,
                                    opacity: 1,
                                    filter: "brightness(0.8)"
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SecurityHero;
