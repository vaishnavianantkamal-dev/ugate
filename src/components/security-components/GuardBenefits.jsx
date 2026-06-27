import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, ClipboardX, BookOpen, Smartphone } from "lucide-react";

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

const GuardBenefits = () => {
    const isMobile = useIsMobile();
    const benefits = [
        {
            title: "Simplifies daily tasks",
            desc: "Speeds up gate operations and visitor management instantly, giving guards more time.",
            icon: Zap,
            highlight: true
        },
        {
            title: "Higher Accuracy",
            desc: "Reduces manual effort and errors with automated logging.",
            icon: ShieldCheck
        },
        {
            title: "No Paper Registers",
            desc: "Eliminates messy, manual paper records entirely.",
            icon: ClipboardX
        },
        {
            title: "Minimal Training",
            desc: "Easy to learn, designed for everyone regardless of tech experience.",
            icon: BookOpen
        },
        {
            title: "Seamless Mobile Use",
            desc: "Optimized for one-handed operation on the move.",
            icon: Smartphone
        }
    ];

    return (
        <section style={{
            padding: isMobile ? "40px 20px" : "80px 24px",
            background: "#000000",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Subtle background glow */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: isMobile ? "100%" : "800px",
                height: isMobile ? "300px" : "400px",
                background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
                <div style={{ 
                    display: "flex", 
                    flexDirection: "column",
                    alignItems: "center", 
                    textAlign: "center",
                    marginBottom: isMobile ? "32px" : "40px" 
                }}>
                    <div style={{ 
                        padding: "5px 15px", 
                        background: "rgba(255,255,255,0.05)", 
                        border: "1px solid rgba(255,255,255,0.1)", 
                        borderRadius: "100px", 
                        fontSize: "0.7rem", 
                        letterSpacing: "1.5px",
                        color: "#888888", 
                        fontFamily: "'DM Sans', sans-serif",
                        marginBottom: "16px",
                        textTransform: "uppercase"
                    }}>
                        Trusted by 5000+ Personnel
                    </div>
                    <h2 style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: isMobile ? "2.5rem" : "clamp(2.5rem, 6vw, 4.5rem)",
                        lineHeight: 1,
                        margin: 0,
                        letterSpacing: "1px",
                        textAlign: "center"
                    }}>
                        WHY GUARDS <span style={{ 
                            background: "linear-gradient(to right, #ffffff, #555555)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>LOVE UGATE</span>
                    </h2>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                    gap: isMobile ? "16px" : "20px"
                }}>
                    {/* Main Feature - Spans 2 columns on desktop, 1 on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={isMobile ? {} : { borderColor: "rgba(255,255,255,0.2)", scale: 1.01 }}
                        style={{
                            gridColumn: isMobile ? "span 1" : "span 2",
                            background: "linear-gradient(135deg, #0a0a0a 0%, #050505 100%)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "24px",
                            padding: isMobile ? "24px" : "35px 45px",
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            alignItems: isMobile ? "flex-start" : "center",
                            gap: isMobile ? "20px" : "35px",
                            transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                            cursor: "default"
                        }}
                    >
                        <div style={{ 
                            background: "rgba(255,255,255,0.05)", 
                            width: isMobile ? "56px" : "70px",
                            height: isMobile ? "56px" : "70px",
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid rgba(255,255,255,0.1)",
                            flexShrink: 0
                        }}>
                            <Zap size={isMobile ? 28 : 32} color="#ffffff" />
                        </div>
                        <div>
                            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? "1.8rem" : "2.4rem", margin: "0 0 8px 0", letterSpacing: "1px" }}>{benefits[0].title}</h3>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? "0.95rem" : "1.05rem", color: "#888888", margin: 0, maxWidth: "450px", lineHeight: 1.5 }}>{benefits[0].desc}</p>
                        </div>
                    </motion.div>

                    {/* Secondary Features */}
                    {benefits.slice(1).map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, delay: isMobile ? 0 : index * 0.1 }}
                            whileHover={isMobile ? {} : { y: -8, borderColor: "rgba(255,255,255,0.2)", background: "#0c0c0c" }}
                            style={{
                                background: "#080808",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "24px",
                                padding: "28px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                                cursor: "default"
                            }}
                        >
                            <div style={{ 
                                color: "#ffffff", 
                                background: "rgba(255,255,255,0.03)", 
                                width: "45px", 
                                height: "45px", 
                                borderRadius: "12px", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center",
                                border: "1px solid rgba(255,255,255,0.05)"
                            }}>
                                <benefit.icon size={22} />
                            </div>
                            <div>
                                <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 8px 0", color: "#ffffff" }}>{benefit.title}</h4>
                                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#888888", margin: 0, lineHeight: 1.5 }}>{benefit.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GuardBenefits;
