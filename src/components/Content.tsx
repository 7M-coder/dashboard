import React from "react";
import Progress from "./Progress";
import Feed from "./Feed";
import Calender from "./Calender";

export default function Content() {
  return (
    <div className="grid grid-cols-3">
      <Progress />
      <Feed />
      <Calender />
    </div>
  );
}
