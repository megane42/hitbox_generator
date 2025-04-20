import { useEffect, useRef } from 'react';

interface ImageCanvasProps {
  imageUrl: string;
}

const ImageCanvas = ({ imageUrl }: ImageCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      canvas.width  = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, [imageUrl]);

  return <canvas ref={canvasRef}/>;
};

export default ImageCanvas;
