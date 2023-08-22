import React, { useState ,useEffect} from "react";
import axios from "axios";

const Index = () => {
  const [search,setSearch]= useState("");

  const handleSearchInput = (e)=>{
    setSearch(e.target.value)
  }

  const weatherMP4 = ["Cloudy", "Rainny", "Snowy", "Sunny"];
  const [Weather,setWeather] = useState({})
  const searchType = async (req,res)=>{
    const weatherData = new FormData()
   const options = {
    method: "GET",
    url: "http://api.weatherapi.com/v1/current.json",
    params: {
      key: "4fe2b0d6aaaa4c0d8ee65506232008",
      q: search,
      aqi: "yes",
    },
   };
   try{

    const weather = await axios.request(options)
    if(!weather){
      return res.status(402).send({message:"Error"});
    }
    // Here i am making a new object which is later set in weather useState above and also string contry,city,etc are keys for that object
    weatherData.append("country",weather.data.location.country)
    weatherData.append("city",weather.data.location.region)
    weatherData.append("tempC",weather.data.current.temp_c)
    weatherData.append("weatherCondition",weather.data.current.condition.text)
    weatherData.append("weatherIcon",weather.data.current.condition.icon)
    weatherData.append("windSpeed",weather.data.wind_kph)
    weatherData.append("humidity",weather.data.humidity)
    setWeather(weatherData);

    console.log(Weather)
  }catch(err){
    console.log(err)
  }
  }
  useEffect(() => {
    if (Object.keys(Weather).length > 0) {
      console.log(Weather);
    }
  }, [Weather]);
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute overflow-hidden w-full h-full left-0 top-0 object-cover z-0"
      >
        <source
          media=""
          src={`./src/assets/${weatherMP4[2]}.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="z-10 absolute inset-0 flex flex-col sm:flex-row sm:items-end">
        <div className="basis-full sm:basis-3/4"></div>
        <div className="py-5  basis-full sm:basis-1/4 h-full backdrop-blur-sm bg-opacity-40 bg-slate-800 flex flex-col items-center text-gray-200  ">
          <div>
            <input
              placeholder="Search Location"
              type="text"
              className="bg-transparent outline-none border-b border-gray-200 h-8 w-[270px]"
              onChange={(e)=>handleSearchInput(e)}
              value={search}
            />
            <button onClick={searchType}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
