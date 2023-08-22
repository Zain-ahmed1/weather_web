import axios from 'axios'
import React, { useEffect, useState } from 'react'

const News = () => {
  const [apiData, setApiData] = useState([]);
  const [NewsCards, setNewsCards] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://newsapi.org/v2/everything',
    params: {
      q: 'apple',
      from: '2023-08-20',
      pageSize: '10',
      sortBy: 'popularity',
      apiKey: '5aaf58396c554b589c80b56a4d3a3a11'
    }
  };
  useEffect(()=>{
    axios.request(options).then(function (response) {
      setApiData(response.data.articles);
   
    }).catch(function (error) {
      console.error(error);
    })}
    ,[])
    useEffect(() => {
      if (apiData.length > 0) {
        const NewsCard = apiData.map(news => (
          <div className="p-4 md:w-1/3" key={news.title}>
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={news.urlToImage}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {news.title}
                </h1>
                <p className="leading-relaxed mb-3">
                  {news.description}
                </p>
                <div className="flex items-center flex-wrap">
                  <a href={news.url} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    {/* SVG icon code */}
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    {/* SVG icon code */}
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    {/* SVG icon code */}
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        ));
    
        setNewsCards(NewsCard);
      }
    }, [apiData]);
    
   
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {NewsCards}
      </div>
    </div>
  </section>
  
  )
}

export default News
