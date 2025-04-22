import { useEffect, useRef, useState } from 'react';
import { Box, CircularProgress, SxProps, Theme } from '@mui/material';

interface ImageCanvasProps {
  imageUrl: string;
  onImageLoaded: (canvas: HTMLCanvasElement) => Promise<void>;
  sx?: SxProps<Theme>;
}

const ImageCanvas = ({ imageUrl, onImageLoaded, sx }: ImageCanvasProps) => {
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
      canvas.width  = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      setIsLoading(true);
      await onImageLoaded(canvas);
      setIsLoading(false);
    };
  }, [imageUrl, onImageLoaded]);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
        width: 'fit-content',
        height: 'auto',
        boxShadow: 3,
        ...sx,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          maxWidth: '100%',
          height: 'auto'
        }}
      />
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default ImageCanvas;
