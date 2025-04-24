import { FilesetResolver, PoseLandmarker } from '@mediapipe/tasks-vision';
import { useEffect, useRef, useState } from 'react';
import poseLandmarkerUrl from '@/assets/pose_landmarker_lite.task';

interface UseImageCanvasProps {
  imageUrl: string;
}

export const useImageCanvas = ({ imageUrl }: UseImageCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;
    img.onload = async () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      setIsLoading(true);

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

      const poseLandmarkerResult = poseLandmarker.detect(canvas);
      console.log(poseLandmarkerResult);

      setIsLoading(false);
    };
  }, [imageUrl]);

  return {
    canvasRef,
    isLoading,
  };
}; 