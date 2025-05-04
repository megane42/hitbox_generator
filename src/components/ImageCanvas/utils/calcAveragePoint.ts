import { NormalizedLandmark } from "@mediapipe/tasks-vision";

export const calcAveragePoint = (points: NormalizedLandmark[]): NormalizedLandmark => {
  const avgX = points.reduce((avg, point) => (avg + point.x), 0) / points.length;
  const avgY = points.reduce((avg, point) => (avg + point.y), 0) / points.length;
  const avgZ = points.reduce((avg, point) => (avg + point.z), 0) / points.length;
  const avgVisibility = points.reduce((avg, point) => (avg + point.visibility), 0) / points.length;

  return {
    x: avgX,
    y: avgY,
    z: avgZ,
    visibility: avgVisibility,
  };
};
