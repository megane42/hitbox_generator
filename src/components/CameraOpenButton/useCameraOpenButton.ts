import { useRef } from 'react';

export const useCameraOpenButton = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    fileInputRef?.current?.click();
  };

  return {
    fileInputRef,
    onButtonClick,
  };
}; 