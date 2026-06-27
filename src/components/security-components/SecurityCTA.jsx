// // SecurityCTA.jsx
// import { motion } from "framer-motion";

// const SecurityCTA = ({ data = {} }) => {
//     const { button = {}, steps = [] } = data;

//     return (
//         <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//             style={{
//                 padding: "40px 40px 56px",
//                 background: "#fff",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: "20px",
//             }}
//         >
//             {/* Get Started Button */}
//             <a
//                 href={button.href}
//                 style={{
//                     display: "inline-block",
//                     padding: "14px 64px",
//                     borderRadius: "10px",
//                     fontSize: "1rem",
//                     fontWeight: 700,
//                     textDecoration: "none",
//                     background: "#111",
//                     color: "#fff",
//                     border: "2px solid #111",
//                     cursor: "pointer",
//                     transition: "all 0.2s ease",
//                     letterSpacing: "0.01em",
//                 }}
//                 onMouseEnter={(e) => {
//                     e.currentTarget.style.background = "transparent";
//                     e.currentTarget.style.color = "#111";
//                 }}
//                 onMouseLeave={(e) => {
//                     e.currentTarget.style.background = "#111";
//                     e.currentTarget.style.color = "#fff";
//                 }}
//             >
//                 {button.label}
//             </a>

//             {/* 3 Numbered Steps */}
//             <div
//                 style={{
//                     display: "flex",
//                     gap: "12px",
//                     flexWrap: "wrap",
//                     justifyContent: "center",
//                 }}
//             >
//                 {steps.map((step) => (
//                     <div
//                         key={step.number}
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "12px",
//                             padding: "12px 22px",
//                             borderRadius: "12px",
//                             border: "1.5px solid #e0e0e0",
//                             background: "#fff",
//                             boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
//                         }}
//                     >
//                         {/* Number */}
//                         <span
//                             style={{
//                                 fontSize: "1rem",
//                                 fontWeight: 800,
//                                 color: "#111",
//                                 lineHeight: 1,
//                             }}
//                         >
//                             {step.number}
//                         </span>

//                         {/* Label */}
//                         <span
//                             style={{
//                                 fontSize: "0.875rem",
//                                 color: "#333",
//                                 fontWeight: 500,
//                                 whiteSpace: "nowrap",
//                             }}
//                         >
//                             {step.label}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </motion.section>
//     );
// };

// export default SecurityCTA;


// SecurityCTA.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

const SecurityCTA = ({ data = {} }) => {
    const isMobile = useIsMobile();
    const { button = {}, steps = [] } = data;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
                padding: isMobile ? "32px 24px 48px" : "40px 40px 56px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
            }}
        >
            {/* Get Started Button */}
            <a
                href={button.href}
                style={{
                    display: "block",
                    width: isMobile ? "100%" : "auto",
                    maxWidth: isMobile ? "320px" : "none",
                    padding: "14px 64px",
                    borderRadius: "10px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    background: "#111",
                    color: "#fff",
                    border: "2px solid #111",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.01em",
                    textAlign: "center",
                    boxSizing: "border-box",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#111";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#111";
                    e.currentTarget.style.color = "#fff";
                }}
            >
                {button.label}
            </a>

            {/* Steps */}
            <div
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: "12px",
                    width: isMobile ? "100%" : "auto",
                    maxWidth: isMobile ? "320px" : "none",
                    justifyContent: "center",
                    alignItems: isMobile ? "stretch" : "center",
                }}
            >
                {steps.map((step) => (
                    <div
                        key={step.number}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px 22px",
                            borderRadius: "12px",
                            border: "1.5px solid #e0e0e0",
                            background: "#fff",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                            width: isMobile ? "100%" : "auto",
                            boxSizing: "border-box",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "1rem",
                                fontWeight: 800,
                                color: "#111",
                                lineHeight: 1,
                                flexShrink: 0,
                            }}
                        >
                            {step.number}
                        </span>
                        <span
                            style={{
                                fontSize: "0.875rem",
                                color: "#333",
                                fontWeight: 500,
                            }}
                        >
                            {step.label}
                        </span>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default SecurityCTA;