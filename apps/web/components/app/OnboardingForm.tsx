import * as React from "react";
import { FaSafari } from "react-icons/fa";
import { GrFirefox } from "react-icons/gr";
import { SiGooglechrome } from "react-icons/si";
import { db } from "../../utils/db";

async function addCompanion(companionName: string) {
  try {
    await db.companions.add({
      id: 1,
      name: companionName,
      experience: 0,
      maxExperience: 50,
      level: 1,
      lastOpened: new Date(),
      energy: 100,
      current: true,
    });
  } catch (error) {
    await db.companions.delete(1);
    await db.companions.add({
      id: 1,
      name: companionName,
      experience: 0,
      maxExperience: 50,
      level: 1,
      lastOpened: new Date(),
      energy: 100,
      current: true,
    });
  }
}

export default function OnboardingForm() {
  const [companionName, setCompanionName] = React.useState("");
  const handleNameInput = async (name: string) => {
    setCompanionName(name);
    await addCompanion(name);
  };
  return (
    <>
      <h1 className="text-5xl font-bold">Almost there!</h1>
      <h2 className="text-3xl italic">Two more steps to go.</h2>
      <form>
        <h4 className="text-2xl mt-5">
          1. Say hello to your{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-700">
            companion.
          </span>
        </h4>
        <h5 className="text-xl">
          Your companion will <b>grow</b> with you throughout your journey of
          improving productivity.
        </h5>
        <div className="flex flex-row mt-5 h-14 content-center">
          <div className="text-6xl">🐣</div>
          <div className="flex flex-col h-12 justify-between">
            <div className="text-xl italic">"What's my name?"</div>
            <input
              type="text"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-8"
              value={companionName}
              placeholder="Eg: John"
              maxLength={10}
              onChange={(event) => {
                handleNameInput(event.target.value);
              }}
            />
          </div>
        </div>
        <h4 className="text-2xl mt-5">
          2. Download the{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-700">
            browser extension.
          </span>
        </h4>
        <h5 className="text-xl">
          Click your <b>browser logo</b> below get started.
        </h5>
        <div className="flex flex-row mt-5 justify-between w-1/3">
          <SiGooglechrome size={55} color="#FFCD46" />
          <GrFirefox size={55} color="#FE7823" />
          <FaSafari size={55} color="#31C4F2" />
        </div>
      </form>
    </>
  );
}
