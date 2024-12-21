import React from "react";
import ProgressChart from "./ProgressChart";

export default function Progress() {
  return (
    <div className="col-span-2 md:col-span-4 lg:col-span-1 bg-white p-3 rounded-md">
      <div className="flex items-center">
        <h1 className="font-bold grow text-lg text-slate-900">
          Learning Progress
        </h1>
        <span className="flex justify-between gap-8 bg-slate-100 p-2 rounded-full">
          <div className="bg-blue-800 flex justify-center items-center rounded-full w-12 h-6 cursor-pointer">
            <h1 className="text-sm font-bold text-lime-500">1Y</h1>
          </div>
          <div className="flex justify-center items-center rounded-full w-12 h-6 hover:bg-blue-800 cursor-pointer hover:text-lime-500 transition-colors">
            <h1 className="text-sm text-slate-900 hover:text-lime-500 w-full text-center">
              3M
            </h1>
          </div>
          <div className="flex justify-center items-center rounded-full w-12 h-6 hover:bg-blue-800 cursor-pointer hover:text-lime-500 transition-colors">
            <h1 className="text-sm text-slate-900 hover:text-lime-500 w-full text-center">
              6M
            </h1>
          </div>
        </span>
      </div>
      <div className="mt-8 flex">
        <span className="w-[100px] flex flex-col items-center border-r border-gray-200 pr-2">
          <h1 className="text-3xl mt-4 text-blue-800">3.66</h1>
          <p className="text-lime-500">Current GPA</p>
        </span>
        <span className="w-[150px] flex flex-col items-center">
          <h1 className="text-3xl mt-4 text-blue-800">3.45</h1>
          <p className="text-lime-500">Average Class GPA</p>
        </span>
      </div>
      <ProgressChart />
    </div>
  );
}
