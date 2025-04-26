import { Box, Container } from '@mui/material';
import CameraOpenButton from "@/components/CameraOpenButton";
import ImageCanvas from '@/components/ImageCanvas';
import ImageSelectButton from '@/components/ImageSelectButton';
import { useHomePage } from '@/pages/HomePage/useHomePage';

const HomePage = () => {
  const { imageUrl, onImageGiven } = useHomePage();

  return (
    <Container>
      <h1>Hitbox Generator</h1>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ maxWidth: '600px'}}>
          <ImageCanvas imageUrl={imageUrl} />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <ImageSelectButton text="Choose from Device" onImageSelect={onImageGiven} />
          <CameraOpenButton text="Take a Photo" onImageTaken={onImageGiven} />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
