import React from "react";
import ActivityCart from "./ActivityChart";
import CourseCard from "./CourseCard";
import { CircleStackIcon } from "@heroicons/react/24/solid";
import { CloudIcon, CommandLineIcon } from "@heroicons/react/16/solid";

export default function Header() {
  return (
    <header className="bg-slate-950 flex justify-center p-2 h-[500px] md:h-[250px] rounded-b-3xl">
      <div className="w-11/12">
        <div className="">
          <div className="flex justify-between">
            <h1 className="text-white font-bold w-11/12 mt-4 text-lg">
              Your courses
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <CourseCard
              background="bg-blue-800"
              icon={
                <CircleStackIcon className="size-4 rounded-full text-blue-800" />
              }
              heading="Data analysis"
              list={["3 Lesson left", "2 Projects left"]}
              percentage={64}
            />
            <CourseCard
              background="bg-blue-800"
              icon={
                <CommandLineIcon className="size-4 rounded-full text-blue-800" />
              }
              heading="Machine learning"
              list={["13 Lesson left", "3 Projects left"]}
              percentage={32}
            />
            <CourseCard
              background="bg-blue-800"
              icon={<CloudIcon className="size-4 rounded-full text-blue-800" />}
              heading="Cloud computing"
              list={["1 Lesson left", "1 Project left"]}
              percentage={75}
            />

            <ActivityCart />
          </div>
        </div>
      </div>
    </header>
  );
}
