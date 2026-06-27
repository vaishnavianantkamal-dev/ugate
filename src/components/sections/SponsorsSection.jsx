import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sponsors = [
    { id: 1, content: <span style={{ fontWeight: 800, fontSize: '22px', letterSpacing: '-0.5px', lineHeight: 1 }}><span style={{fontSize: '12px', display:'block'}}>Award</span>IT<span style={{fontWeight:300}}>TECH</span> <span style={{fontSize:'12px', display:'block', fontWeight:400}}>of the Year</span></span> },
    { id: 2, content: <div style={{ textAlign: 'center', borderTop: '1px solid #000', borderBottom: '1px solid #000', padding: '4px 0', lineHeight: 1.1 }}><span style={{ fontSize: '10px', letterSpacing: '2px', display: 'block', marginBottom: '2px' }}>TIMES</span><span style={{ fontWeight: 800, fontSize: '20px' }}>BUSINESS</span><br/><span style={{ fontSize: '14px', letterSpacing: '1px' }}>AWARDS</span></div> },
    { id: 3, content: <div style={{ background: '#000', color: '#fff', padding: '8px 12px', fontWeight: 800, fontSize: '24px', lineHeight: 1 }}>42<br/><span style={{fontSize:'14px', fontWeight:400}}>next</span><br/><span style={{fontSize:'8px', fontWeight:400}}>by Inc42</span></div> },
    { id: 4, content: <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ fontWeight: 900, fontSize: '28px', letterSpacing: '-2px' }}>CNBC</span> <div style={{ fontSize:'12px', fontWeight:600, borderLeft:'1.5px solid #ccc', paddingLeft:'12px', lineHeight: 1.3 }}>Best Property<br/>Tech Company</div></div> },
    { id: 5, content: <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '24px', height: '24px', border: '2px solid #000', borderRadius: '50%', borderTopColor: 'transparent', transform: 'rotate(45deg)' }}></div><div><span style={{fontSize:'10px', fontWeight:600}}>Entrepreneur</span><br/><span style={{ fontWeight: 800, fontSize: '20px' }}>STARTUP</span> <span style={{fontSize:'12px', fontWeight:800}}>AWARDS 2024</span></div></div> },
    { id: 6, content: <div style={{ textAlign: 'center', lineHeight: 1.1 }}><span style={{ fontSize: '12px', fontWeight: 800 }}>Realty+</span><br/><span style={{ fontWeight: 900, fontSize: '24px', letterSpacing: '1px' }}>PROPTECH</span><br/><span style={{ fontSize: '10px', fontWeight: 600 }}>ERP Solution of the Year</span></div> }
];

const SponsorsSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section style={{ padding: isMobile ? '30px 0' : '50px 0', background: '#fafafa', overflow: 'hidden', borderBottom: '1px solid #eaeaea' }}>
            <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: isMobile ? 25 : 40, repeat: Infinity, ease: "linear" }}
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: isMobile ? '50px' : '100px', 
                        paddingLeft: isMobile ? '50px' : '100px',
                        transform: isMobile ? 'scale(0.85)' : 'none',
                        transformOrigin: 'left center'
                    }}
                >
                    {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, i) => (
                        <div key={`${sponsor.id}-${i}`} style={{ 
                            opacity: 0.6, 
                            filter: 'grayscale(100%)', 
                            display: 'flex', 
                            alignItems: 'center',
                            color: '#000',
                            transition: 'opacity 0.3s ease',
                            cursor: 'default'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
                        >
                            {sponsor.content}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SponsorsSection;
