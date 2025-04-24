import React from 'react';
import { Button, Box, SxProps, Theme } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useCameraOpenButton } from './useCameraOpenButton';

type Props = {
  text: string;
  onImageTaken: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
};

const CameraOpenButton: React.FC<Props> = ({ text, onImageTaken, sx }) => {
  const { fileInputRef, onButtonClick } = useCameraOpenButton();

  return (
    <Box>
      <Button
        variant="contained"
        startIcon={<CameraAltIcon />}
        onClick={onButtonClick}
        sx={{
          textTransform: 'none',
          borderRadius: 2,
          padding: '8px 16px',
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
