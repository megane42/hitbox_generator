import ImageIcon from '@mui/icons-material/Image';
import { Button, Box, SxProps, Theme } from '@mui/material';
import React from 'react';
import { useImageSelectButton } from '@/components/ImageSelectButton/useImageSelectButton';

type Props = {
  text: string;
  onImageSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
};

const ImageSelectButton: React.FC<Props> = ({ text, onImageSelect, sx }) => {
  const { fileInputRef, onButtonClick } = useImageSelectButton();

  return (
    <Box>
      <Button
        variant="outlined"
        startIcon={<ImageIcon />}
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
        onChange={onImageSelect}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
    </Box>
  );
};

export default ImageSelectButton;
