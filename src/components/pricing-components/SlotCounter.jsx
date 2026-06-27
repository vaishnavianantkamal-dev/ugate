import React, { useState, useEffect } from 'react';

const SlotCounter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(85000);

    useEffect(() => {
        let startTime = null;
        const startValue = 85000;
        const endValue = target;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // easeOutExpo curve
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            const currentValue = Math.floor(startValue - (startValue - endValue) * easeProgress);
            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [target, duration]);

    return (
        <span style={{ fontFamily: "'Space Mono', monospace" }}>
            ₹{count.toLocaleString()}
        </span>
    );
};

export default SlotCounter;
