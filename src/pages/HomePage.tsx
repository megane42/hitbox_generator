import ImageCanvas from '@/components/ImageCanvas';
import CameraOpenButton from "@/components/CameraOpenButton";
import ImageSelectButton from '@/components/ImageSelectButton';

const onImageGiven = (event: React.ChangeEvent<HTMLInputElement>) => {
  const image = event.target.files?.[0];
  console.log(image?.size);
};

const HomePage = () => {
  return (
    <div>
      <h1>Hitbox Generator</h1>
      <section>
        <ImageCanvas imageUrl="https://picsum.photos/200/300" />
      </section>
      <ImageSelectButton text="Choose from Device" onImageSelect={onImageGiven} />
      <CameraOpenButton  text="Take a Photo"       onImageTaken={onImageGiven} />
    </div>
  );
};

export default HomePage;
