import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Odometer = ({ target, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime = null;
        const duration = 1800;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(target * easeProgress));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [target, isInView]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
};

const MagneticValueCard = ({ item, index }) => {
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

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                perspective: 1000,
                position: "relative"
            }}
        >
            <div className="roi-card">
                <motion.div 
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: useTransform(
                            [mouseX, mouseY],
                            ([mx, my]) => `radial-gradient(circle at ${mx}px ${my}px, rgba(255,255,255,0.03) 0%, transparent 70%)`
                        ),
                        pointerEvents: "none",
                        zIndex: 2
                    }}
                />
                
                {/* Watermark Number */}
                <div style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "10px",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "8rem",
                    color: "#ffffff",
                    opacity: 0.03,
                    lineHeight: 1,
                    pointerEvents: "none",
                    zIndex: 1
                }}>
                    {index + 1}
                </div>

                <div style={{ position: "relative", zIndex: 3 }}>
                    <div style={{ marginBottom: "24px", lineHeight: 0 }}>{item.icon}</div>
                    <h3 style={{ 
                        fontFamily: "'Bebas Neue', sans-serif", 
                        fontSize: "2.5rem", 
                        color: "#ffffff", 
                        marginBottom: "12px",
                        letterSpacing: "1px"
                    }}>
                        {item.title}
                    </h3>
                    <p style={{ 
                        fontFamily: "'DM Sans', sans-serif", 
                        fontSize: "1rem", 
                        color: "#888", 
                        marginBottom: "24px",
                        lineHeight: 1.6
                    }}>
                        {item.description}
                    </p>
                    <div style={{ 
                        fontFamily: "'Space Mono', monospace", 
                        fontSize: "1.6rem", 
                        fontWeight: 700, 
                        color: "#ffffff" 
                    }}>
                        {item.prefix}<Odometer target={item.targetValue} suffix={item.suffix} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// SVG Icon components — thin-stroke outline style (Updated to White)
const IconReduceLosses = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2,28 12,16 18,22 28,10" />
        <polyline points="22,10 28,10 28,16" />
        <line x1="2" y1="33" x2="34" y2="33" />
    </svg>
);
const IconSaveTime = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="20" r="12" />
        <polyline points="18,14 18,20 22,24" />
        <line x1="12" y1="4" x2="24" y2="4" />
        <line x1="18" y1="4" x2="18" y2="8" />
    </svg>
);
const IconReduceManpower = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13" cy="11" r="4.5" />
        <path d="M2,30 C2,22 8,18 13,18 C18,18 24,22 24,30" />
        <circle cx="25" cy="10" r="3.5" />
        <path d="M24,18 C27,18 34,21 34,30" />
    </svg>
);
const IconPropertyValue = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2,18 18,4 34,18" />
        <rect x="8" y="18" width="20" height="14" />
        <rect x="14" y="24" width="8" height="8" />
    </svg>
);
const IconBillingEfficiency = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="6" width="26" height="24" rx="2" />
        <line x1="10" y1="14" x2="26" y2="14" />
        <line x1="10" y1="20" x2="20" y2="20" />
        <polyline points="20,24 23,27 30,20" />
    </svg>
);
const IconSecurityImpact = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18,3 L32,9 L32,18 C32,26 25,32 18,34 C11,32 4,26 4,18 L4,9 Z" />
        <polyline points="12,18 16,22 24,14" />
    </svg>
);

const ROI = () => {
    const metrics = [
        {
            title: "REDUCE LOSSES",
            icon: <IconReduceLosses />,
            description: "Eliminate unauthorized entry, theft, and billing leakage.",
            prefix: "Save ₹",
            targetValue: 3,
            suffix: " Cr annually"
        },
        {
            title: "SAVE TIME",
            icon: <IconSaveTime />,
            description: "Visitor approvals, maintenance payments, complaint logging — all instant.",
            prefix: "To under ",
            targetValue: 60,
            suffix: " seconds"
        },
        {
            title: "REDUCE MANPOWER",
            icon: <IconReduceManpower />,
            description: "Replace 3-4 manual roles with one intelligent platform.",
            prefix: "",
            targetValue: 50,
            suffix: "% efficiency gain"
        },
        {
            title: "PROPERTY VALUE",
            icon: <IconPropertyValue />,
            description: "Societies on Urbangate command higher resale and rental premiums.",
            prefix: "",
            targetValue: 5,
            suffix: "% premium"
        },
        {
            title: "BILLING EFFICIENCY",
            icon: <IconBillingEfficiency />,
            description: "Zero missed payments. Automated due date reminders and escalations.",
            prefix: "",
            targetValue: 100,
            suffix: "% reconciliation"
        },
        {
            title: "SECURITY IMPACT",
            icon: <IconSecurityImpact />,
            description: "Verified entry logs, guard tracking, and audit trails deter crime.",
            prefix: "",
            targetValue: 18,
            suffix: "% reduction"
        }
    ];

    return (
        <section style={{
            padding: "100px 24px",
            background: "#000000",
            position: "relative",
            overflow: "hidden"
        }}>
            <style>{`
                .roi-card {
                    background: #0a0a0a;
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 24px;
                    padding: 40px;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .roi-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(255,255,255,0.2);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                }
            `}</style>

            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <div style={{ 
                        fontFamily: "'Space Mono', monospace", 
                        fontSize: "12px", 
                        letterSpacing: "4px", 
                        color: "#ffffff", 
                        marginBottom: "20px",
                        textTransform: "uppercase"
                    }}>
                        ROI BREAKDOWN
                    </div>
                    <h2 style={{ 
                        fontFamily: "'Bebas Neue', sans-serif", 
                        fontSize: "clamp(4rem, 10vw, 8rem)", 
                        color: "#ffffff", 
                        lineHeight: 0.9,
                        marginBottom: "32px",
                        textTransform: "uppercase"
                    }}>
                        VALUE BEYOND <br/> SECURITY
                    </h2>
                    <p style={{ 
                        fontFamily: "'DM Sans', sans-serif", 
                        fontSize: "1.2rem", 
                        color: "#666", 
                        maxWidth: "600px", 
                        margin: "0 auto",
                        lineHeight: 1.6
                    }}>
                        The real numbers that make the decision for you.
                    </p>
                </div>

                <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
                    gap: "32px" 
                }}>
                    {metrics.map((item, idx) => (
                        <MagneticValueCard key={idx} item={item} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ROI;