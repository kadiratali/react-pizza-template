import React from "react";
import feast from "./mockDatas/feast.json";

export default function Topfooter() {
  return (
    <div className="flex justify-center ">
      {/* <div className="flex overflow-x-auto w-80 h-80 px-10  self-auto">
        {feast.map((state) => {
          return (
            <div key={state._id} className="w-80 flex-shrink-0 h-full  ">
              <a className=" hover:text-red-700 " href="#">
                <div className="w-full h-full  mb-4 pr-2">
                  <img
                    src={state.img}
                    className="flex justify-center rounded-full "
                  />
                  <div className="font-bold text-base  ">{state.name}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
