import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import { Side } from "./checkSide";

export const drawHitboxLeftArm = (
  cnv: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  landmark: NormalizedLandmark[],
  side: Side,
) => {
  const marginX = cnv.width * 0.05;
  const marginY = cnv.height * 0.05;

  // left arm landmarks : 13, 15, 17, 19, 21
  // https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker#pose_landmarker_model
  let maxX = -Infinity;
  let maxY = -Infinity;
  let minX = Infinity;
  let minY = Infinity;
  [13, 15, 17, 19, 21].forEach((i) => {
    maxX = Math.max(maxX, landmark[i].x);
    maxY = Math.max(maxY, landmark[i].y);
    minX = Math.min(minX, landmark[i].x);
    minY = Math.min(minY, landmark[i].y);
  });
  const maxXPx = maxX * cnv.width;
  const maxYPx = maxY * cnv.height;
  const minXPx = minX * cnv.width;
  const minYPx = minY * cnv.height;

  ctx.fillStyle = "rgb(255 0 0 / 50%)";
  if (side === "1P") {
    ctx.fillRect(
      minXPx,
      minYPx,
      (maxXPx - minXPx) + marginX,
      (maxYPx - minYPx) + marginY
    );
  } else {
    ctx.fillRect(
      minXPx - marginX,
      minYPx,
      (maxXPx - minXPx) + marginX,
      (maxYPx - minYPx) + marginY
    );
  }
};
