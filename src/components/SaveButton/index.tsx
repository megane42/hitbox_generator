import { Button, Box, SxProps, Theme } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useSaveButton } from '@/components/SaveButton/useSaveButton';

type Props = {
  text: string;
  canvas?: HTMLCanvasElement;
  sx?: SxProps<Theme>;
};

const SaveButton = ({ text, canvas, sx }: Props) => {
  const { onButtonClick } = useSaveButton(canvas);

  return (
    <Box sx={{ width: "100%" }}>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<SaveIcon />}
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

export default SaveButton; 