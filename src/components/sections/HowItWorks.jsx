// // HowItWorks.jsx
// import { motion } from "framer-motion";

// const HowItWorks = ({ data = {} }) => {
//     const {
//         title = "How It Works",
//         steps = [
//             { number: 1, label: "Add Society Details" },
//             { number: 2, label: "Onboard Members" },
//             { number: 3, label: "Start Managing" },
//         ],
//     } = data;

//     return (
//         <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             style={{
//                 padding: "48px 40px",
//                 background: "#fff",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: "28px",
//             }}
//         >
//             {/* Title with horizontal lines */}
//             <div
//                 style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "16px",
//                     width: "100%",
//                     maxWidth: "860px",
//                 }}
//             >
//                 <div style={{ flex: 1, height: "1px", background: "#e0e0e0" }} />
//                 <span
//                     style={{
//                         fontSize: "1rem",
//                         fontWeight: 600,
//                         color: "#111",
//                         whiteSpace: "nowrap",
//                         letterSpacing: "-0.01em",
//                     }}
//                 >
//                     {title}
//                 </span>
//                 <div style={{ flex: 1, height: "1px", background: "#e0e0e0" }} />
//             </div>

//             {/* Steps row */}
//             <div
//                 style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "0px",
//                     width: "100%",
//                     maxWidth: "860px",
//                     flexWrap: "wrap",
//                     justifyContent: "center",
//                 }}
//             >
//                 {steps.map((step, i) => (
//                     <div
//                         key={step.number}
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             flex: 1,
//                             minWidth: "200px",
//                         }}
//                     >
//                         {/* Step pill */}
//                         <motion.div
//                             initial={{ opacity: 0, x: -12 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
//                             style={{
//                                 flex: 1,
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "10px",
//                                 background: "#111",
//                                 color: "#fff",
//                                 borderRadius: "10px",
//                                 padding: "14px 20px",
//                             }}
//                         >
//                             {/* Number */}
//                             <span
//                                 style={{
//                                     fontSize: "1.3rem",
//                                     fontWeight: 800,
//                                     lineHeight: 1,
//                                     color: "#fff",
//                                 }}
//                             >
//                                 {step.number}
//                             </span>

//                             {/* chevron */}
//                             <span style={{ fontSize: "0.75rem", color: "#888", lineHeight: 1 }}>›</span>

//                             {/* Label */}
//                             <span
//                                 style={{
//                                     fontSize: "0.9rem",
//                                     fontWeight: 500,
//                                     color: "#fff",
//                                     whiteSpace: "nowrap",
//                                 }}
//                             >
//                                 {step.label}
//                             </span>
//                         </motion.div>

//                         {/* Arrow between steps */}
//                         {i < steps.length - 1 && (
//                             <span
//                                 style={{
//                                     fontSize: "1.1rem",
//                                     color: "#999",
//                                     padding: "0 10px",
//                                     flexShrink: 0,
//                                 }}
//                             >
//                                 ›
//                             </span>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </motion.section>
//     );
// };

// export default HowItWorks;


// HowItWorks.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HowItWorks = ({ data = {} }) => {
    const {
        title = "How It Works",
        steps = [
            { number: 1, label: "Add Society Details" },
            { number: 2, label: "Onboard Members" },
            { number: 3, label: "Start Managing" },
        ],
    } = data;

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
                padding: isMobile ? "32px 16px" : "48px 40px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
            }}
        >
            {/* Title */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    maxWidth: "860px",
                }}
            >
                <div style={{ flex: 1, height: "1px", background: "#e0e0e0" }} />
                <span
                    style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#111",
                        whiteSpace: "nowrap",
                    }}
                >
                    {title}
                </span>
                <div style={{ flex: 1, height: "1px", background: "#e0e0e0" }} />
            </div>

            {/* Steps */}
            <div
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "stretch" : "center",
                    gap: isMobile ? "14px" : "0px",
                    width: "100%",
                    maxWidth: "860px",
                }}
            >
                {steps.map((step, i) => (
                    <div
                        key={step.number}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flex: isMobile ? "none" : 1,
                            width: "100%",
                        }}
                    >
                        {/* Step Card */}
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 0 : -12, y: isMobile ? 10 : 0 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                background: "#111",
                                color: "#fff",
                                borderRadius: "10px",
                                padding: isMobile ? "12px 16px" : "14px 20px",
                            }}
                        >
                            {/* Number */}
                            <span
                                style={{
                                    fontSize: isMobile ? "1.1rem" : "1.3rem",
                                    fontWeight: 800,
                                }}
                            >
                                {step.number}
                            </span>

                            {/* Chevron inside */}
                            <span style={{ fontSize: "0.75rem", color: "#888" }}>›</span>

                            {/* Label */}
                            <span
                                style={{
                                    fontSize: isMobile ? "0.85rem" : "0.9rem",
                                    fontWeight: 500,
                                }}
                            >
                                {step.label}
                            </span>
                        </motion.div>

                        {/* Arrow (ONLY desktop) */}
                        {!isMobile && i < steps.length - 1 && (
                            <span
                                style={{
                                    fontSize: "1.1rem",
                                    color: "#999",
                                    padding: "0 10px",
                                }}
                            >
                                ›
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default HowItWorks;