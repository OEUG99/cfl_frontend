import React, { useState, useEffect } from 'react';

function BlurryScrollContainer({ children }) {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const blurIntensity = Math.min(scrollPosition / 2, 2);

    return (
        <div style={{ backdropFilter: `blur(${blurIntensity}px)` }}>
            {children}
        </div>
    );
}

export default BlurryScrollContainer;
