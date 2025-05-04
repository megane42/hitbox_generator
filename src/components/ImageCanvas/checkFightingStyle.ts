import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import { Side } from "@/components/ImageCanvas/checkSide";

export type FightingStyle = "LeftUppercut" | "RightUppercut" | "LeftPunch" | "RightPunch" | "LeftKick" | "RightKick"

export const checkFightingStyle = (
  landmark: NormalizedLandmark[],
  side: Side,
): FightingStyle => {
  const headHeight = calcHeadHeight(landmark) * 4.0;

  if (landmark[15].y < landmark[0].y - headHeight) { // if left wrist is upper than nose
    return "LeftUppercut";
  }

  if (landmark[16].y < landmark[0].y - headHeight) { // if right wrist is upper than nose
    return "RightUppercut";
  }

  const candidates = [
    landmark[15].x, // left wrist
    landmark[16].x, // right wrist
    landmark[27].x, // left ankle
    landmark[28].x, // right ankle
  ];

  if (side === "1P") {
    switch (candidates.indexOf(Math.max(...candidates))) {
    case 0: // if left wrist exists at the most right side
      return "LeftPunch";
    case 1: // if right wrist exists at the most right side
      return "RightPunch";
    case 2: // if left ankle exists at the most right side
      return "LeftKick";
    case 3: // if right anle exists at the most right side
      return "RightKick";
    }
  }

  if (side === "2P") {
    switch (candidates.indexOf(Math.min(...candidates))) {
    case 0: // if left wrist exists at the most left side
      return "LeftPunch";
    case 1: // if right wrist exists at the most left side
      return "RightPunch";
    case 2: // if left ankle exists at the most left side
      return "LeftKick";
    case 3: // if right anle exists at the most left side
      return "RightKick";
    }
  }

  // maybe it is, anyway
  return "LeftPunch";
};

const calcHeadHeight = (landmark: NormalizedLandmark[]) => {
  let maxY = -Infinity;
  let minY = Infinity;
  for (let i = 0; i <= 10; i++) {
    maxY = Math.max(maxY, landmark[i].y);
    minY = Math.min(minY, landmark[i].y);
  }
  return maxY - minY;
};
