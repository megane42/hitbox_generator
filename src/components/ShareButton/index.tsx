import ShareIcon from '@mui/icons-material/Share';
import { Button, Box, SxProps, Theme } from '@mui/material';
import { useShareButton } from '@/components/ShareButton/useShareButton';

type Props = {
  text: string;
  canvas?: HTMLCanvasElement;
  sx?: SxProps<Theme>;
};

const ShareButton = ({ text, canvas, sx }: Props) => {
  const { onButtonClick } = useShareButton(canvas);

  return (
    <Box>
      <Button
        variant="outlined"
        startIcon={<ShareIcon />}
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
    </Box>
  );
};

export default ShareButton;
