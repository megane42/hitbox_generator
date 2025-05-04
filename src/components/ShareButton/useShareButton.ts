export const useShareButton = (canvas?: HTMLCanvasElement) => {
  const onButtonClick = async () => {
    if (canvas) {
      const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((blob) => { if (blob) resolve(blob); }, 'image/png');
        });
      const file = new File([blob], "image.png", { type: "image/png" });
      await navigator.share({
        text: "Hitbox Generator https://megane42.github.io/hitbox_generator/",
        files: [file],
      });
    }
  };

  return {
    onButtonClick,
  };
};
