// Resident.jsx — Main page composer
import ResidentHero from "../components/resident-components/ResidentHero";
import ResidentFeature from "../components/resident-components/ResidentFeature";
import WhyUGate from "../components/common/WhyUGate";
import Download from "../components/resident-components/Download";
import Experience from "../components/resident-components/Experience";
import Marquee from "../components/resident-components/Marquee";
import { featuresPageData } from "../data/featureData";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, ShieldCheck, Search, Smartphone, Users } from "lucide-react";
import PageWrapper from "../components/common/PageWrapper";

const Resident = ({ data = {} }) => {
    const {
        hero = {},
        features = {},
        download = {},
        experience = {},
    } = data;

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <PageWrapper
            className="resident-page"
            style={{
                fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                background: "#000000",
                color: "#ffffff",
                marginTop: "70px",
                minHeight: "100vh",
            }}
        >
            {/* Scroll Progress Bar */}
            <motion.div
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "#ffffff",
                    transformOrigin: "0%",
                    zIndex: 9999
                }}
            />

            {/* Hero Section */}
            <ResidentHero data={hero} />

            {/* Marquee Trust Bar */}
            <Marquee />

            {/* Features Section */}
            <motion.div
                id="features"
                initial={{ opacity: 0, y: 50 }}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={revealVariants}
            >
                <ResidentFeature data={features} />
            </motion.div>

            {/* Download Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={revealVariants}
            >
                <Download data={download} />
            </motion.div>

            {/* Experience Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={revealVariants}
            >
                <Experience data={experience} />
            </motion.div>

            {/* Why UGate Section */}
            <WhyUGate />
        </PageWrapper>
    );
};

export default Resident;
