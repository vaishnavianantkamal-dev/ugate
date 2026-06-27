import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, MapPin, Building2 } from 'lucide-react';

const stats = [
    {
        id: 1,
        icon: Users,
        number: "27K+",
        title: "communities",
        desc: "India's largest platform for small, large and mega communities."
    },
    {
        id: 2,
        icon: Home,
        number: "5M+",
        title: "homes",
        desc: "Use Urbangate daily for all updates and seamless community living."
    },
    {
        id: 3,
        icon: MapPin,
        number: "50+",
        title: "cities",
        desc: "From metros to tier-2 towns, Urbangate is wherever communities thrive."
    },
    {
        id: 4,
        icon: Building2,
        number: "100K+",
        title: "RWAs",
        desc: "Trust Urbangate for its reliable tech, stellar support & feature-rich platform."
    }
];

const VideoStatsSection = () => {
    return (
        <section style={{ padding: 'clamp(50px, 8vw, 100px) 20px', background: '#fafafa', textAlign: 'center' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span style={{ 
                        display: 'block', 
                        fontSize: '16px', 
                        fontWeight: 700, 
                        color: '#888', 
                        marginBottom: '10px' 
                    }}>
                        Numbers don't lie
                    </span>
                    <h2 style={{ 
                        fontSize: 'clamp(32px, 6vw, 42px)', 
                        fontWeight: 800, 
                        color: '#000', 
                        marginBottom: 'clamp(30px, 5vw, 60px)',
                        letterSpacing: '-1px',
                        lineHeight: 1.2
                    }}>
                        We're India's largest community platform
                    </h2>
                </motion.div>

                {/* Video Player */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{
                        maxWidth: '1000px',
                        margin: '0 auto clamp(30px, 5vw, 60px)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                        backgroundColor: '#000',
                        position: 'relative',
                        aspectRatio: '16/9' /* Restored to prevent cropping people */
                    }}
                >
                    <video 
                        src="/images/Website_Purpose_What_is_Urban.mp4" 
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transform: 'scale(1.08)' /* Hides the Gemini logo at the edges */
                        }}
                    />
                </motion.div>

                {/* Stats Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '16px',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{
                                background: '#000',
                                borderRadius: '16px',
                                padding: '16px 20px',
                                textAlign: 'left',
                                border: '1px solid #222',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px'
                            }}
                            whileHover={{ transform: 'translateY(-4px)' }}
                        >
                            <div style={{ 
                                width: '42px', 
                                height: '42px', 
                                borderRadius: '10px', 
                                background: '#1a1a1a', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                color: '#fff',
                                flexShrink: 0
                            }}>
                                <stat.icon size={20} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 style={{ 
                                    fontSize: '22px', 
                                    fontWeight: 800, 
                                    margin: '0 0 2px',
                                    color: '#fff',
                                    lineHeight: '1'
                                }}>
                                    {stat.number}
                                </h3>
                                <h4 style={{
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    margin: 0,
                                    color: '#aaa',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {stat.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default VideoStatsSection;
