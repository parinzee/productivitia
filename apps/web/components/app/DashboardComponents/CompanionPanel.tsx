import { useLiveQuery } from "dexie-react-hooks";
import { motion } from "framer-motion";
import * as React from "react";
import { IconType } from "react-icons";
import { FaLevelUpAlt } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { toast } from "react-toastify";
import {
  addEnergy,
  diffMinutes,
  getCompanionIcon,
} from "../../../utils/companionHelper";
import { Companion, db } from "../../../utils/db";

interface CompanionFrameProps {
  level: Companion["level"];
}

interface StatsBarProps {
  accentColor: string;
  currValue: number;
  maxValue: number;
  Icon: IconType;
  iconSize?: number;
}

function CompanionFrame({ level }: CompanionFrameProps) {
  const icon = getCompanionIcon(level);
  return (
    <div className="flex content-center items-center justify-center w-full h-full bg-[#D3E4CD] rounded-xl col-span-3 row-span-2">
      <div className="text-7xl">{icon}</div>
    </div>
  );
}

function StatsBar({
  currValue,
  maxValue,
  Icon,
  accentColor,
  iconSize = 30,
}: StatsBarProps) {
  const barPercentage =
    Math.round((currValue / maxValue) * 100).toString() + "%";
  return (
    <div className="flex flex-row justify-between items-center w-full h-1/2 col-span-3 row-span-1">
      <Icon size={iconSize} className="w-1/6" style={{ color: accentColor }} />
      <div className="h-full w-full bg-gray-100 rounded-r-full">
        <motion.div
          layout
          className="h-full rounded-r-full"
          style={{ width: barPercentage, backgroundColor: accentColor }}
        />
      </div>
    </div>
  );
}

export default function CompanionPanel() {
  // Select the default companion. (I plan to add more in the future.)
  const companion = useLiveQuery(
    async () => await db.companions.get(1)
  ) as Companion;

  const [buttonActive, setButtonActive] = React.useState(true);

  React.useEffect(() => {
    const regenEnergy = async () => {
      /* 
        I'm refetching the Companion here otherwise useEffect
        would be called indefinitely. (eg: This updates Companion,
        since companion is updated, this will run again)
      */
      const tempCompanion = (await db.companions.get(1)) as Companion;

      // "Regenerate" the energy depending on the time that has passed
      const energyRegen = Math.floor(
        diffMinutes(new Date(), tempCompanion.lastOpened) / 10
      );
      addEnergy(tempCompanion, energyRegen);
    };
    regenEnergy();
  }, []);

  return (
    <div className="glass-box grid grid-cols-3 grid-rows-6 gap-3 justify-between col-span-2 row-span-4 content-center items-center text-xl select-none">
      <div className="text-2xl col-span-3 row-span-1 text-center">
        <b>{companion ? companion.name : ""}</b>
      </div>
      <CompanionFrame level={companion ? companion.level : 1} />
      <StatsBar
        accentColor="#6886C5"
        currValue={companion ? companion.experience : 0}
        maxValue={companion ? companion.maxExperience : 50}
        Icon={FaLevelUpAlt}
      />
      <StatsBar
        accentColor="#f5b916"
        currValue={companion ? companion.energy : 100}
        maxValue={100}
        Icon={HiLightningBolt}
        iconSize={35}
      />
      <div className="col-span-3 row-span-1 flex flex-row justify-evenly items-center">
        <div
          onClick={async () => {
            setButtonActive(false);
            await addEnergy(companion, 15);
            toast("Energy increased!");
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setButtonActive(true);
          }}
          className={`btn btn-sm ${
            buttonActive ? "cursor-pointer" : "cursor-not-allowed opacity-50"
          } bg-purple-500 text-white`}
        >
          Take a break
        </div>
        <div
          onClick={async () => {
            setButtonActive(false);
            await addEnergy(companion, 5);
            toast("Energy increased!");
            // Add artificial delay
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setButtonActive(true);
          }}
          className={`btn btn-sm ${
            buttonActive ? "cursor-pointer" : "cursor-not-allowed opacity-50"
          } bg-pink-400 text-white`}
        >
          Drink Water
        </div>
      </div>
    </div>
  );
}
