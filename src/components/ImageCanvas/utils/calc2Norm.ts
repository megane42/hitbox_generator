import { NormalizedLandmark } from "@mediapipe/tasks-vision";

export const calc2Norm = (pointA: NormalizedLandmark, pointB: NormalizedLandmark): number => {
  const diffX = pointA.x - pointB.x;
  const diffY = pointA.y - pointB.y;
  return Math.sqrt((diffX ** 2) + (diffY ** 2))
}
