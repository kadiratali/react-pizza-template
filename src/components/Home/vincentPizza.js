import React from "react";

export default function VincentPizza() {
  return (
    <div className="sm:h-6/7 h-3/6 relative overflow-hidden ">
      <img
        className="z-0 absolute w-full object-cover filter blur-xs"
        src="./images/pizza.jpg"
      />
      <div className="z-10 relative">
        <div className="absolute top-12 left-12 sm:top-24 sm:left-24 w-96">
          <div className="font-serif mb-1 text-3xl md:text-4xl text-gray-50 uppercase">
            Vincent Pizza
          </div>
          <span className=" font-serif  text-gray-50 uppercase">
            Making People Happy
          </span>
          <div className="h-2.5 border-solid border-b-2 text-gray-300 "></div>
          <div className="mt-10 mb-10  text-xs  md:text-sm bg-gray-400 bg-opacity-30 text-gray-50 uppercase  ">
            Italian Pizza With Cherry Tomatoes and Green Basil
          </div>
          <a
            href="#"
            className="mr-10 uppercase  border-2 p-1 md:border-2 md:p-2 text-gray-50 font-bold transition duration-200 hover:bg-yellow-400 hover:text-black"
          >
            Book Now
          </a>
          <a
            href="#"
            className=" uppercase border-yellow-400 border-2 p-1 md:border-2 md:p-2 text-black font-bold transition duration-200 bg-yellow-400"
          >
            View Menu
          </a>
        </div>
      </div>
    </div>
  );
}
