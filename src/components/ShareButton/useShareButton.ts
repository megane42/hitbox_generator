export const useShareButton = (canvas?: HTMLCanvasElement) => {
  const onButtonClick = async () => {
    if (canvas) {
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => { if (blob) resolve(blob); }, 'image/png');
      });

      const file = new File([blob], "image.png", { type: "image/png" });
      
      if (!navigator.share || !navigator.canShare({ files: [file] })) {
        // Fallback to download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.href = url;
        a.download = 'hitbox.png';

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url);
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
