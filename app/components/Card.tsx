import React from "react";
import { FaTemperatureHigh, FaClock } from "react-icons/fa";
type Props = {
  id: string;
  name: string;
  updatedAt?: string;
  isOn: string;
  temp: number;
};
const Card = (props: Props) => {
  if (props.id === "6509fd0adc93d4d08095f59d") {
    return (
      <div className="order-first border my-4 border-madison-700 bg-madison-100 text-madison-950 rounded-md shadow-gray-300 shadow-lg w-1/2 md:w-1/3 p-4">
        <h3 className="text-center font-semibold text-2xl lg:text-3xl ">
          General
        </h3>
        <div className="flex items-center text-madison-950 mt-5 mb-1">
          <FaTemperatureHigh className=" text-madison-600" />
          <p className=" mx-2 text-lg font-medium ">Ambient Temp :</p>
        </div>
        <div className="text-center text-madison-950 text-2xl lg:text-3xl font-medium ">
          {props.temp}
          <span className="text-madison-600 text-4xl font-bold">&#176;</span>
        </div>

        <div className="flex items-center text-madison-950 mt-5 mb-2">
          <FaClock className=" text-madison-600" />
          <p className=" mx-2 text-lg font-medium ">Updated At :</p>
        </div>
        <div className="text-center text-madison-950 text-xl lg:text-3xl font-medium mb-6 ">
          {props.updatedAt}
        </div>
      </div>
    );
  }
  return (
    <div className="border my-4 border-gray-200 rounded-md shadow-gray-300 shadow-lg w-1/2 md:w-1/3 p-4">
      <h3 className="text-center text-madison-950 font-semibold text-2xl lg:text-3xl">
        {props.name}
      </h3>
      <div className="flex items-center text-madison-950 mt-5 mb-1">
        <FaTemperatureHigh className=" text-madison-600" />
        <p className=" mx-2 text-lg font-medium ">Temp :</p>
      </div>
      <div className="text-center text-madison-950 text-2xl lg:text-3xl font-medium ">
        {props.temp}
        <span className="text-madison-600 text-4xl font-bold">&#176;</span>
      </div>
      <div className="flex items-center text-madison-950 mt-5 mb-2">
        <FaClock className=" text-madison-600" />
        <p className=" mx-2 text-lg font-medium ">Updated At :</p>
      </div>
      <div className="text-center text-madison-950 text-xl lg:text-3xl font-medium mb-6 ">
        {props.updatedAt}
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
