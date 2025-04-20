import React, { useRef } from 'react';

type Props = {
  text: string;
  onImageTaken: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CameraOpenButton: React.FC<Props> = ({ text, onImageTaken }) => {
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
        capture="environment"
        onChange={onImageTaken}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
    </div>
  );
};

export default CameraOpenButton;
