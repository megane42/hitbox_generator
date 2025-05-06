export const useSaveButton = (canvas?: HTMLCanvasElement) => {
  const onButtonClick = async () => {
    if (canvas) {
      try {
        // Convert canvas to blob
        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((blob) => { if (blob) resolve(blob); }, 'image/png');
        });

        // Create a download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'hitbox.png';
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Failed to save image:', error);
        alert('画像の保存に失敗しました。');
      }
    }
  };

  return {
    onButtonClick,
  };
}; 