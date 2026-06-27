import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Zap, Shield, CreditCard, Mail, MapPin, ChevronRight, MessageCircle } from "lucide-react";

const faqData = [
    {
        category: "Getting Started",
        icon: BookOpen,
        items: [
            { q: "What is Urbangate?", a: "Urbangate is a smart society management and security platform for modern residential buildings. It helps manage billing, residents, visitors, complaints, and security — all from one platform." },
            { q: "Who is Urbangate for?", a: "Urbangate is designed for housing societies, gated communities, and residential buildings. It serves residents, security guards, and society management committees." },
            { q: "Is Urbangate available on mobile?", a: "Yes. Urbangate has dedicated mobile apps for both residents and security guards. Residents can approve visitors, pay bills, and raise complaints. Guards can manage visitor entries, deliveries, and SOS alerts." },
            { q: "How do I get started with Urbangate?", a: "Getting started is simple: Add your Society Details → Onboard Members → Start Managing. You can request a free demo from our website and our team will guide you through the setup." },
            { q: "How long does setup take?", a: "Basic setup can be done in minutes. For security features, the process is: Set Up Society Details → Onboard Guards → Enhance Security." },
        ],
    },
    {
        category: "Features",
        icon: Zap,
        items: [
            { q: "What features does Urbangate offer?", a: "Urbangate includes Resident Management, Visitor Management, Maintenance Billing, Notices & Communication, Complaint Tracking, Facility Booking, Accounting & Reports, and a Mobile App for residents and guards." },
            { q: "How does visitor management work?", a: "Security guards log visitor details using the guard app. Residents receive a real-time notification and can approve or deny entry with a single tap. All entries are recorded with timestamps." },
            { q: "Can residents pay maintenance bills online?", a: "Yes. Urbangate integrates a payment gateway so residents can pay maintenance fees, utility bills, and society dues directly from their mobile app." },
            { q: "Does Urbangate support delivery management?", a: "Yes. Guards can log delivery agents at the gate. Residents are notified in real-time and can approve deliveries in advance or at the time of arrival. Full delivery records are maintained." },
            { q: "What is the SOS Alert feature?", a: "Security guards can instantly send panic alerts to management in case of an emergency. This helps ensure rapid response to security incidents." },
        ],
    },
    {
        category: "Security",
        icon: Shield,
        items: [
            { q: "Is my society's data safe with Urbangate?", a: "Yes. Urbangate uses top-notch security practices to keep your data safe. The platform is cloud-based with encrypted data storage and secure access controls." },
            { q: "Does Urbangate take responsibility for security decisions?", a: "No. Urbangate is a technology platform and does not take security decisions or manage existing security services. Visitor approvals are the sole responsibility of flat owners." },
            { q: "Are visitor records permanently stored?", a: "Yes. All visitor entries, approvals, photos, and timestamps are permanently stored and fully searchable, giving you a complete audit trail." },
        ],
    },
    {
        category: "Billing",
        icon: CreditCard,
        items: [
            { q: "How is maintenance billing handled?", a: "Urbangate provides an automated billing system. Society admins can configure billing cycles, amounts, and dues. Residents receive notifications and can pay directly from the app." },
            { q: "What payment methods are supported?", a: "Urbangate supports all major payment methods through its integrated payment gateway — UPI, net banking, debit/credit cards, and wallets." },
            { q: "Can I download payment receipts?", a: "Yes. Residents can download digital receipts for every payment made through the app. Admins also have access to full accounting reports." },
        ],
    },
    {
        category: "Account",
        icon: MessageCircle,
        items: [
            { q: "How can I contact Urbangate for support?", a: "You can reach us at hello@ugate.in or visit our office at Shop No. 236, Second Floor, Roongta Fururex, Opp. Hotel The One, Near R.D Circle, City Center Mall Road, Govind Nagar, Nashik-422008." },
            { q: "What are the support hours?", a: "Our support team is available Monday to Saturday, 9 AM to 7 PM IST. For urgent security issues, we provide 24/7 emergency assistance." },
            { q: "How do I reset my password?", a: "You can reset your password directly from the login screen by clicking 'Forgot Password'. An OTP will be sent to your registered mobile number or email." },
        ],
    },
];

const useIsMobile = (breakpoint = 640) => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < breakpoint : false
    );
    useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth < breakpoint);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, [breakpoint]);
    return isMobile;
};

