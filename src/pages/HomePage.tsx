import { useState } from 'react';
import ImageCanvas from '@/components/ImageCanvas';
import CameraOpenButton from "@/components/CameraOpenButton";
import ImageSelectButton from '@/components/ImageSelectButton';
import poseLandmarkerUrl from '@/assets/pose_landmarker_lite.task';
import { Box } from '@mui/material';
import { FilesetResolver, PoseLandmarker } from '@mediapipe/tasks-vision';

const HomePage = () => {
  const DEFAULT_IMAGE = "https://picsum.photos/200/300";

  const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE);

  const onImageGiven = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];

    if (!image || !image.type.startsWith('image/')) {
      alert('Selected file is not a valid image.');
      return;
    }

    setImageUrl(URL.createObjectURL(image));
  };

  const onImageLoaded = async (canvas: HTMLCanvasElement) => {
    const visionWasmFileSet = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    const poseLandmarker = await PoseLandmarker.createFromOptions(
      visionWasmFileSet,
      {
        baseOptions: {
          modelAssetPath: poseLandmarkerUrl
        },
        runningMode: "IMAGE",
      });

    const poseLandmarkerResult = poseLandmarker.detect(canvas);
    console.log(poseLandmarkerResult);
  };

  return (
    <Box>
      <h1>Hitbox Generator</h1>
      <Box sx={{ maxWidth: '600px' }}>
        <ImageCanvas imageUrl={imageUrl} onImageLoaded={onImageLoaded} />
      </Box>
      <ImageSelectButton text="Choose from Device" onImageSelect={onImageGiven} />
      <CameraOpenButton  text="Take a Photo"       onImageTaken={onImageGiven} />
    </Box>
  );
};

export default HomePage;
