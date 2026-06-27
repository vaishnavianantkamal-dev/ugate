// import { motion } from "framer-motion";
// import {
//     Home, CreditCard, Camera, AlertTriangle,
//     MessageSquare, CalendarDays, BarChart2, Smartphone
// } from "lucide-react";

// const sectionData = {
//     heading: "Features",
//     subheading: "Everything you need to manage your society efficiently.",
// };

// const features = [
//     {
//         id: "resident-management",
//         icon: Home,
//         title: "Resident Management",
//         description: "Manage members, flats & vehicles",
//     },
//     {
//         id: "billing-accounting",
//         icon: CreditCard,
//         title: "Billing & Accounting",
//         description: "Automate maintenance biling & accounting",
//     },
//     {
//         id: "visitor-management",
//         icon: Camera,
//         title: "Visitor Management",
//         description: "Track visitors & improve security",
//     },
//     {
//         id: "complaint-system",
//         icon: AlertTriangle,
//         title: "Complaint System",
//         description: "Log & resolve resident complaints",
//     },
//     {
//         id: "communication",
//         icon: MessageSquare,
//         title: "Communication",
//         description: "Send notices, updates & chat",
//     },
//     {
//         id: "facility-booking",
//         icon: CalendarDays,
//         title: "Facility Booking",
//         description: "Manage amenities & bookings",
//     },
//     {
//         id: "reports",
//         icon: BarChart2,
//         title: "Reports",
//         description: "Generate detailed reports & analytics",
//     },
//     {
//         id: "mobile-app",
//         icon: Smartphone,
//         title: "Mobile App",
//         description: "Access all features on your smartphone",
//     },
// ];

// const containerVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
// };

// const cardVariants = {
//     hidden: { opacity: 0, y: 24 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
// };

// const FeatureCard = ({ feature }) => {
//     const Icon = feature.icon;
//     return (
//         <motion.div
//             variants={cardVariants}
//             whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.09)" }}
//             style={{
//                 background: "#fff",
//                 borderRadius: "14px",
//                 border: "1px solid #ebebeb",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//                 padding: "20px 22px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "18px",
//                 cursor: "default",
//                 transition: "box-shadow 0.2s ease, transform 0.2s ease",
//             }}
//         >
//             {/* Icon box */}
//             <div
//                 style={{
//                     width: "54px",
//                     height: "54px",
//                     borderRadius: "12px",
//                     background: "#f0f0f0",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     flexShrink: 0,
//                 }}
//             >
//                 <Icon size={26} color="#111" strokeWidth={1.8} />
//             </div>

//             {/* Text */}
//             <div>
//                 <h4
//                     style={{
//                         fontSize: "1rem",
//                         fontWeight: 700,
//                         color: "#111",
//                         margin: "0 0 5px 0",
//                         letterSpacing: "-0.01em",
//                         lineHeight: 1.25,
//                     }}
//                 >
//                     {feature.title}
//                 </h4>
//                 <p
//                     style={{
//                         fontSize: "0.85rem",
//                         color: "#666",
//                         margin: 0,
//                         lineHeight: 1.5,
//                     }}
//                 >
//                     {feature.description}
//                 </p>
//             </div>
//         </motion.div>
//     );
// };

// const KeyFeature = () => {
//     return (
//         <section
//             style={{
//                 background: "#f7f7f7",
//                 padding: "72px 0 80px",
//                 overflow: "hidden",
//             }}
//         >
//             <div className="container">
//                 {/* Heading */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                     style={{ textAlign: "center", marginBottom: "48px" }}
//                 >
//                     <h2
//                         style={{
//                             fontSize: "clamp(2rem, 4vw, 2.8rem)",
//                             fontWeight: 800,
//                             color: "#111",
//                             letterSpacing: "-0.03em",
//                             lineHeight: 1.15,
//                             marginBottom: "10px",
//                         }}
//                     >
//                         {sectionData.heading}
//                     </h2>
//                     <p
//                         style={{
//                             fontSize: "1rem",
//                             fontWeight: 400,
//                             color: "#666",
//                             margin: 0,
//                         }}
//                     >
//                         {sectionData.subheading}
//                     </p>
//                 </motion.div>

//                 {/* 2-column Cards Grid */}
//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.1 }}
//                     style={{
//                         display: "grid",
//                         gridTemplateColumns: "repeat(2, 1fr)",
//                         gap: "16px",
//                     }}
//                 >
//                     {features.map((feature) => (
//                         <FeatureCard key={feature.id} feature={feature} />
//                     ))}
//                 </motion.div>

