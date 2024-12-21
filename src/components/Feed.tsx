import React from "react";
import casetImage from "../assets/caset.jpg";
import avatar from "../assets/avatar-2.jpg";
import { MusicalNoteIcon, PlayIcon } from "@heroicons/react/16/solid";
import { PlayCircleIcon } from "@heroicons/react/20/solid";
export default function Feed() {
  return (
    <div className="col-span-2 md:col-span-2 lg:col-span-1 bg-white p-3 rounded-md">
      <div className="flex items-center">
        <h1 className="font-bold text-lg grow text-slate-900">Popular</h1>
        <span className="bg-gray-200 rounded-full h-8 w-20 text-center flex items-center justify-center">
          <h1 className="text-sm font-bold text-slate-900">#Data</h1>
        </span>
      </div>
      <div>
        <img src={casetImage} className="w-full h-64 mt-8 rounded-md" alt="" />
      </div>
      <div className="flex mt-3 items-center gap-2 flex-wrap">
        <MusicalNoteIcon
          color="black"
          className="size-8 bg-gray-200 p-1 rounded-md text-slate-900"
        />
        <h1 className="font-bold text-slate-900">
          Podcast: Mastering Data Visualization
        </h1>
        <p className="w-full text-sm mt-3 text-slate-900">
          Learn to create compelling visualization with data
        </p>
      </div>
      <div className="flex pt-8">
        <div className="flex grow">
          <img src={avatar} className="h-10 rounded-md" alt="" />
          <span className="pl-3">
            <h1 className="font-bold text-slate-900">Jhon Doe</h1>
            <p className="text-sm text-slate-900">Data Analyist</p>
          </span>
        </div>
        <div>
          <button className="flex items-center bg-slate-900 text-white rounded-md p-1">
            <h1>Listen</h1>
            <PlayIcon className="size-4 ml-2 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
