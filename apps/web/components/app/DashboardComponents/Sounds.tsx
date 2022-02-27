import { Howl } from "howler";
import * as React from "react";
import { IconType } from "react-icons";
import { FaCity, FaKiwiBird, FaWater } from "react-icons/fa";
import { GiCampfire, GiThreeLeaves, GiWindchimes } from "react-icons/gi";

const sounds = {
  river: new Howl({
    src: ["/sounds/river.mp3"],
    loop: true,
    volume: 0.7,
  }),
  campfire: new Howl({
    src: ["/sounds/campfire.mp3"],
    loop: true,
    volume: 1.2,
  }),
  windchimes: new Howl({
    src: ["/sounds/windchimes.mp3"],
    loop: true,
    volume: 0.7,
  }),
  leaves: new Howl({
    src: ["/sounds/leaves.mp3"],
    loop: true,
  }),
  city: new Howl({
    src: ["/sounds/city.mp3"],
    loop: true,
  }),
  birds: new Howl({
    src: ["/sounds/birds.mp3"],
    loop: true,
  }),
};

interface SoundsButtonProps {
  sound: Howl;
  Icon: IconType;
  title: string;
}

function PlaySoundButton({ sound, Icon, title }: SoundsButtonProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <div
      onClick={() => {
        if (isPlaying) {
          sound.pause();
        } else {
          sound.play();
        }
        setIsPlaying(!isPlaying);
      }}
      className={`${
        isPlaying ? "bg-gradient-to-r from-purple-500 to-pink-400" : "bg-white"
      } rounded-xl col-span-1 row-span-1 cursor-pointer p-1 select-none`}
    >
      <div className="w-full h-full bg-white rounded-lg flex flex-row justify-evenly content-center items-center">
        <Icon color="black" size={30} />
        <div className="text-lg font-medium">{title}</div>
      </div>
    </div>
  );
}

export default function Sounds() {
  return (
    <div className="glass-box col-span-2 row-span-2 grid grid-cols-3 grid-rows-2 gap-2">
      <PlaySoundButton Icon={FaWater} sound={sounds.river} title="River" />
      <PlaySoundButton
        Icon={GiCampfire}
        sound={sounds.campfire}
        title="Campfire"
      />
      <PlaySoundButton
        Icon={GiWindchimes}
        sound={sounds.windchimes}
        title="Chimes"
      />
      <PlaySoundButton
        Icon={GiThreeLeaves}
        sound={sounds.leaves}
        title="Leaves"
      />
      <PlaySoundButton Icon={FaCity} sound={sounds.city} title="City" />
      <PlaySoundButton Icon={FaKiwiBird} sound={sounds.birds} title="Birds" />
    </div>
  );
}
