// ResidentHero.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../sections/HeroSection.css"; // Reuse the responsive split layout

const ResidentHero = ({ data = {} }) => {
    const {
        title = "",
        subtitle = "",
        description = "",
        buttons = [],
    } = data;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="hero-v2" style={{ background: "#000", height: "auto", minHeight: "100vh" }}>
            <div className="container" style={{ paddingBottom: "60px" }}>
                <motion.div 
                    className="hero-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {subtitle && (
                        <motion.span className="hero-label" variants={itemVariants} style={{ color: "#fff" }}>
                            {subtitle}
                        </motion.span>
                    )}
                    
                    <motion.h1 className="hero-title" variants={itemVariants} style={{ color: "#fff" }}>
                        {title}
                    </motion.h1>
                    
                    <motion.p className="hero-description" variants={itemVariants} style={{ color: "#aaa" }}>
                        {description}
                    </motion.p>
                    
                    <motion.div className="hero-actions" variants={itemVariants}>
                        {buttons.map((btn, i) => (
                            <Link 
                                key={i}
                                to={btn.href} 
                                className={btn.variant === "filled" ? "btn-black" : "btn-outline"}
                                style={
                                    btn.variant === "filled" 
                                    ? { background: "#fff", color: "#000" } 
                                    : { color: "#fff", borderColor: "#fff", outlineColor: "#fff" }
                                }
                            >
                                {btn.label} {i === 0 && <ArrowRight size={18} />}
                            </Link>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="hero-right">
                    <div className="hero-visual-wrapper">
                        <div className="hero-video-inner">
                            <img 
                                src="/hero1.png" 
                                alt="Resident App"
                                style={{ 
                                    width: "100%", 
                                    height: "100%", 
                                    objectFit: "cover" 
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResidentHero;