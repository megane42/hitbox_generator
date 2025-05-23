import { NormalizedLandmark } from "@mediapipe/tasks-vision";

export const drawHurtboxLowerBody = (
  cnv: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  landmark: NormalizedLandmark[],
) => {
  const marginX = cnv.width * 0.01;
  const marginY = cnv.height * 0.1;
  const minWidth = cnv.width * 0.1;
  const minHeight = cnv.height * 0.1;

  // lower body landmarks : 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
  // https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker#pose_landmarker_model
  let maxX = -Infinity;
  let maxY = -Infinity;
  let minX = Infinity;
  let minY = Infinity;
  [23, 24, 25, 26, 27, 28, 29, 30, 31, 32].forEach((i) => {
    maxX = Math.max(maxX, landmark[i].x);
    maxY = Math.max(maxY, landmark[i].y);
    minX = Math.min(minX, landmark[i].x);
    minY = Math.min(minY, landmark[i].y);
  });
  const maxXPx = maxX * cnv.width;
  const maxYPx = maxY * cnv.height;
  const minXPx = minX * cnv.width;
  const minYPx = minY * cnv.height;

  ctx.fillStyle = "rgb(50 255 50 / 30%)";
  ctx.fillRect(
    minXPx,
    minYPx - (marginY / 2.0),
    Math.max((maxXPx - minXPx) + marginX, minWidth),
    Math.max((maxYPx - minYPx) + marginY, minHeight)
  );
};
