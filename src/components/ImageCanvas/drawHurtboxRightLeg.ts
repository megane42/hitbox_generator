import { NormalizedLandmark } from "@mediapipe/tasks-vision";

export const drawHurtboxRightLeg = (
  cnv: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  landmark: NormalizedLandmark[],
) => {
  const marginX = cnv.width * 0.01;
  const marginY = cnv.height * 0.01;

  // right leg landmarks : 24, 26, 28, 30, 32
  // https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker#pose_landmarker_model
  let maxX = -Infinity;
  let maxY = -Infinity;
  let minX = Infinity;
  let minY = Infinity;
  [24, 26, 28, 30, 32].forEach((i) => {
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
    minYPx,
    (maxXPx - minXPx) + marginX,
    (maxYPx - minYPx) + marginY
  );
};
