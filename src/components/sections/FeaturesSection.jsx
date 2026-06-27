import { motion } from "framer-motion";

const sectionData = {
    heading: "Smart, Simple & Secure",
    subheading: "All-in-One Society Management Platform",
};

const features = [
    {
        id: "visitor-management",
        title: "Visitor Management",
        description:
            "Security approves visits to grant entry & advanced requisitely.",
        image: "/visitor-management.png",
        alt: "Visitor Management App Screenshot",
    },
    {
        id: "maintenance-billing",
        title: "Maintenance Billing",
        description:
            "Real wire supporting configurations partners easily.",
        image: "/maintenance-billing.png",
        alt: "Maintenance Billing App Screenshot",
    },
    {
        id: "complaint-tracking",
        title: "Complaint Tracking",
        description:
            "Payment, gateway integration & general reports.",
        image: "/compalint-tracking.png",
        alt: "Complaint Tracking App Screenshot",
    },
    {
        id: "accounting-reports",
        title: "Accounting & Reports",
        description:
            "Empower costs toward budget account & business.",
        alt: "Accounting & Reports App Screenshot",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

const FeatureCard = ({ feature, index }) => {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{
                y: -6,
                transition: { duration: 0.28, ease: "easeOut" },
            }}
            style={{
                flex: "1 1 200px",
                minWidth: 0,
                background: "#f7f7f7",
                borderRadius: "16px",
                border: "1px solid #e8e8e8",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                cursor: "default",
            }}
        >
            {/* Image area */}
            <div
                style={{
                    background: "#efefef",
                    borderRadius: "12px 12px 0 0",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    position: "relative",
                }}
            >
                <motion.img
                    src={feature.image}
                    alt={feature.alt}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </div>

            {/* Text area */}
            <div style={{ padding: "20px 22px 24px" }}>
                <h4
                    style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#111111",
                        marginBottom: "8px",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.25,
                    }}
                >
                    {feature.title}
                </h4>
                <p
                    style={{
                        fontSize: "0.875rem",
                        color: "#666666",
                        lineHeight: 1.6,
                        margin: 0,
                    }}
                >
                    {feature.description}
                </p>
            </div>
        </motion.div>
    );
};

const FeaturesSection = () => {
    return (
        <section
            style={{
                background: "#ffffff",
                padding: "72px 0 80px",
                overflow: "hidden",
            }}
        >
            <div className="container">
                {/* Heading */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    style={{ textAlign: "center", marginBottom: "48px" }}
                >
                    <motion.h2
                        variants={headingVariants}
                        style={{
                            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                            fontWeight: 800,
                            color: "#111111",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.15,
                            marginBottom: "0.25rem",
                        }}
                    >
                        {sectionData.heading}
                    </motion.h2>
                    <motion.h3
                        variants={headingVariants}
                        style={{
                            fontSize: "clamp(1.3rem, 2.8vw, 2rem)",
                            fontWeight: 500,
                            color: "#111111",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                            margin: 0,
                        }}
                    >
                        {sectionData.subheading}
                    </motion.h3>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    style={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap",
                    }}
                >
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.id} feature={feature} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;