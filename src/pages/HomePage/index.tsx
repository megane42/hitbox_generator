import { Box, Container } from '@mui/material';
import CameraOpenButton from "@/components/CameraOpenButton";
import ImageCanvas from '@/components/ImageCanvas';
import ImageSelectButton from '@/components/ImageSelectButton';
import { useHomePage } from '@/pages/HomePage/useHomePage';
import ShareButton from '@/components/ShareButton';

const HomePage = () => {
  const { imageUrl, onImageGiven, isDefault } = useHomePage();

  return (
    <Container>
      <h1>Hitbox Generator</h1>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ maxWidth: '600px'}}>
      <ImageCanvas imageUrl={imageUrl} isDefault={isDefault} />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <ImageSelectButton text="Choose from Device" onImageSelect={onImageGiven} />
          <CameraOpenButton text="Take a Photo" onImageTaken={onImageGiven} />
          <ShareButton text="Share" imageUrl={imageUrl}/>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
