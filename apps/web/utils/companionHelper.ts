function getMaxExperience(level: number) {
  if (level == 1) {
    return 50;
  } else if (level == 2) {
    return 250;
  } else if (level == 3) {
    return 700;
  } else if (level == 4) {
    return 1200;
  } else if (level == 5) {
    return 2000;
  }
}

function getCompanionIcon(level: number) {
  if (level == 1) {
    return "🥚";
  } else if (level == 2) {
    return "🐣";
  } else if (level == 3) {
    return "🐥";
  } else if (level == 4) {
    return "🐤";
  } else if (level == 5) {
    return "🐓";
  }
}

export { getMaxExperience, getCompanionIcon };
