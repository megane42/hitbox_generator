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
    <Box sx={{ width: "100%" }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ImageIcon width={20} height={20} />}
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
        onChange={onImageSelect}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
    </Box>
  );
};

export default ImageSelectButton;
