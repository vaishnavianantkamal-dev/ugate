// Download.jsx
import { motion } from "framer-motion";

const GooglePlayBadge = () => (
    <svg viewBox="0 0 135 40" width="135" height="40" xmlns="http://www.w3.org/2000/svg">
        <rect width="135" height="40" rx="5" fill="#111"/>
        <text x="38" y="13" fill="#fff" fontSize="7" fontFamily="sans-serif">GET IT ON</text>
        <text x="38" y="27" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Google Play</text>
        <text x="10" y="26" fill="#fff" fontSize="22" fontFamily="sans-serif">▶</text>
    </svg>
);

const AppStoreBadge = () => (
    <svg viewBox="0 0 135 40" width="135" height="40" xmlns="http://www.w3.org/2000/svg">
        <rect width="135" height="40" rx="5" fill="#111"/>
        <text x="38" y="13" fill="#fff" fontSize="7" fontFamily="sans-serif">Download on the</text>
        <text x="38" y="27" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">App Store</text>
        <text x="10" y="28" fill="#fff" fontSize="26" fontFamily="sans-serif"></text>
    </svg>
);

const Download = ({ data = {} }) => {
    const { text = "", buttons = [] } = data;

    return (
        <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
                background: "#000000",
                padding: "80px 40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                textAlign: "center",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
        >
            {/* Text */}
            <p
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1rem",
                    color: "#a0a0a0",
                    fontWeight: 500,
                    margin: 0,
                    maxWidth: "480px",
                    lineHeight: 1.5,
                }}
            >
                {text}
            </p>

            {/* Store Badges */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                {buttons.map((btn) => (
                    <a
                        key={btn.id}
                        href={btn.href}
                        style={{ textDecoration: "none", display: "inline-block" }}
                    >
                        {btn.badgeImage ? (
                            <img
                                src={btn.badgeImage}
                                alt={btn.label}
                                style={{ height: "84px", objectFit: "cover" }}
                            />
                        ) : btn.id === "google" ? (
                            <GooglePlayBadge />
                        ) : (
                            <AppStoreBadge />
                        )}
                    </a>
                ))}
            </div>
        </motion.section>
    );
};

export default Download;