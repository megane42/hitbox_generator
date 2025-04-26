import { DrawingUtils, NormalizedLandmark, PoseLandmarker } from "@mediapipe/tasks-vision";

export const drawTest = (
  _cnv: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  landmark: NormalizedLandmark[],
) => {
  const drawingUtils = new DrawingUtils(ctx);
  drawingUtils.drawLandmarks(landmark, {
    radius: (data) => DrawingUtils.lerp(data.from!.z, -0.15, 0.1, 5, 1)
  });
  drawingUtils.drawConnectors(landmark, PoseLandmarker.POSE_CONNECTIONS);
};
