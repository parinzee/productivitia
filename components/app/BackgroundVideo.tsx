import * as React from "react";

export interface BackgroundVideoProps {
  pathToVideo: string;
  type: "video/webm" | "video/mp4";
}

export default function BackgroundVideo({
  pathToVideo,
  type,
}: BackgroundVideoProps) {
  return (
    <video
      className="fixed top-0 left-0 z-auto h-screen w-screen bg-cyan-300 object-cover dark:bg-slate-800"
      playsInline
      autoPlay
      muted
      loop
    >
      <source src={pathToVideo} type={type} />
      Please update to a supported browser
    </video>
  );
}
