import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './FeaturesGrid.css';

const features = [
    {
        id: '01',
        title: 'Fullstack RWA toolkit',
        description: 'A comprehensive society ERP that brings together all aspects of community management: accounting, audit, vendors, security, communication & more.',
        image: '/images/image.png',
        variant: 'black'
    },
    {
        id: '02',
        title: 'All-in-one resident app',
        description: 'A robust app for residents to pay their dues, track deliveries, book facilities, approve visitors, and raise complaints without chasing anyone.',
        image: '/images/image copy.png',
        variant: 'black'
    }
];

const FeaturesGrid = () => {
    return (
        <section className="features-grid-v2">
            <div className="container">
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">ALL-IN-ONE SOLUTION</span>
                    <h2 className="section-title">
                        Everything Your Society <br />
                        Needs in <span>One Platform</span>
                    </h2>
                    <p className="section-description">
                        From visitor entry to maintenance billing, manage every aspect <br />
                        of your society with simplicity and efficiency.
                    </p>
                </motion.div>

                <div className="features-container">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={feature.id}
                            className={`feature-card-v2 ${feature.variant}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="card-image-wrapper">
                                <img src={feature.image} alt={feature.title} className="card-image" />
                                {feature.badge && (
                                    <div className="card-badge">
                                        <span className="sparkle">✦</span> {feature.badge}
                                    </div>
                                )}
                            </div>
                            
                            <div className="card-content-wrapper">
                                <div className="card-content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>

                                <button className="card-btn-wide">
                                    Learn more <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
