import React from 'react';

const Landing = () => {
    return (
        <div className="landing-container flex flex-col items-center justify-center  bg-opacity-60 h-screen w-screen">
            <div className="logo mx-auto my-40">
                <img src="/CFL-logo.png" alt="Creator Fight League" className=""/>
                <p className="text-center font-italized text-white text-4xl">Nashville, TN -- July 12, 2024!</p>
            </div>
            <div className="scroll_icon">
                <img src="/scroll.png" alt="Creator Fight League" className="invert animate-bounce"/>
            </div>

        </div>
    );
};

export default Landing;