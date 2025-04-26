import { FilesetResolver, PoseLandmarker } from '@mediapipe/tasks-vision';
import poseLandmarkerUrl from '@/assets/pose_landmarker_lite.task';
import { checkSide } from '@/components/ImageCanvas/checkSide';
import { drawHitboxLeftArm } from '@/components/ImageCanvas/drawHitboxLeftArm';
import { drawHurtboxHead } from '@/components/ImageCanvas/drawHurtboxHead';
import { drawHurtboxLeftArm } from '@/components/ImageCanvas/drawHurtboxLeftArm';
import { drawHurtboxLeftLeg } from '@/components/ImageCanvas/drawHurtboxLeftLeg';
import { drawHurtboxRightArm } from '@/components/ImageCanvas/drawHurtboxRightArm';
import { drawHurtboxRightLeg } from '@/components/ImageCanvas/drawHurtboxRightLeg';
import { drawHurtboxUpperBody } from '@/components/ImageCanvas/drawHurtboxUpperBody';
import { drawTest } from '@/components/ImageCanvas/drawTest';
import { checkFightingStyle } from './checkFightingStyle';

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

  const sides = checkSide(poseLandmarkerResult)
  const styles = checkFightingStyle(poseLandmarkerResult, sides)

  console.log(sides);
  console.log(styles);

  drawTest(cnv, ctx, poseLandmarkerResult);
  drawHitboxLeftArm(cnv, ctx, poseLandmarkerResult);
  drawHurtboxHead(cnv, ctx, poseLandmarkerResult);
  drawHurtboxUpperBody(cnv, ctx, poseLandmarkerResult);
  drawHurtboxRightArm(cnv, ctx, poseLandmarkerResult);
  drawHurtboxLeftArm(cnv, ctx, poseLandmarkerResult);
  drawHurtboxRightLeg(cnv, ctx, poseLandmarkerResult);
  drawHurtboxLeftLeg(cnv, ctx, poseLandmarkerResult);
};
