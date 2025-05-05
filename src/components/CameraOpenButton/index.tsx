import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button, Box, SxProps, Theme } from '@mui/material';
import { useCameraOpenButton } from '@/components/CameraOpenButton/useCameraOpenButton';

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
        variant="contained"
        color="primary"
        startIcon={<CameraAltIcon />}
        onClick={onButtonClick}
        sx={{
          textTransform: 'none',
          borderRadius: 0,
          boxShadow: 0,
          padding: '8px 16px',
          fontFamily: 'Instrument Serif',
          fontWeight: 800,
          letterSpacing: '4px',
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
