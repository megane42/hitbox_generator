import { Button, Box, SxProps, Theme } from '@mui/material';
import ShareIcon from '@/assets/icons/share.svg?react';
import { useShareButton } from '@/components/ShareButton/useShareButton';

type Props = {
  text: string;
  canvas?: HTMLCanvasElement;
  sx?: SxProps<Theme>;
};

const ShareButton = ({ text, canvas, sx }: Props) => {
  const { onButtonClick } = useShareButton(canvas);

  return (
    <Box sx={{ width: "100%" }}>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<ShareIcon width={20} height={20} />}
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
    </Box>
  );
};

export default ShareButton;
