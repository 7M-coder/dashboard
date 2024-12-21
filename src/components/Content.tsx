import React from "react";
import Progress from "./Progress";
import Feed from "./Feed";
import Calender from "./Calender";

export default function Content() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2 mt-3 p-5">
      <Progress />
      <Feed />
      <Calender />
    </div>
  );
}
