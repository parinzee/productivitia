const backgrounds = [
  "cyberpunk.gif",
  "spaceship.gif",
  "neon-city.gif",
  "autumn.gif",
  "beach.gif",
  "blue-shop.gif",
  "shop.gif",
  "nature.gif",
  "rain.gif",
  "pizza.gif",
];

export default function useRandGif() {
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
  }
}
