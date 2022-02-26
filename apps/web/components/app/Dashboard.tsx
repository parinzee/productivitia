import * as React from "react";
import CompanionPanel from "./DashboardComponents/CompanionPanel";
import Greeting from "./DashboardComponents/Greeting";
import Quote from "./DashboardComponents/Quote";
import Todos from "./DashboardComponents/Todos";

export default function Dashboard() {
  return (
    <div className="grid w-5/6 h-3/4 grid-cols-5 grid-rows-6 gap-14">
      <CompanionPanel />
      <Greeting />
      <Todos />
      <Quote />
    </div>
  );
}
