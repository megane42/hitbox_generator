import { Button, Box, SxProps, Theme } from '@mui/material';
import { useCameraOpenButton } from '@/components/CameraOpenButton/useCameraOpenButton';
import CameraIcon from '@/assets/icons/camera.svg?react';

type Props = {
  text: string;
  onImageTaken: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
};

const CameraOpenButton = ({ text, onImageTaken, sx }: Props) => {
  const { fileInputRef, onButtonClick } = useCameraOpenButton();

  return (
    <Box>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<CameraIcon fill="white" width={20} height={20} />}
        onClick={onButtonClick}
        sx={{
          textTransform: 'none',
          borderRadius: 0,
          boxShadow: 0,
          padding: '8px 16px',
          fontFamily: 'Instrument Serif',
          fontWeight: 400,
          letterSpacing: '2px',
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
