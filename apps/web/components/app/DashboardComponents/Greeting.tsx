import * as React from "react";
import { FiClock } from "react-icons/fi";
import useGreetingMessage from "../../../hooks/useGreetingMessage";
import { AuthContext } from "../../../stores/AuthContext";

function Clock() {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    setInterval(() => setTime(new Date()), 500);
  });
  return (
    <div className="w-20 flex items-center content-center flex-row justify-between">
      <FiClock size={25} />
      {time.toLocaleString("en-us", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      })}
    </div>
  );
}

export default function Greeting() {
  const greetingMessage = useGreetingMessage();
  const context = React.useContext(AuthContext);
  return (
    <div className="glass-box flex flex-row justify-between col-span-3 content-center items-center text-xl">
      {greetingMessage + " " + context?.user?.user_metadata?.full_name}
      <Clock />
    </div>
  );
}
