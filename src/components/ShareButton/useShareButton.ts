export const useShareButton = (canvas?: HTMLCanvasElement) => {
  const onButtonClick = async () => {
    if (canvas) {
      const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((blob) => { if (blob) resolve(blob); }, 'image/png');
        });

      const file = new File([blob], "image.png", { type: "image/png" });
      
      if (!navigator.share) {
        alert('Your device does not support the share feature. / お使いの端末では共有機能が利用できません。');
        return;
      }

      if (!navigator.canShare({ files: [file] })) {
        alert('Your device does not support the share feature. / お使いの端末では画像の共有が利用できません。');
        return;
      }

      await navigator.share({
        text: "#HitboxGenerator https://megane42.github.io/hitbox_generator/",
        files: [file],
      });
    }
  };

  return {
    onButtonClick,
  };
};
