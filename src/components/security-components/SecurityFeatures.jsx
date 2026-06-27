import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserPlus, Package, BellRing, Camera, ClipboardList, ShieldCheck } from "lucide-react";

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

const iconMap = {
    "user-plus": UserPlus,
    "package": Package,
    "bell-ring": BellRing,
    "camera": Camera,
    "clipboard-list": ClipboardList,
    "shield-check": ShieldCheck,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
};

const SecurityFeatures = ({ data = {} }) => {
    const isMobile = useIsMobile();
    const { heading = {}, subtitle = "", items = [] } = data;

    return (
        <section style={{ padding: isMobile ? "60px 20px" : "100px 40px", background: "#ffffff" }}>
            {/* Header Section */}
            <div style={{ textAlign: "center", marginBottom: isMobile ? "40px" : "80px", maxWidth: "800px", margin: "0 auto" }}>
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: isMobile ? "2.5rem" : "clamp(3rem, 5vw, 5rem)",
                        color: "#000000",
                        lineHeight: 1,
                        marginBottom: "24px",
                        letterSpacing: "1px"
                    }}
                >
                    {heading.line1} <br />
                    <span style={{ color: "#ffffff", WebkitTextStroke: "1.5px #000000" }}>{heading.line2}</span>
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: isMobile ? "1rem" : "1.15rem",
                        color: "#666666",
                        lineHeight: 1.6,
                        margin: "0 auto"
                    }}
                >
                    {subtitle}
                </motion.p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))", 
                        gap: isMobile ? "20px" : "32px 48px",
                        maxWidth: "1100px",
                        width: "100%",
                    }}
                >
                    {items.map((item, i) => {
                        const Icon = iconMap[item.icon] || UserPlus;
                        return (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "24px",
                                    padding: "24px",
                                    background: "#f9f9f9",
                                    borderRadius: "12px",
                                    border: "1px solid #eeeeee",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                {/* Icon — dark square bg */}
                                <div
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "12px",
                                        background: "#000000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Icon size={24} color="#fff" strokeWidth={1.5} />
                                </div>

                                {/* Text */}
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            color: "#000000",
                                            margin: "0 0 4px 0",
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {item.title}
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "0.9rem",
                                            color: "#666666",
                                            margin: 0,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default SecurityFeatures;