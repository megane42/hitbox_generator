import { Box, Container } from '@mui/material';
import { useState } from 'react';
import CameraOpenButton from "@/components/CameraOpenButton";
import ImageCanvas from '@/components/ImageCanvas';
import ImageSelectButton from '@/components/ImageSelectButton';
import ShareButton from '@/components/ShareButton';
import { useHomePage } from '@/pages/HomePage/useHomePage';

const HomePage = () => {
  const { imageUrl, onImageGiven, isDefault } = useHomePage();
  const [canvas, setCanvas] = useState<HTMLCanvasElement | undefined>();

  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Hitbox Generator</h1>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ maxWidth: '600px'}}>
          <ImageCanvas
            imageUrl={imageUrl}
            isDefault={isDefault}
            onCanvasReady={setCanvas}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <ImageSelectButton text="Choose from Device" onImageSelect={onImageGiven} />
          <CameraOpenButton text="Take a Photo" onImageTaken={onImageGiven} />
          <ShareButton text="Share" canvas={canvas}/>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
