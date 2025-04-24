import { Box, CircularProgress, SxProps, Theme } from '@mui/material';
import { useImageCanvas } from './useImageCanvas';

interface ImageCanvasProps {
  imageUrl: string;
  sx?: SxProps<Theme>;
}

const ImageCanvas = ({ imageUrl, sx }: ImageCanvasProps) => {
  const { canvasRef, isLoading } = useImageCanvas({ imageUrl });

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
