import { PoseLandmarkerResult } from "@mediapipe/tasks-vision";

export type Side = "1P" | "2P"

export const checkSide = (
  poseLandmarkerResult: PoseLandmarkerResult,
): Side[] => {
  return poseLandmarkerResult.landmarks.map(
    landmark => landmark[8].z < landmark[7].z ? "1P" : "2P"
  );
};
