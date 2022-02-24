import * as React from "react";
import Greeting from "./DashboardComponents/Greeting";

export default function Dashboard() {
  return (
    <div className="grid w-5/6 h-3/4 grid-cols-5 grid-rows-6 gap-14">
      <div className="col-span-2">heeyyy</div>
      <Greeting />
    </div>
  );
}
