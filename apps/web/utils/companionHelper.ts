function getMaxExperience(level: number) {
  if (level == 1) {
    return 50;
  } else if (level == 2) {
    return 150;
  } else if (level == 3) {
    return 500;
  } else if (level == 4) {
    return 900;
  } else if (level == 5) {
    return 1500;
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
