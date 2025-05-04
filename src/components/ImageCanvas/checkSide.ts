import { NormalizedLandmark } from "@mediapipe/tasks-vision";

export type Side = "1P" | "2P"

export const checkSide = (landmark: NormalizedLandmark[]): Side => {
  return landmark[8].z < landmark[7].z ? "1P" : "2P";
};
