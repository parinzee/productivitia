import { toast } from "react-toastify";
import { Companion, db } from "./db";
function getMaxExperience(level: number) {
  if (level == 1) {
    return 50;
  } else if (level == 2) {
    return 250;
  } else if (level == 3) {
    return 700;
  } else if (level == 4) {
    return 1200;
  } else {
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

const diffMinutes = (date1: Date, date2: Date): number => {
  var msDiff = Math.abs(Number(date1) - Number(date2));
  return Math.floor(msDiff / 1000 / 60);
};

const addEnergy = async (companion: Companion, energyToAdd: number) => {
  if (companion.id) {
    if (energyToAdd + companion.energy > 100) {
      await db.companions.update(companion.id, { energy: 100 });
    } else {
      await db.companions.update(companion.id, {
        energy: energyToAdd + companion.energy,
      });
    }
  }
};

const removeEnergy = async (companion: Companion, energyToRemove: number) => {
  if (companion.id) {
    if (companion.energy - energyToRemove < 0) {
      toast("You are running out of energy! Try taking a break.");
      await db.companions.update(companion.id, { energy: 0 });
    } else {
      await db.companions.update(companion.id, {
        energy: companion.energy - energyToRemove,
      });
    }
  }
};

const addExperience = async (companion: Companion, expToAdd: number) => {
  if (companion.id) {
    const maxExp = getMaxExperience(companion.level);
    if (expToAdd >= maxExp || expToAdd + companion.experience >= maxExp) {
      toast("You've leveled up!");
      await db.companions.update(companion.id, {
        level: companion.level + 1,
        maxExperience: getMaxExperience(companion.level + 1),
        experience: 0,
      });
    } else {
      await db.companions.update(companion.id, {
        experience: companion.experience + expToAdd,
      });
    }
  }
};

const datesAreOnSameDay = (first: Date, second: Date) =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();

export {
  getMaxExperience,
  getCompanionIcon,
  diffMinutes,
  addEnergy,
  datesAreOnSameDay,
  removeEnergy,
  addExperience,
};
