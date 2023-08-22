import React, { useState } from 'react'

function Weather_data({ weatherData }) {

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const [isCelsius, setIsCelsius] = useState(true); // Initial temperature unit

    const handleUnitToggle = () => {
        setIsCelsius(!isCelsius);
    };

    const temperature = isCelsius
        ? `${weatherData.current.temp_c}`
        : `${weatherData.current.temp_f}`;


    return (
        <>
            {/* Display the fetched weather data */}
            <div className="absolute bottom-52 mx-12">
                {/* Temperature */}
                <div className='relative flex px-3 py-4 rounded-lg items-start justify-start z-10 text-white text-3xl backdrop-blur-sm bg-slate-600/50'>
                    <div className='relative z-10 text-white'>
                        <h1 className="text-7xl flex items-start">{temperature} <span className="text-3xl pl-2">{isCelsius ? '°C' : '°F'}</span></h1>
                    </div>
                    <div className="flex flex-col text-[1.5rem] ml-6">
                        {/* Toggle between Celsius and Fahrenheit */}
                        <button onClick={handleUnitToggle} className='cursor-pointer'>
                            {isCelsius ? '°F' : '°C'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather_data;
