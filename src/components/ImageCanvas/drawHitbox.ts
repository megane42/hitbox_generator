import { FilesetResolver, PoseLandmarker } from '@mediapipe/tasks-vision';
import { drawHitboxLeftArm } from '@/components/ImageCanvas/drawHitboxLeftArm';
import { drawHurtboxHead } from '@/components/ImageCanvas/drawHurtboxHead';
import { drawHurtboxUpperBody } from '@/components/ImageCanvas/drawHurtboxUpperBody';
import { drawHurtboxRightArm } from '@/components/ImageCanvas/drawHurtboxRightArm';
import { drawHurtboxLeftArm } from '@/components/ImageCanvas/drawHurtboxLeftArm';
import { drawHurtboxRightLeg } from '@/components/ImageCanvas/drawHurtboxRightLeg';
import { drawHurtboxLeftLeg } from '@/components/ImageCanvas/drawHurtboxLeftLeg';
import poseLandmarkerUrl from '@/assets/pose_landmarker_lite.task';

export const drawHitbox = async (
  cnv: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) => {
  const visionWasmFileSet = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );

  const poseLandmarker = await PoseLandmarker.createFromOptions(
    visionWasmFileSet,
    {
      baseOptions: {
        modelAssetPath: poseLandmarkerUrl
      },
      runningMode: "IMAGE",
    });

  const poseLandmarkerResult = poseLandmarker.detect(cnv);
  drawHitboxLeftArm(cnv, ctx, poseLandmarkerResult)
  drawHurtboxHead(cnv, ctx, poseLandmarkerResult)
  drawHurtboxUpperBody(cnv, ctx, poseLandmarkerResult)
  drawHurtboxRightArm(cnv, ctx, poseLandmarkerResult)
  drawHurtboxLeftArm(cnv, ctx, poseLandmarkerResult)
  drawHurtboxRightLeg(cnv, ctx, poseLandmarkerResult)
  drawHurtboxLeftLeg(cnv, ctx, poseLandmarkerResult)
}
