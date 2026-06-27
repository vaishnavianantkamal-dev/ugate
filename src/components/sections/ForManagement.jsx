import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users,
    CreditCard,
    UserCheck,
    MessageSquare,
    ClipboardList,
    CalendarCheck,
    BarChart2,
    ShieldCheck,
} from "lucide-react";

const iconMap = {
    users: Users,
    "credit-card": CreditCard,
    "user-check": UserCheck,
    "message-square": MessageSquare,
    "clipboard-list": ClipboardList,
    "calendar-check": CalendarCheck,
    "bar-chart": BarChart2,
    shield: ShieldCheck,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.06 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
};

const defaultFeatures = [
    {
        icon: "users",
        title: "Resident Management",
        description: "Maintain a complete digital registry of all flats, members, vehicles, and tenants — searchable and always up to date.",
        bullets: [
            "Flat & member directory",
            "Vehicle registration",
            "Tenant & owner records",
            "Move-in/out tracking",
        ],
    },
    {
        icon: "credit-card",
        title: "Billing & Accounting",
        description: "Automate maintenance invoices, track payment history, and generate reconciliation reports — with zero manual effort.",
        bullets: [
            "Auto-generated invoices",
            "Online payment collection",
            "Overdue reminders & escalations",
            "Expense & fund tracking",
        ],
    },
    {
        icon: "user-check",
        title: "Visitor Management",
        description: "Every visitor entry is digitally logged, pre-approved by residents, and instantly visible to the management committee.",
        bullets: [
            "Resident pre-approval via app",
            "Guard check-in/check-out log",
            "Delivery & service tracking",
            "Real-time entry alerts",
        ],
    },
    {
        icon: "message-square",
        title: "Communication Hub",
        description: "Broadcast notices, circulars, and emergency alerts to all residents simultaneously via app, SMS, and email.",
        bullets: [
            "Society-wide announcements",
            "Targeted flat/block messaging",
            "Email & SMS broadcasts",
            "Notice board archive",
        ],
    },
    {
        icon: "clipboard-list",
        title: "Complaint Tracking",
        description: "Give residents a transparent portal to raise issues and track resolution status — fully managed by the committee.",
        bullets: [
            "Complaint submission portal",
            "Priority categorization",
            "Real-time status updates",
            "Resolution history log",
        ],
    },
    {
        icon: "calendar-check",
        title: "Facility Booking",
        description: "Digitize the booking of clubhouse, grounds, meeting halls, and other shared amenities without conflicts or paperwork.",
        bullets: [
            "Slot-based booking system",
            "Admin approval workflow",
            "Conflict-free scheduling",
            "Booking history & reports",
        ],
    },
    {
        icon: "bar-chart",
        title: "Reports & Analytics",
        description: "Get a real-time view of your society's financial health, occupancy, complaint trends, and more — on demand.",
        bullets: [
            "Collection efficiency reports",
            "Occupancy & vacancy data",
            "Complaint resolution metrics",
            "Monthly committee summaries",
        ],
    },
    {
        icon: "shield",
        title: "Security & Audit Trails",
        description: "Every action on the platform — entry, payment, approval — is timestamped and logged for complete accountability.",
        bullets: [
            "Guard attendance tracking",
            "Entry & exit audit logs",
            "Role-based access control",
            "Tamper-proof records",
        ],
    },
];

