import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    HiOutlineOfficeBuilding,
    HiOutlineUserGroup,
    HiOutlineDocumentText,
    HiOutlineSpeakerphone,
} from "react-icons/hi";

const SocietyPlatform = () => {
    const features = [
        {
            icon: HiOutlineOfficeBuilding,
            title: "Society Management",
            description: "Manage society members, flats & amenities",
        },
        {
            icon: HiOutlineUserGroup,
            title: "Visitor Management",
            description: "Gate pass system for visitors & deliveries",
        },
        {
            icon: HiOutlineDocumentText,
            title: "Maintenance Billing",
            description: "Generate & track maintenance invoices",
        },
        {
            icon: HiOutlineSpeakerphone,
            title: "Notices & Communication",
            description: "Broadcast notices, polls & emergency alerts",
        },
    ];

    return (
        <div className="society-platform">
            <div className="platform-container">
                {/* Header */}
                <div className="platform-header">
                    <h1 className="platform-title">
                        Everything Your Society Needs in One Platform
                    </h1>
                </div>

                {/* Feature Cards */}
                <div className="features-grid">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Link 
                                to="/features" 
                                key={index} 
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <motion.div
                                    className="feature-card"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: index * 0.15,
                                        ease: [0.22, 1, 0.36, 1] 
                                    }}
                                    whileHover={{ 
                                        y: -10,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {/* Icon Container */}
                                    <div className="icon-container">
                                        <Icon className="feature-icon" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="feature-title">{feature.title}</h3>

                                    {/* Description */}
                                    <p className="feature-description">{feature.description}</p>
                                    
                                    {/* Subtle Action Indicator */}
                                    <motion.div 
                                        className="card-action"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileHover={{ x: 0, opacity: 1 }}
                                    >
                                        <span>Learn More</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </motion.div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SocietyPlatform;
