import { DrawingUtils, PoseLandmarker, PoseLandmarkerResult } from "@mediapipe/tasks-vision";

export const drawTest = (
  _cnv: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  poseLandmarkerResult: PoseLandmarkerResult,
) => {
  const drawingUtils = new DrawingUtils(ctx);
  for (const landmark of poseLandmarkerResult.landmarks) {
    drawingUtils.drawLandmarks(landmark, {
      radius: (data) => DrawingUtils.lerp(data.from!.z, -0.15, 0.1, 5, 1)
    });
    drawingUtils.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS);
  }
}
