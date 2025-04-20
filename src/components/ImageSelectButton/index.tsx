import React, { useRef } from 'react';

type Props = {
  text: string;
  onImageSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImageSelectButton: React.FC<Props> = ({ text, onImageSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    fileInputRef?.current?.click();
  };

  return (
    <div>
      <button onClick={ onButtonClick }>
        {text}
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={onImageSelect}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
    </div>
  );
};

export default ImageSelectButton;
