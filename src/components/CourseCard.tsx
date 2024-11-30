import React from "react";

export default function CourseCard({
  background,
  icon,
  heading,
  list,
  percentage,
}) {
  return (
    <div
      className={`mt-4 flex-col ${background} w-full md:h-40 p-4 rounded-md`}
    >
      {/* top */}
      <div className="flex">
        <div className="grow">
          <h2 className="font-semibold text-md text-white">{heading}</h2>
          <ul className="mt-4">
            {list.map((item) => (
              <li className="text-sm text-white">- {item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="w-8 h-8 flex items-center rounded-full justify-center bg-lime-500">
            {icon}
          </div>
          <div>
            <h1 className="font-bold text-xl mt-12 text-lime-500">
              {percentage}%
            </h1>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="w-full bg-gray-400 rounded-full h-3 mt-4">
        <div className={`bg-lime-500 h-3 rounded-full w-[${percentage}]`}></div>
      </div>
    </div>
  );
}
