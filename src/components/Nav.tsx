import React from "react";
import Logo from "../assets/react.svg";
import "boxicons";
import {
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  ChevronDoubleDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/20/solid";

export default function Nav() {
  return (
    <nav className="flex justify-center bg-slate-950 border-b border-white p-4">
      <div className="w-11/12 flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-center">
        <div>
          <CubeTransparentIcon className="size-10 text-white" />
        </div>
        <div>
          <ul className="flex gap-4">
            <li className="text-lime-500 cursor-pointer">Dashboard</li>
            <li className="text-white cursor-pointer transition-all hover:text-lime-500">
              Statistics
            </li>
            <li className="text-white cursor-pointer transition-all hover:text-lime-500">
              Courses
            </li>
            <li className="text-white cursor-pointer transition-all hover:text-lime-500">
              Settings
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <BellIcon className="size-9 text-white p-2 bg-blue-800 rounded-full" />
          <MagnifyingGlassIcon className="size-9 text-white p-2 bg-blue-800 rounded-full" />
          <div className="flex items-center justify-center px-1 gap-2 h-12 rounded-full bg-blue-800">
            <img
              src="https://ui-avatars.com/api/?background=84cc16&color=1e40af"
              alt="avatar"
              className="rounded-full size-8"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-sm text-white">Alex Jhonson</h1>
              <h4 className="text-white text-sm">Frontend Developer</h4>
            </div>
            <div>
              <ChevronDownIcon className="size-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
