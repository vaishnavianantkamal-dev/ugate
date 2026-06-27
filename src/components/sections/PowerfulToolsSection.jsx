import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Target, Zap } from "lucide-react";

// ── Mock Data ──────────────────────────────────────────────────────────────
const sectionData = {
    badge: "Our Mission",
    heading: "Powerful Tools for Every Society",
    description: "Urbangate was born out of reality. We saw societies drowning in WhatsApp messages, Excel sheets, and missed payments. We decided to build a system that works as hard as you do.",
    vision: {
        title: "The Vision",
        description: "To be the global standard for managing societies, from initial visitor entry to final accounting.",
        icon: Target
    },
    impact: {
        title: "The Impact",
        description: "Helping over 1,000+ societies reduce management delays by 40% and increase transparency by 25%.",
        icon: Zap
    }
};

// ── Animation Variants ────────────────────────────────────────────────────
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

// ── Main Component ────────────────────────────────────────────────────────
const PowerfulToolsSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const VisionIcon = sectionData.vision.icon;
    const ImpactIcon = sectionData.impact.icon;

    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                padding: isMobile ? "60px 24px" : "80px 0",
                backgroundColor: "#000000",
                color: "#ffffff",
                fontFamily: "'DM Sans', sans-serif"
            }}
        >
            {/* Ambient Background Elements */}
            <div style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)",
                zIndex: 0,
                pointerEvents: "none"
            }} />

            <div className="container" style={{ 
                maxWidth: "1300px", 
                margin: "0 auto", 
                zIndex: 1, 
                position: "relative" 
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    maxWidth: "900px",
                    margin: "0 auto"
                }}>
                    
                    {/* Content Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        style={{ width: "100%" }}
                    >
                        {/* Badge */}
                        <motion.div variants={fadeUp} style={{ marginBottom: "24px" }}>
                            <span style={{
                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                padding: "6px 16px",
                                borderRadius: "30px",
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.7)"
                            }}>
                                {sectionData.badge}
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeUp}
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                                fontWeight: 400,
                                letterSpacing: "1px",
                                lineHeight: 0.9,
                                marginBottom: "24px",
                                textTransform: "uppercase"
                            }}
                        >
                            Powerful Tools <br />
                            <span style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.5)" }}>
                                For Every Society
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            style={{
                                fontSize: "1.15rem",
                                lineHeight: 1.6,
                                color: "rgba(255, 255, 255, 0.5)",
                                marginBottom: "64px",
                                marginInline: "auto",
                                maxWidth: "700px",
                            }}
                        >
                            {sectionData.description}
                        </motion.p>

                        {/* Vision & Impact Grid */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                            gap: "32px",
                            textAlign: "left"
                        }}>
                            <motion.div 
                                variants={fadeUp}
                                style={{
                                    background: "rgba(255, 255, 255, 0.02)",
                                    border: "1px solid rgba(255, 255, 255, 0.05)",
                                    padding: "40px",
                                    borderRadius: "24px",
                                    transition: "all 0.3s ease"
                                }}
                                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.1)" }}
                            >
                                <div style={{ marginBottom: "20px", color: "#ffffff" }}>
                                    <VisionIcon size={36} strokeWidth={1.5} />
                                </div>
                                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px", color: "#ffffff" }}>
                                    {sectionData.vision.title}
                                </h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.4)", lineHeight: 1.6 }}>
                                    {sectionData.vision.description}
                                </p>
                            </motion.div>

                            <motion.div 
                                variants={fadeUp}
                                style={{
                                    background: "rgba(255, 255, 255, 0.02)",
                                    border: "1px solid rgba(255, 255, 255, 0.05)",
                                    padding: "40px",
                                    borderRadius: "24px",
                                    transition: "all 0.3s ease"
                                }}
                                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.1)" }}
                            >
                                <div style={{ marginBottom: "20px", color: "#ffffff" }}>
                                    <ImpactIcon size={36} strokeWidth={1.5} />
                                </div>
                                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px", color: "#ffffff" }}>
                                    {sectionData.impact.title}
                                </h3>
                                <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.4)", lineHeight: 1.6 }}>
                                    {sectionData.impact.description}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PowerfulToolsSection;