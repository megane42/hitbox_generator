import { useState } from 'react';
import ImageCanvas from '@/components/ImageCanvas';
import CameraOpenButton from "@/components/CameraOpenButton";
import ImageSelectButton from '@/components/ImageSelectButton';

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

  const handleImageLoaded = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
  };

  return (
    <div>
      <h1>Hitbox Generator</h1>
      <section>
        <ImageCanvas imageUrl={imageUrl} onImageLoaded={handleImageLoaded} />
      </section>
      <ImageSelectButton text="Choose from Device" onImageSelect={onImageGiven} />
      <CameraOpenButton  text="Take a Photo"       onImageTaken={onImageGiven} />
    </div>
  );
};

export default HomePage;
