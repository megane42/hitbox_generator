import { useEffect, useRef, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

interface ImageCanvasProps {
  imageUrl: string;
  onImageLoaded: () => Promise<void>;
}

const ImageCanvas = ({ imageUrl, onImageLoaded }: ImageCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = imageUrl;
    img.onload = async () => {
      canvas.width  = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      setIsLoading(true);
      await onImageLoaded();
      setIsLoading(false);
    };
  }, [imageUrl, onImageLoaded]);

  return (
    <Box sx={{ position: 'relative' }}>
      <canvas ref={canvasRef} />
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default ImageCanvas;
