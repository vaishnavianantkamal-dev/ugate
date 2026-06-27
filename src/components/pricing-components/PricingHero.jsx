import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SlotCounter from "./SlotCounter";

const PricingHero = ({ data = {} }) => {
    return (
        <section style={{
            padding: "100px 24px 60px",
            textAlign: "center",
            background: "#000000",
            position: "relative",
            overflow: "hidden"
        }}>
            <style>{`
                .blinking-dot {
                    width: 8px;
                    height: 8px;
                    background: #fff;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 8px;
                    animation: blink 1s infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "8px 20px",
                    borderRadius: "999px",
                    marginBottom: "32px",
                    textTransform: "uppercase"
                }}
            >
                <span className="blinking-dot" />
                Pricing
            </motion.div>

            {/* Subline */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "12px",
                    letterSpacing: "4px",
                    color: "#888888",
                    marginBottom: "16px",
                    textTransform: "uppercase"
                }}
            >
                The Future is Here
            </motion.div>

            {/* Headline */}
            <div style={{ overflow: "hidden", marginBottom: "32px" }}>
                <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(4rem, 12vw, 10rem)",
                        color: "#ffffff",
                        lineHeight: 0.9,
                        margin: 0,
                        textTransform: "uppercase"
                    }}
                >
                    ZERO COST <br />
                    FOR 2 YEARS
                </motion.h1>
            </div>

            {/* Body text */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                    color: "#888888",
                    lineHeight: 1.75,
                    maxWidth: "700px",
                    margin: "0 auto 48px"
                }}
            >
                Stop looking. Simplify your society. Upgrade your lifestyle. The most complete society management platform — now available at absolutely <span style={{color: '#fff', fontWeight: 600}}><SlotCounter target={0} /></span> for your first 2 years.
            </motion.p>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                <Link 
                    to="/contact"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "18px 40px",
                        background: "#ffffff",
                        color: "#000000",
                        textDecoration: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        borderRadius: "4px",
                        transition: "all 0.3s ease",
                        border: "1px solid #ffffff"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#ffffff";
                        e.currentTarget.style.color = "#000000";
                    }}
                >
                    Get Started Now →
                </Link>
            </motion.div>

            {/* Micro-badges */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                style={{
                    display: "flex",
                    gap: "24px",
                    justifyContent: "center",
                    marginTop: "48px",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "11px",
                    color: "#555555",
                    flexWrap: "wrap"
                }}
            >
                <span>✓ NO CARD REQUIRED</span>
                <span>·</span>
                <span>✓ NO SUBSCRIPTION FEES</span>
                <span>·</span>
                <span>✓ FULL FEATURE ACTIVATION</span>
            </motion.div>
        </section>
    );
};

export default PricingHero;