import { Box, CircularProgress, SxProps, Theme } from '@mui/material';
import { useImageCanvas } from '@/components/ImageCanvas/useImageCanvas';

interface ImageCanvasProps {
  imageUrl: string;
  isDefault: boolean;
  onCanvasReady: (canvas: HTMLCanvasElement) => void;
  sx?: SxProps<Theme>;
}

const ImageCanvas = ({ imageUrl, isDefault, onCanvasReady, sx }: ImageCanvasProps) => {
  const { canvasRef, isLoading } = useImageCanvas({ imageUrl, isDefault, onCanvasReady });

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 0,
        width: '100%',
        height: 'auto',
        boxShadow: 0,
        ...sx,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
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
