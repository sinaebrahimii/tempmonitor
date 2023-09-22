import React from "react";
import { FaTemperatureHigh, FaClock } from "react-icons/fa";
const Card = () => {
  return (
    <div className="border border-gray-200 rounded-md shadow-gray-300 shadow-lg w-1/2 md:w-1/3 p-4">
      <h3 className="text-center text-madison-950 font-semibold text-xl lg:text-2xll">
        Zone1
      </h3>
      <div className="flex items-center text-madison-950 mt-5 mb-1">
        <FaTemperatureHigh className=" text-madison-800" />
        <p className=" mx-2 text-lg font-medium ">Temp :</p>
      </div>
      <div className="text-center text-madison-950 text-4xl font-medium ">
        26<span className="text-madison-800 text-5xl font-bold">&#176;</span>
      </div>
      <div className="flex items-center text-madison-950 mt-5 mb-1">
        <FaClock className=" text-madison-800" />
        <p className=" mx-2 text-lg font-medium ">Updated At :</p>
      </div>
      <div className="text-center text-madison-950 text-4xl font-medium mb-6 ">
        26<span className="text-madison-800 text-5xl font-bold">&#176;</span>
      </div>
      <div className="flex justify-center">
        <button className="border transition-all ease-out py-3 px-5 font-bold mx-2 rounded-md border-alizarin-crimson-600 text-alizarin-crimson-600 hover:bg-alizarin-crimson-100">
          OFF
        </button>
        <button className="border transition-all ease-out py-3 px-5 font-bold mx-2 rounded-md border-la-palma-600 text-la-palma-600 hover:bg-la-palma-100">
          ON
        </button>
      </div>
    </div>
  );
};

export default Card;
