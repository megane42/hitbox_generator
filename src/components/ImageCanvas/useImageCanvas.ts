import { useEffect, useRef, useState } from 'react';
import { drawHitbox } from '@/components/ImageCanvas/drawHitbox';

interface UseImageCanvasProps {
  imageUrl: string;
  isDefault: boolean;
}

export const useImageCanvas = ({ imageUrl, isDefault }: UseImageCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src         = imageUrl;
    img.crossOrigin = 'anonymous';
    img.onload      = async () => {
      canvas.width  = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      setIsLoading(true);
      await drawHitbox(canvas, ctx, isDefault);
      setIsLoading(false);
    };
  }, [imageUrl]);

  return {
    canvasRef,
    isLoading,
  };
};