const ForManagement = ({ data = {} }) => {
    const { heading = {}, subtitle = "", items = defaultFeatures } = data;
    const features = items.length ? items : defaultFeatures;

    const [activeIndex, setActiveIndex] = useState(0);
    const activeFeature = features[activeIndex] || features[0];

    return (
        <section id="features" style={{ padding: "clamp(60px, 8vw, 100px) 24px", background: "#000000" }}>
            <style>{`
                .mgmt-feature-layout {
                    display: grid;
                    grid-template-columns: 460px 1fr;
                    gap: 40px;
                    align-items: start;
                    max-width: 1300px;
                    margin: 0 auto;
                }

                .mgmt-cards-col {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .mgmt-content-col {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    padding: 32px;
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 20px;
                    min-height: 340px;
                    position: relative;
                    overflow: hidden;
                    position: sticky;
                    top: 100px;
                }

                .mgmt-content-col::before {
                    content: '';
                    position: absolute;
                    top: -80px;
                    right: -80px;
                    width: 260px;
                    height: 260px;
                    background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%);
                    pointer-events: none;
                }

                .mgmt-card {
                    padding: 14px 16px;
                    background: #0a0a0a;
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 12px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    align-items: flex-start;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                }

                .mgmt-card:hover {
                    background: #111111;
                    border-color: rgba(255,255,255,0.12);
                    transform: translateY(-4px);
                }

                .mgmt-card.active {
                    background: #ffffff;
                    border-color: #ffffff;
                    box-shadow: 0 8px 28px rgba(255,255,255,0.1);
                    transform: translateY(-6px);
                }

                .mgmt-card.active .mgmt-icon-box {
                    background: rgba(0,0,0,0.08) !important;
                }

                .mgmt-card.active .mgmt-card-label {
                    color: #000000 !important;
                    font-weight: 700;
                }

                .mgmt-bullet-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .mgmt-bullet-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    font-family: 'DM Sans', sans-serif;
                    color: #a0a0a0;
                    font-size: 0.9rem;
                    line-height: 1.4;
                }

                .mgmt-bullet-dot {
                    width: 18px;
                    height: 18px;
                    background: rgba(255,255,255,0.08);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                @media (max-width: 1100px) {
                    .mgmt-feature-layout {
                        grid-template-columns: 1fr;
                    }
                    .mgmt-content-col {
                        position: relative;
                        top: 0;
                    }
                    .mgmt-bullet-list {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 600px) {
                    .mgmt-cards-col {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "40px", maxWidth: "800px", margin: "0 auto 40px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                >
                    <div style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "11px",
                        letterSpacing: "3px",
                        color: "#888",
                        marginBottom: "12px",
                        textTransform: "uppercase"
                    }}>
                        MANAGEMENT TOOLS
                    </div>
                    <h2 style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(3rem, 5vw, 4.5rem)",
                        fontWeight: 400,
                        color: "#ffffff",
                        letterSpacing: "1px",
                        lineHeight: 1,
                        margin: 0,
                        textTransform: "uppercase",
                    }}>
                        {heading.line1 || "BUILT FOR"} {heading.line2 || "COMMITTEE EFFICIENCY"}
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1.05rem",
                        color: "#a0a0a0",
                        lineHeight: 1.6,
                        marginTop: "16px",
                    }}
                >
                    {subtitle || "Every tool your committee needs to run a smarter, more transparent society."}
                </motion.p>
            </div>

            {/* Layout */}
            <div className="mgmt-feature-layout">
                {/* Left: Grid of clickable cards */}
                <motion.div
                    className="mgmt-cards-col"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((item, index) => {
                        const Icon = iconMap[item.icon] || Users;
                        const isActive = activeIndex === index;
                        return (
                            <motion.div
                                key={item.title}
                                variants={cardVariants}
                                className={`mgmt-card ${isActive ? "active" : ""}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="mgmt-icon-box" style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px",
                                    background: "rgba(255,255,255,0.06)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}>
                                    <Icon size={20} color={isActive ? "#000000" : "#ffffff"} strokeWidth={1.5} />
                                </div>
                                <p className="mgmt-card-label" style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.95rem",
                                    fontWeight: 600,
                                    color: isActive ? "#000000" : "#ffffff",
                                    margin: 0,
                                    transition: "color 0.3s ease",
                                    lineHeight: 1.3,
                                }}>
                                    {item.title}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Right: Animated detail panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        className="mgmt-content-col"
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -24 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Label bar */}
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                            <div style={{ width: "32px", height: "2px", background: "#ffffff" }} />
                            <span style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "0.85rem",
                                color: "#ffffff",
                                textTransform: "uppercase",
                                letterSpacing: "2px",
                                fontWeight: 600,
                            }}>
                                Feature Focus
                            </span>
                        </div>

                        <h3 style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                            color: "#ffffff",
                            lineHeight: 1,
                            margin: "0 0 6px 0",
                            letterSpacing: "1px",
                        }}>
                            {activeFeature?.title}
                        </h3>

                        <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "1.05rem",
                            color: "#ffffff",
                            lineHeight: 1.55,
                            margin: "0 0 20px 0",
                            opacity: 0.75,
                        }}>
                            {activeFeature?.description}
                        </p>

                        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", margin: "0 0 20px 0" }} />

                        <div className="mgmt-bullet-list">
                            {activeFeature?.bullets?.map((bullet, i) => (
                                <div key={i} className="mgmt-bullet-item">
                                    <div className="mgmt-bullet-dot">
                                        <svg viewBox="0 0 10 10" fill="none" width="10" height="10">
                                            <path d="M2 5L4 7L8 3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span>{bullet}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ForManagement;