const FAQItem = ({ q, a, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
            <button
                onClick={() => setOpen((p) => !p)}
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                }}
            >
                <span style={{ 
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.1rem", 
                    fontWeight: 600, 
                    color: open ? "#ffffff" : "#aaa", 
                    lineHeight: 1.4, 
                    transition: "color 0.3s ease" 
                }}>
                    {q}
                </span>
                <ChevronRight
                    size={20}
                    color={open ? "#ffffff" : "#444"}
                    style={{ 
                        flexShrink: 0, 
                        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)", 
                        transform: open ? "rotate(90deg)" : "rotate(0deg)" 
                    }}
                />
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <p style={{ 
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "1rem", 
                            color: "#888", 
                            lineHeight: 1.6, 
                            paddingBottom: "32px", 
                            margin: 0, 
                            paddingRight: "24px" 
                        }}>
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState("Getting Started");
    const isMobile = useIsMobile(900);
    const current = faqData.find((c) => c.category === activeCategory);

    return (
        <div style={{ background: "#000000", minHeight: "100vh", paddingTop: "120px", color: "#ffffff" }}>
            
            {/* Header */}
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", marginBottom: "80px", textAlign: "center" }}>
                <h1 style={{ 
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: isMobile ? "3.5rem" : "5rem", 
                    fontWeight: 400, 
                    letterSpacing: "2px", 
                    margin: "0 0 16px 0", 
                    lineHeight: 0.9,
                    textTransform: "uppercase"
                }}>
                    FREQUENTLY ASKED QUESTIONS
                </h1>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#555", margin: 0, letterSpacing: "1px", textTransform: "uppercase" }}>
                    Last updated: May 04, 2025
                </p>
            </div>

            <div style={{ 
                display: "flex", 
                flexDirection: isMobile ? "column" : "row",
                maxWidth: "1200px", 
                margin: "0 auto", 
                padding: "0 40px 100px", 
                gap: isMobile ? "60px" : "80px" 
            }}>
                
                {/* Sidebar Navigation */}
                <aside style={{ width: isMobile ? "100%" : "280px", flexShrink: 0 }}>
                    <p style={{ 
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem", 
                        fontWeight: 700, 
                        letterSpacing: "2px", 
                        textTransform: "uppercase", 
                        color: "#444", 
                        marginBottom: "24px" 
                    }}>
                        Categories
                    </p>
                    <nav style={{ display: "flex", flexDirection: isMobile ? "row" : "column", gap: "8px", overflowX: isMobile ? "auto" : "visible", paddingBottom: isMobile ? "12px" : 0 }}>
                        {faqData.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = activeCategory === cat.category;
                            return (
                                <button
                                    key={cat.category}
                                    onClick={() => setActiveCategory(cat.category)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        padding: "14px 20px",
                                        borderRadius: "12px",
                                        border: "none",
                                        background: isActive ? "#ffffff" : "transparent",
                                        color: isActive ? "#000000" : "#888",
                                        fontSize: "0.95rem",
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        textAlign: "left",
                                        width: isMobile ? "max-content" : "100%",
                                        transition: "all 0.3s ease",
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <Icon size={18} />
                                    {cat.category}
                                </button>
                            );
                        })}
                    </nav>

                    <div style={{ 
                        marginTop: "60px", 
                        padding: "32px", 
                        background: "rgba(255,255,255,0.03)", 
                        borderRadius: "24px",
                        border: "1px solid rgba(255,255,255,0.06)"
                    }}>
                        <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, marginBottom: "12px" }}>Still searching?</h4>
                        <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.5, marginBottom: "24px" }}>
                            If you can't find the answer you're looking for, our team is ready to help.
                        </p>
                        <a
                            href="/contact"
                            style={{ 
                                display: "inline-block", 
                                padding: "12px 24px", 
                                borderRadius: "100px", 
                                background: "#ffffff", 
                                color: "#000000", 
                                fontSize: "0.85rem", 
                                fontWeight: 700, 
                                textDecoration: "none",
                                transition: "opacity 0.2s"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = 0.8}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
                        >
                            Get in touch
                        </a>
                    </div>
                </aside>

                {/* Content Area */}
                <main style={{ flex: 1 }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div style={{ marginBottom: "48px" }}>
                                <h2 style={{ 
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "2rem", 
                                    fontWeight: 700, 
                                    color: "#ffffff", 
                                    marginBottom: "8px" 
                                }}>
                                    {current?.category}
                                </h2>
                                <p style={{ fontSize: "0.95rem", color: "#444", fontFamily: "'Space Mono', monospace" }}>
                                    {current?.items.length} ARTICLES IN THIS SECTION
                                </p>
                            </div>

                            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                                {current?.items.map((item, i) => (
                                    <FAQItem key={i} q={item.q} a={item.a} index={i} />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default FAQ;