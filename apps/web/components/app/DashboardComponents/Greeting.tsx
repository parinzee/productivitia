import * as React from "react";
import { FiClock } from "react-icons/fi";
import useGreetingMessage from "../../../hooks/useGreetingMessage";
import { AuthContext } from "../../../stores/AuthContext";

const getFirstName = (name: string) => {
  // Check if the provided name contains whitespace in the middle
  if (name.trim().indexOf(" ") > 0) {
    const firstName = name.split(" ")[0];
    return firstName;
  } else {
    // If it doesn't that means the provided name is already a first name
    return name;
  }
};

function Clock() {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    setInterval(() => setTime(new Date()), 500);
  });
  return (
    <div className="w-20 flex content-center items-center justify-between">
      <FiClock size={25} className="self-center" />
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
  const [firstName, setFirstName] = React.useState("");
  React.useEffect(() => {
    if (context?.user?.user_metadata?.full_name) {
      // It is possible that the user has supplied only first name here
      const possibleFullName = context.user.user_metadata.full_name;
      setFirstName(getFirstName(possibleFullName));
    }
  }, [context]);
  return (
    <div className="glass-box flex flex-row justify-between col-span-3 content-center items-center text-xl">
      {greetingMessage + " " + firstName + "!"}
      <Clock />
    </div>
  );
}
