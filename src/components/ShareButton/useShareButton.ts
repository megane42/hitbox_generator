export const useShareButton = (imageUrl: string) => {
  const onButtonClick = async () => {
    const blob = await fetch(imageUrl).then((r) => r.blob());
    const file = new File([blob], "image.png", { type: "image/png" });
    await navigator.share({
      text: "Hitbox Generator",
      url: "https://megane42.github.io/hitbox_generator/",
      files: [file],
    });
  };

  return {
    onButtonClick,
  };
};
