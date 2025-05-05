import { Button, Box, SxProps, Theme } from '@mui/material';
import { useImageSelectButton } from '@/components/ImageSelectButton/useImageSelectButton';
import ImageIcon from '@/assets/icons/image.svg?react';

type Props = {
  text: string;
  onImageSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
};

const ImageSelectButton = ({ text, onImageSelect, sx }: Props) => {
  const { fileInputRef, onButtonClick } = useImageSelectButton();

  return (
    <Box>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<ImageIcon fill="white" width={20} height={20} />}
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
        onChange={onImageSelect}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
    </Box>
  );
};

export default ImageSelectButton;
