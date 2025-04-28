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
import { drawHurtboxLowerBody } from './drawHurtboxLowerBody';
import { drawHitboxRightArm } from './drawHitboxRightArm';
import { drawHitboxLeftLeg } from './drawHitboxLeftLeg';
import { drawHitboxRightLeg } from './drawHitboxRightLeg';

export const drawHitbox = async (
  cnv: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  isDefault: boolean,
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
    const side  = isDefault ? "1P"        : checkSide(landmark)
    const style = isDefault ? "LeftPunch" : checkFightingStyle(landmark, side)
    console.log(side);
    console.log(style);
    // drawTest(cnv, ctx, poseLandmarkerResult);

    switch (style) {
      case "LeftPunch":
        drawHitboxLeftArm(cnv, ctx, landmark);
        drawHurtboxHead(cnv, ctx, landmark);
        drawHurtboxUpperBody(cnv, ctx, landmark);
        drawHurtboxRightArm(cnv, ctx, landmark);
        drawHurtboxLeftArm(cnv, ctx, landmark);
        drawHurtboxLowerBody(cnv, ctx, landmark);
        break;
      case "RightPunch":
        drawHitboxRightArm(cnv, ctx, landmark);
        drawHurtboxHead(cnv, ctx, landmark);
        drawHurtboxUpperBody(cnv, ctx, landmark);
        drawHurtboxRightArm(cnv, ctx, landmark);
        drawHurtboxLeftArm(cnv, ctx, landmark);
        drawHurtboxLowerBody(cnv, ctx, landmark);
        break;
      case "LeftKick":
        drawHitboxLeftLeg(cnv, ctx, landmark);
        drawHurtboxHead(cnv, ctx, landmark);
        drawHurtboxUpperBody(cnv, ctx, landmark);
        drawHurtboxRightArm(cnv, ctx, landmark);
        drawHurtboxLeftArm(cnv, ctx, landmark);
        drawHurtboxRightLeg(cnv, ctx, landmark);
        drawHurtboxLeftLeg(cnv, ctx, landmark);
        break;
      case "RightKick":
        drawHitboxRightLeg(cnv, ctx, landmark);
        drawHurtboxHead(cnv, ctx, landmark);
        drawHurtboxUpperBody(cnv, ctx, landmark);
        drawHurtboxRightArm(cnv, ctx, landmark);
        drawHurtboxLeftArm(cnv, ctx, landmark);
        drawHurtboxRightLeg(cnv, ctx, landmark);
        drawHurtboxLeftLeg(cnv, ctx, landmark);
        break;
    }
  }
};
