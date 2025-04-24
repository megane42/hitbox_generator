import { useState } from 'react';

export const useHomePage = () => {
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

  return {
    imageUrl,
    onImageGiven,
  };
};