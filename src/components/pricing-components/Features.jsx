import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";

import { 
    Shield, 
    BarChart, 
    MessageSquare, 
    Smartphone, 
    CreditCard, 
    Wrench 
} from "lucide-react";

const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "4px" }}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const MagneticCard = ({ children, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 100, damping: 30 });
    const springY = useSpring(y, { stiffness: 100, damping: 30 });

    const rotateX = useTransform(springY, [-100, 100], [10, -10]);
    const rotateY = useTransform(springX, [-100, 100], [-10, 10]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const revealVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
            } 
        }
    };

    return (
        <motion.div
            ref={cardRef}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                perspective: 1000,
                position: "relative"
            }}
        >
            <div className="elite-card">
                {/* Specular Highlight */}
                <motion.div 
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: useTransform(
                            [mouseX, mouseY],
                            ([mx, my]) => `radial-gradient(circle at ${mx}px ${my}px, rgba(255,255,255,0.08) 0%, transparent 70%)`
                        ),
                        pointerEvents: "none",
                        zIndex: 2
                    }}
                />
                <div className="elite-card-content">
                    {children}
                </div>
                {/* Border Trace Effect */}
                <div className="border-trace" />
            </div>
        </motion.div>
    );
};

const Features = () => {
    const categories = [
        {
            title: "SECURITY FEATURES",
            badge: "Free",
            icon: <Shield size={32} strokeWidth={1.5} color="#fff" />,
            items: [
                "Smart Gate Approval System",
                "Digital Visitor Management",
                "Real-time Notifications",
                "Mobile Verification",
                "Complete Audit Trails",
                "Delivery Security",
                { text: "Facial Recognition Entry", isNew: true },
                { text: "Vehicle ANPR Detection", isNew: true }
            ]
        },
        {
            title: "DATA MANAGEMENT",
            badge: "Free",
            icon: <BarChart size={32} strokeWidth={1.5} color="#fff" />,
            items: [
                "Hierarchical Tags",
                "Searchable Database",
                "KPI Monitoring",
                "Insight Ranking",
                "Cloud Backup",
                "Analytics Dashboard",
                { text: "Automated Reports", isNew: true },
                { text: "Data Export (CSV/PDF)", isNew: true }
            ]
        },
        {
            title: "COMMUNICATION",
            badge: "Free",
            icon: <MessageSquare size={32} strokeWidth={1.5} color="#fff" />,
            items: [
                "Omnichannel Logs",
                "Broadcast Notices",
                "Emergency Alerts",
                "Smart Notices",
                "Push Notifications",
                "Targeted Messaging",
                { text: "WhatsApp Integration", isNew: true },
                { text: "Multilingual Support", isNew: true }
            ]
        },
        {
            title: "SERVICES INTEGRATION",
            badge: "Free",
            icon: <Smartphone size={32} strokeWidth={1.5} color="#fff" />,
            items: [
                "Mobile Apps (iOS/Android)",
                "Intercom",
                "Amazon",
                "Swiggy/Zomato",
                "Regular Updates",
                { text: "Smart Lock Integration", isNew: true },
                { text: "CCTV Feed Access", isNew: true }
            ]
        },
        {
            title: "FINANCIAL MANAGEMENT",
            badge: "Free",
            icon: <CreditCard size={32} strokeWidth={1.5} color="#fff" />,
            items: [
                "Efficiently manage financial charges",
                "Maintenance module",
                "100% Bill Payments",
                "Automatic collections",
                "Payment History",
                "Digital Receipts",
                { text: "GST-Ready Invoicing", isNew: true },
                { text: "Overdue Reminders", isNew: true }
            ]
        },
        {
            title: "SERVICE INTEGRATION",
            badge: "Add-on",
            icon: <Wrench size={32} strokeWidth={1.5} color="#fff" />,
            highlight: true,
            items: [
                "RWA Society Partnerships",
                "Verified Service Providers",
                "Home Services",
                "Society Maintenance",
                "Healthcare Access",
                "Service Tracking",
                { text: "On-Demand Plumber/Electrician", isNew: true },
                { text: "Rate & Review Vendors", isNew: true }
            ]
        }
    ];

    return (
        <section style={{
            padding: "120px 24px",
            background: "#000000",
            position: "relative",
            overflow: "hidden"
        }}>
            <style>{`
                .elite-card {
                    background: #111111;
                    border: 1px solid rgba(255,255,255,0.07);
                    height: 100%;
                    position: relative;
                    padding: 40px;
                    overflow: hidden;
                    transition: border-color 0.3s ease;
                }
                .elite-card:hover {
                    border-color: rgba(255,255,255,0.15);
                }
                .elite-card-content {
                    position: relative;
                    z-index: 3;
                }
                .border-trace {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                }
                .elite-card:hover .border-trace::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 1px solid #ffffff;
                    animation: borderTrace 0.7s linear forwards;
                }
                @keyframes borderTrace {
                    0% { clip-path: inset(0 100% 100% 0); }
                    25% { clip-path: inset(0 0 100% 0); }
                    50% { clip-path: inset(0 0 0 0); }
                    75% { clip-path: inset(0 0 0 0); }
                    100% { clip-path: inset(0 0 0 0); }
                }
                .new-dot {
                    width: 5px;
                    height: 5px;
                    background: #ffffff;
                    border-radius: 50%;
                    display: inline-block;
                    margin-left: 8px;
                    animation: blink 1s infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>

            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <div style={{ 
                        fontFamily: "'Space Mono', monospace", 
                        fontSize: "11px", 
                        letterSpacing: "3px", 
                        color: "#ffffff", 
                        marginBottom: "16px",
                        textTransform: "uppercase"
                    }}>
                        WHAT'S INCLUDED
                    </div>
                    <h2 style={{ 
                        fontFamily: "'Bebas Neue', sans-serif", 
                        fontSize: "clamp(3rem, 7vw, 6rem)", 
                        color: "#ffffff", 
                        lineHeight: 1,
                        marginBottom: "24px"
                    }}>
                        EVERYTHING YOU NEED
                    </h2>
                    <p style={{ 
                        fontFamily: "'DM Sans', sans-serif", 
                        fontSize: "1.1rem", 
                        color: "#888888", 
                        maxWidth: "600px", 
                        margin: "0 auto" 
                    }}>
                        Free: Security Features, Data Management, Communication, and Services Integration.
                    </p>
                </div>

                <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
                    gap: "24px" 
                }}>
                    {categories.map((cat, idx) => (
                        <MagneticCard key={idx} index={idx}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                                <div style={{ fontSize: "2rem" }}>{cat.icon}</div>
                                <div style={{ 
                                    fontFamily: "'Space Mono', monospace", 
                                    fontSize: "10px", 
                                    letterSpacing: "1px", 
                                    color: cat.highlight ? "#000" : "#fff",
                                    background: cat.highlight ? "#fff" : "transparent",
                                    border: cat.highlight ? "none" : "1px solid rgba(255,255,255,0.2)",
                                    padding: "4px 12px",
                                    borderRadius: "999px",
                                    textTransform: "uppercase"
                                }}>
                                    {cat.badge}
                                </div>
                            </div>
                            <h3 style={{ 
                                fontFamily: "'Bebas Neue', sans-serif", 
                                fontSize: "1.8rem", 
                                color: "#ffffff", 
                                marginBottom: "24px",
                                letterSpacing: "1px"
                            }}>
                                {cat.title}
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                {cat.items.map((item, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                        <CheckIcon />
                                        <span style={{ 
                                            fontFamily: "'DM Sans', sans-serif", 
                                            fontSize: "0.9rem", 
                                            color: "#ffffff" 
                                        }}>
                                            {typeof item === "string" ? item : item.text}
                                            {item.isNew && <span className="new-dot" />}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </MagneticCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;