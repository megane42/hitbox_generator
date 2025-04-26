import { PoseLandmarkerResult } from "@mediapipe/tasks-vision";

export const drawHurtboxUpperBody = (
  cnv: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  poseLandmarkerResult: PoseLandmarkerResult,
) => {
  const marginX = cnv.width * 0.01;
  const marginY = cnv.height * 0.1;

  for (const landmark of poseLandmarkerResult.landmarks) {
    // upper body landmarks : 11, 12, 23, 24
    // https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker#pose_landmarker_model
    let maxX = -Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let minY = Infinity;
    [11, 12, 23, 24].forEach((i) => {
      maxX = Math.max(maxX, landmark[i].x)
      maxY = Math.max(maxY, landmark[i].y)
      minX = Math.min(minX, landmark[i].x)
      minY = Math.min(minY, landmark[i].y)
    })
    const maxXPx = maxX * cnv.width;
    const maxYPx = maxY * cnv.height;
    const minXPx = minX * cnv.width;
    const minYPx = minY * cnv.height;

    ctx.fillStyle = "rgb(50 255 50 / 30%)";
    ctx.fillRect(
      minXPx,
      minYPx - (marginY / 2.0),
      (maxXPx - minXPx) + marginX,
      (maxYPx - minYPx) + marginY
    );
  }
}
