import { useState } from 'react';
import defaultImage from "@/assets/default.jpg"

export const useHomePage = () => {
  const [imageUrl, setImageUrl] = useState<string>(defaultImage);

  const onImageGiven = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];

    if (!image || !image.type.startsWith('image/')) {
      alert('Selected file is not a valid image.');
      return;
    }

    setImageUrl(URL.createObjectURL(image));
  };

  return {
    imageUrl,
    onImageGiven,
  };
};
