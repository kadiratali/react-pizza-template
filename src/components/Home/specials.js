import React from "react";
import specialData from "./mockDatas/specials.json";

export default function Specials() {
  return (
    <div className="flex flex-col  md:flex-row  flex-wrap md:mr-4 md:ml-4 h-auto mt-10 leading-8  ">
      <div className="md:max-w-1/2 w-full md:pr-5">
        <div className="mb-12 pt-12 pr-6 pb-2 pl-6  border-dotted border-2 hover:border-red-900 ">
          <div className=" text-center text-2xl font-serif">
            <h3 className="uppercase mb-8 mt-10 font-bold">
              Senza Carne
              <div className="text-lg">ETSİZ PİZZALAR</div>
            </h3>
          </div>
          {specialData.slice(0, 13).map((data) => {
            return (
              <div key={data._id} className="mb-5 pb-5">
                <div className="pl-5 text-left border-b-2 border-dotted hover:border-red-800 ">
                  <div className="text-bold">
                    <a className=" font-bold text-red-600" href="#">
                      {data.head}
                    </a>
                  </div>

                  <div className="text-left">
                    <span className="text-sm  text-gray-700">
                      {data.content}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:max-w-1/2  w-full md:pr-5">
        <div className="mb-12 pt-12 pr-6 pb-2 pl-6  border-dotted border-2 hover:border-red-900 ">
          <div className=" text-center text-2xl font-serif">
            <h3 className="uppercase mb-8 mt-10 font-bold">
              Al Carne
              <div className="text-lg">ETLİ PİZZALAR</div>
            </h3>
          </div>
          {specialData.slice(13).map((data) => {
            return (
              <div key={data._id} className="mb-5 pb-5">
                <div className="pl-5 text-left border-b-2 border-dotted hover:border-red-800 ">
                  <div className="text-bold">
                    <a className=" font-bold text-red-600" href="#">
                      {data.head}
                    </a>
                  </div>

                  <div className="text-left">
                    <span className="text-sm  text-gray-700">
                      {data.content}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
