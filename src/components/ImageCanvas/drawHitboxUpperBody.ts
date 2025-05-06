import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import { Side } from "./checkSide";

export const drawHitboxUpperBody = (
  cnv: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  landmark: NormalizedLandmark[],
  side: Side,
) => {
  const marginX = cnv.width * 0.1;
  const marginY = cnv.height * 0.1;
  const minWidth = cnv.width * 0.1;
  const minHeight = cnv.height * 0.1;

  // upper body landmarks : 11, 12, 23, 24
  // https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker#pose_landmarker_model
  let maxX = -Infinity;
  let maxY = -Infinity;
  let minX = Infinity;
  let minY = Infinity;
  [11, 12, 23, 24].forEach((i) => {
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
      minYPx - marginY, // for uppercut
      Math.max((maxXPx - minXPx) + marginX, minWidth),
      Math.max((maxYPx - minYPx) + marginY, minHeight)
    );
  } else {
    ctx.fillRect(
      minXPx - marginX,
      minYPx - marginY, // for uppercut
      Math.max((maxXPx - minXPx) + marginX, minWidth),
      Math.max((maxYPx - minYPx) + marginY, minHeight)
    );
  }
};
