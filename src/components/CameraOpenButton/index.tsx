import { Button, Box, SxProps, Theme } from '@mui/material';
import CameraIcon from '@/assets/icons/camera.svg?react';
import { useCameraOpenButton } from '@/components/CameraOpenButton/useCameraOpenButton';

type Props = {
  text: string;
  onImageTaken: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
};

const CameraOpenButton = ({ text, onImageTaken, sx }: Props) => {
  const { fileInputRef, onButtonClick } = useCameraOpenButton();

  return (
    <Box sx={{ width: "100%" }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CameraIcon width={20} height={20} />}
        onClick={onButtonClick}
        sx={{
          textTransform: 'none',
          borderRadius: 0,
          boxShadow: 0,
          padding: '8px 16px',
          fontFamily: 'Instrument Serif',
          fontWeight: 400,
          letterSpacing: '2px',
          width: "100%",
          ...sx,
        }}
      >
        {text}
      </Button>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={onImageTaken}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
    </Box>
  );
};

export default CameraOpenButton;
