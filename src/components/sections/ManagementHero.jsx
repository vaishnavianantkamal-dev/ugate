import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LayoutDashboard, Users, CreditCard, ShieldCheck } from "lucide-react";

const stats = [
    { value: "2,400+", label: "Societies Managed" },
    { value: "₹0", label: "Cost for 2 Years" },
    { value: "60s", label: "Average Task Time" },
    { value: "98.7%", label: "Platform Uptime" },
];

const pills = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Users, label: "Residents" },
    { icon: CreditCard, label: "Billing" },
    { icon: ShieldCheck, label: "Security" },
];

const ManagementHero = () => {
    return (
        <section style={{
            background: "#000000",
            backgroundImage: `url('/mgmt_hero_bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(80px, 10vh, 120px) 24px clamp(40px, 6vh, 80px)",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* Dark Overlay */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, #000000 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 100%)",
                zIndex: 1
            }} />

            <style>{`
                /* Diagonal grid lines — pure CSS decoration */
                .mgmt-hero-grid {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
                    background-size: 80px 80px;
                    pointer-events: none;
                    z-index: 1;
                }

                .mgmt-hero-accent {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.02) 100%);
                    border-left: 1px solid rgba(255,255,255,0.05);
                    pointer-events: none;
                    z-index: 1;
                }

                .mgmt-hero-inner {
                    position: relative;
                    z-index: 2;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                }

                .mgmt-hero-layout {
                    display: grid;
                    grid-template-columns: 1fr 420px;
                    gap: 80px;
                    align-items: center;
                }

                .mgmt-hero-stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1px;
                    background: rgba(255,255,255,0.07);
                    border: 1px solid rgba(255,255,255,0.07);
                }

                .mgmt-hero-stat {
                    padding: 24px 28px;
                    background: #000000;
                    transition: background 0.3s ease;
                }

                .mgmt-hero-stat:hover {
                    background: #0d0d0d;
                }

                .mgmt-hero-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 32px;
                }

                .mgmt-pill {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 999px;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.85rem;
                    color: #a0a0a0;
                    transition: all 0.25s ease;
                }

                .mgmt-pill:hover {
                    border-color: rgba(255,255,255,0.35);
                    color: #ffffff;
                    background: rgba(255,255,255,0.04);
                }

                .mgmt-hero-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 28px;
                    background: #ffffff;
                    color: #000000;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 700;
                    text-decoration: none;
                    border: 1px solid #ffffff;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .mgmt-hero-btn-primary:hover {
                    background: transparent;
                    color: #ffffff;
                }

                .mgmt-hero-btn-ghost {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 28px;
                    background: transparent;
                    color: #ffffff;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 600;
                    text-decoration: none;
                    border: 1px solid rgba(255,255,255,0.18);
                    transition: all 0.3s ease;
                }

                .mgmt-hero-btn-ghost:hover {
                    background: #ffffff;
                    color: #000000;
                    border-color: #ffffff;
                }

                @media (max-width: 1000px) {
                    .mgmt-hero-layout {
                        grid-template-columns: 1fr;
                        gap: 48px;
                    }
                    .mgmt-hero-accent {
                        display: none;
                    }
                }

                @media (max-width: 600px) {
                    .mgmt-hero-stats {
                        grid-template-columns: 1fr 1fr;
                    }
                }
            `}</style>

            {/* Background decorations */}
            <div className="mgmt-hero-grid" />
            <div className="mgmt-hero-accent" />

            {/* Glow dot */}
            <div style={{
                position: "absolute",
                top: "30%",
                right: "10%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 1,
            }} />

            <div className="mgmt-hero-inner">
                <div className="mgmt-hero-layout">

                    {/* LEFT — Text content */}
                    <div>
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "24px",
                            }}
                        >
                            <div style={{ width: "40px", height: "1px", background: "#ffffff" }} />
                            <span style={{
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "11px",
                                letterSpacing: "3px",
                                color: "#888",
                                textTransform: "uppercase",
                            }}>
                                Management Platform
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
                                fontWeight: 400,
                                color: "#ffffff",
                                lineHeight: 0.95,
                                letterSpacing: "1px",
                                margin: "0 0 24px 0",
                                textTransform: "uppercase",
                            }}
                        >
                            RUN YOUR SOCIETY<br />
                            SMARTER.
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "1.1rem",
                                color: "#888",
                                lineHeight: 1.65,
                                maxWidth: "480px",
                                margin: "0 0 32px 0",
                            }}
                        >
                            One platform to manage residents, billing, visitors, complaints,
                            and security — with zero manual work and full accountability.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
                        >
                            <Link to="/contact" className="mgmt-hero-btn-primary">
                                Get Free Demo <ArrowRight size={16} />
                            </Link>
                            <button 
                                onClick={() => {
                                    if (window.location.pathname === "/features") {
                                        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                                    } else {
                                        window.location.href = "/features";
                                    }
                                }} 
                                className="mgmt-hero-btn-ghost"
                                style={{ cursor: "pointer", border: "1px solid rgba(255,255,255,0.18)" }}
                            >
                                Explore Features <ArrowRight size={16} />
                            </button>
                        </motion.div>

                        {/* Feature pills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mgmt-hero-pills"
                        >
                            {pills.map(({ icon: Icon, label }) => (
                                <div key={label} className="mgmt-pill">
                                    <Icon size={14} strokeWidth={1.5} />
                                    {label}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT — Stats grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                    >
                        {/* Label above grid */}
                        <div style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "10px",
                            letterSpacing: "3px",
                            color: "#555",
                            textTransform: "uppercase",
                            marginBottom: "16px",
                        }}>
                            Platform Impact
                        </div>

                        <div className="mgmt-hero-stats">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    className="mgmt-hero-stat"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                                >
                                    <div style={{
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: "2.8rem",
                                        color: "#ffffff",
                                        lineHeight: 1,
                                        marginBottom: "6px",
                                        letterSpacing: "1px",
                                    }}>
                                        {s.value}
                                    </div>
                                    <div style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "0.8rem",
                                        color: "#666",
                                        letterSpacing: "0.5px",
                                    }}>
                                        {s.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Disclaimer */}
                        <div style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.78rem",
                            color: "#444",
                            marginTop: "16px",
                            lineHeight: 1.5,
                        }}>
                            * Based on average 100-flat society. No credit card required.
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ManagementHero;
