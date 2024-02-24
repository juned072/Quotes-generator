import axios from "axios";
import React, { useEffect, useState } from "react";
import loading from "./assets/loading.gif";

const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = () => {
    setIsLoading(true);
    axios.get("https://dummyjson.com/quotes/random").then((res) => {
      setRandomQuote(res.data);
      setIsLoading(false);
    });
  };

  const generateRandomQuote = () => {
    fetchQuote();
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url('https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: "cover",
      }}
    >
      <div className="p-10 text-center md:w-[500px] w-80 bg-gray-800 rounded-md">
        {isLoading ? (
          <div className="flex justify-center">
            <img className="w-10" src={loading} alt="Loading..." />
          </div>
        ) : (
          randomQuote && (
            <>
              <h1 className="md:text-xl font-semibold text-lg mb-4 text-white">
                {randomQuote.quote}
              </h1>
              <p className="text-right mt-5 text-white">
                - {randomQuote.author}
              </p>
            </>
          )
        )}
        <div>
          <button
            className="mt-8 md:p-3 md:px-5 p-1 px-5 text-white bg-rose-600 rounded-md hover:bg-rose-700"
            onClick={generateRandomQuote}
          >
            Generate Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
