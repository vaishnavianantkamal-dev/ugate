// BlogNewsletter.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const BlogNewsletter = ({ data = {} }) => {
    const {
        title = "Stay updated",
        subtitle = "Get the latest insights delivered directly to your inbox.",
        placeholder = "Your email address",
        buttonLabel = "Subscribe",
    } = data;

    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (email) setSubmitted(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{
                background: "#f9f9f9",
                border: "1px solid #e0e0e0",
                borderRadius: "16px",
                padding: "48px 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "32px",
                flexWrap: "wrap",
                marginTop: "24px",
                marginBottom: "64px",
            }}
        >
            {/* Text */}
            <div style={{ flex: "1 1 300px" }}>
                <p style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.25rem", fontWeight: 700, color: "#111111", 
                    margin: "0 0 12px 0",
                    letterSpacing: "-0.01em"
                }}>
                    {title}
                </p>
                <p style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem", color: "#555555", margin: 0,
                    lineHeight: 1.5
                }}>
                    {subtitle}
                </p>
            </div>

            {/* Input + Button */}
            {submitted ? (
                <p style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem", fontWeight: 600, color: "#16a34a" 
                }}>
                    ✓ You're subscribed!
                </p>
            ) : (
                <div style={{ 
                    display: "flex", 
                    gap: "8px", 
                    flex: "1 1 350px",
                    maxWidth: "480px"
                }}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        style={{
                            flexGrow: 1,
                            padding: "14px 20px",
                            borderRadius: "8px",
                            border: "1px solid #e0e0e0",
                            background: "#ffffff",
                            outline: "none",
                            fontSize: "0.95rem",
                            fontFamily: "'Inter', sans-serif",
                            color: "#111111",
                        }}
                    />
                    <button
                        onClick={handleSubmit}
                        style={{
                            padding: "14px 28px",
                            borderRadius: "8px",
                            background: "#000000",
                            color: "#ffffff",
                            border: "none",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            cursor: "pointer",
                            transition: "background 0.2s ease",
                            fontFamily: "'Inter', sans-serif",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#333333"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "#000000"; }}
                    >
                        {buttonLabel}
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default BlogNewsletter;