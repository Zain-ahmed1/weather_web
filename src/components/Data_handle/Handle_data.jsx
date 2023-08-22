import React, { useState } from "react";
import axios from "axios";
import Search_input from "../Search_input/Search_input";
import Background from "../Background_video/Background";
import Weather_data from "../Weather_data/Weather_data";

function Handle_data() {
    const [weatherData, setWeatherData] = useState(null);

    const handleSearch = (searchQuery) => {
        const options = {
            method: "GET",
            url: "http://api.weatherapi.com/v1/current.json",
            params: {
                key: "4fe2b0d6aaaa4c0d8ee65506232008",
                q: searchQuery,
                aqi: "yes",
            },
        };

        axios
            .request(options)
            .then(function (response) {
                setWeatherData(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    return (

        <div className="relative w-screen h-screen overflow-hidden">
            <Background />
            <Search_input onSearch={handleSearch} />
            <Weather_data weatherData={weatherData} />
           
        </div>
    );
}

export default Handle_data;
