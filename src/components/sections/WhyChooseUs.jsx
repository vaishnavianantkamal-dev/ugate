// import { motion } from "framer-motion";
// import { Zap, ShieldCheck, Cloud, Tablet, Headphones, TrendingUp } from "lucide-react";

// const sectionData = {
//     heading: "Why Choose Us",
//     items: [
//         {
//             id: "easy",
//             icon: Zap,
//             title: "Easy to Use",
//             description: "Simple interface, easy to navigate",
//         },
//         {
//             id: "secure",
//             icon: ShieldCheck,
//             title: "Secure & Reliable",
//             description: "Data is safe with top-notch security",
//         },
//         {
//             id: "cloud",
//             icon: Cloud,
//             title: "Cloud Based",
//             description: "Access from anywhere, anytime",
//         },
//         {
//             id: "mobile",
//             icon: Tablet,
//             title: "Mobile Friendly",
//             description: "Full functionality on mobile app",
//         },
//         {
//             id: "support",
//             icon: Headphones,
//             title: "24/7 Support",
//             description: "Expert support whenever you need.",
//         },
//         {
//             id: "scalable",
//             icon: TrendingUp,
//             title: "Scalable",
//             description: "Grows with your society's needs",
//         },
//     ],
// };

// const containerVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
// };

// const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
// };

// const WhyChooseUs = ({ data = sectionData }) => {
//     const { heading, items } = data;

