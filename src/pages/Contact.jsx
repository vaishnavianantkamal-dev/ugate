import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { contactPageData as d } from "../data/Contactdata";
import PageWrapper from "../components/common/PageWrapper";

// ── Validation helpers ────────────────────────────────────────
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePhone(phone) {
    return /^[\d\s+\-()]+$/.test(phone) && phone.replace(/\D/g, "").length >= 10;
}

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
};

// ── Notification ─────────────────────────────────────────────
function Notification({ message, type }) {
    if (!message) return null;
    return (
        <div
            style={{
                position: "fixed",
                top: "100px",
                right: "20px",
                background: type === "success" ? "#ffffff" : "#ff4466",
                color: type === "success" ? "#000000" : "#ffffff",
                padding: "1rem 2.5rem",
                borderRadius: "100px",
                fontWeight: "700",
                zIndex: 10000,
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                letterSpacing: "1px"
            }}
        >
            {message}
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────
export default function Contact() {
    const isMobile = useIsMobile();
    useEffect(() => window.scrollTo(0, 0), []);

    const [formData, setFormData] = useState({
        "inquiry-type": "",
        name: "",
        phone: "",
        email: "",
        "society-name": "",
        city: "",
        units: "",
        interest: [],
        message: "",
        "demo-preference": "",
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [notification, setNotification] = useState(null);
    const successTimer = useRef(null);

    const showNotification = (message, type = "success") => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    };

    const handleCheckbox = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            interest: checked
                ? [...prev.interest, value]
                : prev.interest.filter((v) => v !== value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Required";
        if (!formData.phone.trim()) newErrors.phone = "Required";
        if (!formData.email.trim()) newErrors.email = "Required";

        if (formData.email && !validateEmail(formData.email)) newErrors.email = "Invalid email";
        if (formData.phone && !validatePhone(formData.phone)) newErrors.phone = "Invalid phone";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            showNotification("Please check the fields.", "error");
            return;
        }

        setSubmitting(true);
        const data = new FormData();
        data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "");
        data.append("subject", d.form.subject);
        data.append("from_name", d.form.fromName);
        data.append("botcheck", "");

        Object.keys(formData).forEach(key => {
            if (key === 'interest') {
                if (formData.interest.length > 0) data.append("interest", formData.interest.join(", "));
            } else if (formData[key]) {
                data.append(key, formData[key]);
            }
        });

        try {
            const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
            const result = await response.json();
            if (response.ok && result.success) {
                setSuccess(true);
                setFormData({ "inquiry-type": "", name: "", phone: "", email: "", "society-name": "", city: "", units: "", interest: [], message: "", "demo-preference": "" });
                showNotification("Message sent successfully!");
                successTimer.current = setTimeout(() => setSuccess(false), 5000);
            } else {
                showNotification(result.message || "Failed.", "error");
            }
        } catch {
            showNotification("Network error.", "error");
        } finally {
            setSubmitting(false);
        }
    };

    const inputStyle = (fieldName) => ({
        width: "100%",
        padding: "16px 20px",
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${errors[fieldName] ? "#ff4466" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "12px",
        color: "#ffffff",
        fontSize: "0.95rem",
        outline: "none",
        fontFamily: "'DM Sans', sans-serif",
        transition: "all 0.3s ease",
    });

    const labelStyle = {
        display: "block",
        fontSize: "0.75rem",
        fontWeight: "700",
        color: "#555",
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginBottom: "8px",
        marginLeft: "4px"
    };

    return (
        <PageWrapper className="contact-page" style={{ minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
            <Notification message={notification?.message} type={notification?.type} />

            {/* Hero Section */}
            <section style={{ 
                padding: isMobile ? "100px 20px 30px" : "140px 40px 40px", 
                textAlign: "center",
                position: "relative",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("/contact_hero_bg_1777885424980.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                borderBottom: "1px solid rgba(255,255,255,0.05)"
            }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ 
                            fontSize: "0.75rem", 
                            fontWeight: 700, 
                            letterSpacing: "3px", 
                            textTransform: "uppercase", 
                            color: "#ffffff", 
                            background: "rgba(255,255,255,0.08)",
                            padding: "6px 16px",
                            borderRadius: "100px",
                            marginBottom: "16px",
                            display: "inline-block",
                            border: "1px solid rgba(255,255,255,0.1)"
                        }}
                    >
                        {d.badge}
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ 
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: isMobile ? "4rem" : "7.5rem", 
                            lineHeight: 0.85,
                            letterSpacing: "1px",
                            margin: "0 0 16px",
                            textTransform: "uppercase",
                            color: "#ffffff"
                        }}
                    >
                        {d.title} <br/> {d.titleGradient}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: isMobile ? "1rem" : "1.15rem", color: "#aaa", maxWidth: "600px", margin: "0 auto", lineHeight: 1.5 }}
                    >
                        {d.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Contact Grid & Form */}
            <section style={{ padding: "60px 20px 120px" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr", gap: "60px", alignItems: "start" }}>
                        
                        {/* Info Column */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", marginBottom: "4px" }}>GET IN TOUCH</h2>
                            
                            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                                {d.contactMethods.map((method, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        style={{ display: "flex", gap: "20px" }}
                                    >
                                        <div style={{ width: "48px", height: "48px", background: "#ffffff", color: "#000", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                                            <i className={`fas ${method.icon}`}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>{method.title}</h4>
                                            {method.lines.map((line, lidx) => (
                                                <p key={lidx} style={{ color: "#888", margin: 0, fontSize: "0.95rem", lineHeight: 1.5 }}>{line}</p>
                                            ))}
                                            <span style={{ fontSize: "0.75rem", color: "#444", display: "block", marginTop: "8px", fontWeight: 700, textTransform: "uppercase" }}>{method.hours}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>



                            <div style={{ marginTop: "24px", overflow: "hidden", borderRadius: "24px", border: "1px solid rgba(0,0,0,0.1)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                                <iframe 
                                    src="https://maps.google.com/maps?q=Roongta%20Futurex,%20Govind%20Nagar,%20Nashik&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                    width="100%" 
                                    height="280" 
                                    style={{ border: 0, display: "block" }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>

                        {/* Form Column */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ 
                                background: "#000000", 
                                color: "#ffffff",
                                padding: isMobile ? "30px" : "50px", 
                                borderRadius: "32px", 
                                border: "1px solid rgba(0,0,0,0.1)",
                                position: "relative",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                            }}
                        >
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: "40px" }}>
                                    <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "8px", color: "#ffffff" }}>{d.form.title}</h3>
                                    <p style={{ color: "#aaa", fontSize: "0.95rem" }}>{d.form.subtitle}</p>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                    
                                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "20px" }}>
                                        <div>
                                            <label style={labelStyle}>Full Name *</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle("name")} placeholder="John Doe" />
                                            {errors.name && <div style={{ color: "#ff4466", fontSize: "0.75rem", marginTop: "4px", fontWeight: 600 }}>{errors.name}</div>}
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Phone Number *</label>
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle("phone")} placeholder="+91 00000 00000" />
                                            {errors.phone && <div style={{ color: "#ff4466", fontSize: "0.75rem", marginTop: "4px", fontWeight: 600 }}>{errors.phone}</div>}
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Email Address *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle("email")} placeholder="john@example.com" />
                                        {errors.email && <div style={{ color: "#ff4466", fontSize: "0.75rem", marginTop: "4px", fontWeight: 600 }}>{errors.email}</div>}
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "20px" }}>
                                        <div>
                                            <label style={labelStyle}>I am a</label>
                                            <select name="inquiry-type" value={formData["inquiry-type"]} onChange={handleChange} style={{...inputStyle("inquiry-type"), color: formData["inquiry-type"] ? "#fff" : "#888"}}>
                                                <option value="" disabled>Select...</option>
                                                {d.form.inquiryTypes.map(opt => <option key={opt.value} value={opt.value} style={{color: "#000"}}>{opt.label}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Society/Building Name</label>
                                            <input type="text" name="society-name" value={formData["society-name"]} onChange={handleChange} style={inputStyle("society-name")} placeholder="Urbangate Heights" />
                                        </div>
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "20px" }}>
                                        <div>
                                            <label style={labelStyle}>City</label>
                                            <input type="text" name="city" value={formData.city} onChange={handleChange} style={inputStyle("city")} placeholder="Your City" />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Number of Units</label>
                                            <select name="units" value={formData.units} onChange={handleChange} style={{...inputStyle("units"), color: formData.units ? "#fff" : "#888"}}>
                                                <option value="" disabled>Select units...</option>
                                                {d.form.unitOptions.map(opt => <option key={opt.value} value={opt.value} style={{color: "#000"}}>{opt.label}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>I'm interested in</label>
                                        <div style={{ 
                                            display: "grid", 
                                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
                                            gap: "12px",
                                            background: "rgba(255,255,255,0.02)",
                                            padding: "20px",
                                            borderRadius: "16px",
                                            border: "1px solid rgba(255,255,255,0.05)"
                                        }}>
                                            {d.form.interests.map((item) => (
                                                <label key={item.value} style={{ 
                                                    display: "flex", 
                                                    alignItems: "center", 
                                                    gap: "10px", 
                                                    cursor: "pointer",
                                                    fontSize: "0.9rem",
                                                    color: formData.interest.includes(item.value) ? "#ffffff" : "#aaa",
                                                    transition: "color 0.2s"
                                                }}>
                                                    <input
                                                        type="checkbox"
                                                        name="interest"
                                                        value={item.value}
                                                        checked={formData.interest.includes(item.value)}
                                                        onChange={handleCheckbox}
                                                        style={{ 
                                                            accentColor: "#ffffff",
                                                            width: "16px",
                                                            height: "16px"
                                                        }}
                                                    />
                                                    {item.label}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Message</label>
                                        <textarea name="message" rows={4} value={formData.message} onChange={handleChange} style={{ ...inputStyle("message"), resize: "none" }} placeholder="Tell us more about your society..." />
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Preferred Demo Time</label>
                                        <select name="demo-preference" value={formData["demo-preference"]} onChange={handleChange} style={{...inputStyle("demo-preference"), color: formData["demo-preference"] ? "#fff" : "#888"}}>
                                            <option value="" disabled>Select time...</option>
                                            {d.form.demoPreferences.map(opt => <option key={opt.value} value={opt.value} style={{color: "#000"}}>{opt.label}</option>)}
                                        </select>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={submitting}
                                        style={{ 
                                            background: "#ffffff", 
                                            color: "#000000", 
                                            padding: "20px", 
                                            borderRadius: "16px", 
                                            fontWeight: "800", 
                                            fontSize: "1rem",
                                            border: "none",
                                            cursor: "pointer",
                                            marginTop: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "12px",
                                            transition: "opacity 0.2s"
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.opacity = 0.8}
                                        onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
                                    >
                                        {submitting ? "SENDING..." : "SEND MESSAGE"}
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            <section style={{ padding: "100px 20px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? "3rem" : "5rem", marginBottom: "24px" }}>{d.cta.title}</h2>
                    <p style={{ color: "#888", marginBottom: "48px", fontSize: "1.1rem" }}>{d.cta.subtitle}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px" }}>
                        {d.cta.stats.map((s, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <div style={{ color: "#ffffff" }}><i className={`fas ${s.icon}`}></i></div>
                                <span style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "1px", textTransform: "uppercase" }}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}