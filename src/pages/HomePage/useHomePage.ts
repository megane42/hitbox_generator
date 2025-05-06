import { useState } from 'react';
import defaultImage from "@/assets/default.jpg";

export const useHomePage = () => {
  const [imageUrl, setImageUrl] = useState<string>(defaultImage);
  const [isDefault, setIsDefault] = useState<boolean>(true);

  const onImageGiven = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];

    if (!image || !image.type.startsWith('image/')) {
      alert('Selected file is not a valid image. / 選択されたファイルは有効な画像ではありません。');
      return;
    }

    setImageUrl(URL.createObjectURL(image));
    setIsDefault(false);
  };

  return {
    imageUrl,
    onImageGiven,
    isDefault,
  };
};
