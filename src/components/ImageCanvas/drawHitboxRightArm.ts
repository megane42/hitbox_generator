import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import { Side } from "./checkSide";

export const drawHitboxRightArm = (
  cnv: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  landmark: NormalizedLandmark[],
  side: Side,
) => {
  const marginX = cnv.width * 0.05;
  const marginY = cnv.height * 0.05;
  const minWidth = cnv.width * 0.1;
  const minHeight = cnv.height * 0.1;

  // right arm landmarks : 14, 16, 18, 20, 22
  // https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker#pose_landmarker_model
  let maxX = -Infinity;
  let maxY = -Infinity;
  let minX = Infinity;
  let minY = Infinity;
  [14, 16, 18, 20, 22].forEach((i) => {
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
      Math.max((maxXPx - minXPx) + marginX, minWidth),
      Math.max((maxYPx - minYPx) + marginY, minHeight)
    );
  } else {
    ctx.fillRect(
      minXPx - marginX,
      minYPx,
      Math.max((maxXPx - minXPx) + marginX, minWidth),
      Math.max((maxYPx - minYPx) + marginY, minHeight)
    );
  }
};
