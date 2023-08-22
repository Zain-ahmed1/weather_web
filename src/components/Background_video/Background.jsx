import React from "react";
import { Icon } from '@iconify/react';

const Background = () => {


    const weatherMP4 = ["Cloudy", "Cloudy2", "Rainny", "Snowy", "Sunny"];

    return (
        <>

            <video
                autoPlay
                muted
                loop
                className="absolute overflow-hidden w-full h-full left-0 top-0 object-cover z-0"
            >
                <source
                    media=""
                    src={`./src/assets/${weatherMP4[4]}.mp4`}
                    type="video/mp4"
                />
            </video>
        </>
    );
};

export default Background;
