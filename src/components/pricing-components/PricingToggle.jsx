// PricingToggle.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const PricingToggle = ({ data = {}, onToggle }) => {
    const {
        monthly = "Monthly",
        yearly = "Yearly",
        yearlySavingLabel = "Save 20%",
    } = data;

    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
        const next = !isYearly;
        setIsYearly(next);
        onToggle && onToggle(next);
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "40px",
            }}
        >
            {/* Monthly label */}
            <span
                style={{
                    fontSize: "0.9rem",
                    fontWeight: isYearly ? 400 : 600,
                    color: isYearly ? "#999" : "#111",
                    transition: "all 0.2s",
                }}
            >
                {monthly}
            </span>

            {/* Toggle pill */}
            <div
                onClick={handleToggle}
                style={{
                    width: "48px",
                    height: "26px",
                    borderRadius: "999px",
                    background: "#111",
                    position: "relative",
                    cursor: "pointer",
                    flexShrink: 0,
                }}
            >
                <motion.div
                    animate={{ x: isYearly ? 24 : 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    style={{
                        position: "absolute",
                        top: "3px",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#fff",
                    }}
                />
            </div>

            {/* Yearly label + badge */}
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.9rem",
                    fontWeight: isYearly ? 600 : 400,
                    color: isYearly ? "#111" : "#999",
                    transition: "all 0.2s",
                }}
            >
                {yearly}
                {yearlySavingLabel && (
                    <span
                        style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "#16a34a",
                            background: "#dcfce7",
                            padding: "2px 7px",
                            borderRadius: "999px",
                        }}
                    >
                        {yearlySavingLabel}
                    </span>
                )}
            </span>
        </div>
    );
};

export default PricingToggle;