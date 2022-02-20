const backgrounds = [
  "/backgrounds/webm/cyberpunk.webm",
  "/backgrounds/webm/spaceship.webm",
  "/backgrounds/webm/neon-city.webm",
  "/backgrounds/webm/autumn.webm",
  "/backgrounds/webm/beach.webm",
  "/backgrounds/webm/blue-shop.webm",
  "/backgrounds/webm/shop.webm",
  "/backgrounds/webm/nature.webm",
  "/backgrounds/webm/rain.webm",
  "/backgrounds/webm/pizza.webm",
] as const;

export type background = typeof backgrounds[number];

export default function useTimedBg(): background {
  const hour = new Date().getHours();
  // Select background based on the time
  if (hour >= 22) {
    return backgrounds[0];
  } else if (hour >= 19) {
    return backgrounds[1];
  } else if (hour >= 18) {
    return backgrounds[2];
  } else if (hour >= 14) {
    return backgrounds[3];
  } else if (hour >= 13) {
    return backgrounds[4];
  } else if (hour >= 11) {
    return backgrounds[5];
  } else if (hour >= 9) {
    return backgrounds[6];
  } else if (hour >= 7) {
    return backgrounds[7];
  } else if (hour >= 3) {
    return backgrounds[8];
  } else if (hour >= 0) {
    return backgrounds[9];
  } else {
    /* 
      If for some reason, the Date.getHours()
      decides to do something weird. Return
      the nature.webm, because it looks
      the best.
    */
    return backgrounds[7];
  }
}
