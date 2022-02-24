import { useLiveQuery } from "dexie-react-hooks";
import * as React from "react";
import { AuthContext } from "../../../stores/AuthContext";
import { getCompanionIcon } from "../../../utils/companionHelper";
import { Companion, db } from "../../../utils/db";

interface CompanionFrameProps {
  level: Companion["level"];
}

function CompanionFrame({ level }: CompanionFrameProps) {
  // const icon = getCompanionIcon(level);
  const icon = getCompanionIcon(5);
  return (
    <div className="flex content-center items-center justify-center w-full h-full bg-[#D3E4CD] rounded-xl col-span-3 row-span-2">
      <div className="text-7xl">{icon}</div>
    </div>
  );
}

export default function CompanionStats() {
  const context = React.useContext(AuthContext);
  // Select the default companion. (I plan to add more in the future.)
  const Companion = useLiveQuery(
    async () => await db.companions.get(1)
  ) as Companion;
  return (
    <div className="glass-box grid grid-cols-3 grid-rows-6 gap-3 justify-between col-span-2 row-span-4 content-center items-center text-xl">
      <div className="text-2xl col-span-3 row-span-1 text-center">
        <b>{Companion ? Companion.name : ""}</b>
      </div>
      <CompanionFrame level={Companion ? Companion.level : 1} />
    </div>
  );
}