//                 {/* Responsive */}
//                 <style>{`
//                     @media (max-width: 640px) {
//                         .features-grid {
//                             grid-template-columns: 1fr !important;
//                         }
//                     }
//                 `}</style>
//             </div>
//         </section>
//     );
// };

// export default KeyFeature;


import { motion } from "framer-motion";
import {
    Home, CreditCard, Camera, AlertTriangle,
    MessageSquare, CalendarDays, BarChart2, Smartphone, Users
} from "lucide-react";

// ── Section Data ─────────────────────────────────────────
const sectionData = {
    heading: "Features",
    subheading: "Everything you need to manage your society efficiently.",
};

// ── Features with Images ─────────────────────────────────────
const features = [
    {
        id: "resident-management",
        icon: Home,
        title: "Resident Management",
        subtitle: "COMPLETE DIRECTORY",
        description: "Seamlessly manage members, flat owners, and vehicle records in one centralized database."
    },
    {
        id: "billing-accounting",
        icon: CreditCard,
        title: "Billing & Accounting",
        subtitle: "AUTOMATED FINANCES",
        description: "Automate maintenance billing, track late payments, and generate detailed financial reports."
    },
    {
        id: "visitor-management",
        icon: Camera,
        title: "Visitor Management",
        subtitle: "GATE SECURITY",
        description: "Verify visitors, track guest logs, and improve gate security with real-time check-ins."
    },
    {
        id: "complaint-system",
        icon: AlertTriangle,
        title: "Complaint System",
        subtitle: "TICKET MANAGEMENT",
        description: "Log and resolve resident complaints with automated status updates and tracking."
    },
    {
        id: "communication",
        icon: MessageSquare,
        title: "Communication Hub",
        subtitle: "INSTANT ALERTS",
        description: "Send official notices, announcements, and emergency alerts instantly to all residents."
    },
    {
        id: "facility-booking",
        icon: CalendarDays,
        title: "Facility Booking",
        subtitle: "AMENITY SCHEDULING",
        description: "Allow residents to book clubhouses, gyms, and sports courts with an easy calendar view."
    },
    {
        id: "vendor-management",
        icon: Users,
        title: "Vendor Management",
        subtitle: "SERVICE ECOSYSTEM",
        description: "Maintain a verified database of vendors for maintenance, repair, and essential services."
    },
    {
        id: "staff-tracking",
        icon: Smartphone,
        title: "Staff Tracking",
        subtitle: "SECURITY FORCE",
        description: "Monitor security staff attendance, patrol routes, and real-time gate activity."
    }
];

// ── Animation ────────────────────────────────────────────
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
};

// ── Feature Card ─────────────────────────────────────────
const FeatureCard = ({ feature }) => {
    const Icon = feature.icon;
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, borderColor: "#000000" }}
            style={{
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid #eeeeee",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
            }}
        >
            {/* Icon Section */}
            <div style={{
                width: "56px",
                height: "56px",
                background: "#000000",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Icon size={24} color="#ffffff" strokeWidth={1.5} />
            </div>

            {/* Content Section */}
            <div>
                <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "#999",
                    letterSpacing: "1.5px",
                    display: "block",
                    marginBottom: "12px"
                }}>
                    {feature.subtitle}
                </span>

                <h4
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#000000",
                        margin: "0 0 12px 0",
                        lineHeight: 1.2
                    }}
                >
                    {feature.title}
                </h4>

                <p
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.95rem",
                        color: "#666",
                        margin: 0,
                        lineHeight: 1.6,
                    }}
                >
                    {feature.description}
                </p>
            </div>
        </motion.div>
    );
};

// ── Main Component ───────────────────────────────────────
const KeyFeature = () => {
    return (
        <section
            style={{
                background: "#f7f7f7",
                padding: "80px 16px",
            }}
        >
            <div className="container">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        textAlign: "center",
                        marginBottom: "64px",
                        paddingTop: "20px"
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "clamp(3rem, 5vw, 4rem)",
                            fontWeight: 400,
                            color: "#000000",
                            marginBottom: "12px",
                            letterSpacing: "1px",
                            lineHeight: 1.2
                        }}
                    >
                        PLATFORM <span style={{ color: "#ffffff", WebkitTextStroke: "1px #000000" }}>FEATURES</span>
                    </h2>

                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "1.1rem",
                            color: "#666",
                            maxWidth: "600px",
                            margin: "0 auto",
                        }}
                    >
                        {sectionData.subheading}
                    </p>
                </motion.div>

                {/* 3-Column Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "24px",
                    }}
                >
                    {features.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default KeyFeature;