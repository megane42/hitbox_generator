import { FilesetResolver, PoseLandmarker } from '@mediapipe/tasks-vision';
import { checkFightingStyle } from './checkFightingStyle';
import { drawHitboxLeftLeg } from './drawHitboxLeftLeg';
import { drawHitboxRightArm } from './drawHitboxRightArm';
import { drawHitboxRightLeg } from './drawHitboxRightLeg';
import { drawHurtboxLowerBody } from './drawHurtboxLowerBody';
import poseLandmarkerUrl from '@/assets/pose_landmarker_lite.task';
import { checkSide } from '@/components/ImageCanvas/checkSide';
import { drawHitboxLeftArm } from '@/components/ImageCanvas/drawHitboxLeftArm';
import { drawHurtboxHead } from '@/components/ImageCanvas/drawHurtboxHead';
import { drawHurtboxLeftArm } from '@/components/ImageCanvas/drawHurtboxLeftArm';
import { drawHurtboxLeftLeg } from '@/components/ImageCanvas/drawHurtboxLeftLeg';
import { drawHurtboxRightArm } from '@/components/ImageCanvas/drawHurtboxRightArm';
import { drawHurtboxRightLeg } from '@/components/ImageCanvas/drawHurtboxRightLeg';
import { drawHurtboxUpperBody } from '@/components/ImageCanvas/drawHurtboxUpperBody';

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
    const side  = isDefault ? "1P"        : checkSide(landmark);
    const style = isDefault ? "LeftPunch" : checkFightingStyle(landmark, side);
    console.log(side);
    console.log(style);
    // drawTest(cnv, ctx, poseLandmarkerResult);

    switch (style) {
    // When punching, draw the hurtBox for lower body, rather than for each leg, since it gets too detailed
    case "LeftPunch":
      drawHitboxLeftArm(cnv, ctx, landmark, side);
      drawHurtboxHead(cnv, ctx, landmark);
      drawHurtboxUpperBody(cnv, ctx, landmark);
      drawHurtboxRightArm(cnv, ctx, landmark);
      drawHurtboxLeftArm(cnv, ctx, landmark);
      drawHurtboxLowerBody(cnv, ctx, landmark);
      break;
    case "RightPunch":
      drawHitboxRightArm(cnv, ctx, landmark, side);
      drawHurtboxHead(cnv, ctx, landmark);
      drawHurtboxUpperBody(cnv, ctx, landmark);
      drawHurtboxRightArm(cnv, ctx, landmark);
      drawHurtboxLeftArm(cnv, ctx, landmark);
      drawHurtboxLowerBody(cnv, ctx, landmark);
      break;
    case "LeftKick":
      drawHitboxLeftLeg(cnv, ctx, landmark, side);
      drawHurtboxHead(cnv, ctx, landmark);
      drawHurtboxUpperBody(cnv, ctx, landmark);
      drawHurtboxRightArm(cnv, ctx, landmark);
      drawHurtboxLeftArm(cnv, ctx, landmark);
      drawHurtboxRightLeg(cnv, ctx, landmark);
      drawHurtboxLeftLeg(cnv, ctx, landmark);
      break;
    case "RightKick":
      drawHitboxRightLeg(cnv, ctx, landmark, side);
      drawHurtboxHead(cnv, ctx, landmark);
      drawHurtboxUpperBody(cnv, ctx, landmark);
      drawHurtboxRightArm(cnv, ctx, landmark);
      drawHurtboxLeftArm(cnv, ctx, landmark);
      drawHurtboxRightLeg(cnv, ctx, landmark);
      drawHurtboxLeftLeg(cnv, ctx, landmark);
      break;
      // Anti-air
    case "LeftUppercut":
      drawHitboxLeftArm(cnv, ctx, landmark, side);
      drawHurtboxLowerBody(cnv, ctx, landmark);
      break;
    case "RightUppercut":
      drawHitboxRightArm(cnv, ctx, landmark, side);
      drawHurtboxLowerBody(cnv, ctx, landmark);
      break;
    }
  }
};
