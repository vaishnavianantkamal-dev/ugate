// PricingCTA.jsx
import { motion } from "framer-motion";

const PricingCTA = ({ data = {} }) => {
    const {
        title = "Ready to Digitize Your Society?",
        subtitle = "",
        buttons = [],
    } = data;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
                textAlign: "center",
                padding: "60px 24px 80px",
                maxWidth: "560px",
                margin: "0 auto",
            }}
        >
            {/* Title */}
            <h2
                style={{
                    fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                    fontWeight: 800,
                    color: "#111",
                    letterSpacing: "-0.03em",
                    marginBottom: "12px",
                    lineHeight: 1.2,
                }}
            >
                {title}
            </h2>

            {/* Subtitle */}
            {subtitle && (
                <p
                    style={{
                        fontSize: "0.92rem",
                        color: "#777",
                        lineHeight: 1.6,
                        marginBottom: "28px",
                    }}
                >
                    {subtitle}
                </p>
            )}

            {/* Buttons */}
            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {buttons.map((btn, i) => (
                    <a
                        key={i}
                        href={btn.href}
                        style={{
                            padding: "11px 24px",
                            borderRadius: "8px",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            textDecoration: "none",
                            border: "1.5px solid #111",
                            background: btn.variant === "filled" ? "#111" : "transparent",
                            color: btn.variant === "filled" ? "#fff" : "#111",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            if (btn.variant !== "filled") {
                                e.currentTarget.style.background = "#111";
                                e.currentTarget.style.color = "#fff";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (btn.variant !== "filled") {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#111";
                            }
                        }}
                    >
                        {btn.label}
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

export default PricingCTA;