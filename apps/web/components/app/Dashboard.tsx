import * as React from "react";
import CompanionPanel from "./DashboardComponents/CompanionPanel";
import Greeting from "./DashboardComponents/Greeting";
import HashnodeFeatured from "./DashboardComponents/HashnodeFeatured";
import Quote from "./DashboardComponents/Quote";
import Sounds from "./DashboardComponents/Sounds";
import Todos from "./DashboardComponents/Todos";

export default function Dashboard() {
  return (
    <div className="grid w-5/6 h-3/4 grid-cols-5 grid-rows-6 gap-12">
      <CompanionPanel />
      <Greeting />
      <Todos />
      <Quote />
      <Sounds />
      <HashnodeFeatured />
    </div>
  );
}
