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

    const showImage = windowWidth <= 1000;
    const logoImage =  document.getElementsByClassName("logo")[0];

    const calculateMarginLeft = () => {
        // Calculate margin based on window width or any other logic you want
        return windowWidth <= 1000 ? '1%' : '10%';
    };

    return (
        <>
            <img src={logo} className="logo" alt="CFL Logo" style={{ marginLeft: calculateMarginLeft() }} />

            <br/>
            {showImage &&
                <div className="main-container">
                    <a href="https://tkotix.com">BUY YOUR TICKETS NOW -- CLICK HERE</a>
                    <br/>
                    <img className="main_image" src="/CFL_AD.png" alt="CFL Advertisement"/></div>
            }

            <div className="center_media_container">
                <Ticket/>
            </div>
            <a className="signup"
               href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSc80vg5aTbhFolYtFCpKQ6sm-Y06Yt7vvxct3NSCVjvsPZXug/viewform?usp=send_form">Sign
                up now to be a fighter... Click here!</a>


</>
)
    ;
}

export default App;
