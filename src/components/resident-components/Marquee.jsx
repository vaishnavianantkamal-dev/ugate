import React from 'react';

const Marquee = () => {
    const items = [
        "DPIIT Recognized",
        "ISO 27001",
        "2,400+ Societies",
        "98.7% Uptime",
        "RERA Compliant",
        "Govt. of India Registered",
        "Ministry of Corporate Affairs",
        "Secure Platform"
    ];

    return (
        <div style={{
            background: "#ffffff",
            padding: "24px 0",
            margin: "20px 0",
            borderTop: "1px solid #eeeeee",
            borderBottom: "1px solid #eeeeee",
            overflow: "hidden",
            whiteSpace: "nowrap",
            position: "relative"
        }}>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-content {
                    display: inline-flex;
                    animation: marquee 30s linear infinite;
                }
                .marquee-content:hover {
                    animation-play-state: paused;
                }
                .marquee-item {
                    font-family: 'Space Mono', monospace;
                    font-size: 13px;
                    color: #000000;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    padding: 0 40px;
                    display: flex;
                    align-items: center;
                }
                .marquee-dot {
                    width: 5px;
                    height: 5px;
                    background: #000000;
                    border-radius: 50%;
                    margin-left: 40px;
                    opacity: 0.2;
                }
            `}</style>
            <div className="marquee-content">
                {[...items, ...items].map((item, index) => (
                    <div key={index} className="marquee-item">
                        {item}
                        <div className="marquee-dot" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
