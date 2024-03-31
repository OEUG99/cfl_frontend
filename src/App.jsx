import React, { useState, useEffect } from 'react';
import logo from '/logo.png'; // Assuming logo.png is in the same directory as this component
import './App.css';
import Ticket from "./Ticket.jsx";
import SocialBar from "./SocialBar.jsx";

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showImage = windowWidth <= 800;

    return (
        <>
            <img src={logo} className="logo" alt="Vite logo" />
            <br />
            {showImage && <img className="main_image" src="/CFL_AD.png" alt="CFL Advertisement" />}

            <div className="center_media_container">
                <Ticket />
            </div>
            <SocialBar/>
        </>
    );
}

export default App;
