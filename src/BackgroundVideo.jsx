import React from "react";

const BackgroundVideo = () => {
    return (
        <video className="fixed top-0 left-0 object-cover z-[-1] h-full w-full overflow-hidden" autoPlay muted loop>
            <source src="/video.webm" />
            Your browser does not support the video tag.
        </video>

    );
};

export default BackgroundVideo;
