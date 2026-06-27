import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                borderBottom: "1px solid #ffffff",
                marginBottom: "0"
            }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: "100%",
                    padding: "32px 0",
                    background: "none",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left"
                }}
            >
                <span style={{ 
                    fontFamily: "'DM Sans', sans-serif", 
                    fontSize: "1.2rem", 
                    color: isOpen ? "#ffffff" : "#888888",
                    transition: "color 0.3s ease"
                }}>
                    {faq.question}
                </span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: 300 }}
                >
                    +
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                    >
                        <p style={{ 
                            fontFamily: "'DM Sans', sans-serif", 
                            fontSize: "1rem", 
                            color: "#ffffff", 
                            lineHeight: 1.6,
                            paddingBottom: "32px",
                            maxWidth: "800px",
                            opacity: 0.8
                        }}>
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQSection = () => {
    const faqs = [
        {
            question: "Is it really zero cost for 2 years?",
            answer: "Yes. No upfront investment, no setup fees, and no subscription charges for the first 2 years. We believe in the value we provide, and we want societies to experience it risk-free."
        },
        {
            question: "What happens after 2 years?",
            answer: "After the completion of 2 years, all subsequent charges will be kept at a nominal rate, mutually agreed upon during the initial onboarding. Our goal is long-term partnership, not high margins."
        },
        {
            question: "Are there any hidden charges?",
            answer: "No hidden charges whatsoever. The platform, setup, training, support, and all features are completely free for 2 years. Third-party payment gateway charges (if used for maintenance collection) apply at actuals."
        },
        {
            question: "How long does setup take?",
            answer: "Typically 1-2 weeks from contract signing to go-live. This includes hardware installation, security staff training, database preparation, and resident onboarding."
        },
        {
            question: "Is training provided?",
            answer: "Yes! Complete hands-on training for security staff, management team, and residents. We also provide dedicated support managers for the first 30 days of operation."
        },
        {
            question: "Can we customize features?",
            answer: "The platform is highly modular. While core features are standardized for stability, we can configure specific workflows and notification rules to match your society's bylaws."
        }
    ];

    return (
        <section style={{
            padding: "120px 24px",
            background: "#000000",
            position: "relative"
        }}>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <div style={{ 
                        fontFamily: "'Space Mono', monospace", 
                        fontSize: "11px", 
                        letterSpacing: "3px", 
                        color: "#ffffff", 
                        marginBottom: "16px",
                        textTransform: "uppercase"
                    }}>
                        COMMON QUESTIONS
                    </div>
                    <h2 style={{ 
                        fontFamily: "'Bebas Neue', sans-serif", 
                        fontSize: "clamp(3rem, 7vw, 6rem)", 
                        color: "#ffffff", 
                        lineHeight: 1
                    }}>
                        SOCIETY READINESS
                    </h2>
                </div>

                <div style={{ borderTop: "1px solid #ffffff" }}>
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} faq={faq} index={idx} />
                    ))}
                </div>

                <div style={{ 
                    marginTop: "80px", 
                    textAlign: "center",
                    padding: "40px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.07)"
                }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#888", marginBottom: "24px" }}>
                        Have more questions? Our team is available 24/7.
                    </p>
                    <a href="mailto:support@ugate.in" style={{ 
                        fontFamily: "'Space Mono', monospace", 
                        color: "#ffffff", 
                        textDecoration: "underline",
                        letterSpacing: "1px"
                    }}>
                        CONTACT SUPPORT →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;