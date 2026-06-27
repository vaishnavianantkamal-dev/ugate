import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserPlus, FileText, Layout } from "lucide-react";

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

const ManagementWorkflow = () => {
    const isMobile = useIsMobile();
    const steps = [
        {
            id: 1,
            title: "Add Society Details",
            description: "Quickly set up your society profile with address, rules, and basic configurations.",
            icon: UserPlus,
        },
        {
            id: 2,
            title: "Onboard Members",
            description: "Import resident data and invite members to join the platform for instant communication.",
            icon: FileText,
        },
        {
            id: 3,
            title: "Start Managing",
            description: "Launch automated billing, visitor logs, and communication channels in one click.",
            icon: Layout,
        },
    ];

    return (
        <section style={{ padding: isMobile ? "60px 20px" : "100px 24px", background: "#000000", textAlign: "center" }}>
            <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
                {/* Heading Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: isMobile ? "40px" : "80px" }}
                >
                    <h2 style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        color: "#ffffff",
                        lineHeight: 1.1,
                        marginBottom: "16px",
                        letterSpacing: "1px"
                    }}>
                        Streamlined Workflow <br />
                        <span style={{ color: "#000000", WebkitTextStroke: "1px #ffffff" }}>
                            From Setup to Management
                        </span>
                    </h2>
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1.1rem",
                        color: "#888888",
                        maxWidth: "600px",
                        margin: "0 auto"
                    }}>
                        A simple, intuitive process designed for society management teams.
                    </p>
                </motion.div>

                {/* Workflow Line & Items */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "relative",
                    flexWrap: "wrap",
                    gap: "40px"
                }}>
                    {/* Connecting Line (Desktop Only) */}
                    {!isMobile && (
                        <div className="workflow-line" style={{
                            position: "absolute",
                            top: "40px",
                            left: "10%",
                            right: "10%",
                            height: "1px",
                            background: "linear-gradient(90deg, #111111 0%, #ffffff 50%, #111111 100%)",
                            zIndex: 0
                        }} />
                    )}

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                style={{
                                    flex: isMobile ? "1 1 100%" : "1 1 250px",
                                    position: "relative",
                                    zIndex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                {/* Icon Circle */}
                                <div style={{
                                    width: isMobile ? "70px" : "80px",
                                    height: isMobile ? "70px" : "80px",
                                    borderRadius: "50%",
                                    background: index === 1 ? "#ffffff" : "#000000",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: isMobile ? "16px" : "24px",
                                    boxShadow: index === 1 ? "0 10px 30px rgba(255,255,255,0.1)" : "0 4px 12px rgba(255,255,255,0.05)",
                                    position: "relative"
                                }}>
                                    <Icon size={isMobile ? 24 : 28} color={index === 1 ? "#000000" : "#ffffff"} strokeWidth={1.5} />
                                    {/* Number Badge */}
                                    <div style={{
                                        position: "absolute",
                                        top: "0",
                                        right: "-5px",
                                        width: "24px",
                                        height: "24px",
                                        background: "#ffffff",
                                        color: "#000000",
                                        borderRadius: "50%",
                                        fontSize: "12px",
                                        fontWeight: 800,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        border: "2px solid #000000"
                                    }}>
                                        {step.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: isMobile ? "1.15rem" : "1.25rem",
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    marginBottom: "12px"
                                }}>
                                    {step.title}
                                </h3>
                                <p style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.95rem",
                                    color: "#888888",
                                    lineHeight: 1.6,
                                    maxWidth: "280px"
                                }}>
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ManagementWorkflow;
