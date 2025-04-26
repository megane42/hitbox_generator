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
  for (const landmark of poseLandmarkerResult.landmarks) {
    const side  = checkSide(landmark)
    const style = checkFightingStyle(landmark, side)
    console.log(side);
    console.log(style);
    // drawTest(cnv, ctx, poseLandmarkerResult);
    drawHitboxLeftArm(cnv, ctx, landmark);
    drawHurtboxHead(cnv, ctx, landmark);
    drawHurtboxUpperBody(cnv, ctx, landmark);
    drawHurtboxRightArm(cnv, ctx, landmark);
    drawHurtboxLeftArm(cnv, ctx, landmark);
    drawHurtboxRightLeg(cnv, ctx, landmark);
    drawHurtboxLeftLeg(cnv, ctx, landmark);
  }
};
