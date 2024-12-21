import {
  ChevronDownIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/16/solid";
import {
  ChevronDoubleDownIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/20/solid";
import React from "react";

export default function Calender() {
  return (
    <div className="col-span-2 md:col-span-2 lg:col-span-1 bg-white p-3 rounded-md">
      <div className="flex flex-wrap">
        <h1 className="font-bold text-lg grow text-slate-900">
          You may like it
        </h1>
        <span className="bg-gray-200 rounded-full h-8 text-center flex items-center justify-center p-2 cursor-pointer">
          <h1 className="p-2 text-sm">December</h1>
          <ChevronDownIcon className="size-6" />
        </span>
        <div className="w-full">
          <ul className="flex justify-between mt-8">
            <li className="flex flex-col items-center">
              <span className="text-slate-900 font-bold text-sm rounded-full">
                Sun
              </span>
              <span className="text-slate-900 text-sm rounded-full flex justify-center items-center w-8 h-8 mt-2 hover:bg-blue-800 hover:text-white transition-all cursor-pointer">
                12
              </span>
            </li>

            <li className="flex flex-col items-center">
              <span className="text-slate-900 font-bold text-sm rounded-full">
                Mon
              </span>
              <span className="text-slate-900 text-sm rounded-full flex justify-center items-center w-8 h-8 mt-2 hover:bg-blue-800 hover:text-white transition-all cursor-pointer">
                13
              </span>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-slate-900 font-bold text-sm rounded-full hover:text-white">
                Tue
              </span>
              <span className="text-white text-sm bg-blue-800 rounded-full flex justify-center items-center w-8 h-8 mt-2 hover:bg-blue-800 transition-all cursor-pointer">
                14
              </span>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-slate-900 font-bold text-sm rounded-full">
                Wed
              </span>
              <span className="text-slate-900 text-sm rounded-full flex justify-center items-center w-8 h-8 mt-2 hover:bg-blue-800 hover:text-white transition-all cursor-pointer">
                15
              </span>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-slate-900 font-bold text-sm rounded-full">
                Thu
              </span>
              <span className="text-slate-900 text-sm rounded-full flex justify-center items-center w-8 h-8 mt-2 hover:bg-blue-800 hover:text-white transition-all cursor-pointer">
                16
              </span>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-slate-900 font-bold text-sm rounded-full">
                Sat
              </span>
              <span className="text-slate-900 text-sm rounded-full flex justify-center items-center w-8 h-8 mt-2 hover:bg-blue-800 hover:text-white transition-all cursor-pointer">
                17
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 w-full mt-3">
          <span className="p-1 w-full flex items-center bg-gray-200 rounded-md">
            <ClockIcon className="size-5 text-slate-900" />
            <div className="ml-2">
              <h1 className="font-bold text-sm text-slate-900">Data Scince</h1>
              <p className="text-gray-400 text-sm">11:20 PM</p>
            </div>
            <div className="grow flex justify-end cursor:pointer">
              <EllipsisHorizontalIcon className="text-slate-900 size-6" />
            </div>
          </span>
          <span className="p-1 w-full flex items-center bg-gray-200 rounded-md">
            <ClockIcon className="size-5 text-slate-900" />
            <div className="ml-2">
              <h1 className="font-bold text-sm text-slate-900">
                Machine Learning
              </h1>
              <p className="text-gray-400 text-sm">13:35 PM</p>
            </div>
            <div className="grow flex justify-end cursor:pointer">
              <EllipsisHorizontalIcon className="text-slate-900 size-6" />
            </div>
          </span>
          <span className="p-1 w-full flex items-center bg-gray-200 rounded-md">
            <ClockIcon className="size-5 text-slate-900" />
            <div className="ml-2">
              <h1 className="font-bold text-sm text-slate-900">
                Python Introduction
              </h1>
              <p className="text-gray-400 text-sm">15:00 PM</p>
            </div>
            <div className="grow flex justify-end cursor:pointer">
              <EllipsisHorizontalIcon className="text-slate-900 size-6" />
            </div>
          </span>
          <span className="p-1 w-full flex items-center bg-gray-200 rounded-md">
            <ClockIcon className="size-5 text-slate-900" />
            <div className="ml-2">
              <h1 className="font-bold text-sm text-slate-900">
                Backend Engineering
              </h1>
              <p className="text-gray-400 text-sm">16:15 PM</p>
            </div>
            <div className="grow flex justify-end cursor:pointer">
              <EllipsisHorizontalIcon className="text-slate-900 size-6" />
            </div>
          </span>
          <span className="p-1 w-full flex items-center bg-gray-200 rounded-md">
            <ClockIcon className="size-5 text-slate-900" />
            <div className="ml-2">
              <h1 className="font-bold text-sm text-slate-900">Dev Ops</h1>
              <p className="text-gray-400 text-sm">17:00 PM</p>
            </div>
            <div className="grow flex justify-end cursor:pointer">
              <EllipsisHorizontalIcon className="text-slate-900 size-6" />
            </div>
          </span>
          <span className="p-1 w-full flex items-center bg-gray-200 rounded-md">
            <ClockIcon className="size-5 text-slate-900" />
            <div className="ml-2">
              <h1 className="font-bold text-sm text-slate-900">
                Frontend Development
              </h1>
              <p className="text-gray-400 text-sm">20:00 PM</p>
            </div>
            <div className="grow flex justify-end cursor:pointer">
              <EllipsisHorizontalIcon className="text-slate-900 size-6" />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
