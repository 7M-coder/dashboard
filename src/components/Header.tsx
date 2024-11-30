import React from "react";
import ActivityCart from "./ActivityChart";
import CourseCard from "./CourseCard";
import { CircleStackIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-slate-950 flex justify-center">
      <div className="w-11/12">
        <div className="">
          <div className="flex justify-between">
            <h1 className="text-white font-bold w-11/12 mt-4 text-lg">
              Your courses
            </h1>
            <h1 className="text-white font-bold w-11/12 mt-4 text-lg">
              Your activity
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <CourseCard
              background="bg-blue-800"
              icon={
                <CircleStackIcon className="size-4 rounded-full text-blue-800" />
              }
              heading="Data analysis"
              list={["test 1", "test2"]}
              percentage={85}
            />
            <CourseCard
              background="bg-blue-800"
              icon={
                <CircleStackIcon className="size-4 rounded-full text-blue-800" />
              }
              heading="Data analysis"
              list={["test 1", "test2"]}
              percentage={85}
            />
            <CourseCard
              background="bg-blue-800"
              icon={
                <CircleStackIcon className="size-4 rounded-full text-blue-800" />
              }
              heading="Data analysis"
              list={["test 1", "test2"]}
              percentage={85}
            />

            <ActivityCart />
          </div>
        </div>
      </div>
    </header>
  );
}
