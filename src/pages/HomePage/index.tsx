import { Box } from '@mui/material';
import CameraOpenButton from "@/components/CameraOpenButton";
import ImageCanvas from '@/components/ImageCanvas';
import ImageSelectButton from '@/components/ImageSelectButton';
import { useHomePage } from '@/pages/HomePage/useHomePage';

const HomePage = () => {
  const { imageUrl, onImageGiven } = useHomePage();

  return (
    <Box>
      <h1>Hitbox Generator</h1>
      <Box sx={{ maxWidth: '600px' }}>
        <ImageCanvas imageUrl={imageUrl} />
      </Box>
      <ImageSelectButton text="Choose from Device" onImageSelect={onImageGiven} />
      <CameraOpenButton text="Take a Photo" onImageTaken={onImageGiven} />
    </Box>
  );
};

export default HomePage;