//     return (
//         <section
//             style={{
//                 background: "#f7f7f7",
//                 padding: "72px 0 80px",
//                 overflow: "hidden",
//             }}
//         >
//             <div className="container">
//                 {/* Heading */}
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                     style={{
//                         textAlign: "center",
//                         fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
//                         fontWeight: 800,
//                         color: "#111",
//                         letterSpacing: "-0.03em",
//                         marginBottom: "40px",
//                         lineHeight: 1.15,
//                     }}
//                 >
//                     {heading}
//                 </motion.h2>

//                 {/* 3-column grid */}
//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.1 }}
//                     style={{
//                         display: "grid",
//                         gridTemplateColumns: "repeat(3, 1fr)",
//                         gap: "16px",
//                     }}
//                 >
//                     {items.map((item) => {
//                         const Icon = item.icon;
//                         return (
//                             <motion.div
//                                 key={item.id}
//                                 variants={cardVariants}
//                                 whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.09)" }}
//                                 style={{
//                                     background: "#fff",
//                                     borderRadius: "14px",
//                                     border: "1px solid #ebebeb",
//                                     boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//                                     padding: "24px 22px",
//                                     display: "flex",
//                                     alignItems: "flex-start",
//                                     gap: "16px",
//                                     cursor: "default",
//                                 }}
//                             >
//                                 {/* Icon box */}
//                                 <div
//                                     style={{
//                                         width: "48px",
//                                         height: "48px",
//                                         borderRadius: "12px",
//                                         background: "#f0f0f0",
//                                         display: "flex",
//                                         alignItems: "center",
//                                         justifyContent: "center",
//                                         flexShrink: 0,
//                                     }}
//                                 >
//                                     <Icon size={24} color="#111" strokeWidth={1.8} />
//                                 </div>

//                                 {/* Text */}
//                                 <div>
//                                     <h4
//                                         style={{
//                                             fontSize: "1rem",
//                                             fontWeight: 700,
//                                             color: "#111",
//                                             margin: "0 0 6px 0",
//                                             letterSpacing: "-0.01em",
//                                             lineHeight: 1.25,
//                                         }}
//                                     >
//                                         {item.title}
//                                     </h4>
//                                     <p
//                                         style={{
//                                             fontSize: "0.85rem",
//                                             color: "#666",
//                                             margin: 0,
//                                             lineHeight: 1.55,
//                                         }}
//                                     >
//                                         {item.description}
//                                     </p>
//                                 </div>
//                             </motion.div>
//                         );
//                     })}
//                 </motion.div>

//                 {/* Responsive */}
//                 <style>{`
//                     @media (max-width: 768px) {
//                         .why-choose-grid {
//                             grid-template-columns: repeat(2, 1fr) !important;
//                         }
//                     }
//                     @media (max-width: 480px) {
//                         .why-choose-grid {
//                             grid-template-columns: 1fr !important;
//                         }
//                     }
//                 `}</style>
//             </div>
//         </section>
//     );
// };

// export default WhyChooseUs;

import { motion } from "framer-motion";
import {
    Zap, ShieldCheck, Cloud, Tablet, Headphones, TrendingUp, 
    Lock, BarChart3, Settings, Users, Bell, Search
} from "lucide-react";

const whyChooseData = [
    { id: "easy", icon: Zap, title: "Easy to Use", description: "Intuitive interface for all age groups." },
    { id: "secure", icon: ShieldCheck, title: "Secure & Reliable", description: "Bank-grade data encryption." },
    { id: "cloud", icon: Cloud, title: "Cloud Based", description: "Real-time sync across all devices." },
    { id: "mobile", icon: Tablet, title: "Mobile Friendly", description: "Native iOS & Android experience." },
    { id: "support", icon: Headphones, title: "24/7 Support", description: "Instant human-led assistance." },
    { id: "scalable", icon: TrendingUp, title: "Scalable Architecture", description: "Built for societies of any size." },
    { id: "lock", icon: Lock, title: "Privacy First", description: "Complete control over your data." },
    { id: "analytics", icon: BarChart3, title: "Deep Analytics", description: "Actionable insights for management." },
    { id: "automation", icon: Settings, title: "Auto-Billing", description: "Automated invoice generation." },
    { id: "members", icon: Users, title: "Member Directory", description: "Centralized database of residents." },
    { id: "alerts", icon: Bell, title: "Smart Alerts", description: "Instant notification for critical events." },
    { id: "search", icon: Search, title: "Universal Search", description: "Find records and receipts instantly." },
];

const ScrollingRow = ({ items, direction = "left", speed = 40 }) => {
    return (
        <div style={{
            display: "flex",
            overflow: "hidden",
            whiteSpace: "nowrap",
            padding: "20px 0",
            position: "relative"
        }}>
            <motion.div
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    display: "flex",
                    gap: "16px",
                    width: "max-content",
                    padding: "0 8px"
                }}
            >
                {[...items, ...items].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={`${item.id}-${idx}`}
                            style={{
                                width: "260px",
                                background: "#0a0a0a",
                                border: "1px solid rgba(255,255,255,0.05)",
                                borderRadius: "12px",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                flexShrink: 0
                            }}
                        >
                            <div style={{
                                width: "48px",
                                height: "48px",
                                background: "#ffffff",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Icon size={24} color="#000000" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    margin: "0 0 8px 0"
                                }}>
                                    {item.title}
                                </h4>
                                <p style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.9rem",
                                    color: "#888888",
                                    lineHeight: 1.5,
                                    margin: 0,
                                    whiteSpace: "normal"
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

const WhyChooseUs = () => {
    const row1 = whyChooseData.slice(0, 6);
    const row2 = whyChooseData.slice(6, 12);

    return (
        <section
            style={{
                background: "#000000",
                padding: "60px 0",
                overflow: "hidden",
            }}
        >
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(3rem, 5vw, 4.5rem)",
                        fontWeight: 400,
                        color: "#ffffff",
                        letterSpacing: "1px",
                        margin: 0,
                    }}
                >
                    WHY CHOOSE <span style={{ color: "#000000", WebkitTextStroke: "1px #ffffff" }}>UGATE</span>
                </motion.h2>
                <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.1rem",
                    color: "#888888",
                    marginTop: "12px"
                }}>
                    The standard for modern society management and security.
                </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <ScrollingRow items={row1} direction="left" speed={35} />
                <ScrollingRow items={row2} direction="right" speed={45} />
            </div>
        </section>
    );
};

export default WhyChooseUs;