import React from "react";
import extra from "./extra.json";

export default function Extra() {
  return (
    <div class=" w-96 sm:w-full flex-wrap flex flex-col sm:flex-row sm:justify-around p-10 justify-between">
      {extra.map((data) => {
        return (
          <div className="flex flex-wrap mb-5" key={data._id}>
            <div className=" flex flex-col  overflow-hidden bg-green-900  sm:w-auto sm:mr-5 mb-5 sm:mb-0 rounded-2xl shadow-2xl">
              <div className="rounded-2xl m-5">
                <div className=" ">
                  <img src={data.images} className="max-w-full w-96" />
                </div>
                <div className="mt-2">
                  <h1 className="text-left leading-4 font-bold text-white">
                    {data.name}
                  </h1>
                </div>
              </div>
              <div className="pt-4 w-full flex justify-end mb-2 pr-2">
                <button className="bg-red-700 text-white px-10 rounded py-2 duration-200 hover:bg-red-600">
                  219TL
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
